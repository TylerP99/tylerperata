import {configureStore} from "@reduxjs/toolkit";

import blogPostReducer from "../features/blogPost/blogPostSlice";
import contactReducer from "../features/contact/contactSlice";

export const store = configureStore({
    reducer: {
        blogPost: blogPostReducer,
        contact: contactReducer,
    }
});