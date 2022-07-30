import React from "react";
import FeatureCard from "../../Components/AdminPanel/Properties/FeatureCard";
import ImagesCard from "../../Components/AdminPanel/Properties/ImagesCard";
import InformationCard from "../../Components/AdminPanel/Properties/InformationCard";
import LabelCard from "../../Components/AdminPanel/Properties/LabelCard";
import NotesCard from "../../Components/AdminPanel/Properties/NotesCard";
import PopularCategory from "../../Components/AdminPanel/Properties/PopularCategory";
import PriceCard from "../../Components/AdminPanel/Properties/PriceCard";
import PropertyCard from "../../Components/AdminPanel/Properties/PropertyCard";
import PropertyDetails from "../../Components/AdminPanel/Properties/PropertyDetails";
import SectionTitle from "../../Components/SectionTitle";
import SelectProvider from "../../Components/AdminPanel/Properties/SelectProvider";
import classes from "../../Styles/AdminPanel/AddProperty.module.css";
import { getToken } from "../../services/LocalStorageService";
import { useSelector } from "react-redux";
import { useAddPropertyMutation } from "../../services/userAuthApi";

const AddProperty = () => {
	const token = getToken();
	const [addProperty, { error }] = useAddPropertyMutation();
	console.log(error);

	const property = {
		id: 1,
		title: "test_p",
		description: "test_description",
		street: "test_p",
		city: "test_p",
		postal_code: "test_p",
		Detached: "test_ptest_p",
		End_of_terraced: "test_p",
		house_share: "test_ptest_ptest_ptest_ptest_p",
		Studio: "test_ptest_p",
		Terraced: "test_p",
		Town_house: "test_p",
		Warehouse: "test_p",
		Semi_detached: "test_ptest_p",
		Popular_category: "test_p",
		Property_size: "test_ptest_p",
		bedrooms: "test_p",
		bathrooms: "test_p",
		room: "test_p",
		garage: "test_p",
		year_built: "test_ptest_ptest_ptest_ptest_ptest_ptest_p",
		property_type: "test_p",
		price: "test_p",
		price_prefix: "test_p",
		secod_price: "test_p",
		secod_price_prefix: "test_p",
		Private_notes: "test_p",
		created_at: "2022-07-28T15:57:28.000000Z",
		updated_at: "2022-07-28T15:57:28.000000Z",
		images: [
			{
				id: 1,
				property_id: "1",
				image_name: "test_p",
				created_at: "2022-07-28T15:57:28.000000Z",
				updated_at: "2022-07-28T15:57:28.000000Z",
			},
			{
				id: 2,
				property_id: "1",
				image_name: "test_p",
				created_at: "2022-07-28T15:57:28.000000Z",
				updated_at: "2022-07-28T15:57:28.000000Z",
			},
			{
				id: 3,
				property_id: "1",
				image_name: "test_p",
				created_at: "2022-07-28T15:57:28.000000Z",
				updated_at: "2022-07-28T15:57:28.000000Z",
			},
		],
		Features: [
			{
				id: 1,
				property_id: "2",
				feature_id: "1",
				created_at: "2022-07-28T15:52:51.000000Z",
				updated_at: "2022-07-28T15:52:51.000000Z",
				title: "Additional Side",
			},
		],
	};

	const handleSubmit = async () => {
		const res = await addProperty({
			property: property,
			token: token,
		});
	};

	return (
		<div className={`${classes.addProperty} section`}>
			<SectionTitle
				section="Properties"
				subject="Add New Property"
				button={true}
			/>
			<div className={classes.container}>
				<div className={classes.left}>
					<InformationCard />
					<ImagesCard />
					<PopularCategory />
					<PriceCard />
					<NotesCard />
				</div>
				<div className={classes.right}>
					<PropertyCard />
					<FeatureCard />
					<LabelCard />
					<PropertyDetails />
					<SelectProvider />
				</div>
			</div>
			<div className="saveBtnContainer">
				<button className="saveBtn" onClick={handleSubmit}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddProperty;
