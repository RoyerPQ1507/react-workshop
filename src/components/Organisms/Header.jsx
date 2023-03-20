import React, { createRef } from 'react';
import { NavLink } from 'react-router-dom';


const menu=createRef();
const toggleMenu=()=>menu.current.classList.toggle('show');

const removeToken=()=>{
  localStorage.removeItem("token");

  window.location="/login";
}

export const Header = () => {
  return (
    /* <div className='main-header'>
      <div className='ed-grid s-grid-5 lg-grid-4'>
        <div className='s-cols-4 lg-cols-1 s-cross-center'>
          <NavLink to="/">

            <img 
              src="https://ed.team/images/logo/logo-monocolor.svg" 
              alt="EDLogo" 
              className='main-logo'/>
          </NavLink>
        </div>
      </div>
      <div className='s-cols-1 lg-cols-3 s-cross-center'>
        <nav className="main-menu" ref={menu}>
          <ul>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/especialidades">Especialidades</NavLink></li>
            <li><NavLink to="/cursos">Cursos</NavLink></li>
            <li><NavLink to="/profesores">Profesores</NavLink></li>
          </ul>
        </nav>

        <div className='main-menu-toggle to-l' onClick={()=>toggleMenu()}>
        </div>

      </div>
    </div> */

    <div className='row bg-secondary '>
      <div className='col-6'>
        <div className='m-4'>
          <NavLink to="/">

            <img 
              src="https://ed.team/images/logo/logo-monocolor.svg" 
              alt="EDLogo" 
              className=''/>
          </NavLink>
        </div>
      </div>
      <div className='col-6'>
        <nav className="m-4" ref={menu}>
          <ul className='d-flex justify-content-around list-unstyled'>
            <li ><NavLink exact to="/" className='text-decoration-none text-white'>Inicio</NavLink></li>
            <li ><NavLink to="/especialidades" className='text-decoration-none text-white'>Especialidades</NavLink></li>
            <li ><NavLink to="/cursos" className='text-decoration-none text-white'>Cursos</NavLink></li>
            <li ><NavLink to="/profesores" className='text-decoration-none text-white'>Profesores</NavLink></li>
            <li ><span onClick={()=>removeToken()}>Cerrar Sesion</span></li>
          </ul>
        </nav>

        <div className='main-menu-toggle to-l' onClick={()=>toggleMenu()}>
        </div>

      </div>
    </div>
    
  
  )
}
