import React from "react";
import DashboardCard from "../../Components/AgentPanel/Dashboard/DashboardCard";
import classes from "../../Styles/AgentPanel/Dashboard.module.css";

const Dashboard = () => {
	return (
		<div className={`section ${classes.agentDashboard}`}>
			<div className={classes.heading}>
				<div className={classes.title}>
					<h2>Dashboard</h2>
					<p>Welcome to PRC Agent</p>
				</div>
			</div>
			<DashboardCard />
		</div>
	);
};

export default Dashboard;
