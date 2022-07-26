import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/AdminPanel/Sidebar";
import Header from "../Components/Header";

const AdminPanel = () => {
	return (
		<>
			<Header role="admin" />
			<div className="container">
				<Sidebar />
				<Outlet />
			</div>
		</>
	);
};

export default AdminPanel;
