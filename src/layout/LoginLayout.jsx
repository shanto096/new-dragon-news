import React from 'react';
import Navber from '../pages/Shared/navber/Navber';
import { Outlet } from 'react-router-dom';


const LoginLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;