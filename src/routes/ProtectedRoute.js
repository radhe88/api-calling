import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
	const session = useSelector((store) => store?.auth?.session);

	if (!session?.signedIn) {
		return <Navigate to={`sign-in`} replace />;
	}

	return <Outlet />;
};

export default ProtectedRoute;
