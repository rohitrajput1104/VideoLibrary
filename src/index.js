import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from 'react-router-dom'
import {VideoListingProvider,AuthProvider,PlaylistProvider,LikesProvider,WatchLaterProvider,HistoryProvider} from './Context/index'
// Call make Server
makeServer();

ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <VideoListingProvider>
      <PlaylistProvider>
        <LikesProvider>
          <WatchLaterProvider>
            <HistoryProvider>
    <App />
    </HistoryProvider>
    </WatchLaterProvider>
    </LikesProvider>
    </PlaylistProvider>
    </VideoListingProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
