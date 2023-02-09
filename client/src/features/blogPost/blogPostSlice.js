import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    posts: [],
}

export const blogPostSlice = createSlice({
    name: "blogPost",
    initialState,
    reducers: {

    }
});

export default blogPostSlice.reducer;