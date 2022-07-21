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
	}),
});

export const { useLoginUserMutation, useLogoutUserMutation } = userAuthApi;
