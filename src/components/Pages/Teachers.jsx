import React, { useEffect } from 'react';
import { Banner } from '../Organisms/Banner';
import store from '../../redux/store';
import { getAllTeachers } from '../../redux/actionCreators';
import { useSelector } from 'react-redux';
import { Teacher } from '../Organisms/Teacher';



export const Teachers = ({match}) => {

  const teachers=useSelector((state)=>state.teacherReducer.teachers);

  // const dispatch=useDispatch();
  useEffect(()=>{
    store.dispatch(getAllTeachers());
    // dispatch(getAllTeachers());

  },[match])
  return (
    <>
    <Banner
      color="bg-primary bg-gradient"
      title="Nuestro profesores"
      subtitle="Esta plana docente está altamente calificado para guiarte en tu desarrollo profesional"
    />

    {
      teachers&&
      <main className='d-flex flex-row flex-wrap gap-20'>
        {
          teachers.map((t)=>{
            return (
              <Teacher
                key={t.id}
                picture={t.picture}
                name={t.name}
                country={t.country}
               
              />
            )
          })
        }
      </main>
    }
    </>

  )
}
