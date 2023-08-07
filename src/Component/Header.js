import React, { useEffect, useState } from "react";
import logo from "../img/Group.png";
import { BsSearch } from "react-icons/bs";
import { AiFillFilter, AiFillPlusSquare } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";
import {
	HiOutlineChevronDoubleLeft,
	HiOutlineChevronDoubleRight,
} from "react-icons/hi";

import { MdFilterAltOff } from "react-icons/md";
import { LuEdit } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import axios from "axios";
import Newuser from "./Newuser";
import Delete from "./Delete";
import Filter from "./Filter";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onSignOutSuccess } from "../store/auth/sessionSlice";

// import { Link } from 'react-router-dom';

const Header = () => {
	const session = useSelector((store) => store?.auth?.session);
	const dispatch = useDispatch();
	const [searchKeyword, setSearchKeyword] = useState("");
	const [data, setData] = useState([]);
	const [pageNo, setPageNo] = useState(1);
	const [search, setSearch] = useState("");
	const [loading, setLoading] = useState(false);
	const [totalPage, setTotalPage] = useState(0);
	const [modelvisible, setmodelvisible] = useState(false);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [isFilterModel, setIsFilterModel] = useState(false);
	const navigate = useNavigate();

	const showmodel = () => {
		setmodelvisible(true);
	};
	const canclemodel = () => {
		setmodelvisible(false);
	};
	const closemodel = () => {
		setIsModalVisible(false);
	};
	const shoeEditmodel = () => {
		setmodelvisible(true);
	};
	const filterModel = () => {
		setIsFilterModel(true);
	};
	const closeFilterModel = () => {
		setIsFilterModel(false);
	};
	const showEditModal = () => {
		setIsModalVisible(true);
	};

	const getData = async () => {
		setLoading(true);
		try {
			// let token = localStorage.getItem("token")
			const headers = {
				"accept ": "application/json",
				Authorization: session?.token,
			};
			let data = {
				limit: 10,
				page: pageNo,
				search: search,
			};
			const response = await axios
				.post("/order/get", data, { headers })
				.then((res) => {
					setData(res.data.data.results);
					setTotalPage(res.data.data.totalPages);
					// console.log(res.data);
					// console.log(res.data.data.results);
				})
				.catch(function (error) {
					// handle error
					console.log(error);
				});
		} catch (error) {
			console.log(error);
			alert("Internal Server Error !");
		}
		setLoading(false);
	};
	const handleSearch = () => {
		setSearch(searchKeyword);
		setPageNo(1);
	};

	useEffect(() => {
		getData();
	}, [pageNo, search]);
	const handleLogout = () => {
		dispatch(onSignOutSuccess());
		navigate("/sign-in");
		// localStorage.removeItem("token");
		// // window.location = '/';
		// navigate("/");
		// console.log(handleLogout);
	};

	return (
		<>
			<header className="header_topper">
				<div className="header_container">
					<span className="footer_line">
						<img src={logo} alt="#" />
					</span>
					<div className="fixedPosition">
						<a href="/kitchen" className="kitchen_link page_link">
							Switch to Kitchen
						</a>
						<h3 onClick={handleLogout} className="header_logOut">
							Logout
						</h3>
					</div>
				</div>
			</header>
			<div>
				<form
					action=""
					className="ant-form ant-form-horizontal commen_  main_section"
				>
					<div className="guest_container">
						<h4 className="main_heading">
							Order Management System
						</h4>
						<div className="search_blog">
							<div className="ant-form-item search_box commen_">
								<div className="ant-row ant-form-item-row commen_">
									<span className="ant-input-affix-wrapper search_input commen_">
										<span className="ant-input-prefix">
											<BsSearch />
											<div className="flexPosition">
												<input
													type="text"
													name="search"
													placeholder="Search by keyword "
													id="search"
													className="ant-input "
													value={searchKeyword}
													onChange={(e) =>
														setSearchKeyword(
															e.target.value
														)
													}
												/>
												<button
													type="button"
													className="cancelButton"
												>
													<IoIosCloseCircle
														className="cancleButtonColor"
														onClick={(_) => {
															setSearch("");
															setPageNo(1);
														}}
													/>
												</button>
											</div>
										</span>
									</span>
								</div>
							</div>
							<div className="fliter_btn_group">
								<button
									onClick={handleSearch}
									type="button"
									className="ant-btn commen_ ant-btn-primary go_btn round_btn"
								>
									<span>GO</span>
								</button>
								<button
									onClick={filterModel}
									type="button"
									className="ant-btn commen_ ant-btn-default filter_btn round_btn"
								>
									<AiFillFilter />
								</button>
								<button
									type="button"
									className="ant-btn commen_ ant-btn-default non_filter_btn round_btn"
								>
									<MdFilterAltOff />
								</button>
								<button
									onClick={showmodel}
									type="button"
									className="ant-btn  ant-btn-default add_btn"
								>
									<AiFillPlusSquare />
									<span>add</span>
								</button>
							</div>
						</div>
					</div>
				</form>
				<section className="tbl_section">
					<div className="tbl_container">
						<div className="ant-table-wrapper conc-table commen_">
							<div className="ant-spin-nested-loading commen_">
								<div className="ant-spin-container">
									<div className="ant-table">
										<div className="ant-table-container">
											<div className="ant-table-content">
												{!loading ? (
													<table>
														<thead className="ant-table-thead">
															<tr>
																<th
																	className="ant-table-cell"
																	scope="col"
																>
																	Table
																</th>
																<th
																	className="ant-table-cell"
																	scope="col"
																>
																	Seat
																</th>
																<th
																	className="ant-table-cell"
																	scope="col"
																>
																	First Name
																</th>
																<th
																	className="ant-table-cell"
																	scope="col"
																>
																	Last Name
																</th>
																<th
																	className="ant-table-cell"
																	scope="col"
																>
																	Type
																</th>
																<th
																	className="ant-table-cell"
																	scope="col"
																>
																	1st course
																</th>
																<th
																	className="ant-table-cell"
																	scope="col"
																>
																	Entree
																</th>
																<th
																	className="ant-table-cell"
																	scope="col"
																>
																	Allergy
																</th>
																<th
																	className="ant-table-cell action"
																	scope="col"
																>
																	<span></span>
																</th>
															</tr>
														</thead>
														<tbody className="ant-table-tbody">
															{data.length ===
															0 ? (
																<tr>
																	<td
																		className="noData"
																		colSpan={
																			9
																		}
																	>
																		<div className="no_data_wrapper">
																			<h1>
																				Oops!
																				No
																				results
																				found.
																			</h1>
																			<p>
																				Clear
																				the
																				filter
																				to
																				try
																				again
																			</p>
																		</div>
																	</td>
																</tr>
															) : (
																data?.map(
																	(
																		client,
																		index
																	) => {
																		return (
																			<tr
																				key={
																					index
																				}
																				className="ant-table-row ant-table-row-level-0"
																			>
																				<td className="ant-table-cell">
																					{
																						client.table_no
																					}
																				</td>
																				<td className="ant-table-cell">
																					{
																						client.seat_no
																					}
																				</td>
																				<td className="ant-table-cell">
																					{
																						client.first_name
																					}
																				</td>
																				<td className="ant-table-cell">
																					{
																						client.last_name
																					}
																				</td>
																				<td className="ant-table-cell">
																					{
																						client.type
																					}
																				</td>
																				<td className="ant-table-cell">
																					{}
																				</td>
																				<td className="ant-table-cell">
																					qw
																				</td>
																				<td className="ant-table-cell">
																					<span className="ellergy_nam">
																						{client.allergy?.map(
																							(
																								item
																							) =>
																								`${item?.allergy_name}, `
																						)}
																					</span>
																					{client.other && (
																						<span className="allergy-other">
																							<ul>
																								<b>
																									Other:
																								</b>
																							</ul>
																							{
																								client.other
																							}
																						</span>
																					)}
																				</td>
																				<td className="ant-table-cell action">
																					<div className="d-flex-justify">
																						<LuEdit
																							onClick={
																								shoeEditmodel
																							}
																						/>
																						<RiDeleteBinLine
																							onClick={
																								showEditModal
																							}
																							className="deleteBtn"
																						/>
																					</div>
																				</td>
																			</tr>
																		);
																	}
																)
															)}
														</tbody>
													</table>
												) : (
													<div>Loading ...</div>
												)}
											</div>
										</div>
									</div>
									<ul className="ant-pagination ant-pagination-simple ant-table-pagination ant-table-pagination-right">
										<li
											title="Previous Page"
											className="ant-pagination-prev ant-pagination-disabled"
											onClick={() => {
												setPageNo((prev) => prev - 1);
											}}
										>
											<HiOutlineChevronDoubleLeft />
										</li>
										<li
											title="1/35"
											className="ant-pagination-simple-pager"
										>
											<input
												type="text"
												size={3}
												value={pageNo}
											/>
											<span className="ant-pagination-slash">
												/
											</span>
											{totalPage}
										</li>
										<li
											title="Next Page"
											className="ant-pagination-next"
											onClick={() => {
												setPageNo((prev) => prev + 1);
											}}
										>
											<HiOutlineChevronDoubleRight />
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					{modelvisible && (
						<div className="modal">
							<Newuser canclemodel={canclemodel} />
						</div>
					)}
					{isModalVisible && (
						<div className="modal">
							<Delete closemodel={closemodel} />
						</div>
					)}
					{isFilterModel && (
						<div className="modal">
							<Filter closeFilterModel={closeFilterModel} />
						</div>
					)}
				</section>
			</div>
		</>
	);
};

export default Header;
