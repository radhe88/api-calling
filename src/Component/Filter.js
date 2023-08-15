import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useState } from 'react';


const Filter = ({ closeFilterModel, filterRecords }) => {
    const session = useSelector((store) => store?.auth?.session);
    const formData = useSelector((state) => state.auth.session);
    const [data, setData] = useState([]);
    const [filterFields, setFilterFields] = useState({
        type: "",
        course: "",
        entree: "",
        allergy: ""
    });

    const cleaerData = (e) => {
        e.preventDefault();
        setFilterFields({
            type: "",
            course: "",
            entree: "",
            allergy: ""
        });
    }

    const inputhandler = (e) => {
        e.preventDefault();
        if (e.target.name) {
            setFilterFields((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            }));
        } else {
        }
    }


    const onSubmit = () => {
        filterRecords(filterFields)
    }

    return (
        <>
            <div className='ant-modal-root commen_'>
                <div className='ant-modal-mask'>
                    <div className='ant-modal-wrap ant-modal-centered'>
                        <div className='ant-modal-content'>
                            <button onClick={() => closeFilterModel()} className='ant-modal-close' type='button' aria-label='close'>
                                <span className='ant-modal-close-x'>
                                    <AiOutlineClose />
                                </span>
                            </button>
                            <div className='ant-modal-body'>
                                <form action="" className='ant-form ant-form-horizontal commen_ filter-wrapper add-order-pop'>
                                    <h4 className='filter-wrapper_title'>Filter Guest List</h4>
                                    <div>
                                        <div className='input_detail'>
                                            <div className='input_colum'>
                                                <label htmlFor="#" className='label_txt'>Type</label>
                                                <label htmlFor="#" className='label_txt'>1st Course</label>
                                                <label htmlFor="#" className='label_txt'>Entree</label>
                                                <label htmlFor="#" className='label_txt'>Allergy</label>
                                            </div>
                                            <div className='input_colum'>
                                                <div className='ant-form-item custom-input commen_ ant-form-item-with-help ant-form-item-has-error'>
                                                    <div className='ant-form-item-control-input-content'>
                                                        <input type="text" className='ant-input ant-input-status-error commen_ position_added  width_input' />
                                                        <select value={filterFields?.type} onChange={inputhandler} id="select_table" name="type"  >
                                                            <option value="">--Select--</option>
                                                            {formData.type?.map((row, index) => (
                                                                <option value={row.type} key={index}>
                                                                    {row.type}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='ant-form-item custom-input commen_ ant-form-item-with-help ant-form-item-has-error'>
                                                    <div className='ant-form-item-control-input-content'>
                                                        <input type="text" className='ant-input ant-input-status-error position_added  width_input' />
                                                        <select value={filterFields?.course} onChange={inputhandler} id="select_table" name="course"  >
                                                            <option value="">--Select--</option>
                                                            {formData.course?.map((row, index) => (
                                                                <option value={row._id} key={row.key}>
                                                                    {row.course_name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='ant-form-item custom-input commen_ ant-form-item-with-help ant-form-item-has-error'>
                                                    <div className='ant-form-item-control-input-content'>
                                                        <input type="text" className='ant-input ant-input-status-error position_added  width_input' />
                                                        <select value={filterFields?.entree} onChange={inputhandler} id="select_table" name="entree"  >
                                                            <option value="">--Select--</option>
                                                            {formData.entree?.map((row, index) => (
                                                                <option value={row._id} key={row.key}>
                                                                    {row.entree_name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='ant-form-item custom-input commen_ ant-form-item-with-help ant-form-item-has-error'>
                                                    <div className='ant-form-item-control-input-content'>
                                                        <input type="text" className='ant-input ant-input-status-error position_added width_position' />
                                                        <select multiple value={filterFields?.allergy} onChange={inputhandler} id="allergy" name="allergy"  >
                                                            <option value="">--Select--</option>
                                                            {formData.allergy?.map((row, index) => (
                                                                <option value={row._id} key={row.key}>
                                                                    {row.allergy_name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='btn_grp'>
                                            <button onClick={cleaerData} type='button' className='ant-btn commen_ ant-btn-default btn_custom clear_btn button_right'>Clear</button>
                                            <button type='button' className='ant-btn commen_ ant-btn-default btn_custom submit_btn' onClick={onSubmit}>Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Filter