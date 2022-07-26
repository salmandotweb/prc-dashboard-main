import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/ProviderPanel/Sidebar";

const ProviderPanel = () => {
	return (
		<>
			<Header role="provider" />
			<div className="container">
				<Sidebar />
				<Outlet />
			</div>
		</>
	);
};

export default ProviderPanel;
