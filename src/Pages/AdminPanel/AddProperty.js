import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";

const AddProperty = () => {
	const [error, setError] = useState("");
	const token = getToken();
	const [addProperty] = useAddPropertyMutation();

	const navigate = useNavigate();

	const title = useSelector((state) => state.addProperty.title);
	const description = useSelector((state) => state.addProperty.description);
	const street = useSelector((state) => state.addProperty.street);
	const city = useSelector((state) => state.addProperty.city);
	const postal_code = useSelector((state) => state.addProperty.postal_code);
	const Popular_category = useSelector(
		(state) => state.addProperty.Popular_category
	);
	const Property_size = useSelector((state) => state.addProperty.Property_size);
	const bedrooms = useSelector((state) => state.addProperty.bedrooms);
	const bathrooms = useSelector((state) => state.addProperty.bathrooms);
	const room = useSelector((state) => state.addProperty.room);
	const garage = useSelector((state) => state.addProperty.garage);
	const year_built = useSelector((state) => state.addProperty.year_built);
	const property_type = useSelector((state) => state.addProperty.property_type);
	const price = useSelector((state) => state.addProperty.price);
	const price_prefix = useSelector((state) => state.addProperty.price_prefix);
	const secod_price = useSelector((state) => state.addProperty.secod_price);
	const secod_price_prefix = useSelector(
		(state) => state.addProperty.secod_price_prefix
	);
	const Private_notes = useSelector((state) => state.addProperty.Private_notes);

	const label = useSelector((state) => state.addProperty.property_label);
	const providerType = useSelector((state) => state.addProperty.provider_type);

	const images = useSelector((state) => state.addProperty.images);
	const Features = useSelector((state) => state.addProperty.Features);

	const handleAddProperty = async () => {
		if (
			title === "" ||
			description === "" ||
			street === "" ||
			city === "" ||
			postal_code === ""
		) {
			setError("Please fill all the fields");
		} else {
			const data = {
				token: token,
				title: title,
				description: description,
				street: street,
				city: city,
				postal_code: postal_code,
				Popular_category: Popular_category,
				Property_size: Property_size,
				bedrooms: bedrooms,
				bathrooms: bathrooms,
				room: room,
				garage: garage,
				year_built: year_built,
				property_type: property_type,
				price: price,
				price_prefix: price_prefix,
				secod_price: secod_price,
				secod_price_prefix: secod_price_prefix,
				Private_notes: Private_notes,
				lable: label,
				provider_type: providerType,
				images: images,
				features: Features,
			};

			const res = await addProperty(data);
			console.log(res);
			if (res.data.success === 1) {
				navigate("/admin/properties");
				window.location.reload();
			}
		}
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
				{error && <div className="error">{error}</div>}
				<button className="saveBtn" onClick={handleAddProperty}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddProperty;
