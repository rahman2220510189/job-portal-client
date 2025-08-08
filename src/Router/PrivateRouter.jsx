import React, { useContext } from 'react';
import AuthContext from '../contex/AuthContex/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);
    if (loading) {
        <span className="loading loading-dots loading-lg"></span>
    }
    if(user){
        return children

    }
    return <Navigate to='/signIn' state={location?.pathname}></Navigate>
    
};

export default PrivateRouter;