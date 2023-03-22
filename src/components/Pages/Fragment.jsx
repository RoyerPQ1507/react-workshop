import React, { useEffect } from 'react';
import Vimeo from '@u-wave/react-vimeo';
import store from '../../redux/store';
import { getCourse, getFragment } from '../../redux/actionCreators';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export const Fragment = () => {

  const curso=useSelector((state)=>state.courseReducer.course);
  const fragment=useSelector((state)=>state.fragmentReducer.fragment)

  useEffect(()=>{
    store.dispatch(getCourse(1));
    store.dispatch(getFragment(11));
  },[])
  return (
    <div className='bg-dark bg-gradient text-white p-4'>
      {
        (fragment && curso) &&
          <div className='row'>
            <div className='col-8'>
              <Vimeo
                video={fragment.video}
                autoplay
                width={500}
              /> 
              <div>
                <h4 className='text-warning mb-0'>{fragment.name}</h4>
                <span>{curso.name}</span>
              </div>
            </div>
            <div className='col-4'>
             <div>
              <h3>Temario del curso</h3>
              {
                curso.data.section.map(s=>
                  (
                    <div key={s.id} className="mt-4">
                      <h4>{s.name}</h4>
                      <ol className='list-group'>
                        {
                          s.clases.map((cl)=>(
                            <li className="list-group-item" key={cl.id}>
                              <Link to={`/clase/${cl.id}`} className="text-black">{cl.name}</Link>
                            </li>
                          ))
                        }
                      </ol>
                    </div>
                  )
                )
              }
             </div>
            </div>
          </div>

      }


      

    </div>
  )
}
