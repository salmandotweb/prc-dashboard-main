import React from "react";
import FeatureCard from "../../Components/ProviderPanel/Properties/FeatureCard";
import ImagesCard from "../../Components/ProviderPanel/Properties/ImagesCard";
import InformationCard from "../../Components/ProviderPanel/Properties/InformationCard";
import LabelCard from "../../Components/ProviderPanel/Properties/LabelCard";
import NotesCard from "../../Components/ProviderPanel/Properties/NotesCard";
import PopularCategory from "../../Components/ProviderPanel/Properties/PopularCategory";
import PriceCard from "../../Components/ProviderPanel/Properties/PriceCard";
import PropertyCard from "../../Components/ProviderPanel/Properties/PropertyCard";
import PropertyDetails from "../../Components/ProviderPanel/Properties/PropertyDetails";
import SectionTitle from "../../Components/SectionTitle";
import SelectProvider from "../../Components/ProviderPanel/Properties/SelectProvider";
import classes from "../../Styles/AdminPanel/AddProperty.module.css";

const AddProperty = () => {
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
				<button className="saveBtn">Save</button>
			</div>
		</div>
	);
};

export default AddProperty;
