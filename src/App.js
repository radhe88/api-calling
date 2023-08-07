import logo from "./logo.svg";
import Login from "./Component/Login";
import Header from "./Component/Header";
import Newuser from "./Component/Newuser";
import Filter from "./Component/Filter";
import Delete from "./Component/Delete";
import Success from "./Component/Success";
import { Routes, Route } from "react-router-dom";

import "./fonts/fontstyle.css";
import "./App.css";
import "./Css/Login.css";
import "./Css/Header.css";
import "./Css/Newuser.css";
import "./Css/Filter.css";
import "./Css/Delete.css";
import "./Css/Success.css";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<ProtectedRoute />}>
					{/* <Route path="/" element={<Header />} /> */}
					<Route path="/" element={<Header />} />
					<Route path="/*" element={<div>Page Not Found !</div>} />
				</Route>
				{/* <Route path="/sign-in" element={<Login />} /> */}
				<Route path="/sign-in" element={<Login />} />
				{/* <Route path="filter" element={<Filter />} />
        <Route path="delete" element={<Delete />} />
        <Route path="success" element={<Success />} /> */}
			</Routes>
		</div>
	);
}

export default App;
