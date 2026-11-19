import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoutes = () => {

    const isLogin = localStorage.getItem("isLogin");

    return isLogin ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRoutes
