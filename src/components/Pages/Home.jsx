import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Banner } from '../Organisms/Banner';
import store from '../../redux/store';
import { getAllPosts } from '../../redux/actionCreators';
import { Publication } from '../Organisms/Publication';


export const Home = () => {

  const posts=useSelector((state)=>state.postReducer.posts);
  
  useEffect(()=>{
    store.dispatch(getAllPosts());
  },[])
  

  return (
    <>
      <Banner
        color="bg-success bg-gradient"
        title="Bienvenido a la experiencia mas increible en educacion online."
        subtitle="Nuestro equipo ha desarrollado esta plataforma pensando en ti. Sabemos que estas buscando contenido de calidad . Aquí lo encontraras.."
        home
        poster="https://ed.team/images/sdt/laptop.png"
      />

      <main className='container d-flex mt-4 gap-20'>
        <div className='flex-basis-60'>
          <h2>Ultimas publicaciones</h2>
          
          {
            posts?
            <div>
              {
                posts.map((post)=>{
                  return (
                    <Publication 
                      key={post.id}
                      title={post.title}
                      author={post.author}
                      fecha={post.fecha}
                      content={post.content}
                      />
                  )
                })

              }
            </div>
            :
            <p>No existe publicaciones en la BD</p>
          }
          
        </div>
        <div className='flex-basis-40'>
          <h3>Lista de categorias</h3>
          <ul className='list-group '>
            <li className='list-group-item'><span>React.js</span></li>
            <li className='list-group-item'><span>Angular.js</span></li>
            <li className='list-group-item'><span>Vue.js</span></li>
            <li className='list-group-item'><span>HTML</span></li>
            <li className='list-group-item'><span>CSS</span></li>

          </ul>
        </div>
      </main>
    </>
  )
}
