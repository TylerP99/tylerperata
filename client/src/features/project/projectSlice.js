import { createSlice, createAsyncThunk, createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

const PROJECT_URL = "http://localhost:5000/api/projects";

const projectAdapter = createEntityAdapter({
    selectId: (project) => project._id,
    sortComparer: (a,b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = projectAdapter.getInitialState({
    status: "idle", // idle, loading, succeeded, failed
    message: "",
});



export const getAllProjects = createAsyncThunk("/project/getProjects", async () => {
    try {
        const res = await axios.get(PROJECT_URL);

        console.log(res.data);

        return res.data;
    }
    catch(e) {
        console.error(e);
        return e;
    }
});

export const addProject = createAsyncThunk("/project/addProject", async (project) => {
    try {
        console.log("Posting");
        const res = await axios.post(PROJECT_URL, project);

        console.log(res.data);

        return res.data;
    }
    catch(e) {
        console.error(e);
        return e;
    }
});

export const updateProject = createAsyncThunk("project/updateProject", async ({project, id}) => {
    try{
        const res = await axios.put(`${PROJECT_URL}/${id}`, project);

        return res.data;
    }
    catch(e) {
        console.error(e);
        return e;
    }
});

export const deleteProject = createAsyncThunk("project/deleteProject", async (id) => {
    try {
        const res = await axios.delete(`${PROJECT_URL}/${id}`);

        return res.data;
    }
    catch(e) {
        console.error(e);
        return e;
    }
});

export const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllProjects.pending, (state) => {
            state.status = "loading" 
        })
        .addCase(getAllProjects.fulfilled, (state, action) => {
            state.status = "suceeded";
            console.log("Project Fetch", state, action.payload);
            projectAdapter.upsertMany(state, action.payload);
        })
        .addCase(getAllProjects.rejected, (state, action) => {
            state.message = action.payload;
            state.status = "failed";
        })

        .addCase(addProject.pending, (state) => { state.status = "loading" })
        .addCase(addProject.fulfilled, (state, action) => {
            state.status = "suceeded";
            projectAdapter.upsertOne(state, action.payload);
        })
        .addCase(addProject.rejected, (state, action) => {
            console.log("Failed");
            console.log(action);
            state.message = action.payload;
            state.status = "failed";
        })

        .addCase(updateProject.pending, (state) => { state.status = "loading" })
        .addCase(updateProject.fulfilled, (state, action) => {
            projectAdapter.upsertOne(state, action.payload);
            state.status = "suceeded";
        })
        .addCase(updateProject.rejected, (state, action) => {
            state.message = action.payload;
            state.status = "failed";
        })

        .addCase(deleteProject.pending, (state) => { state.status = "loading" })
        .addCase(deleteProject.fulfilled, (state, action) => {
            projectAdapter.removeOne(state, action.payload._id);
            state.status = "suceeded";
        })
        .addCase(deleteProject.rejected, (state, action) => {
            state.message = action.payload;
            state.status = "failed";
        })
    },
});

export const {
    selectAll: selectAllProjects,
    selectById: selectProjectByID,
} = projectAdapter.getSelectors(state => state.project);

export const selectProjectStatus = (state) => state.project.status;

export default projectSlice.reducer;