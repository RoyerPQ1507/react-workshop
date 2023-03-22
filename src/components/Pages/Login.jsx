import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';


const authentication=(e)=>{
  e.preventDefault();

  const form=e.target;

  const data={
    "email": form.email.value,
    "password": form.password.value
  }


  axios.post("https://api-edteam.alejogs4.now.sh/login",data)
  .then(r=>{
    localStorage.setItem("token",r.data.token)
    window.location="/"
  })
  .catch(alert("Error al iniciar sesion"))
  
  
}

export const Login = () => {

  
  return (
    /* <div className='ed-grid'>
      <h1>Login</h1>
    </div> */
    <div className='w-30 d-center mt-4'>
      <h1 className='text-center'>Iniciar Sesión</h1>
      <form onSubmit={authentication.bind()}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Correo electrónico</label>
          <input type="email" className="form-control mt-2" name="email" id="exampleInputEmail1"  placeholder="Ingrese su email" required/>
          
        </div>
        <div className="form-group mt-3">
          <label htmlFor="exampleInputPassword">Contraseña</label>
          <input type="password" className="form-control mt-2" name="password" id="exampleInputPassword"  placeholder="Ingrese su contraseña" required/>
        
        </div>

        <button type="submit" className="btn btn-primary mt-4 w-100">Iniciar Sesión</button>
      </form>

      <div>
        <p>¿No tienes cuenta de usuario?<Link to="/register">Crear cuenta</Link></p>
      </div>
    </div>
  )
}
