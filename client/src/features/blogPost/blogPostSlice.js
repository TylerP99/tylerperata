import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        title: "Learning RTK",
        content: "It's complicated, thats for sure, but it is also very useful."
    },
    {
        id: 2,
        title: "MVC Architecture",
        content: "MVC is an organizational pattern for web applications, consisting of a data model, the views, and controller logic."
    },
    {
        id: 3,
        title: "Dave Gray Makes Good Tutorials",
        content: "Currently learning Redux Toolkit using some of his work."
    },
    {
        id: 4,
        title: "Binding of Isaac is an interesting game",
        content: "In terms of crazy gameplay, it is weak. However, the style, items, and RNG makes it pretty fun."
    },
]

export const blogPostSlice = createSlice({
    name: "blogPost",
    initialState,
    reducers: {

    }
});

export const selectAllPosts = (state) => state.blogPost;

export default blogPostSlice.reducer;