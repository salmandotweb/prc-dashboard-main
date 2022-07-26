import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getToken, removeToken } from "../services/LocalStorageService";
import {
	useLogoutUserMutation,
	useLoggedUserDetailsQuery,
} from "../services/userAuthApi";
import classes from "../Styles/Header.module.css";
import Loading from "./Loading/Loading";

const Header = ({ role }) => {
	const [show, setShow] = useState(false);
	const [userData, setUserData] = useState({
		name: "",
		email: "",
		role: "",
	});

	const navigate = useNavigate();

	const token = getToken();

	// get user details
	const { data, isSuccess, isFetching } = useLoggedUserDetailsQuery(token);

	const [logoutUser] = useLogoutUserMutation();

	// logout user
	const handleLogout = async () => {
		const res = await logoutUser({ token });
		if (res.data && res.data.success === 1) {
			removeToken("token");
			navigate("/");
		}
	};

	// 👇️ if you only need to capitalize first letter
	const capitalizeFirst = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	// storing user details
	useEffect(() => {
		if (data && isSuccess) {
			setUserData({
				name: data.user.name,
				email: data.user.email,
				role: data.user.role,
			});
		}
	}, [data, isSuccess, isFetching]);
	return (
		<div className={classes.header}>
			<Link to="/" className={classes.logo}>
				<h1>
					<span className={classes.bold}>PRC</span>
					<span className={classes.light}>APP</span>
				</h1>
				<p>Property Rooms Consultancy</p>
			</Link>

			<div className={classes.admin}>
				<div
					className={
						show
							? `${classes.adminDetails} ${classes.show}`
							: classes.adminDetails
					}>
					{isFetching ? (
						<Loading />
					) : (
						<>
							<h3>{capitalizeFirst(userData.name)}</h3>
							<h5>{userData.role}</h5>
						</>
					)}
				</div>
				<Link to={`/${role}/myprofile`}>
					<div className={classes.adminImage}>
						<img src="/assets/userImage.jpg" alt="username" />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Header;
