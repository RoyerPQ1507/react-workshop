import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getCourse } from '../../redux/actionCreators';
import store from '../../redux/store';
import { Banner } from '../Organisms/Banner';

export const Course = ({}) => {

  const curso=useSelector((state)=>state.courseReducer.course);


  
  useEffect(()=>{
    store.dispatch(getCourse(3));

  },[])


  return (

      curso&&
      <>
        <Banner
          color="bg-danger bg-gradient"
          title={curso.name}
          subtitle={curso.subtitle}
          courseBanner
          poster={curso.picture}
          especialidad={curso.especialidad}
        />

        <main className='container d-flex gap-20 mt-4'>
          <div className='flex-basis-80'>
            <div className='row '>
              <div className='col-4'>
                <h4>¿Qué aprenderás?</h4>
                <ul dangerouslySetInnerHTML={{__html:curso.htmlContent}}/>
              </div>
              <div className='col-4'>
                <h4>Conocimientos previos</h4>
                <ul dangerouslySetInnerHTML={{__html:curso.requirement}}/>
              </div>
              <div className='col-4'>
                <h4>Nivel</h4>
                <p>{curso.level}</p>
              </div>
            </div>
            <h2>Temario del curso</h2>
            <div className='card p-4'>
              {
                curso.data.section.map(s=>{

                  return(
                    <div key={s.id}>
                      <h4>{s.name}</h4>
                      <p>{s.subtitle}</p>
                      <ol>
                        {
                          s.clases.map((cl)=>(
                            <li key={cl.id}>{cl.name}</li>
                          ))
                        }
                      </ol>
                      
                    </div>
                  )
                })
              }

            </div>
          </div>

          <div className='flex-basis-20 '>
              <div>
                <h2>Profesor</h2>
                <p>{curso.profesor}</p>
              </div>
          </div>
        </main>
      </>
    
  )
}
