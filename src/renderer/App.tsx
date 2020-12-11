import React, { useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader';
import { send } from './client/ipc';
import { Welcome } from './pages/Welcome';
import { Projects } from './pages/Projects';
import { useStore } from './store';

const App = () => {
    useEffect(() => {
        async function getData() {
            const data = await send('init');
            useStore.setState(data);
            console.log('init', data);
        }

        getData();
    }, [])

    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Welcome}/>
                <Route exact path="/projects" component={Projects} />
            </Switch>
        </HashRouter>
    );
}

export default hot(module)(App);
