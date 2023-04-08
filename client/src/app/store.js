import {configureStore} from "@reduxjs/toolkit";

import blogPostReducer from "../features/blogPost/blogPostSlice";
import contactReducer from "../features/contact/contactSlice";
import projectReducer from "../features/project/projectSlice";

export const store = configureStore({
    reducer: {
        blogPost: blogPostReducer,
        contact: contactReducer,
        project: projectReducer,
    }
});