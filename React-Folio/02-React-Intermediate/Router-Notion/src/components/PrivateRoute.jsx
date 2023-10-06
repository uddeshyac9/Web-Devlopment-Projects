import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, isLoggedin }) => {
    if (isLoggedin) {
        return children;
    }
    else {
        return <Navigate to="/login" />;
    }
}

export default PrivateRoute
