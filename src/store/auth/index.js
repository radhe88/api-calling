import { combineReducers } from "@reduxjs/toolkit";
import session from "./sessionSlice";

const reducer = combineReducers({
	session,
});

export default reducer;
