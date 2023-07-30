import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
// import { BsChevronDown } from 'react-icons/bs';

const Newuser = () => {
    return (
        <>
            <div className='ant-modal-root commen_'>
                <div className='ant-modal-mask'></div>
                <div className='ant-modal-wrap ant-modal-centered'>
                    <div className='ant-modal-content'>
                        <button className='ant-modal-close' type='button' aria-label='close'>
                            <span className='ant-modal-close-x'>
                                <AiOutlineClose />
                            </span>
                        </button>
                        <div className='ant-modal-body'>
                            <form action="" className='ant-form ant-form-horizontal commen_ filter-wrapper add-order-pop'>
                                <h4 className='filter-wrapper_title'>Add New Guest</h4>
                                <div>
                                    <div className='input_detail'>
                                        <div className='input_colum'>
                                            <label htmlFor="#" className='label_txt'>Guest First Name</label>
                                            <label htmlFor="#" className='label_txt'>Guest Last Name</label>
                                            <label htmlFor="#" className='label_txt'>Table</label>
                                            <label htmlFor="#" className='label_txt'>Seat</label>
                                            <label htmlFor="#" className='label_txt'>Adult Type</label>
                                            <label htmlFor="#" className='label_txt'>1st Course</label>
                                            <label htmlFor="#" className='label_txt'>Entree</label>
                                            <label htmlFor="#" className='label_txt'>Allergy</label>
                                            <label htmlFor="#" className='label_txt'>Other</label>
                                        </div>
                                        <div className='input_colum'>
                                            <div className='ant-form-item custom-input commen_ ant-form-item-with-help ant-form-item-has-error'>
                                                <div className='ant-form-item-control-input-content'>
                                                    <input type="text" className='ant-input ant-input-status-error commen_ yellow-outline' />
                                                </div>
                                            </div>
                                            <div className='ant-form-item custom-input commen_ ant-form-item-with-help ant-form-item-has-error'>
                                                <div className='ant-form-item-control-input-content'>
                                                    <input type="text" className='ant-input ant-input-status-error commen_ yellow-outline' />
                                                </div>
                                            </div>
                                            <div className='ant-form-item custom-input commen_ ant-form-item-with-help ant-form-item-has-error'>
                                                <div className='ant-form-item-control-input-content'>
                                                    <input type="text" className='ant-input ant-input-status-error position_added  width_input' />
                                                    <select id="select_table" name="table"  >
                                                        <option >1</option>
                                                        <option >2</option>
                                                        <option >3</option>
                                                        <option >4</option>
                                                        <option >5</option>
                                                        <option >6</option>
                                                        <option >7</option>
                                                        <option >8</option>
                                                        <option >9</option>
                                                        <option >10</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='ant-form-item custom-input commen_ ant-form-item-with-help ant-form-item-has-error'>
                                                <div className='ant-form-item-control-input-content'>
                                                    <input type="text" className='ant-input ant-input-status-error position_added width_input ' />
                                                    <select id="select_table" name="table"  >
                                                        <option >1</option>
                                                        <option >2</option>
                                                        <option >3</option>
                                                        <option >4</option>
                                                        <option >5</option>
                                                        <option >6</option>
                                                        <option >7</option>
                                                        <option >8</option>
                                                        <option >9</option>
                                                        <option >10</option>
                                                        <option >11</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='ant-form-item custom-input commen_ ant-form-item-with-help ant-form-item-has-error'>
                                                <div className='ant-form-item-control-input-content'>
                                                    <input type="text" className='ant-input ant-input-status-error position_added yellow-outline width_input' />
                                                    <select id="select_table" name="table"  >
                                                        <option >Adult</option>
                                                        <option >Kid</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='ant-form-item custom-input commen_ ant-form-item-with-help ant-form-item-has-error'>
                                                <div className='ant-form-item-control-input-content'>
                                                    <input type="text" className='ant-input ant-input-status-error position_added  width_input' />
                                                    <select id="select_table" name="table"  >
                                                        <option >Salad</option>
                                                        <option >Lobster Bisque</option>
                                                        <option >Kosher 1st Course</option>
                                                        <option >Teen Buffet 1st Course</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='ant-form-item custom-input commen_ ant-form-item-with-help ant-form-item-has-error'>
                                                <div className='ant-form-item-control-input-content'>
                                                    <input type="text" className='ant-input ant-input-status-error position_added  width_input' />
                                                    <select id="select_table" name="table"  >
                                                        <option >Sea Bass</option>
                                                        <option >Filet of Beef</option>
                                                        <option >Maitake Steak</option>
                                                        <option >Kosher Entree</option>
                                                        <option >Teen Buffet Entree</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='ant-form-item custom-input commen_ ant-form-item-with-help ant-form-item-has-error'>
                                                <div className='ant-form-item-control-input-content'>
                                                    <input type="text" className='ant-input ant-input-status-error commen_ allergy_width ' />
                                                </div>
                                            </div>
                                            <div className='ant-form-item custom-input commen_ ant-form-item-with-help ant-form-item-has-error'>
                                                <div className='ant-form-item-control-input-content'>
                                                    <textarea type="text" className='ant-input ant-input-status-error  allergy_width ' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='btn_grp'>
                                        <button type='button' className='ant-btn commen_ ant-btn-default btn_custom clear_btn button_right'>Clear</button>
                                        <button type='submit' className='ant-btn commen_ ant-btn-default btn_custom submit_btn '>Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newuser