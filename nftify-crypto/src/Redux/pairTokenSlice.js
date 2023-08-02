import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading : false,
    isError : false,
    data : []
}

const pairTokenslice = createSlice({
    name : "tokenPair",
    initialState : initialState,
    reducers : {
        getRequestToken : (state, {payload}) => {
            state.isLoading = true;
        },
        getRequestTokenSuccess : (state, {payload}) => {
            state.isLoading = false;
            state.data = payload;
        },
        getRequestTokenFailed : (state, {payload}) => {
            state.isLoading = false;
            state.isError = true;
        }
    }
});

export const {getRequestToken, getRequestTokenSuccess, getRequestTokenFailed} = pairTokenslice.actions;

export default pairTokenslice.reducer