import React from 'react';
import { Navigate} from 'react-router-dom';



export const Public = ({children}) => {
  
  const userLogged=localStorage.getItem("token");

  if (userLogged){
    return <Navigate to="/"/>
  }

  return children;
}
