import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    balance: 0
}

export const bankSlice = createSlice({
    name: "bankSBH",
    initialState,
    reducers: {
        depositInSBH: (state, action) => {
            state.balance += action.payload;
        },
        withdrawInSBH: (state, action) => {
            state.balance -= action.payload;
        },
        balanceInSBH: (state) => {
            state.balance = state.balance;
        }
    },
})

export const { depositInSBH, withdrawInSBH, balanceInSBH } = bankSlice.actions

export default bankSlice.reducer