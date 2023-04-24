import {configureStore} from '@reduxjs/toolkit';
import products from '../store/reducers/products';
import login from '../store/reducers/login';

export const store = configureStore({
    reducer: {
        products: products,
        login: login,
    },
    devTools: true,
});