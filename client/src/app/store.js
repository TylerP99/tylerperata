import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";

import { apiSlice } from "../features/api/apiSlice";
import contactReducer from "../features/contact/contactSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        contact: contactReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
});