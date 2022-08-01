import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	title: "",
	description: "",
	street: "",
	city: "",
	postal_code: "",
	Detached: "",
	End_of_terraced: "",
	house_share: "",
	Studio: "",
	Terraced: "",
	Town_house: "",
	Warehouse: "",
	Semi_detached: "",
	Popular_category: "",
	Property_size: "",
	bedrooms: "",
	bathrooms: "",
	room: "",
	garage: "",
	year_built: "",
	property_type: "",
	provider_type: "",
	price: "",
	price_prefix: "",
	secod_price: "",
	secod_price_prefix: "",
	Private_notes: "",
	images: [],
	Features: [],
};

export const addPropertySlice = createSlice({
	name: "addProperty",
	initialState,
	reducers: {
		addInformation: (state, action) => {
			state.title = action.payload.title;
			state.description = action.payload.description;
			state.street = action.payload.street;
			state.city = action.payload.city;
			state.postal_code = action.payload.postal_code;
		},
		addPropularCategory: (state, action) => {
			state.Popular_category = action.payload.Popular_category;
		},
		addPropertyDetails: (state, action) => {
			state.Property_size = action.payload.Property_size;
			state.bedrooms = action.payload.bedrooms;
			state.bathrooms = action.payload.bathrooms;
			state.room = action.payload.room;
			state.garage = action.payload.garage;
			state.year_built = action.payload.year_built;
		},
		addPrivateNotes: (state, action) => {
			state.Private_notes = action.payload.Private_notes;
		},
		addPrice: (state, action) => {
			state.price = action.payload.price;
			state.price_prefix = action.payload.price_prefix;
			state.secod_price = action.payload.secod_price;
			state.secod_price_prefix = action.payload.secod_price_prefix;
		},
		addImages: (state, action) => {
			state.images = action.payload.images;
		},
		addFeatures: (state, action) => {
			state.Features = action.payload.Features;
		},
		addPropertyType: (state, action) => {
			state.property_type = action.payload.property_type;
		},
		addLabel: (state, action) => {
			state.property_label = action.payload.property_label;
		},
		addProvider: (state, action) => {
			state.provider_type = action.payload.provider_type;
		},
	},
});

export const {
	addInformation,
	addPropularCategory,
	addPropertyDetails,
	addPrivateNotes,
	addPrice,
	addImages,
	addFeatures,
	addPropertyType,
	addLabel,
	addProvider,
} = addPropertySlice.actions;
