import React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../components/Header.jsx';

function MainLayout() {
    return (
        <>
            <Outlet />
        </>
    );
}

export default MainLayout;