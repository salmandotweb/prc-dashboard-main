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
			query: (data) => {
				return {
					url: "add-property",
					method: "POST",
					body: data,
					headers: {
						authorization: `Bearer ${data.token}`,
						"Content-Type": "application/json; charset=utf-8",
						Accept: "application/json",
					},
				};
			},
		}),
		allProperties: builder.query({
			query: (token) => {
				return {
					headers: {
						authorization: `Bearer ${token}`,
					},
					url: "all-property",
					method: "GET",
				};
			},
		}),
		singleProperty: builder.mutation({
			query: (id) => {
				return {
					url: "property-details",
					method: "POST",
					body: {
						property_id: id,
					},
					headers: {
						authorization: `Bearer ${id.token}`,
						"Content-Type": "application/json; charset=utf-8",
						Accept: "application/json",
					},
				};
			},
		}),
		addFeature: builder.mutation({
			query: (feature) => {
				return {
					url: "add-feature",
					method: "POST",
					body: {
						title: feature.title,
					},
					headers: {
						authorization: `Bearer ${feature.token}`,
						"Content-Type": "application/json; charset=utf-8",
						Accept: "application/json",
					},
				};
			},
		}),
		allFeatures: builder.query({
			query: (token) => {
				return {
					headers: {
						authorization: `Bearer ${token}`,
					},
					url: "view-property-page",
					method: "GET",
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
	useAllPropertiesQuery,
	useSinglePropertyMutation,
	useAddFeatureMutation,
	useAllFeaturesQuery,
} = userAuthApi;
