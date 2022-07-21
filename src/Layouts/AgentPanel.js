import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/AgentPanel/Sidebar";
import Header from "../Components/Header";

const AgentPanel = () => {
	return (
		<>
			<Header role="Agent" />
			<div className="container">
				<Sidebar />
				<Outlet />
			</div>
		</>
	);
};

export default AgentPanel;
