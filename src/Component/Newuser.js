import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
// import { BsChevronDown } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

import axios from "axios";

const Newuser = ({ canclemodel, saveData }) => {
	const [formErrors, setFormErrors] = useState({});
	const [message, setMessage] = useState("");
	const navigate = useNavigate();

	const [inputField, setInputField] = useState({
		fname: "",
		lname: "",
		type: "",
		seat: "",
		kids: "",
		course: "",
		entree: "",
		table: "",
	});

	const validateForm = () => {
		let errors = {};
		// Validate First name
		if (inputField.fname.trim() === "") {
			errors.fname = "Please input first name!";
		}
		if (inputField.lname.trim() === "") {
			errors.lname = "please input Last name!";
		}
		if (inputField.type.trim() === "") {
			errors.kids = "Please select a type!";
		}
		console.log(inputField);
		setFormErrors(errors);
		return Object.keys(errors).length === 0;
	};
	// console.log(inputField);

	const inputsHandler = (e) => {
		e.preventDefault();

		//name : proparty....
		if (e.target.name) {
			setInputField((prevState) => ({
				...prevState,
				[e.target.name]: e.target.value,
			}));
		} else {
			//
		}
	};
	const addMemberDetails = async (e) => {
		e.preventDefault();
		if (validateForm()) {
			canclemodel(false);

			saveData(inputField);
		}
	};

	const onSubmit = async (data) => {
		console.log(data);
		const res = await axios.post("​/order​/add", data).then((responce) => {
			setMessage(responce.data);
			console.log(responce.data);
		});

		if (message) {
			setMessage(res.data);
			setTimeout(() => {
				navigate("/");
			}, 2000);
		} else {
			setMessage("Some Error Occured!");
		}
	};

	return (
		<>
			<div className="ant-modal-root commen_">
				<div className="ant-modal-mask"></div>
				<div className="ant-modal-wrap ant-modal-centered">
					<div className="ant-modal-content">
						<button
							onClick={() => canclemodel()}
							className="ant-modal-close"
							type="button"
							aria-label="close"
						>
							<span className="ant-modal-close-x">
								<AiOutlineClose />
							</span>
						</button>
						<div className="ant-modal-body">
							<form
								onSubmit={onSubmit}
								action=""
								className="ant-form ant-form-horizontal commen_ filter-wrapper add-order-pop"
							>
								<h4 className="filter-wrapper_title">
									Add New Guest
								</h4>
								<div>
									<div className="input_detail">
										<div className="input_colum">
											<label
												htmlFor="#"
												className="label_txt"
											>
												Guest First Name
											</label>
											<label
												htmlFor="#"
												className="label_txt"
											>
												Guest Last Name
											</label>
											<label
												htmlFor="#"
												className="label_txt"
											>
												Table
											</label>
											<label
												htmlFor="#"
												className="label_txt"
											>
												Seat
											</label>
											<label
												htmlFor="#"
												className="label_txt"
											>
												Adult Type
											</label>
											<label
												htmlFor="#"
												className="label_txt"
											>
												1st Course
											</label>
											<label
												htmlFor="#"
												className="label_txt"
											>
												Entree
											</label>
											<label
												htmlFor="#"
												className="label_txt"
											>
												Allergy
											</label>
											<label
												htmlFor="#"
												className="label_txt"
											>
												Other
											</label>
										</div>
										<div className="input_colum">
											<div className="ant-form-item custom-input commen_ ant-form-item-with-help ant-form-item-has-error">
												<div className="ant-form-item-control-input-content">
													<input
														value={
															inputField?.fname
														}
														onChange={inputsHandler}
														id="firstname"
														name="fname"
														type="text"
														className="ant-input ant-input-status-error commen_ yellow-outline"
													/>
													{formErrors.fname && (
														<span className="error">
															{formErrors.fname}
														</span>
													)}
												</div>
											</div>
											<div className="ant-form-item custom-input commen_ ant-form-item-with-help ant-form-item-has-error">
												<div className="ant-form-item-control-input-content">
													<input
														value={
															inputField?.lname
														}
														onChange={inputsHandler}
														name="lname"
														type="text"
														className="ant-input ant-input-status-error commen_ yellow-outline"
													/>
													{formErrors.lname && (
														<span className="error">
															{formErrors.lname}
														</span>
													)}
												</div>
											</div>
											<div className="ant-form-item custom-input commen_ ant-form-item-with-help ant-form-item-has-error">
												<div className="ant-form-item-control-input-content">
													<input
														type="text"
														name="table"
														className="ant-input ant-input-status-error position_added  width_input"
													/>
													<select
														value={
															inputField?.table
														}
														onChange={inputsHandler}
														id="select_table"
														name="table"
													>
														<option>1</option>
														<option>2</option>
														<option>3</option>
														<option>4</option>
														<option>5</option>
														<option>6</option>
														<option>7</option>
														<option>8</option>
														<option>9</option>
														<option>10</option>
													</select>
												</div>
											</div>
											<div className="ant-form-item custom-input commen_ ant-form-item-with-help ant-form-item-has-error">
												<div className="ant-form-item-control-input-content">
													<input
														type="text"
														className="ant-input ant-input-status-error position_added width_input "
													/>
													<select
														value={inputField?.seat}
														onChange={inputsHandler}
														id="select_table"
														name="seat"
													>
														<option>1</option>
														<option>2</option>
														<option>3</option>
														<option>4</option>
														<option>5</option>
														<option>6</option>
														<option>7</option>
														<option>8</option>
														<option>9</option>
														<option>10</option>
														<option>11</option>
													</select>
												</div>
											</div>
											<div className="ant-form-item custom-input commen_ ant-form-item-with-help ant-form-item-has-error">
												<div className="ant-form-item-control-input-content">
													<input
														name="kids"
														type="text"
														className="ant-input ant-input-status-error position_added yellow-outline width_input"
													/>
													<select
														value={inputField?.kids}
														onChange={inputsHandler}
														id="select_table"
														name="kids"
													>
														<option>Adult</option>
														<option>Kid</option>
													</select>
													{/* {formErrors.kids && <span className="error">{formErrors.kids}</span>} */}
												</div>
											</div>
											<div className="ant-form-item custom-input commen_ ant-form-item-with-help ant-form-item-has-error">
												<div className="ant-form-item-control-input-content">
													<input
														type="text"
														className="ant-input ant-input-status-error position_added  width_input"
													/>
													<select
														value={
															inputField?.course
														}
														onChange={inputsHandler}
														id="select_table"
														name="course"
													>
														<option>Salad</option>
														<option>
															Lobster Bisque
														</option>
														<option>
															Kosher 1st Course
														</option>
														<option>
															Teen Buffet 1st
															Course
														</option>
													</select>
												</div>
											</div>
											<div className="ant-form-item custom-input commen_ ant-form-item-with-help ant-form-item-has-error">
												<div className="ant-form-item-control-input-content">
													<input
														type="text"
														className="ant-input ant-input-status-error position_added  width_input"
													/>
													<select
														value={
															inputField?.entree
														}
														onChange={inputsHandler}
														id="select_table"
														name="entree"
													>
														<option>
															Sea Bass
														</option>
														<option>
															Filet of Beef
														</option>
														<option>
															Maitake Steak
														</option>
														<option>
															Kosher Entree
														</option>
														<option>
															Teen Buffet Entree
														</option>
													</select>
												</div>
											</div>
											<div className="ant-form-item custom-input commen_ ant-form-item-with-help ant-form-item-has-error">
												<div className="ant-form-item-control-input-content">
													<input
														value={
															inputField?.allergy
														}
														onChange={inputsHandler}
														type="text"
														className="ant-input ant-input-status-error commen_ allergy_width "
													/>
												</div>
											</div>
											<div className="ant-form-item custom-input commen_ ant-form-item-with-help ant-form-item-has-error">
												<div className="ant-form-item-control-input-content">
													<textarea
														type="text"
														className="ant-input ant-input-status-error  allergy_width "
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="btn_grp">
										<button
											type="button"
											className="ant-btn commen_ ant-btn-default btn_custom clear_btn button_right"
										>
											Clear
										</button>
										<button
											onClick={addMemberDetails}
											type="button"
											className="ant-btn commen_ ant-btn-default btn_custom submit_btn "
										>
											Submit
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Newuser;
