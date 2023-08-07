import { createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
	name: "auth/session",
	initialState: {
		token: "",
		signedIn: false,
		allergy: [],
		type: [],
		table: [],
		seat: [],
		entree: [],
		course: [],


	},
	reducers: {
		onSignInSuccess: (state, action) => {
			state.signedIn = true;
			state.token = action.payload;
		},
		onSignOutSuccess: (state) => {
			state.signedIn = false;
			state.token = "";
		},
		storeFormDetails: (state, action) => {
			// console.log("test", action);
			let mainData = action.payload.data;
			state.allergy = mainData.allergy;
			state.type = mainData.type;
			state.table = mainData.table;
			state.seat = mainData.seat;
			state.entree = mainData.entree;
			state.course = mainData.course;
		}


	},
});

export const { onSignInSuccess, onSignOutSuccess, setToken, setDemo, storeFormDetails } =
	sessionSlice.actions;

export default sessionSlice.reducer;
