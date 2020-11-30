import React, { FunctionComponent, useState } from 'react';
import { handlers } from '../../background/services/project-service';
import { send } from '../client/ipc';
import { Button } from '../shared/Button';
import { Layout } from '../shared/Layout';
import { Logo } from '../shared/Logo';
import { useStore } from '../store';

export const Welcome: FunctionComponent = () => {
    const directory = useStore(state => state.projectsDirectory);

    async function open() {
        const directory = await send(handlers.setProjectsDirectory);

        if (directory)
            useStore.setState({ projectsDirectory: directory });
    }
    
    return (
        <Layout title="Hi!">
            <section className="flex flex-col items-center p-6 space-y-9 text-gray-500">
                <Logo className="max-w-md text-gray-700 opacity-50"/>
                <Button onClick={open}>Set Projects Directory</Button>
                <span className="text-2xl">{ directory }</span>
            </section>
        </Layout>
    )
}