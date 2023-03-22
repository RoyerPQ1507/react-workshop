import React from 'react';
import { NavLink } from 'react-router-dom';


export const PublicMenu = () => {
  return (
    <ul className='d-flex justify-content-around list-unstyled'>
      <li ><NavLink exact to="/login" className='text-decoration-none text-white'>Login</NavLink></li>
      <li ><NavLink to="/register" className='text-decoration-none text-white'>Registro</NavLink></li>
      
    </ul>
  )
}
