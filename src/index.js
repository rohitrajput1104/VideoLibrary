import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from 'react-router-dom'
import {VideoListingProvider,AuthProvider} from './Context/index'
// Call make Server
makeServer();

ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <VideoListingProvider>
    <App />
    </VideoListingProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
