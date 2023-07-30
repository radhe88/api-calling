import logo from './logo.svg';
import Login from './Component/Login';
import Header from './Component/Header';
import Newuser from './Component/Newuser';
import Filter from './Component/Filter';
import Delete from './Component/Delete';
import Success from './Component/Success';
import { Routes, Route } from "react-router-dom"

import './fonts/fontstyle.css';
import './App.css';
import './Css/Login.css';
import './Css/Header.css';
import './Css/Newuser.css';
import './Css/Filter.css';
import './Css/Delete.css';
import './Css/Success.css';

function App() {
  return (
    <div className="App">
      {/* <Filter />
      <Delete />
      <Success />  */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="header" element={<Header />} />
        <Route path="newuser" element={<Newuser />} />
      </Routes>
    </div>
  );
}

export default App;
