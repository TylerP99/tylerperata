import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    status: "idle", //idle, loading, success, failed
    message: null,
}

export const blogPostSlice = createSlice({
    name: "blogPost",
    initialState,
    reducers: {

    }
});

export const selectAllPosts = (state) => state.blogPost;

export default blogPostSlice.reducer;