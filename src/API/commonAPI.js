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
                        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjkxNDI4MzAwLCJleHAiOjE2OTE1MTQ3MDB9.i8vsLdiqtHO_q1mNp46vCUFdIm8zimxwCFqxyAvHvTk"
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
