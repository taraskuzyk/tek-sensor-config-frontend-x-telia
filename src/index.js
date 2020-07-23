import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import SocketContext from "./SocketContext";
import io from "socket.io-client"

import {BrowserRouter} from 'react-router-dom'

const socket = io("http://localhost:13337")

ReactDOM.render(
    <SocketContext.Provider value={socket}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </SocketContext.Provider>
    ,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
