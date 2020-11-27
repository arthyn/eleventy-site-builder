import Datastore from 'nedb'
import { HandlerEntry, HandlerMap } from './server/ipc';
import { init } from './server'
import { ProjectHandlers, ProjectService } from './project-service';

export type Handlers = ProjectHandlers;

const handlerMap: HandlerMap<Handlers> = {} as HandlerMap<Handlers>;
const settingsDB = new Datastore({ filename: '', autoload: true });
const projectService = new ProjectService(settingsDB);

function addHandlers(handlers: HandlerEntry<Handlers>[]): void {
    for (const entry of handlers) {
        handlerMap[entry.name] = entry.handler;

        console.log('adding handler:', entry.name);
    }
}

addHandlers(projectService.handlers());
init(handlerMap);
console.log('initializing background process')