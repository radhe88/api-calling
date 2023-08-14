import axios from 'axios';
import React, { useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { useSelector } from 'react-redux';


const Delete = ({ closemodel, dataId }) => {
    const session = useSelector((store) => store?.auth?.session);

    const confirmDelete = async () => {
        const res = await axios.delete(`/order/delete/${dataId}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: session?.token,
            }

        })
            .then((response) => {
                alert(response?.data?.message);
                closemodel();
            })
            .catch((error) => {
                alert(error?.response?.data?.message)
            })
    }
    useEffect(() => {
        // console.log("delete record ID ", dataId)
    }, [dataId])
    return (
        <>
            <div className='ant-modal-root commen_'>
                <div className='ant-modal-mask'></div>
                <div className='ant-modal-wrap ant-modal-centered'>
                    <div className='ant-modal-delete'>
                        <button onClick={() => closemodel()} className='ant-modal-close' type='button' aria-label='close'>
                            <span className='ant-modal-close-x'>
                                <AiOutlineClose />
                            </span>
                        </button>
                        <div className='ant-modal-body'>
                            <div>
                                <h4 className='filter-wrapper_title'>Delete Guest</h4>
                                <p>You have selected to delete a guest. This will remove all info for the guest. Do you want to proceed?</p>
                                <div className='btn_grp'>
                                    <button onClick={() => closemodel()} type='button' className='ant-btn commen_ ant-btn-default btn_custom clear_btn button_right width_reduce'>No</button>
                                    <button type='submit' className='ant-btn commen_ ant-btn-default btn_custom submit_btn  width_reduce' onClick={() => confirmDelete()}>Yes</button>
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