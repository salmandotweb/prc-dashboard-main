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
					to="/admin"
					className={
						pathname === "/admin"
							? `${classes.sidebar_item} ${classes.active}`
							: classes.sidebar_item
					}>
					<MdDashboardCustomize className={classes.icon} />
					<p onClick={handleShowSidebar}>Dashboard</p>
				</Link>
				<Link
					to="/admin/properties"
					onClick={handleShow}
					className={
						pathname === "/admin/properties" ||
						pathname === "/admin/properties/add"
							? `${classes.sidebar_item} ${classes.active}`
							: classes.sidebar_item
					}>
					<GoHome className={classes.icon} />
					<p onClick={handleShowSidebar}>Properties</p>
				</Link>
				{pathname === "/admin/properties" ||
				pathname === "/admin/properties/add" ? (
					<div className={classes.propertiesOptions}>
						<Link
							to="/admin/properties"
							className={
								pathname === "/admin/properties"
									? `${classes.subActive} ${classes.propertiesLinks}`
									: `${classes.propertiesLinks}`
							}>
							<p onClick={handleShowSidebar}>All Properties</p>
						</Link>
						<Link
							to="/admin/properties/add"
							className={
								pathname === "/admin/properties/add"
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
					to="/admin/rooms"
					onClick={handleShow}
					className={
						pathname === "/admin/rooms" || pathname === "/admin/rooms/add"
							? `${classes.sidebar_item} ${classes.active}`
							: classes.sidebar_item
					}>
					<RiHotelBedFill className={classes.icon} />
					<p onClick={handleShowSidebar}>Rooms</p>
				</Link>
				{pathname === "/admin/rooms" || pathname === "/admin/rooms/add" ? (
					<div className={classes.propertiesOptions}>
						<Link
							to="/admin/rooms"
							className={
								pathname === "/admin/rooms"
									? `${classes.subActive} ${classes.propertiesLinks}`
									: `${classes.propertiesLinks}`
							}>
							<p onClick={handleShowSidebar}>All Rooms</p>
						</Link>
						<Link
							to="/admin/rooms/add"
							className={
								pathname === "/admin/rooms/add"
									? `${classes.subActive} ${classes.propertiesLinks}`
									: `${classes.propertiesLinks}`
							}>
							<p onClick={handleShowSidebar}>Add new Room</p>
						</Link>
					</div>
				) : (
					""
				)}
				<Link
					to="/admin/providers"
					onClick={handleShow}
					className={
						pathname === "/admin/providers" ||
						pathname === "/admin/providers/add"
							? `${classes.sidebar_item} ${classes.active}`
							: classes.sidebar_item
					}>
					<HiOutlineUsers className={classes.icon} />
					<p onClick={handleShowSidebar}>Providers</p>
				</Link>
				{pathname === "/admin/providers" ||
				pathname === "/admin/providers/add" ? (
					<div className={classes.propertiesOptions}>
						<Link
							to="/admin/providers"
							className={
								pathname === "/admin/providers"
									? `${classes.subActive} ${classes.propertiesLinks}`
									: `${classes.propertiesLinks}`
							}>
							<p onClick={handleShowSidebar}>All Providers</p>
						</Link>
						<Link
							to="/admin/providers/add"
							className={
								pathname === "/admin/providers/add"
									? `${classes.subActive} ${classes.propertiesLinks}`
									: `${classes.propertiesLinks}`
							}>
							<p onClick={handleShowSidebar}>Add new Provider</p>
						</Link>
					</div>
				) : (
					""
				)}
				<Link
					to="/admin/agent"
					className={
						pathname === "/admin/agent" || pathname === "/admin/agent/add"
							? `${classes.sidebar_item} ${classes.active}`
							: classes.sidebar_item
					}>
					<AiOutlineUser className={classes.icon} />
					<p onClick={handleShowSidebar}>Agent</p>
				</Link>
				{pathname === "/admin/agent" || pathname === "/admin/agent/add" ? (
					<div className={classes.propertiesOptions}>
						<Link
							to="/admin/agent"
							className={
								pathname === "/admin/agent"
									? `${classes.subActive} ${classes.propertiesLinks}`
									: `${classes.propertiesLinks}`
							}>
							<p onClick={handleShowSidebar}>All Agents</p>
						</Link>
						<Link
							to="/admin/agent/add"
							className={
								pathname === "/admin/agent/add"
									? `${classes.subActive} ${classes.propertiesLinks}`
									: `${classes.propertiesLinks}`
							}>
							<p onClick={handleShowSidebar}>Add new Agent</p>
						</Link>
					</div>
				) : (
					""
				)}
				<Link
					to="/admin/tenants"
					className={
						pathname === "/admin/tenants" || pathname === "/admin/tenants/add"
							? `${classes.sidebar_item} ${classes.active}`
							: classes.sidebar_item
					}>
					<FiUserMinus className={classes.icon} />
					<p onClick={handleShowSidebar}>Tenants</p>
				</Link>
				{pathname === "/admin/tenants" || pathname === "/admin/tenants/add" ? (
					<div className={classes.propertiesOptions}>
						<Link
							to="/admin/tenants"
							className={
								pathname === "/admin/tenants"
									? `${classes.subActive} ${classes.propertiesLinks}`
									: `${classes.propertiesLinks}`
							}>
							<p onClick={handleShowSidebar}>All Tenants</p>
						</Link>
						<Link
							to="/admin/tenants/add"
							className={
								pathname === "/admin/tenants/add"
									? `${classes.subActive} ${classes.propertiesLinks}`
									: `${classes.propertiesLinks}`
							}>
							<p onClick={handleShowSidebar}>Add new Tenant</p>
						</Link>
					</div>
				) : (
					""
				)}
				<Link
					to="/admin/viewings"
					className={
						pathname === "/admin/viewings" || pathname === "/admin/viewings/add"
							? `${classes.sidebar_item} ${classes.active}`
							: classes.sidebar_item
					}>
					<HiOutlineEye className={classes.icon} />
					<p onClick={handleShowSidebar}>Viewings</p>
				</Link>
				{pathname === "/admin/viewings" ||
				pathname === "/admin/viewings/add" ? (
					<div className={classes.propertiesOptions}>
						<Link
							to="/admin/viewings"
							className={
								pathname === "/admin/viewings"
									? `${classes.subActive} ${classes.propertiesLinks}`
									: `${classes.propertiesLinks}`
							}>
							<p onClick={handleShowSidebar}>All Viewings</p>
						</Link>
						<Link
							to="/admin/viewings/add"
							className={
								pathname === "/admin/viewings/add"
									? `${classes.subActive} ${classes.propertiesLinks}`
									: `${classes.propertiesLinks}`
							}>
							<p onClick={handleShowSidebar}>Add new Viewings</p>
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
