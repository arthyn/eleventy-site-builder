import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import { handlers } from '../background/project-service';
import { send } from './client/ipc';

const App = () => {
    const [directory, setDirectory] = useState('');
    async function open() {
        const directory = await send(handlers.setProjectsDirectory);

        if (directory)
            setDirectory(directory);
    }

    return (
        <div className="text-white text-6xl">Hi from react ! <button onClick={open}>Open</button>{ directory }</div>
    );
}

export default hot(module)(App);
