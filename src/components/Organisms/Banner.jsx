import React from 'react'
import { Link } from 'react-router-dom'

export const Banner = ({color,title,subtitle,home,poster,courseBanner,especialidad}) => {
  return (
    <div className={`${color} text-white h-300`} >
      <div className="ed-grid">
        <div>
          {/* <img
            src='https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2017-11/banner-equipo.jpg'
            alt='Baner profesores'
            className='main-banner__img'
            /> */}

          {
            home?
              <div className='row'>
                <div className='col-6 mt-4'>
                  <h1 className='main-banner__titulo text-center'>{title}</h1>
                  <p className='text-center'>{subtitle}</p>
                  <Link to="/cursos" className='btn btn-warning text-white'>Ir a Cursos</Link>
                </div>
                <div className='col-6 '>
                  <img className="img-container" src={poster} alt="portada edteam" />
                </div>
              </div>
            :
            
              courseBanner?
                <div className='row'>
                  <div className='col-7 mt-4'>
                    <h1 className='main-banner__titulo text-center'>{title}</h1>
                    <p className='text-center'>{subtitle}</p>
                    {
                      especialidad &&
                        <p className='text-center'>Este curso es de la especialidad de <Link to="/especialidades">{especialidad}</Link></p>

                    }
                    
                  </div>
                  <div className='col-5 '>
                    <img className="img-container mt-4" src={poster} alt="portada edteam" />
                  </div>
                </div>
              :

              <div className='main-banner__data mt-4'>
                <h1 className='main-banner__titulo text-center'>{title}</h1>
                <p className='text-center'>{subtitle}</p>
              </div>
            

          }
        </div>
      </div>
    </div>
  )
}
