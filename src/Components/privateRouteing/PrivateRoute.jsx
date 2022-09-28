import React, { useContext } from 'react';
//MY IMPORT EXPORT
import { AppContext } from '../../contextProvider/ContextProvider';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({children}) => {

    const {state , dispatch} = useContext(AppContext)

    if(!state.isAuth){
        return <Navigate to="/login" />
    }

    return children

};

export default PrivateRoute;