import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";

import { apiSlice } from "../api/apiSlice";

const projectAdapter = createEntityAdapter({
    selectId: (project) => project._id,
    sortComparer: (a,b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = projectAdapter.getInitialState();

export const projectApiSlice = apiSlice.injectEndpoints({

    endpoints: (builder) => ({
        getProjects: builder.query({
            query: () => "/projects",
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            transformResponse: responseData => projectAdapter.setAll(initialState, responseData),
            providesTags: (res, error, arg) => {
                if(!res?.ids) return [{type: "Project", id: "LIST"}];
                return [{ type: "Project", id: "LIST" }, 
                ...res.ids.map(id => ({type: "Project", id}))];
            },
        }),
        addNewProject: builder.mutation({
            query: (initialProject) => ({
                url: "/projects",
                method: "POST",
                body: initialProject,
            }),
            invalidatesTags: [
                {type: "Project", id: "LIST"}
            ]
        }),
        updateProject: builder.mutation({
            query: (updatedProject) => ({
                url: `/projects/${updatedProject._id}`,
                method: "PUT",
                body: updatedProject.data,
            }),
            invalidatesTags: (res, error, arg) => [
                { type: "Project", id: arg._id }
            ]
        }),
        deleteProject: builder.mutation({
            query: (projectID) => ({
                url: `projects/${projectID}`,
                method: "DELETE",
                body: {},
            }),
            invalidatesTags: ( res, error, arg ) => [
                {type: "Project", id: arg}
            ]
        }),
    }),

});

export const selectProjectsResult = projectApiSlice.endpoints.getProjects.select();

const selectProjectsData = createSelector(
    selectProjectsResult,
    projectsResult => projectsResult.data,
);

export const {
    useGetProjectsQuery,
    useAddNewProjectMutation,
    useUpdateProjectMutation,
    useDeleteProjectMutation,
} = projectApiSlice;

export const {
    selectAll: selectAllProjects,
    selectById: selectProjectByID,
} = projectAdapter.getSelectors(state => selectProjectsData(state) ?? initialState);