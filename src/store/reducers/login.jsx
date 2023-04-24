import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    authUser: false
}

export const loginUser = createSlice({
    name: 'login',
    initialState,
    reducers: {

        logIn: (state) => {
            const getAuthData = localStorage.getItem('authData')
            console.log(getAuthData)
            if (getAuthData != '') {
                state.authUser = true
                const setAuthToken = localStorage.setItem('authToken', 'true')
            }
        },

        logOut: (state) => {
            state.authUser = false
            const remAuthToken = localStorage.removeItem('authToken')
            console.log('logout')
        }
    }
})

export const {
    logIn
} = loginUser.actions

export const {
    logOut
} = loginUser.actions

export default loginUser.reducer