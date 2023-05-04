import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {token: null},
    reducers: {
        setCredentials: (state, action) => {
            console.log("Setting credentials...")
            const {access} = action.payload;
            state.token = access;
            console.log("Done setting credentials")
        },
        logout: (state, action) => {
            state.token = null;
        }
    },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectAccessToken = (state) => state.auth.token;