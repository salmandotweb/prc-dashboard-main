import React, { useState } from "react";
import { MdDashboardCustomize } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { HiOutlineEye } from "react-icons/hi";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import classes from "../../Styles/Sidebar.module.css";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
	const [show, setShow] = useState(false);
	const [showSidebar, setShowSidebar] = useState(false);
	const location = useLocation();
	const { pathname } = location;

	const handleShow = () => {
		setShow(!show);
	};
	const handleShowSidebar = () => {
		setShowSidebar(false);
	};
	const handleSidebar = () => {
		setShowSidebar(!showSidebar);
	};
	return (
		<div
			className={
				showSidebar
					? `${classes.sidebarWrapper} ${classes.showSidebar}`
					: classes.sidebarWrapper
			}>
			<div className={classes.showSidebarBtn} onClick={handleSidebar}>
				{showSidebar ? (
					<FiChevronLeft className={classes.showSidebarIcon} />
				) : (
					<FiChevronRight className={classes.showSidebarIcon} />
				)}
			</div>
			<div
				className={
					showSidebar
						? `${classes.sidebar} ${classes.showSidebar}`
						: classes.sidebar
				}>
				<Link
					to="/agentpanel/dashboard"
					className={
						pathname === "/agentpanel/dashboard"
							? `${classes.sidebar_item} ${classes.active}`
							: classes.sidebar_item
					}>
					<MdDashboardCustomize className={classes.icon} />
					<p onClick={handleShowSidebar}>Dashboard</p>
				</Link>
				<Link
					to="/agentpanel/profile"
					className={
						pathname === "/agentpanel/profile"
							? `${classes.sidebar_item} ${classes.active}`
							: classes.sidebar_item
					}>
					<MdDashboardCustomize className={classes.icon} />
					<p onClick={handleShowSidebar}>Profile</p>
				</Link>
				<Link
					to="/agentpanel/properties"
					onClick={handleShow}
					className={
						pathname === "/agentpanel/properties"
							? `${classes.sidebar_item} ${classes.active}`
							: classes.sidebar_item
					}>
					<GoHome className={classes.icon} />
					<p onClick={handleShowSidebar}>Properties</p>
				</Link>
				{pathname === "/agentpanel/properties" ? (
					<div className={classes.propertiesOptions}>
						<Link
							to="/agentpanel/properties"
							className={
								pathname === "/agentpanel/properties"
									? `${classes.subActive} ${classes.propertiesLinks}`
									: `${classes.propertiesLinks}`
							}>
							<p onClick={handleShowSidebar}>All Properties</p>
						</Link>
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default Sidebar;
