import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { FadeLoader } from 'react-spinners';

const PrivateRoute = ({children}) => {

    const {user, loading} = use(AuthContext);

    const location = useLocation();
    console.log(location);

    if(loading) {
        return (
           <div className='h-[97vh] flex justify-center items-center'>
             <FadeLoader />
           </div>
        )
    }

    if(!user) {
        return <Navigate to="/signin" state={location.pathname}></Navigate>
    }

    return children;
};

export default PrivateRoute;