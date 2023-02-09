import {configureStore} from "@reduxjs/toolkit";

import blogPostReducer from "../features/blogPost/blogPostSlice";

export const store = configureStore({
    reducer: {
        blogPost: blogPostReducer,
    }
});