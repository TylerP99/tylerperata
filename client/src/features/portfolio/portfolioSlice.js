import { createSlice, createAsyncThunk, createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

const PORTFOLIO_URL = "http://localhost:5000/api/portfolio";

const portfolioAdapter = createEntityAdapter({
    selectId: (project) => project._id,
    sortComparer: (a,b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = {
    status: "idle", // idle, loading, succeeded, failed
    message: "",
};



export const getAllPortfolioProjects = createAsyncThunk("/portfolio/getProjects", async () => {
    try {
        const res = await axios.get(PORTFOLIO_URL);

        return res.data;
    }
    catch(e) {
        console.error(e);
        return e;
    }
});

export const addProject = createAsyncThunk("/portfolio/addProject", async (project) => {
    try {
        const res = await axios.post(PORTFOLIO_URL, project);

        return res.data;
    }
    catch(e) {
        console.error(e);
        return e;
    }
});

export const updateProject = createAsyncThunk("portfolio/updateProject", async ({project, id}) => {
    try{
        const res = await axios.put(`${PORTFOLIO_URL}/${id}`, project);

        return res.data;
    }
    catch(e) {
        console.error(e);
        return e;
    }
});

export const deleteProject = createAsyncThunk("portfolio/deleteProject", async (id) => {
    try {
        const res = await axios.delete(`${PORTFOLIO_URL}/${id}`);

        return res.data;
    }
    catch(e) {
        console.error(e);
        return e;
    }
});

export const portfolioSlice = createSlice({
    name: "portfolio",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllPortfolioProjects.pending, (state) => state.status = "loading")
        .addCase(getAllPortfolioProjects.fulfilled, (state, action) => {
            portfolioAdapter.upsertMany(action.payload);
            state.status = "suceeded";
        })
        .addCase(getAllPortfolioProjects.rejected, (state, action) => {
            state.message = action.payload;
            state.status = "failed";
        })

        .addCase(addProject.pending, (state) => state.status = "loading")
        .addCase(addProject.fulfilled, (state, action) => {
            portfolioAdapter.upsertOne(action.payload);
            state.status = "suceeded";
        })
        .addCase(addProject.rejected, (state, action) => {
            state.message = action.payload;
            state.status = "failed";
        })

        .addCase(updateProject.pending, (state) => state.status = "loading")
        .addCase(updateProject.fulfilled, (state, action) => {
            portfolioAdapter.upsertOne(action.payload);
            state.status = "suceeded";
        })
        .addCase(updateProject.rejected, (state, action) => {
            state.message = action.payload;
            state.status = "failed";
        })

        .addCase(deleteProject.pending, (state) => state.status = "loading")
        .addCase(deleteProject.fulfilled, (state, action) => {
            portfolioAdapter.removeOne(action.payload);
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
} = portfolioAdapter.getSelectors(state => state.portfolio);

export const selectPortfolioStatus = (state) => state.portfolio.status;

export default portfolioSlice.reducer;