import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Login } from './components/LoginSingup/Login';
import {SignUp} from './components/LoginSingup/SingUp'
function App() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Login />} />
				<Route path="/signUp" element={<SignUp />}/>
        </Routes>
    </div>
  );
}

export default App;
