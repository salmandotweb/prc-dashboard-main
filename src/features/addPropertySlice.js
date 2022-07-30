import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	id: "",
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
	created_at: "",
	updated_at: "",
	images: [
		{
			id: "",
			property_id: "",
			image_name: "",
			created_at: "",
			updated_at: "2022-",
		},
		{
			id: "",
			property_id: "",
			image_name: "",
			created_at: "",
			updated_at: "2022-",
		},
		{
			id: "",
			property_id: "",
			image_name: "",
			created_at: "",
			updated_at: "2022-",
		},
	],
	Features: [],
};

export const addPropertySlice = createSlice({
	name: "addProperty",
	initialState,
	reducers: {
		addProperty: (state, action) => {
			state.title = action.payload.title;
			state.description = action.payload.description;
			state.street = action.payload.street;
			state.city = action.payload.city;
			state.postal_code = action.payload.postal_code;
			state.Detached = action.payload.Detached;
			state.End_of_terraced = action.payload.End_of_terraced;
			state.house_share = action.payload.house_share;
			state.Studio = action.payload.Studio;
			state.Terraced = action.payload.Terraced;
			state.Town_house = action.payload.Town_house;
			state.Warehouse = action.payload.Warehouse;
			state.Semi_detached = action.payload.Semi_detached;
			state.Popular_category = action.payload.Popular_category;
			state.Property_size = action.payload.Property_size;
			state.provider_type = action.payload.provider_type;
			state.bedrooms = action.payload.bedrooms;
			state.bathrooms = action.payload.bathrooms;
			state.room = action.payload.room;
			state.garage = action.payload.garage;
			state.year_built = action.payload.year_built;
			state.property_type = action.payload.property_type;
			state.price = action.payload.price;
			state.price_prefix = action.payload.price_prefix;
			state.secod_price = action.payload.secod_price;
			state.secod_price_prefix = action.payload.secod_price_prefix;
			state.Private_notes = action.payload.Private_notes;
			state.created_at = action.payload.created_at;
			state.updated_at = action.payload.updated_at;
			state.images = action.payload.images;
			state.Features = action.payload.Features;
		},
	},
});

export const { addProperty } = addPropertySlice.actions;
