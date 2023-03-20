import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { Home } from '../Pages/Home';


export const Public = ({children}) => {
  
  const userLogged=localStorage.getItem("token");

  if (userLogged){
    return <Navigate to="/"/>
  }

  return children;
}
