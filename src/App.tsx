import React from 'react';
import './App.css'
import PublicRoutes from "./router";
import {WrapperApp} from './style'

function App(props) {
  return (

    <WrapperApp>
        <PublicRoutes/>
    </WrapperApp>
  );
}

export default App;
