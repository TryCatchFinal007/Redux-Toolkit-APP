import { configureStore } from "@reduxjs/toolkit";
import bankReducer from "../features/bankSlice";

export const store = configureStore({
    reducer: {
        SBH_Bank: bankReducer
    },
})