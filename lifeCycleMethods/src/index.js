import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import DidMount from './DidMount.js'
import DidUpdate from './DidUpdate.js';
import ShouldUpdate from './ShouldUpdate.js';
import AppForUnmount from './AppForUnmount.js';

// ReactDOM.render(<App/>,document.getElementById("root")); 
//no longer supported(old way)

ReactDOM.createRoot(document.getElementById("root")).render(<AppForUnmount/>)