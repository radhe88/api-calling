import React, { useEffect, useState } from 'react'

import { BsSearch } from 'react-icons/bs';
import { AiFillFilter, AiFillPlusSquare } from 'react-icons/ai';
import { MdFilterAltOff } from 'react-icons/md';
import { LuEdit } from 'react-icons/lu';
import { RiDeleteBinLine } from 'react-icons/ri';
import axios from 'axios';




const Header = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://stagedbapi.ansharlabs.com/order/getFormData')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <>
            <div>
                <form action="" className='ant-form ant-form-horizontal commen_  main_section'>
                    <div className='guest_container'>
                        <h4 className='main_heading'>
                            Order Management System
                        </h4>
                        <div className='search_blog'>
                            <div className='ant-form-item search_box commen_'>
                                <div className='ant-row ant-form-item-row commen_'>
                                    <span className='class="ant-input-affix-wrapper search_input commen_'>
                                        <span className='ant-input-prefix'>
                                            <BsSearch />
                                            <input type="text" name='search' placeholder='Search by keyword ' id='search' className='ant-input commen_' />
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className='fliter_btn_group'>
                                <button type="submit" className='ant-btn commen_ ant-btn-primary go_btn round_btn'>
                                    <span>GO</span>
                                </button>
                                <button type="submit" className='ant-btn commen_ ant-btn-default filter_btn round_btn'>
                                    <AiFillFilter />
                                </button>
                                <button type="submit" className='ant-btn commen_ ant-btn-default non_filter_btn round_btn'>
                                    <MdFilterAltOff />
                                </button>
                                <button type='button' className='ant-btn commen_ ant-btn-default add_btn'>
                                    <AiFillPlusSquare />
                                    <span>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <section className='tbl_section'>
                    <div className='tbl_container'>
                        <div className='ant-table-wrapper conc-table commen_'>
                            <div className='ant-spin-nested-loading commen_'>
                                <div className='ant-spin-container'>
                                    <div className='ant-table'>
                                        <div className='ant-table-container'>
                                            <div className='ant-table-content'>
                                                <table>
                                                    <thead className='ant-table-thead'>
                                                        <tr>
                                                            <th className='ant-table-cell' scope='col'>Table</th>
                                                            <th className='ant-table-cell' scope='col'>Seat</th>
                                                            <th className='ant-table-cell' scope='col'>First Name</th>
                                                            <th className='ant-table-cell' scope='col'>Last Name</th>
                                                            <th className='ant-table-cell' scope='col'>Type</th>
                                                            <th className='ant-table-cell' scope='col'>1st course</th>
                                                            <th className='ant-table-cell' scope='col'>Entree</th>
                                                            <th className='ant-table-cell' scope='col'>Allergy</th>
                                                            <th className='ant-table-cell action' scope='col'>
                                                                <span></span>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className='ant-table-tbody'>
                                                        <tr className='ant-table-row ant-table-row-level-0'>
                                                            <td className='ant-table-cell'>1</td>
                                                            <td className='ant-table-cell'>4</td>
                                                            <td className='ant-table-cell'>Scott</td>
                                                            <td className='ant-table-cell'>London</td>
                                                            <td className='ant-table-cell'>Kid</td>
                                                            <td className='ant-table-cell'></td>
                                                            <td className='ant-table-cell'></td>
                                                            <td className='ant-table-cell'>
                                                                <span className='ellergy_nam'></span>
                                                                <span className='allergy-other'>
                                                                    <ul>
                                                                        <b></b>
                                                                    </ul>

                                                                </span>
                                                            </td>
                                                            <td className='ant-table-cell action'>
                                                                <div className='d-flex-justify'>
                                                                    <LuEdit />
                                                                    <RiDeleteBinLine className='deleteBtn' />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className='ant-table-row ant-table-row-level-0'>
                                                            <td className='ant-table-cell'>1</td>
                                                            <td className='ant-table-cell'>4</td>
                                                            <td className='ant-table-cell'>Scott</td>
                                                            <td className='ant-table-cell'>London</td>
                                                            <td className='ant-table-cell'>Kid</td>
                                                            <td className='ant-table-cell'></td>
                                                            <td className='ant-table-cell'></td>
                                                            <td className='ant-table-cell'>
                                                                <span className='ellergy_nam'></span>
                                                                <span className='allergy-other'>
                                                                    <ul>
                                                                        <b></b>
                                                                    </ul>

                                                                </span>
                                                            </td>
                                                            <td className='ant-table-cell action'>
                                                                <div className='d-flex-justify'>
                                                                    <LuEdit />
                                                                    <RiDeleteBinLine className='deleteBtn' />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className='ant-table-row ant-table-row-level-0'>
                                                            <td className='ant-table-cell'>1</td>
                                                            <td className='ant-table-cell'>4</td>
                                                            <td className='ant-table-cell'>Scott</td>
                                                            <td className='ant-table-cell'>London</td>
                                                            <td className='ant-table-cell'>Kid</td>
                                                            <td className='ant-table-cell'></td>
                                                            <td className='ant-table-cell'></td>
                                                            <td className='ant-table-cell'>
                                                                <span className='ellergy_nam'></span>
                                                                <span className='allergy-other'>
                                                                    <ul>
                                                                        <b></b>
                                                                    </ul>

                                                                </span>
                                                            </td>
                                                            <td className='ant-table-cell action'>
                                                                <div className='d-flex-justify'>
                                                                    <LuEdit />
                                                                    <RiDeleteBinLine className='deleteBtn' />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className='ant-table-row ant-table-row-level-0'>
                                                            <td className='ant-table-cell'>1</td>
                                                            <td className='ant-table-cell'>4</td>
                                                            <td className='ant-table-cell'>Scott</td>
                                                            <td className='ant-table-cell'>London</td>
                                                            <td className='ant-table-cell'>Kid</td>
                                                            <td className='ant-table-cell'>Lobster Bisque</td>
                                                            <td className='ant-table-cell'>Filet of Beef</td>
                                                            <td className='ant-table-cell'>
                                                                <span className='ellergy_nam'>Shellfish</span>
                                                                <span className='allergy-other'>
                                                                    <ul>
                                                                        <b>Other:</b>
                                                                    </ul>

                                                                </span>
                                                            </td>
                                                            <td className='ant-table-cell action'>
                                                                <div className='d-flex-justify'>
                                                                    <LuEdit />
                                                                    <RiDeleteBinLine className='deleteBtn' />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className='ant-table-row ant-table-row-level-0'>
                                                            <td className='ant-table-cell'>1</td>
                                                            <td className='ant-table-cell'>4</td>
                                                            <td className='ant-table-cell'>Scott</td>
                                                            <td className='ant-table-cell'>London</td>
                                                            <td className='ant-table-cell'>Kid</td>
                                                            <td className='ant-table-cell'>Lobster Bisque</td>
                                                            <td className='ant-table-cell'>Filet of Beef</td>
                                                            <td className='ant-table-cell'>
                                                                <span className='ellergy_nam'>Shellfish</span>
                                                                <span className='allergy-other'>
                                                                    <ul>
                                                                        <b>Other:</b>
                                                                    </ul>
                                                                    milk, soyabean, anything...
                                                                </span>
                                                            </td>
                                                            <td className='ant-table-cell action'>
                                                                <div className='d-flex-justify'>
                                                                    <LuEdit />
                                                                    <RiDeleteBinLine className='deleteBtn' />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className='ant-table-row ant-table-row-level-0'>
                                                            <td className='ant-table-cell'>1</td>
                                                            <td className='ant-table-cell'>4</td>
                                                            <td className='ant-table-cell'>Scott</td>
                                                            <td className='ant-table-cell'>London</td>
                                                            <td className='ant-table-cell'>Kid</td>
                                                            <td className='ant-table-cell'>Lobster Bisque</td>
                                                            <td className='ant-table-cell'>Filet of Beef</td>
                                                            <td className='ant-table-cell'>
                                                                <span className='ellergy_nam'>Shellfish</span>
                                                                <span className='allergy-other'>
                                                                    <ul>
                                                                        <b>Other:</b>
                                                                    </ul>
                                                                    milk, soyabean, anything...
                                                                </span>
                                                            </td>
                                                            <td className='ant-table-cell action'>
                                                                <div className='d-flex-justify'>
                                                                    <LuEdit />
                                                                    <RiDeleteBinLine className='deleteBtn' />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className='ant-table-row ant-table-row-level-0'>
                                                            <td className='ant-table-cell'>1</td>
                                                            <td className='ant-table-cell'>4</td>
                                                            <td className='ant-table-cell'>Scott</td>
                                                            <td className='ant-table-cell'>London</td>
                                                            <td className='ant-table-cell'>Kid</td>
                                                            <td className='ant-table-cell'>Lobster Bisque</td>
                                                            <td className='ant-table-cell'>Filet of Beef</td>
                                                            <td className='ant-table-cell'>
                                                                <span className='ellergy_nam'>Shellfish</span>
                                                                <span className='allergy-other'>
                                                                    <ul>
                                                                        <b>Other:</b>
                                                                    </ul>
                                                                    milk, soyabean, anything...
                                                                </span>
                                                            </td>
                                                            <td className='ant-table-cell action'>
                                                                <div className='d-flex-justify'>
                                                                    <LuEdit />
                                                                    <RiDeleteBinLine className='deleteBtn' />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className='ant-table-row ant-table-row-level-0'>
                                                            <td className='ant-table-cell'>1</td>
                                                            <td className='ant-table-cell'>4</td>
                                                            <td className='ant-table-cell'>Scott</td>
                                                            <td className='ant-table-cell'>London</td>
                                                            <td className='ant-table-cell'>Kid</td>
                                                            <td className='ant-table-cell'>Lobster Bisque</td>
                                                            <td className='ant-table-cell'>Filet of Beef</td>
                                                            <td className='ant-table-cell'>
                                                                <span className='ellergy_nam'>Shellfish</span>
                                                                <span className='allergy-other'>
                                                                    <ul>
                                                                        <b>Other:</b>
                                                                    </ul>
                                                                    milk, soyabean, anything...
                                                                </span>
                                                            </td>
                                                            <td className='ant-table-cell action'>
                                                                <div className='d-flex-justify'>
                                                                    <LuEdit />
                                                                    <RiDeleteBinLine className='deleteBtn' />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className='ant-table-row ant-table-row-level-0'>
                                                            <td className='ant-table-cell'>1</td>
                                                            <td className='ant-table-cell'>4</td>
                                                            <td className='ant-table-cell'>Scott</td>
                                                            <td className='ant-table-cell'>London</td>
                                                            <td className='ant-table-cell'>Kid</td>
                                                            <td className='ant-table-cell'>Lobster Bisque</td>
                                                            <td className='ant-table-cell'>Filet of Beef</td>
                                                            <td className='ant-table-cell'>
                                                                <span className='ellergy_nam'>Shellfish</span>
                                                                <span className='allergy-other'>
                                                                    <ul>
                                                                        <b>Other:</b>
                                                                    </ul>
                                                                    milk, soyabean, anything...
                                                                </span>
                                                            </td>
                                                            <td className='ant-table-cell action'>
                                                                <div className='d-flex-justify'>
                                                                    <LuEdit />
                                                                    <RiDeleteBinLine className='deleteBtn' />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className='ant-table-row ant-table-row-level-0'>
                                                            <td className='ant-table-cell'>1</td>
                                                            <td className='ant-table-cell'>4</td>
                                                            <td className='ant-table-cell'>Scott</td>
                                                            <td className='ant-table-cell'>London</td>
                                                            <td className='ant-table-cell'>Kid</td>
                                                            <td className='ant-table-cell'>Lobster Bisque</td>
                                                            <td className='ant-table-cell'>Filet of Beef</td>
                                                            <td className='ant-table-cell'>
                                                                <span className='ellergy_nam'>Shellfish</span>
                                                                <span className='allergy-other'>
                                                                    <ul>
                                                                        <b>Other:</b>
                                                                    </ul>
                                                                    milk, soyabean, anything...
                                                                </span>
                                                            </td>
                                                            <td className='ant-table-cell action'>
                                                                <div className='d-flex-justify'>
                                                                    <LuEdit />
                                                                    <RiDeleteBinLine className='deleteBtn' />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Header