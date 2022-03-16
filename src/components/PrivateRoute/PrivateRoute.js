import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import PlaceOrder from '../PlaceOrder/PlaceOrder';

const PrivateRoute = ({children, ...rest}) => {
    const {user,isLoading} = useAuth();
    let location = useLocation();
      if(isLoading){
          return <PlaceOrder></PlaceOrder>
      }
      if(user.email){
          return children;
      }
      return <Navigate to = '/login' state={{from:location}}/>;
};

export default PrivateRoute;