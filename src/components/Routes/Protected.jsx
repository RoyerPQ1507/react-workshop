import React from 'react';
import { Navigate, Route } from 'react-router-dom';


export const Protected = ({children}) => {
  
  const userLogged=localStorage.getItem("token");

  if (!userLogged){
    return <Navigate to="/login"/>
  }

  return children;
}
