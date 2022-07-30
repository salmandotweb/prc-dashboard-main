import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { storeToken } from "../../services/LocalStorageService";
import { useLoginUserMutation } from "../../services/userAuthApi";
import classes from "../../Styles/Login/Login.module.css";

const Login = () => {
	const [error, setError] = useState({
		status: false,
		msg: "",
		type: "",
	});

	const navigate = useNavigate();
	const [loginUser] = useLoginUserMutation();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const actualData = {
			email: data.get("email"),
			password: data.get("password"),
		};
		if (actualData.email && actualData.password) {
			const res = await loginUser(actualData);
			console.log(res);
			if (res.data && res.data.success === 1) {
				// Store Token Code here
				storeToken(res.data.access_token);
				navigate("/admin");
			} else if (res.data && res.data.Unverified === 1) {
				setError({
					status: true,
					msg: "Your Email is not verified",
					type: "error",
				});
			} else if (res.data && res.data.message === "Unauthorized") {
				setError({
					status: true,
					msg: "Invalid Credentials",
					type: "error",
				});
			} else if (res.data && res.data.success === 0) {
				setError({
					status: true,
					msg: "User not Found",
					type: "error",
				});
			}
		}
	};

	return (
		<div className={classes.loginPage}>
			<form className={classes.loginCard} onSubmit={handleSubmit}>
				<h1>Login to your account</h1>
				<div className={classes.inputsContainer}>
					<input
						type="email"
						placeholder="Email"
						name="email"
						className="input"
						required
					/>
					<input
						type="password"
						placeholder="Password"
						name="password"
						className="input"
						required
					/>
					<div className={classes.rememberMe}>
						<input type="checkbox" id="rememberMe" />
						<label htmlFor="rememberMe">Remember Me</label>
					</div>
				</div>
				{error.status ? <p className={classes.error}>{error.msg}</p> : ""}
				<button type="submit" className={`btn ${classes.loginButton}`}>
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
