import { apiSlice } from "../api/apiSlice";
import { logout, setCredentials } from "./authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: newUser => ({
                url: "/users/register",
                method: "POST",
                body: {...newUser}
            }),
        }),
        login: builder.mutation({
            query: credentials => ({
                url: "/users/login",
                method: "POST",
                body: {...credentials},
            }),
        }),
        sendLogout: builder.mutation({
            query: () => ({
                url: "/users/logout",
                method: "POST",
            }),
            async onQueryStarted(arg, {dispatch, queryFulfilled}) {
                try {
                    const data = await queryFulfilled;
                    console.log(data);

                    dispatch(logout());
                    dispatch(apiSlice.util.resetApiState());
                }
                catch(e) {
                    console.error(e);
                }
            }
        }),
        refresh: builder.mutation({
            query: () => ({
                url: "/users/refresh",
                method: "GET",
            }),
            async onQueryStarted(arg, {dispatch, queryFulfilled}) {
                try{
                    const { data } = await queryFulfilled;
                    console.log(data);
                    dispatch(setCredentials(data));
                }
                catch(e) {
                    console.error(e);
                }
            },
        })
    }),
})

export const {
    useRegisterMutation,
    useLoginMutation,
    useSendLogoutMutation,
    useRefreshMutation,
} = authApiSlice;