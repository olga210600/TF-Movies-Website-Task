import React          from 'react';
import PublicRoutes   from "./router";
import { WrapperApp } from './style';
import './App.css';

function App() {
    return (
        <WrapperApp>
            <PublicRoutes/>
        </WrapperApp>
    );
}

export default App;
