import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAuthApi = createApi({
	reducerPath: "userAuthApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://www.prcapp.109-228-49-52.plesk.page/public/api/v1/",
	}),
	endpoints: (builder) => ({
		loginUser: builder.mutation({
			query: (user) => {
				return {
					url: "login",
					method: "POST",
					body: user,
					headers: {
						"Content-Type": "application/json",
					},
				};
			},
		}),
		logoutUser: builder.mutation({
			query: ({ token }) => {
				return {
					url: "logout",
					method: "POST",
					body: {},
					headers: {
						authorization: `Bearer ${token}`,
					},
				};
			},
		}),
		loggedUserDetails: builder.query({
			query: (token) => {
				return {
					url: "user",
					method: "GET",
					headers: {
						authorization: `Bearer ${token}`,
					},
				};
			},
		}),
		addProperty: builder.mutation({
			query: ({ token, data }) => {
				return {
					headers: {
						authorization: `Bearer ${token}`,
						"Content-Type": "application/json; charset=utf-8",
						Accept: "application/json",
					},
					url: "add-property",
					method: "POST",
					body: data,
				};
			},
		}),
	}),
});

export const {
	useLoginUserMutation,
	useLogoutUserMutation,
	useLoggedUserDetailsQuery,
	useAddPropertyMutation,
} = userAuthApi;
