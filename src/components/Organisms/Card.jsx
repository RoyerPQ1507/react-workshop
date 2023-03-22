import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({picture,name,cardId,path}) => {
  return (
    <article className="flex-basis-30 text-center mt-4">
      <div>

        <div className='img-thumbnail'>
          <Link to={`/${path}/${cardId}`}>
            <img src={picture} alt={name} className="rounded "/>
          </Link>
          
        </div>
      </div>

      <div>
        <h3 className=''>{name}</h3>
        
      </div>

    </article> 
  )
}
