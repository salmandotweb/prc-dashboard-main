import React, { useState } from "react";
import { MdDashboardCustomize } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { RiHotelBedFill } from "react-icons/ri";
import { HiOutlineUsers, HiOutlineEye } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { FiUserMinus } from "react-icons/fi";
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
					to="/provider/dashboard"
					className={
						pathname === "/provider/dashboard"
							? `${classes.sidebar_item} ${classes.active}`
							: classes.sidebar_item
					}>
					<MdDashboardCustomize className={classes.icon} />
					<p onClick={handleShowSidebar}>Dashboard</p>
				</Link>
				<Link
					to="/provider/profile"
					className={
						pathname === "/provider/profile"
							? `${classes.sidebar_item} ${classes.active}`
							: classes.sidebar_item
					}>
					<MdDashboardCustomize className={classes.icon} />
					<p onClick={handleShowSidebar}>Profile</p>
				</Link>
				<Link
					to="/provider/properties"
					onClick={handleShow}
					className={
						pathname === "/provider/properties" ||
						pathname === "/provider/properties/add"
							? `${classes.sidebar_item} ${classes.active}`
							: classes.sidebar_item
					}>
					<GoHome className={classes.icon} />
					<p onClick={handleShowSidebar}>Properties</p>
				</Link>
				{pathname === "/provider/properties" ||
				pathname === "/provider/properties/add" ? (
					<div className={classes.propertiesOptions}>
						<Link
							to="/provider/properties"
							className={
								pathname === "/provider/properties"
									? `${classes.subActive} ${classes.propertiesLinks}`
									: `${classes.propertiesLinks}`
							}>
							<p onClick={handleShowSidebar}>All Properties</p>
						</Link>
						<Link
							to="/provider/properties/add"
							className={
								pathname === "/provider/properties/add"
									? `${classes.subActive} ${classes.propertiesLinks}`
									: `${classes.propertiesLinks}`
							}>
							<p onClick={handleShowSidebar}>Add new Property</p>
						</Link>
					</div>
				) : (
					""
				)}
				<Link
					to="/provider/viewings"
					className={
						pathname === "/provider/viewings"
							? `${classes.sidebar_item} ${classes.active}`
							: classes.sidebar_item
					}>
					<HiOutlineEye className={classes.icon} />
					<p onClick={handleShowSidebar}>Viewings</p>
				</Link>
			</div>
		</div>
	);
};

export default Sidebar;
