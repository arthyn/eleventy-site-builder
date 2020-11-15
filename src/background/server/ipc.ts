import { Socket } from "net"
import ipc from 'node-ipc'

export interface ServerMessage {
    id: string;
    name: string;
    args: unknown[];
}

export type ClientMessageTypes = 'reply' | 'error' | 'push';

export interface Reply {
    type: 'reply';
    id: string;
    result: unknown | null;

}
export interface Error {
    type: 'error';
    id: string;
}

export interface Push {
    type: 'push';
    name: string;
    args: unknown[];
}

export type ClientMessage = Reply | Error | Push;

export type Handler<Result = unknown> = (...args: unknown[]) => Promise<Result>

export type HandlerMap = {
    [key: string]: Handler;
}

async function handle({ id, args }: ServerMessage, handler: Handler, socket: Socket): Promise<void> {
    try {
        const result = await handler(args)
        const reply: Reply = { type: 'reply', id, result }

        ipc.server.emit(socket, 'message', JSON.stringify(reply))
    } catch (err: unknown) {
        const error: Error = { type: 'error', id };
        ipc.server.emit(socket, 'message', JSON.stringify(error))

        throw err
    }
}

function noHandle({ id, name }: ServerMessage, socket: Socket) {
    const reply: Reply = { type: 'reply', id, result: null };

    ipc.server.emit(socket, 'message', JSON.stringify(reply))
    console.warn('Unknown method: ' + name)
}

function serve(handlers: HandlerMap) {
    ipc.server.on('message', (data: Stringified<ServerMessage>, socket: Socket) => {
        const msg = JSON.parse(data)
        const handler: Handler = handlers[msg.name];

        if (!handler)
            return noHandle(msg, socket);

        handle(msg, handler, socket);
    })
}

export function send(name: string, args: unknown[]): void {
    const msg: Push = { type: 'push', name, args };
    ipc.server.broadcast('message', JSON.stringify(msg))
}

export function init(socketName: string, handlers: HandlerMap): void {
    ipc.config.id = socketName
    ipc.config.silent = true

    ipc.serve(() => serve(handlers))
    ipc.server.start()
}