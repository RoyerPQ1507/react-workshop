import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllCourses } from '../../redux/actionCreators';
import store from '../../redux/store';
import { Banner } from '../Organisms/Banner';
import { Card } from '../Organisms/Card';


export const Courses = () => {

  const cursos=useSelector((state)=>state.courseReducer.courses);
  useEffect(()=>{
    store.dispatch(getAllCourses());
  },[]);

  return (
    <>
      <Banner
        color="bg-info bg-gradient"
        title="Nuestros cursos"
        subtitle="Comienza desde cero hoy mismo en tu camino a dominar la tecnologia  "
      />
      {
        cursos&&

        <main className='d-flex flex-row flex-wrap gap-20'>
          {
            cursos.map((c)=>(
              <Card
                key={c.id}
                picture={c.picture}
                name={c.name}
                cardId={c.id}
                path="cursos"
              />
            ))
          }
        </main>
      }
    </>
  )
}
