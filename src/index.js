import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import topics from "./data/topics";
import books from "./data/books";

import App from './App';

import 'material-components-web/dist/material-components-web.css';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <App topics={topics} books={books} />
    </BrowserRouter>,
    document.getElementById('root')
);