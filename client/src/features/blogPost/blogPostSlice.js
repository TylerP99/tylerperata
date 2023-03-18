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
});

export const addPost = createAsyncThunk("posts/addPost", async (post) => {
    try{
        const res = await axios.post(POSTS_URL, post);
        
        console.log(res);

        return res;
    }
    catch(e) {
        return e.message;
    }
});

export const updatePost = createAsyncThunk("posts/addPost", async (post, id) => {
    try{
        const res = await axios.put(POSTS_URL, {post, id});
        
        console.log(res);

        return res;
    }
    catch(e) {
        return e.message;
    }
});

export const deletePost = createAsyncThunk("posts/addPost", async (id) => {
    try{
        const res = await axios.delete(POSTS_URL, id);
        
        console.log(res);

        return res;
    }
    catch(e) {
        return e.message;
    }
});


export const blogPostSlice = createSlice({
    name: "blogPost",
    initialState,
    reducers: {

    }
});

export const selectAllPosts = (state) => state.blogPost;

export default blogPostSlice.reducer;