import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
    currentUser: null
}

export const userSlice = createSlice({
    name: 'cart',
    initialState: InitialState,
    reducers: {
        setCurrentUser(state, action) {
            state.currentUser = action.payload;
        }
    }
})

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;


