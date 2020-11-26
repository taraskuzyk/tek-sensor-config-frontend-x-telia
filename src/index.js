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
require('dotenv').config()

let socket;
if (process.env.REACT_APP_WS_URL) {
    socket = io(process.env.REACT_APP_WS_URL)
} else {
    throw new Error("No URL for WebSocket connection to backend was provided. REACT_APP_WS_URL variable needed in environment")
}

// const socket = io("https://tek-sensor-backend.ngrok.io")

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
