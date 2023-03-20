import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Specialities} from './Pages/Specialities';
import { Speciality} from './Pages/Speciality';
import { Courses} from './Pages/Courses';
import { Course} from './Pages/Course';
import { Teachers} from './Pages/Teachers';
import { Fragment} from './Pages/Fragment';
import { Login} from './Pages/Login';
import { Register} from './Pages/Register';
import { Page404} from './Pages/Page404';

import { Protected } from './Routes/Protected';
import { Public } from './Routes/Public';
import { Header } from './Organisms/Header';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={
          <Protected >
            <Home/>
          </Protected>}>
        </Route>
        <Route exact path="/especialidades" element={
          <Protected >
            <Specialities/>
          </Protected>}>
        </Route>
        <Route exact path="/especialidades/:id" element={
          <Protected >
            <Speciality/>
          </Protected>}>
        </Route>
        <Route exact path="/cursos" element={
          <Protected >
            <Courses/>
          </Protected>}>
        </Route>
        <Route exact path="/cursos/:id" element={
          <Protected >
            <Course/>
          </Protected>}>
        </Route>
        <Route exact path="/profesores" element={
          <Protected >
            <Teachers/>
          </Protected>}>
        </Route>
        <Route exact path="/clase/:id" element={
          <Protected >
            <Fragment/>
          </Protected>}>
        </Route>

        {/* rutas publicas */}

        <Route exact path="/login" element={
          <Public >
            <Login/>
          </Public>}>
        </Route>
        <Route exact path="/register" element={
          <Public >
            <Register/>
          </Public>}>
        </Route>

        {/*ruta POr defecto */}

        <Route element={<Page404/>}/>
        

      </Routes>
    </Router>
  );
}

export default App;
