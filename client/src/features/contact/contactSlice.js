import { createSlice, createAsyncThunk, createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

const CONTACTS_URL = "http://localhost:5000/api/contacts";

const contactsAdapter = createEntityAdapter({
    selectId: (contact) => contact._id,
    sortComparer: (a,b) => b.createdAt.localeCompare(a.createddAt),
})

const initialState = contactsAdapter.getInitialState({
    status: "idle", //idle, loading, succeeded, failed
    message: null,
});



export const getContacts = createAsyncThunk("contacts/getContacts", async () => {
    try{
        const res = await axios.get(CONTACTS_URL);
        
        return res.data;
    }
    catch(e) {
        return e.message;
    }
});

export const addContact = createAsyncThunk("contacts/addContact", async (post) => {
    try{
        const res = await axios.post(CONTACTS_URL, post);

        return res.data;
    }
    catch(e) {
        return e.message;
    }
});

export const updateContact = createAsyncThunk("contacts/updateContact", async ({title, content, id}) => {
    try{
        const res = await axios.put(`${CONTACTS_URL}/${id}`, {title, content});

        return res.data;
    }
    catch(e) {
        return e.message;
    }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id) => {
    try{
        const res = await axios.delete(`${CONTACTS_URL}/${id}`);

        return res.data;
    }
    catch(e) {
        return e.message;
    }
});


export const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(getContacts.pending, (state) => {
            state.status = "loading";
        })
        .addCase(getContacts.fulfilled, (state, action) => {
            state.status = "suceeded";
            postsAdapter.upsertMany(state, action.payload);
        })
        .addCase(getContacts.rejected, (state, action) => {
            state.status = "failed";
            state.message = action.payload;
        })

        .addCase(addContact.pending, (state) => {
            state.status = "loading";
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.status = "suceeded";
            postsAdapter.upsertOne(state, action.payload);
        })
        .addCase(addContact.rejected, (state, action) => {
            state.message = action.payload;
            state.status = "failed";
        })

        .addCase(updateContact.pending, (state) => {
            state.status = "loading";
        })
        .addCase(updateContact.fulfilled, (state, action) => {
            state.status = "suceeded";
            postsAdapter.upsertOne(state, action.payload);
        })
        .addCase(updateContact.rejected, (state, action) => {
            state.message = action.payload;
            state.status = "failed";
        })

        .addCase(deleteContact.pending, (state) => {
            state.status = "loading";
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.status = "suceeded";
            postsAdapter.removeOne(state, action.payload._id)
        })
        .addCase(deleteContact.rejected, (state, action) => {
            state.message = action.payload;
            state.status = "failed";
        })
    },
});

export const {
    selectAll: selectAllContacts,
    selectById: selectContactById,
} = contactsAdapter.getSelectors(state => state.contacts);

export const selectContactStatus = (state) => state.contacts.status;


export default contactsSlice.reducer;