import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.scss'
import App from './App';
import {BrowserRouter} from 'react-router-dom';

import "./fonts/Montserrat/Montserrat-Regular.ttf";

import {Provider} from 'react-redux';
import { store } from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);


