import axios from "axios";
import { useSelector } from "react-redux";
import { storeFormDetails } from "../store/auth/sessionSlice";

export const getFromDetails = () => {
    //  const session = useSelector((store) => store?.auth?.session);
    let token = localStorage.getItem('token')
    return (dispatch) => {
        // dispatch({ type: FETCH_START });
        axios
            .get('order/getFormData',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjkxNjg3NjUyLCJleHAiOjE2OTE3NzQwNTJ9.s3lRO3CBmlnaCnGzmBRLZgTeCVYPfg9eRUd-FiOLG8s"
                    }
                }
            )
            .then((data) => {
                if (data.status === 200) {
                    dispatch(storeFormDetails(data.data));

                    // dispatch({ type: Get_Details, payload: data.data });
                } else {
                    alert("Something Went wrong in API response !!!")

                }
            })
            .catch((error) => {
                alert("API Error !!!")
            });
    };
};
