import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userAuthApi } from "../services/userAuthApi";
import { addPropertySlice } from "../features/addPropertySlice";

export const store = configureStore({
	reducer: {
		[userAuthApi.reducerPath]: userAuthApi.reducer,
		addProperty: addPropertySlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(userAuthApi.middleware),
});

setupListeners(store.dispatch);
