import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, removeToken } from "../../services/LocalStorageService";
import {
	useLoggedUserDetailsQuery,
	useLogoutUserMutation,
} from "../../services/userAuthApi";
import classes from "../../Styles/Profile/Profile.module.css";
import SectionTitle from "../SectionTitle";

const Profile = () => {
	const [userData, setUserData] = useState({
		name: "",
		email: "",
		role: "",
		status: "",
	});

	const token = getToken();

	// get user details
	const { data, isSuccess, isFetching } = useLoggedUserDetailsQuery(token);
	console.log(data);

	// storing user details
	useEffect(() => {
		if (data && isSuccess) {
			setUserData({
				name: data.user.name,
				email: data.user.email,
				role: data.user.role,
				status: data.user.status,
			});
		}
	}, [data, isSuccess, isFetching]);

	// if you only need to capitalize first letter
	const capitalizeFirst = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	const [logoutUser] = useLogoutUserMutation();

	const navigate = useNavigate();

	// logout user
	const handleLogout = async () => {
		const res = await logoutUser({ token });
		if (res.data && res.data.success === 1) {
			removeToken("token");
			navigate("/");
		}
	};

	return (
		<div className={`section ${classes.userProfile}`}>
			<SectionTitle section={userData.role} subject="My Profile" />
			<div className={classes.profileContainer}>
				<div className={classes.userDetails}>
					Name : <p>{capitalizeFirst(userData.name)}</p>
				</div>
				<div className={classes.userDetails}>
					Email : <p>{capitalizeFirst(userData.email)}</p>
				</div>
				<div className={classes.userDetails}>
					Role : <p>{capitalizeFirst(userData.role)}</p>
				</div>
				<div className={classes.userDetails}>
					Status : <p>{capitalizeFirst(userData.status)}</p>
				</div>
			</div>

			<div className={classes.logoutBtn}>
				<button className="btn" onClick={handleLogout}>
					Logout
				</button>
			</div>
		</div>
	);
};

export default Profile;
