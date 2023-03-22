import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { getSpeciality } from '../../redux/actionCreators';
import store from '../../redux/store'
import { Banner } from '../Organisms/Banner';

export const Speciality = () => {
  const especialidad=useSelector((state)=>state.specialityReducer.speciality);

  useEffect(()=>{

    store.dispatch(getSpeciality(1));
  },[])
  return (
    <>
    {
      especialidad &&
      <>
        
        <Banner
          color="bg-dark bg-gradient"
          title={especialidad.name}
          subtitle={especialidad.subtitle}
          courseBanner
          poster={especialidad.picture}
          
        />

        <main className='container d-flex gap-20 mt-4'>
          <div className='flex-basis-80 p-4'>
            <div className='row'>
              <div className='col-4'>
                <h4>¿Qué aprenderás?</h4>
                <ul>
                  {
                    especialidad.data.abilities.map((s)=>(
                      <li key={s.id}>{s.description}</li>
                    ))
                  }
                </ul>
              </div>
              <div className='col-4'>
                <h4>Conocimientos previos</h4>
                <ul>
                  {
                    especialidad.data.knowledge.map((c)=>(
                      <li key={c.id}>{c.description}</li>
                    ))
                  }
                </ul>
              </div>
              <div className='col-4'>
                <h4>Nivel</h4>
                <p>{especialidad.level}</p>
              </div>
            </div>
            <h2>Temario de la especialidad</h2>
            <div className='card p-4'>
              {
                especialidad.data.courses.map(c=>{

                  return(
                    <div key={c.id} className="row mt-4">
                      <div className='col-5'>
                        <img src={c.picture} alt={c.name}/>
                      </div>

                      <div className='col-5'>
                        <h4>{c.name}</h4>
                        <p>{c.subtitle}</p>
                      </div>
                      
                      
                    </div>
                  )
                })
              }

            </div>
          </div>
        </main>
        
      
      </>

    }
      
    </>
  )
}
