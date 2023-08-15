import axios from "axios";
// import { useSelector } from "react-redux";
import { onChangeData } from "../store/auth/sessionSlice";

export const getFromDetails = (session) => {
    // const session = useSelector((store) => store?.auth?.session);
    // alert(session?.token);
    // let token = localStorage.getItem('token')
    return (dispatch) => {
        // dispatch({ type: FETCH_START });
        axios
            .get('order/getFormData',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        // Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjkxNjg3NjUyLCJleHAiOjE2OTE3NzQwNTJ9.s3lRO3CBmlnaCnGzmBRLZgTeCVYPfg9eRUd-FiOLG8s"
                        // Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjkxOTEwNDc2LCJleHAiOjE2OTE5OTY4NzZ9.l_UlHTDTN1f5Dy5rE4Q4vEJ7er6RxQeBa1ryxEo8t0Q"
                        Authorization: session?.token
                    }
                }
            )
            .then((data) => {
                if (data.status === 200) {
                    // console.log(data?.data?.data);
                    dispatch(onChangeData(data?.data?.data));
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
