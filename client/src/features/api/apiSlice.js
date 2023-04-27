import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials } from "../auth/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    credentials: "include",
    prepareHeaders: (headers, {getState}) => {
        const token = getState().auth.token;

        if(token) {
            headers.set("authorization", `Bearer ${token}`);
        }

        return headers;
    },
});

const baseQuerywithReauth = async (args, api, extraOptions) => {
    console.log("Base Query with Reauth");
    console.log("args", args);
    console.log("api", api);

    let result = await baseQuery(args, api, extraOptions);

    console.log("Result", result);

    if(result?.error?.status === 401) {
        console.log("Sending refresh");

        const refreshResult = await baseQuery("/users/refresh", api, extraOptions);
        console.log("Refresh Result", refreshResult);

        if(!refreshResult?.data) {

            if(refreshResult?.error?.status === 401) {
                refreshResult.error.data.message = "Your login has expired";
            }

            return refreshResult;
        }

        api.dispatch(setCredentials({...refreshResult.data}));

        result = await baseQuery(args, api, extraOptions);

        console.log("Requery result", result);
    }

    console.log("Base query with reauth returning");
    return result;
}

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: baseQuerywithReauth,
    tagTypes: ["Post", "Project", "Message"],
    endpoints: builder => ({}),
});