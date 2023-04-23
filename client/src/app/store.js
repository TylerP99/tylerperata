import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";

import { apiSlice } from "../features/api/apiSlice";
import contactReducer from "../features/contact/contactSlice";
import projectReducer from "../features/project/projectSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        contact: contactReducer,
        project: projectReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
});