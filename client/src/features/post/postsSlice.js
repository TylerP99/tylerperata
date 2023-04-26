import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";

import { apiSlice } from "../api/apiSlice";

const postsAdapter = createEntityAdapter({
    selectId: (post) => post._id,
    sortComparer: (a,b) => b.updatedAt.localeCompare(a.updatedAt),
});

const initialState = postsAdapter.getInitialState();

export const postsApiSlice = apiSlice.injectEndpoints({

    endpoints: builder => ({
        getPosts: builder.query({
            query: () => "/posts",
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            transformResponse: responseData => postsAdapter.setAll(initialState, responseData),
            providesTags: (res, error, arg) => {
                if(!res?.ids) return [{type: "Post", id: "LIST"}];
                return [{type: "Post", id: "LIST"},
                ...res.ids.map(id => ({type: "Post", id}))];
            },
        }),
        addNewPost: builder.mutation({
            query: (initialPost) => ({
                url: "/posts",
                method: "POST",
                body: initialPost,
            }),
            invalidatesTags: [
                {type: "Post", id: "LIST"}
            ]
        }),
        updatePost: builder.mutation({
            query: (updatedPost) => ({
                url: `/posts/${updatedPost._id}`,
                method: "PUT",
                body: updatedPost,
            }),
            invalidatesTags: (res, error, arg) => [
                {type: "Post", id: arg._id}
            ]
        }),
        deletePost: builder.mutation({
            query: (postId) => ({
                url: `/posts/${postId}`,
                method: "DELETE",
                body: {},
            }),
            invalidatesTags: (res, error, arg) => [
                {type: "Post", id: arg}
            ]
        })
    })

});

export const selectPostsResult = postsApiSlice.endpoints.getPosts.select();

const selectPostsData = createSelector(
    selectPostsResult,
    postsResult => postsResult.data,
)

export const {
    useGetPostsQuery,
    useAddNewPostMutation,
    useUpdatePostMutation,
    useDeletePostMutation,
} = postsApiSlice;

export const {
    selectAll: selectAllPosts,
    selectById: selectPostById,
} = postsAdapter.getSelectors(state => selectPostsData(state) ?? initialState);