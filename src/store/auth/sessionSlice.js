import { createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
	name: "auth/session",
	initialState: {
		token: "",
		signedIn: false,
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
		setToken: (state, action) => {
			state.token = action.payload;
		},
		setDemo: (state, action) => {
			console.log(state, action);
		},
	},
});

export const { onSignInSuccess, onSignOutSuccess, setToken, setDemo } =
	sessionSlice.actions;

export default sessionSlice.reducer;
