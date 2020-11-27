import React from 'react';
import { hot } from 'react-hot-loader';
import { Welcome } from './pages/Welcome';

const App = () => {
    return (
        <Welcome />
    );
}

export default hot(module)(App);
