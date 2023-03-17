import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    posts: [],
    status: "idle", //idle, loading, success, failed
    message: null,
}

const POSTS_URL = "http://localhost:5000/api/posts"

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
    try{
        const res = await axios.get(POSTS_URL);
        console.log(res);

        return res;
    }
    catch(e) {
        return e.message;
    }
})


export const blogPostSlice = createSlice({
    name: "blogPost",
    initialState,
    reducers: {

    }
});

export const selectAllPosts = (state) => state.blogPost;

export default blogPostSlice.reducer;