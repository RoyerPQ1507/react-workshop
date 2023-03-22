import React from 'react'
import { Link } from 'react-router-dom'

export const Teacher = ({picture,name,country}) => {
  return (
    <article className="flex-basis-30 text-center mt-4">
      <div>

        <div className='img-thumbnail'>
         
          <img src={picture} alt={name} className="rounded "/>
       
        </div>
      </div>

      <div>
        <h3 className=''>{name}</h3>
        <p>{country}</p>
      </div>

    </article>
  )
}
