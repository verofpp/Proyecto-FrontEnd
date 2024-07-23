import Header from '../../components/Header/Header';
import Calendario from '../../components/Calendario/Calendario';
import ElementoButton from '../../components/ElementoButton/ElementoButton';
import Add from '../../components/Add/Add';
import Cookies from 'universal-cookie';

import './Landing.css';
import { useEffect, useState } from 'react';

const Landing = () => {
  const cookies = new Cookies(null, { path: '/' });
  const haveRol =  cookies.get('rolUser') && cookies.get('rolUser').toLowerCase() == 'director';
  const [materias, setMaterias] = useState();

  useEffect(() => {
    fetch('http://localhost:8080/subjectsdashboard')
      .then((json) => json.json())
      .then((data) => {
        const array = [];

        for (const { idMateria, nombre, siglas, total } of data.data) {
          array.push(
            <ElementoButton
              link={ `http://localhost:3000/materia/${ nombre }/${ idMateria }` }
              codigo={ siglas }
              nombre={ nombre }
              span={ `${ total } Secciones` }
            ></ElementoButton>
          );
        }

        setMaterias(array);
      });
  }, []);


  return (
    <div className='container'>
      <Header search="true" perfil="true"></Header>
      <div className='cuerpo-container'>
        <div className='materia-listado'>
          <div className='materias-header'>
            <h3>Materias Registradas</h3>
            <>
              { (haveRol)? <Add link="/nuevaMateria"></Add> : <></> }
            </>
          </div>
          <div className='materias'>
            { materias }
          </div>
        </div>
        <Calendario
          trimestre="true"
          evento="true"
          link="/nuevoTrimestre"
          linkevent="/nuevoEvento"
        ></Calendario>
      </div>
    </div>
  );
}

export default Landing;
