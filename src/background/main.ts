import db from './db'
import { HandlerEntry, HandlerMap, send } from './server/ipc';
import { init } from './server'
import { ProjectHandlers, ProjectsData, ProjectService } from './services/project-service';

export type Handlers = ProjectHandlers & { init: () => Promise<ProjectsData> };

function addHandlers(handlerMap: HandlerMap<Handlers>, handlers: HandlerEntry<Handlers>[]): void {
    for (const entry of handlers) {
        handlerMap[entry.name] = entry.handler;

        console.log('adding handler:', entry.name);
    }
}

async function start() {
    const handlerMap: HandlerMap<Handlers> = {} as HandlerMap<Handlers>;
    const projectService = new ProjectService(db);

    //initialize handlers
    addHandlers(handlerMap, projectService.handlers());
    addHandlers(handlerMap, [
        { name: 'init', handler: async () => await projectService.init() }
    ])
    init(handlerMap);

    //debugger;
    // const dataCollection = await Promise.all([
    //     projectService.init()
    // ]);
    // const initialData = Object.assign({}, ...dataCollection);
    // //broadcast initial data
    // send('init', initialData);

    console.log('initializing background process')
}

start();