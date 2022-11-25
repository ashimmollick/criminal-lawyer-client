import React from 'react';
import { Outlet } from 'react-router-dom';
import Foorer from '../shared/Footer/Foorer';
import Navbar from '../shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Foorer></Foorer>
        </div>
    );
};

export default Main;