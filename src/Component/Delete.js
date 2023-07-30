import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';


const Delete = () => {
    return (
        <>
            <div className='ant-modal-root commen_'>
                <div className='ant-modal-mask'></div>
                <div className='ant-modal-wrap ant-modal-centered'>
                    <div className='ant-modal-delete'>
                        <button className='ant-modal-close' type='button' aria-label='close'>
                            <span className='ant-modal-close-x'>
                                <AiOutlineClose />
                            </span>
                        </button>
                        <div className='ant-modal-body'>
                            <div>
                                <h4 className='filter-wrapper_title'>Delete Guest</h4>
                                <p>You have selected to delete a guest. This will remove all info for the guest. Do you want to proceed?</p>
                                <div className='btn_grp'>
                                    <button type='button' className='ant-btn commen_ ant-btn-default btn_custom clear_btn button_right width_reduce'>No</button>
                                    <button type='submit' className='ant-btn commen_ ant-btn-default btn_custom submit_btn  width_reduce'>Yes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Delete