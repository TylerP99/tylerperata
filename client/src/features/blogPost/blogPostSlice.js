import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    posts: [],
    status: "idle", //idle, loading, succeeded, failed
    message: null,
}

const POSTS_URL = "http://localhost:5000/api/posts"

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
    try{
        const res = await axios.get(POSTS_URL);
        
        return res.data;
    }
    catch(e) {
        return e.message;
    }
});

export const addPost = createAsyncThunk("posts/addPost", async (post) => {
    try{
        const res = await axios.post(POSTS_URL, post);
        return res.data;
        
    }
    catch(e) {
        console.log("Add post error")
        return e.message;
    }
});

export const updatePost = createAsyncThunk("posts/updatePost", async ({title, content, id}) => {
    try{
        const res = await axios.put(`${POSTS_URL}/${id}`, {title, content});
        
        console.log(res);

        return res.data;
    }
    catch(e) {
        return e.message;
    }
});

export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
    try{
        const res = await axios.delete(POSTS_URL + `/${id}`);

        return res.data;
    }
    catch(e) {
        return e.message;
    }
});


export const blogPostSlice = createSlice({
    name: "blogPost",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(getPosts.pending, (state) => {
            state.status = "loading";
        })
        .addCase(getPosts.fulfilled, (state, action) => {
            state.status = "suceeded";
            state.posts = action.payload;
        })
        .addCase(getPosts.rejected, (state, action) => {
            state.status = "failed";
            state.message = action.payload;
        })
        .addCase(addPost.pending, (state) => {
            console.log("Add post pending")
            state.status = "loading";
        })
        .addCase(addPost.fulfilled, (state, action) => {
            console.log("Add post fulfilled")
            console.log(action);
            
            state.status = "suceeded";
            state.posts.push(action.payload);
        })
        .addCase(addPost.rejected, (state, action) => {
            console.log("Add post rejected")
            console.log(action);

            state.status = "failed";
        })
        .addCase(updatePost.pending, (state) => {
            console.log("update post pending")
            state.status = "loading";
        })
        .addCase(updatePost.fulfilled, (state, action) => {
            console.log("update post fulfilled")
            console.log(action);
            
            state.status = "suceeded";
            state.posts = state.posts.map(x => x._id === action.payload._id ? action.payload : x)
        })
        .addCase(updatePost.rejected, (state, action) => {
            console.log("update post rejected")
            console.log(action);

            state.status = "failed";
        })
        .addCase(deletePost.pending, (state) => {
            console.log("delete post pending")
            state.status = "loading";
        })
        .addCase(deletePost.fulfilled, (state, action) => {
            console.log("delete post fulfilled")
            console.log(action);
            
            state.status = "suceeded";
            state.posts = state.posts.filter(x => x._id !== action.payload._id);
        })
        .addCase(deletePost.rejected, (state, action) => {
            console.log("delete post rejected")
            console.log(action);

            state.status = "failed";
        })
    },
});

export const selectAllPosts = (state) => state.blogPost.posts;
export const selectOnePost = (state, id) => {
    return state.blogPost.posts.find(x => x._id == id);
};
export const selectPostStatus = (state) => state.blogPost.status;


export default blogPostSlice.reducer;