import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getToken, removeToken } from "../services/LocalStorageService";
import { useLogoutUserMutation } from "../services/userAuthApi";
import classes from "../Styles/Header.module.css";

const Header = ({ role }) => {
	const [show, setShow] = useState(false);
	const [showPanel, setShowPanel] = useState(false);
	const location = useLocation();
	const { pathname } = location;
	const navigate = useNavigate();
	const token = getToken();
	const [logoutUser] = useLogoutUserMutation();
	const handleShow = () => {
		setShow(!show);
	};
	const handleLogout = async () => {
		const res = await logoutUser({ token });
		if (res.data && res.data.success === 1) {
			removeToken("token");
			navigate("/");
		}
	};
	return (
		<div className={classes.header}>
			<Link to="/" className={classes.logo}>
				<h1>
					<span className={classes.bold}>PRC</span>
					<span className={classes.light}>APP</span>
				</h1>
				<p>Property Rooms Consultancy</p>
			</Link>
			{/* <div className={classes.switchPanel}>
				<p onClick={() => setShowPanel(!showPanel)}>Switch Panel</p>
				{showPanel && (
					<>
						<div className={classes.panelLinks}>
							<Link to="/" className={classes.panelLink}>
								Admin Panel
							</Link>
							<Link className={classes.panelLink} to="/provider/dashboard">
								Provider Panel
							</Link>
							<Link to="/agentpanel/dashboard" className={classes.panelLink}>
								Agent Panel
							</Link>
						</div>
					</>
				)}
			</div> */}

			<div className={classes.switchPanel}>
				<p onClick={handleLogout}>Logout</p>
			</div>

			<div className={classes.admin}>
				<div
					className={
						show
							? `${classes.adminDetails} ${classes.show}`
							: classes.adminDetails
					}>
					<h3>John Smith</h3>
					<h5>{role}</h5>
				</div>
				<div className={classes.adminImage} onClick={handleShow}>
					<img src="/assets/userImage.jpg" alt="username" />
				</div>
			</div>
		</div>
	);
};

export default Header;
