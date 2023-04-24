import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";

import { apiSlice } from "../api/apiSlice";

const contactsAdapter = createEntityAdapter({
    selectId: (contact) => contact._id,
    sortComparer: (a,b) => b.createdAt.localeCompare(a.createddAt),
});

const initialState = contactsAdapter.getInitialState();

export const messageApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMessages: builder.query({
            query: () => "/messages",
            transformResponse: responseData => contactsAdapter.setAll(initialState, responseData),
            providesTags: (res, error, arg) => [
                { type: "Message", id: "LIST" },
                ...res.ids.map(id => ({ type: "Message", id}))
            ],
        }),
        addNewMessage: builder.mutation({
            query: (initialMessage) => ({
                url: "/messages",
                method: "POST",
                body: initialMessage,
            }),
            invalidatesTags: [
                { type: "Message", id: "LIST" }
            ],
        }),
        setMessageStatus: builder.mutation({
            query: (message) => ({
                url: `/messages/${message.id}`,
                method: "PUT",
                body: { replied: message.replied },
            }),
            invalidatesTags: (res, error, arg) => [
                {type: "Message", id: arg.id}
            ],
        }),
        deleteMessage: builder.mutation({
            query: (messageId) => ({
                url: `/messages/${messageId}`,
                method: "DELETE",
                body: {},    
            }),
            invalidatesTags: (res, error, arg) => [
                { type: "Message", id: arg}
            ]
        }),
    }),
});

export const selectMessageResult = messageApiSlice.endpoints.getMessages.select();

const selectMessageData = createSelector(
    selectMessageResult,
    messageResult => messageResult.data,
);

export const {
    useGetMessagesQuery,
    useAddNewMessageMutation,
    useSetMessageStatusMutation,
    useDeleteMessageMutation,
} = messageApiSlice;

export const {
    selectAll: selectAllMessages,
    selectById: selectMessageById,
} = contactsAdapter.getSelectors(state => selectMessageData(state) ?? initialState);