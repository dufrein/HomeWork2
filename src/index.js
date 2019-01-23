import React from 'react';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import createBrowserHistory from "history/createBrowserHistory";
import App from './containers/App'; 

const history = createBrowserHistory();

ReactDOM.render(<App />, document.getElementById('root'));

 
