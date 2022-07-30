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
import { useAddPropertyMutation } from "../../services/userAuthApi";
import { useSelector } from "react-redux";

const AddProperty = () => {
	const token = getToken();
	const [addProperty] = useAddPropertyMutation();

	const title = useSelector((state) => state.addProperty.title);
	const description = useSelector((state) => state.addProperty.description);
	const street = useSelector((state) => state.addProperty.street);
	const city = useSelector((state) => state.addProperty.city);
	const postal_code = useSelector((state) => state.addProperty.postal_code);

	const property = {
		title: title,
		description: description,
		street: street,
		city: city,
		postal_code: postal_code,
	};

	const handleSubmit = async () => {
		const res = await addProperty({
			token: token,
			property: property,
		});
		console.log(res.error);
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
