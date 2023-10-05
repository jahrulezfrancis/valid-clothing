import { createSlice } from "@reduxjs/toolkit"

const intialState = {
    transactionHistory: []
}

const TransactionSlice = createSlice({
    name: 'transaction',
    initialState: intialState,
    reducers: {
        setTransactionHistory(state, action) {
          state.transactionHistory = action.payload
        }
    }
})

export const {setTransactionHistory} = TransactionSlice.actions

export const transactionReducer =  TransactionSlice.reducer;