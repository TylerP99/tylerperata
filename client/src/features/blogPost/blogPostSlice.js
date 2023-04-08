import { createSlice, createAsyncThunk, createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

const POSTS_URL = "http://localhost:5000/api/posts";

const postsAdapter = createEntityAdapter({
    selectId: (post) => post._id,
    sortComparer: (a,b) => b.updatedAt.localeCompare(a.updatedAt),
});

const initialState = postsAdapter.getInitialState({
    status: "idle", //idle, loading, succeeded, failed
    message: null,
});



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
        return e.message;
    }
});

export const updatePost = createAsyncThunk("posts/updatePost", async ({title, content, id}) => {
    try{
        const res = await axios.put(`${POSTS_URL}/${id}`, {title, content});

        return res.data;
    }
    catch(e) {
        return e.message;
    }
});

export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
    try{
        const res = await axios.delete(`${POSTS_URL}/${id}`);

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
            postsAdapter.upsertMany(state, action.payload);
        })
        .addCase(getPosts.rejected, (state, action) => {
            state.status = "failed";
            state.message = action.payload;
        })
        .addCase(addPost.pending, (state) => {
            state.status = "loading";
        })
        .addCase(addPost.fulfilled, (state, action) => {
            state.status = "suceeded";
            postsAdapter.upsertOne(state, action.payload);
        })
        .addCase(addPost.rejected, (state, action) => {
            state.status = "failed";
        })
        .addCase(updatePost.pending, (state) => {
            state.status = "loading";
        })
        .addCase(updatePost.fulfilled, (state, action) => {
            state.status = "suceeded";
            postsAdapter.upsertOne(state, action.payload);
        })
        .addCase(updatePost.rejected, (state, action) => {
            state.status = "failed";
        })
        .addCase(deletePost.pending, (state) => {
            state.status = "loading";
        })
        .addCase(deletePost.fulfilled, (state, action) => {
            state.status = "suceeded";
            postsAdapter.removeOne(state, action.payload._id)
        })
        .addCase(deletePost.rejected, (state, action) => {
            state.status = "failed";
        })
    },
});

export const {
    selectAll: selectAllPosts,
    selectById: selectPostById,
} = postsAdapter.getSelectors(state => state.blogPost);

export const selectPostStatus = (state) => state.blogPost.status;


export default blogPostSlice.reducer;