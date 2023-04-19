import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ADMIN_URL = "http://localhost:5000/api/users";

const initialState = {
    status: "idle", // idle, loading, succeeded, failed
    user: null,
    message: null,
};

export const registerAdmin = createAsyncThunk("/admin/register", async (formData) => {
    try{
        const res = await axios.post(`${ADMIN_URL}/register`, formData);
        console.log(res);
        return res.data;
    }
    catch(e) {
        console.error(e);
    }
});

export const loginAdmin = createAsyncThunk("/admin/login", async ({email, password}) => {
    try{
        const res = await axios.post(`${ADMIN_URL}/login`, formData);
        console.log(res);
        return res.data;
    }
    catch(e) {
        console.error(e);
    }
});

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(registerAdmin.pending, (state)  => {
            state.status = "loading";
        })
        .addCase(registerAdmin.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.user = action.payload;
        })
        .addCase(registerAdmin.rejected, (state, action) => {
            state.status = "failed";
            state.message = action.payload.error;
        })
        .addCase(loginAdmin.pending, (state)  => {
            state.status = "loading";
        })
        .addCase(loginAdmin.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.user = action.payload;
        })
        .addCase(loginAdmin.rejected, (state, action) => {
            state.status = "failed";
            state.message = action.payload.error;
        })
    },
}); 

export const selectAdminStatus = (state) => state.admin.status;

export const selectCurrentAdmin = (state) => state.admin.user;

export default adminSlice.reducer;