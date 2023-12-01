import React from "react";
import { Route, Navigate } from 'react-router-dom'
import propTypes from "prop-types";

const PrivateRoute = ({ element: Element, ...rest}) => {
    return (
            <Route 
                {...rest} 
                element={
                    localStorage.getItem("token") ? (
                        <Element />
                    ) : (
                        <Navigate to="/login" replace />
                    )
                }
            />
    );
}

PrivateRoute.propTypes = {
    element: propTypes.elementType.isRequired,
};

export default PrivateRoute;