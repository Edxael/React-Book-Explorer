console.log("Hello from index.js in folder: app");

    // index.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Global from '/home/edmundo/Dropbox/01-Dev/01-js/03-book-explorer/app/components/global';

ReactDOM.render(
  <Global />, document.getElementById("root")
);
