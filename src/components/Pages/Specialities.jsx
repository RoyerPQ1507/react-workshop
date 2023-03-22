import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getAllSpecialities } from '../../redux/actionCreators'
import store from '../../redux/store'
import { Banner } from '../Organisms/Banner'
import { Card } from '../Organisms/Card'

export const Specialities = () => {
  const especialidades=useSelector((state)=>state.specialityReducer.specialities)

  useEffect(()=>{
    store.dispatch(getAllSpecialities());
  },[])
  return (

    <>
      <Banner
        color="bg-danger bg-gradient"
        title="Especialidades"
        subtitle="Domina una tecnologia con las rutas de aprendizaje que te ofrecemos"
      />

      {
        especialidades&&
        <main className='d-flex flex-row flex-wrap gap-20'>
          {
            especialidades.map((e)=>(
              <Card
                key={e.id}
                picture={e.picture}
                name={e.name}
                cardId={e.id}
                path="especialidades"
              />
            ))
          }
        </main>
      }
    </>
  )
}
