import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';


const Success = () => {
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
                        <div className='ant-modal-body '>
                            <div className='modal_main notification active undefined'>
                                <p >Success</p>
                                <div className='ant-body'>
                                    <p >Successfully Added</p>
                                </div>
                                <div className='btn_grp'>
                                    <button type='submit' className='ant-btn commen_ ant-btn-default btn_custom submit_btn '>Ok</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Success