import React from 'react';
import { NavLink } from 'react-router-dom';

const removeToken=()=>{
  localStorage.removeItem("token");

  window.location="/login";
}

export const PrivateMenu = () => {
  return (
    
    <ul className='d-flex justify-content-around list-unstyled'>
      <li ><NavLink exact to="/" className='text-decoration-none text-white'>Inicio</NavLink></li>
      <li ><NavLink to="/especialidades" className='text-decoration-none text-white'>Especialidades</NavLink></li>
      <li ><NavLink to="/cursos" className='text-decoration-none text-white'>Cursos</NavLink></li>
      <li ><NavLink to="/profesores" className='text-decoration-none text-white'>Profesores</NavLink></li>
      <li ><span onClick={()=>removeToken()}>Cerrar Sesion</span></li>
    </ul> 
   
  )
}
