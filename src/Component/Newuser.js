import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
// import { BsChevronDown } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { getFromDetails } from "../API/commonAPI";

const Newuser = ({ canclemodel, saveData }) => {
	const session = useSelector((store) => store?.auth?.session);
	const [formErrors, setFormErrors] = useState({});
	const [toggle, setToggle] = useState(false);
	// const [tableList, setTableList] = useState([]);
	const [seatList, setSeatList] = useState([]);


	const [message, setMessage] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const formData = useSelector((state) => state.auth.session);
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
			errors.type = "Please select a type!";
		}
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
	//submit function
	const addMemberDetails = async (e) => {
		e.preventDefault();
		if (!validateForm()) {
			alert("Fill Required Fields");
		} else {
			let payload = {
				"first_name": inputField.fname,
				"last_name": inputField.lname,
				"type": inputField.type,
				"course": inputField.course,
				"entree": inputField.entree,
				"allergy": [],
				"table_no": inputField.table,
				"seat_no": inputField.seat,
				"other": ""
			}
			const res = await axios.post("/order/add", payload, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: session?.token,
				}
			})
				.then((response) => {
					alert(response.data.message);
					canclemodel(false);
				})
				.catch((error) => {
					alert(error.response.data.message)
				})
			//setMessage(responce.data);

		}
	};

	const getTableDetails = async (tableNo) => {
		const res = await axios.get(`/order/getTableWiseSeat/${tableNo}`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: session?.token,
			}

		})
			.then((response) => {
				setSeatList(response.data.data)
			})
			.catch((error) => {
				alert(error.response.data.message)
			})
	}
	useEffect(() => {
		dispatch(getFromDetails())
		setSeatList(formData.seat)
	}, [toggle])
	useEffect(() => {
	}, [])
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
								//onSubmit={handelsubmit}
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
														onChange={(e) => { inputsHandler(e); getTableDetails(e.target.value); }}
														id="select_table"
														name="table"
													>
														<option value="">--Select--</option>
														{formData.table.map((row, index) => (
															<option value={row.table_no} key={index}>
																{row.table_no}
															</option>
														))}
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
														<option value="">--Select--</option>
														{seatList.map((row, index) => (
															<option value={row.seat_no} key={index} disabled={row.is_assign === "true"}>
																{row.seat_no}
															</option>
														))}
													</select>
												</div>
											</div>
											<div className="ant-form-item custom-input commen_ ant-form-item-with-help ant-form-item-has-error">
												<div className="ant-form-item-control-input-content">
													<input
														name="type"
														type="text"
														className="ant-input ant-input-status-error position_added yellow-outline width_input"
													/>
													<select
														value={inputField?.type}
														onChange={inputsHandler}
														id="select_table"
														name="type"
													>
														<option value="">--Select--</option>
														{formData.type.map((row, index) => (
															<option value={row.type} key={index}>
																{row.type}
															</option>
														))}
													</select>
													{formErrors.type && <span className="error">{formErrors.type}</span>}
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
														<option value="">--Select--</option>
														{formData.course.map((row, index) => (
															<option value={row._id} key={row.key}>
																{row.course_name}
															</option>
														))}
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
														<option value="">--Select--</option>
														{formData.entree.map((row, index) => (
															<option value={row._id} key={row.key}>
																{row.entree_name}
															</option>
														))}
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
													{/* {formData.allergy.map((row, index) => (
														<option value={row._id} key={row.key}>
															{row.allergy_name}
														</option>
													))} */}
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
