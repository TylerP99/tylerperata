import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    comments: [],
}

export const blogPostSlice = createSlice({
    name: "blogPost",
    initialState,
    reducers: {

    }
});


export default blogPostSlice.reducer;