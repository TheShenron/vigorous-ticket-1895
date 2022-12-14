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
import ERRORPAGE from './pages/ERRORPAGE';
import Cart from './pages/Cart';

function Allroutes(props) {
    return (
        
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/donate' element={
                <PrivateRoute>
                    <Donate/>
                </PrivateRoute>
            } />
            <Route path='/lend' element={<Lend/>} />
            <Route path='/pricing' element={<Pricing/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/funding' element={<Fundraiser/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/cart' element={
                <PrivateRoute>
                    <Cart/>
                </PrivateRoute>
            } />
            <Route path='*' element={<ERRORPAGE/>} />

        </Routes>
    );
}

export default Allroutes;