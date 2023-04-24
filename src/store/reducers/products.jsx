import {createSlice} from '@reduxjs/toolkit';
import {products} from '../../components/pages/products/products';

const initialState = {
    products: products,
    basketProducts: [],
    countProduct: 0,
    totalPriceInBasket: 0,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProductsBasket: (state, action) => {
            console.log('first', action.payload)
            if (state.basketProducts.find(p => p.id === action.payload.id)) {
                state.basketProducts = state
                    .basketProducts
                    .map(p => {
                        if (p.id === action.payload.id) {
                            if (p.count > 0) {
                                p.price += action.payload.price;
                                
                            }
                            return {
                                ...p,
                                count: p.count + 1,
                            }
                        }
                        return p
                    })
            } else {

                state
                    .basketProducts
                    .push({
                        ...action.payload,
                        count: 1
                        
                    })
            }
        },
        delProductsBasket: (state, action) => {
            state.basketProducts = state
                .basketProducts
                .filter(item => item.id !== action.payload.id);

                
        },
       
    }
})

export const {
    addProductsBasket
} = productsSlice.actions

export const {
    delProductsBasket
} = productsSlice.actions

export default productsSlice.reducer