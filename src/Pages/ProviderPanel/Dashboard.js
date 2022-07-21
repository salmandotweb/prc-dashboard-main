import React from "react";
import DashboardCard from "../../Components/AdminPanel/Dashboard/DashboardCard";
import { GoHome } from "react-icons/go";
import { RiHotelBedFill } from "react-icons/ri";
import classes from "../../Styles/AdminPanel/Dashboard.module.css";

const Dashboard = () => {
	return (
		<div className={`section ${classes.dashboard}`}>
			<div className={classes.heading}>
				<div className={classes.title}>
					<h2>Dashboard</h2>
					<p>Welcome to PRC Provider</p>
				</div>
				<button className="btn">Refresh</button>
			</div>
			<div className={classes.cardsContainer}>
				<DashboardCard
					color="red"
					icon={<GoHome />}
					title="Total Properties"
					properties="properties"
					number="4562"
				/>
				<DashboardCard
					color="yellow"
					icon={<RiHotelBedFill />}
					title="Total Rooms"
					properties="rooms"
					number="4562"
				/>
				<DashboardCard
					color="green"
					icon={<GoHome />}
					title="Total Properties"
					properties="properties"
					number="4562"
				/>
				<DashboardCard
					color="blue"
					icon={<RiHotelBedFill />}
					title="Total Rooms"
					properties="rooms"
					number="4562"
				/>
			</div>
		</div>
	);
};

export default Dashboard;
