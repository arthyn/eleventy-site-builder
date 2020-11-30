import { DB } from '../db'
import { remote } from 'electron';
import { HandlerEntry } from '../server/ipc';
import { promises } from 'fs';
import { dirs } from '../utilities';

const { readdir, readFile } = promises;

const dialog = remote.dialog;

export interface ProjectHandlers {
    'set-projects-directory': ProjectService['setProjectsDirectory'];
    'open-project': ProjectService["openProject"];
    'get-projects': ProjectService["getProjects"];
}

export enum handlers {
    setProjectsDirectory = 'set-projects-directory',
    openProject = 'open-project'
}

export interface ProjectsData {
    projectsDirectory: string;
    projects: Project[];
}

export class ProjectService {
    private readonly db: DB;
    projectsDirectory: string;
    projects: Project[];
    
    currentProject: Project;

    constructor(db: DB) {
        this.db = db;
    }

    handlers(): HandlerEntry<ProjectHandlers>[] {
        return [
            { name: 'set-projects-directory', handler: this.setProjectsDirectory.bind(this) },
            { name: 'open-project', handler: this.openProject.bind(this) },
            { name: 'get-projects', handler: this.getProjects.bind(this) }
        ]
    }

    async init(): Promise<ProjectsData> {
        console.log('init projects')

        this.projectsDirectory = await this.getProjectsDirectory();
        this.projects = await this.findEleventyProjects();

        return {
            projectsDirectory: this.projectsDirectory,
            projects: this.projects
        }
    }

    async getProjectsDirectory(): Promise<string | undefined> {
        const directory = await this.db.settings.findOne({ name: 'projects-directory' });
        return directory.value;
    }

    async setProjectsDirectory(): Promise<string | undefined> {
        const result = await dialog.showOpenDialog({
            title: 'Select a Projects Directory',
            properties: ['openDirectory', 'createDirectory']
        });

        if (result.canceled)
            return undefined;

        const directory = result.filePaths[0];
        this.projectsDirectory = directory;
        await this.db.settings.update({ name: 'projects-directory' }, { name: 'projects-directory', value: directory }, { upsert: true });
        return directory;
    }

    async openProject(directory: string): Promise<void> {
        this.currentProject = new Project(directory);
        await this.db.settings.update({ name: 'current-project' }, { value: directory }, { upsert: true });
    }

    async getProjects(): Promise<Project[]> {
        this.projects = await this.findEleventyProjects();
        return this.projects;
    }

    async findEleventyProjects(): Promise<Project[] | undefined> {
        if (!this.projectsDirectory)
            return undefined;

        const directories = dirs(this.projectsDirectory);
        return directories
                    .filter(this.isEleventyProject)
                    .map(dir => new Project(dir))
    }

    async isEleventyProject(dir: string): Promise<boolean> {
        debugger;
        const files = await readdir(dir);
        const path = files.find(file => file.indexOf('package.json') >= 0);
        const file = await readFile(path, { encoding: 'utf-8' });
        const packageJSON: PackageJSON = JSON.parse(file);

        const dependencies = Object.keys(packageJSON.dependencies)
                                .concat(Object.keys(packageJSON.devDependencies));

        return dependencies.includes('@11ty/eleventy');
    }
}

interface PackageJSON {
    dependencies: {
        [key: string]: string;
    };
    devDependencies: {
        [key: string]: string;
    }
}

interface Task {
    name: string;
    command: string;
}

interface Package {
    name: string;
    version: string;
    dev: boolean;
}

export class Project {
    directory: string;
    tasks: Task[];
    packages: Package[];
    config: any; //Need type for eleventy config attributes would have to parse JS though
    /* theorized
        repo: 
    */

    constructor(directory: string) {
        this.directory = directory;
        this.init();
    }

    init(): void {
        console.log('initializing project');
    }
}