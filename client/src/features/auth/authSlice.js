import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {user: null, token: null},
    reducers: {
        setCredentials: (state, action) => {
            const {access, user} = action.payload;
            state.token = access;
            state.user = user
        },
        logout: (state, action) => {
            state.token = null;
        }
    },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectAccessToken = (state) => state.auth.token;