import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';



const registration=(e)=>{
  e.preventDefault();

  const form=e.target;

  const data={
    "email": form.email.value,
    "name": form.fullname.value,
    "password": form.password.value
  }


  axios.post(`https://api-edteam.alejogs4.now.sh/signup`,data)
  .then(()=>{
    alert("Usuario creado");
    window.location="/login";
  })
  .catch(()=>alert("Error al crear usuario"))
  
  
}

export const Register = () => {
  return (
    <div className='w-30 d-center mt-4'>
      <h1 className='text-center'>Crear Cuenta</h1>
      <form onSubmit={registration.bind()}>
        <div className="form-group">
          <label htmlFor="exampleFullName">Nombre completo</label>
          <input type="text" className="form-control mt-2" name="fullname" id="exampleFullName"  placeholder="Ingrese su nombre" required/>
          
        </div>
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
        <p>¿Ya tienes cuenta de usuario?<Link to="/login">Iniciar sesión</Link></p>
      </div>
    </div>
  )
}
