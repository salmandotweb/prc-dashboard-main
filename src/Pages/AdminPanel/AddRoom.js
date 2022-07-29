import React from "react";
import FeatureCard from "../../Components/AdminPanel/Rooms/FeatureCard";
import ImagesCard from "../../Components/AdminPanel/Rooms/ImagesCard";
import InformationCard from "../../Components/AdminPanel/Rooms/InformationCard";
import LabelCard from "../../Components/AdminPanel/Rooms/LabelCard";
import NotesCard from "../../Components/AdminPanel/Rooms/NotesCard";
import PopularCategory from "../../Components/AdminPanel/Rooms/PopularCategory";
import PriceCard from "../../Components/AdminPanel/Rooms/PriceCard";
import PropertyCard from "../../Components/AdminPanel/Rooms/PropertyCard";
import PropertyDetails from "../../Components/AdminPanel/Rooms/PropertyDetails";
import SelectProvider from "../../Components/AdminPanel/Rooms/SelectProvider";
import SectionTitle from "../../Components/SectionTitle";
import classes from "../../Styles/AdminPanel/AddProperty.module.css";

const AddRoom = () => {
	return (
		<div className={`${classes.addProperty} section`}>
			<SectionTitle section="Rooms" subject="Add New Room" button={true} />
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

export default AddRoom;
