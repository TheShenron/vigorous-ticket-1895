import React from 'react';
import { Routes , Route } from "react-router-dom"
import PrivateRoute from '../Components/privateRouteing/PrivateRoute';
import Home from './pages/Home';
import Donate from "./pages/Donate";
import Lend from "./pages/Lend";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Fundraiser from "./pages/Fundraiser";
import Login from "./pages/Login";
import Register from "./pages/Register";

function Allroutes(props) {
    return (
        
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/donate' element={<Donate/>} />
            <Route path='/lend' element={<Lend/>} />
            <Route path='/pricing' element={<Pricing/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/funding' element={
                <PrivateRoute>
                    <Fundraiser/>
                </PrivateRoute>
            } />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='*' element={<>404 error page</>} />

        </Routes>
    );
}

export default Allroutes;