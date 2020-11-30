import React, { useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader';
import { Welcome } from './pages/Welcome';
import { useStore } from './store'
import { listen } from './client/ipc';

const App = () => {
    useEffect(() => {
        const cleanup = listen('init', (data) => {
            debugger;
            useStore.setState(data);
            cleanup();
        });
    }, [])

    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Welcome}/>
            </Switch>
        </HashRouter>
    );
}

export default hot(module)(App);
