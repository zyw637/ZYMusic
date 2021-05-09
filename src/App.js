
import React, { memo } from 'react';

import routes from './router';
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"
import store from "./store"

import Header from "../src/components/header";
import PlayBar from "../src/views/player/playbar";

export default memo(function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        {renderRoutes(routes)}
        <PlayBar></PlayBar>
      </BrowserRouter>
    </Provider>
    
  )
})
