import React from 'react';
import './App.css';
import PublicRoutes from "./router";
import {WrapperApp} from './style';

function App() {
    return (
        <WrapperApp>
            <PublicRoutes/>
        </WrapperApp>
    );
}

export default App;
