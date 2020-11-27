import Datastore from 'nedb'
import { remote } from 'electron';
import { HandlerEntry } from './server/ipc';

const dialog = remote.dialog;

export interface ProjectHandlers {
    'set-projects-directory': ProjectService['setProjectsDirectory'];
    'open-project': ProjectService["openProject"];
}

export enum handlers {
    setProjectsDirectory = 'set-projects-directory',
    openProject = 'open-project'
}

export class ProjectService {
    private readonly settings: Datastore;
    projectsDirectory: string;
    currentProject: Project;

    constructor(settingsDB: Datastore) {
        this.settings = settingsDB;
    }

    handlers(): HandlerEntry<ProjectHandlers>[] {
        return [
            { name: 'set-projects-directory', handler: this.setProjectsDirectory.bind(this) },
            { name: 'open-project', handler: this.openProject.bind(this) }
        ]
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
        this.settings.update({ name: 'projects-directory' }, { value: directory }, { upsert: true });
        return directory;
    }

    async openProject(directory: string): Promise<void> {
        this.currentProject = new Project(directory);
        this.settings.update({ name: 'current-project' }, { value: directory }, { upsert: true });
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