import React, { createRef } from 'react';
import { NavLink } from 'react-router-dom';
import { PrivateMenu } from '../Molecules/PrivateMenu';
import { PublicMenu } from '../Molecules/PublicMenu';


const menu=createRef();
const toggleMenu=()=>menu.current.classList.toggle('show');



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
      <div className='col-7'>
        <div className='m-4'>
          <NavLink to="/">

            <img 
              src="https://ed.team/images/logo/logo-monocolor.svg" 
              alt="EDLogo" 
              className=''/>
          </NavLink>
        </div>
      </div>
      <div className='col-5'>
        <nav className="m-4" ref={menu}>
          {
            localStorage.getItem("token")?
            <PrivateMenu/>:
            <PublicMenu/>
          }
        </nav>

        <div className='main-menu-toggle to-l' onClick={()=>toggleMenu()}>
        </div>

      </div>
    </div>
    
  
  )
}
