import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const middlewares = [];

const persistConfig = {
	key: "oms",
	keyPrefix: "",
	storage,
	whitelist: ["auth"],
};

const store = configureStore({
	reducer: persistReducer(persistConfig, rootReducer()),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			immutableCheck: false,
			serializableCheck: false,
		}).concat(middlewares),
	// devTools: import.meta.env.NODE_ENV === "development",
	devTools: false,
});

store.asyncReducers = {};

export const persistor = persistStore(store);

export const injectReducer = (key, reducer) => {
	if (store.asyncReducers[key]) {
		return false;
	}
	store.asyncReducers[key] = reducer;
	store.replaceReducer(
		persistReducer(persistConfig, rootReducer(store.asyncReducers))
	);
	persistor.persist();
	return store;
};

export default store;
