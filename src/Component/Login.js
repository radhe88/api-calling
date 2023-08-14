import React, { useState } from "react";
import logo from "../img/Group.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onSignInSuccess } from "../store/auth/sessionSlice";

const Login = () => {
	// State variables to store login credentials and error messages
	const dispatch = useDispatch();
	const store = useSelector((store) => store?.auth?.session);
	console.log(store);
	const [credentials, setCredentials] = useState({
		username: "admin",
		password: "admin#23",
	});
	const [error, setError] = useState("");
	const [show, setShow] = useState(false);
	const navigate = useNavigate();

	// Function to handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (credentials.username === "" || credentials.password === "") {
			setError("Please enter both username and password.");
			return;
		} else {
			setError("");
		}
		try {
			const response = await axios.post("/login", credentials);
			if (response?.status === 200) {
				dispatch(onSignInSuccess(response.data?.data?.token?.trim()));
				navigate("/");
			} else alert(response?.data?.message);
			// .then((res) => {
			// 	if (res.status === 200) {
			// 		// alert(res.data.message)
			// 		console.log(res.data.message);
			// 		localStorage.setItem("token", res.data.data.token);
			// 		// window.location = '/Header'
			// 		navigate("/header");
			// 	} else {
			// 		alert(res.data.message);
			// 	}
			// });
		} catch (error) {
			setError("An error occurred. Please try again later.");
		}
	};

	// Function to handle input changes
	const handleChange = (e) => {
		const { name, value } = e.target;
		setCredentials((prevCredentials) => ({
			...prevCredentials,
			[name]: value,
		}));
	};

	const handleShow = () => {
		setShow(!show);
	};

	return (
		<>
			<header className="header_topper">
				<div className="header_container">
					<span className="footer_line">
						<img src={logo} alt="#" />
					</span>
				</div>
			</header>

			<section className="main_section">
				<div className="login_container">
					<form
						action=""
						className="ant-form ant-form-horizontal commen_ login_box"
						onSubmit={handleSubmit}
					>
						<h4 className="login_heading">
							Order Management System
						</h4>
						<div className="login_content">
							<h4>Log In</h4>
							<div className="ant-form-item input_box commen_ ant-form-item-has-success">
								<div className="ant-form-item-control-input">
									<div className="ant-form-item-control-input-content">
										<input
											type="text"
											name="username"
											placeholder="User ID"
											id="username"
											aria-required="true"
											className="ant-input ant-input-status-success commen_ input_txt"
											value={credentials.username}
											onChange={handleChange}
										/>
									</div>
								</div>
								<div className="ant-form-item-control-input">
									<div className="ant-form-item-control-input-content">
										<input
											name="password"
											placeholder="Password"
											id="password"
											aria-required="true"
											className="ant-input ant-input-status-success commen_ input_txt"
											value={credentials.password}
											onChange={handleChange}
											type={show ? "text" : "password"}
										/>
										<span className="ant-input-suffix">
											<span
												onClick={handleShow}
												className="ant-input-password-icon"
											>
												{show ? "Hide" : "Show"}
											</span>
										</span>
									</div>
								</div>
							</div>
							{error && <p className="error_message">{error}</p>}
						</div>
						<div className="btn_grp">
							<button
								type="button"
								className="ant-btn commen_ ant-btn-default btn_custom clear_btn"
							>
								Clear
							</button>

							<button
								type="submit"
								className="ant-btn commen_ ant-btn-default btn_custom submit_btn"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default Login;
