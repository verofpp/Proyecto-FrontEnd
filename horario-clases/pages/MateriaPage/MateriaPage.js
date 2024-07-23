import { useParams } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Add from '../../components/Add/Add';
import Card from '../../components/Card/Card';
import ElementoButton from '../../components/ElementoButton/ElementoButton';
import Cookies from 'universal-cookie';

import './MateriaPage.css';
import { useEffect, useState } from 'react';


const MateriaPage = (props)  => {
  const cookies = new Cookies(null, { path: '/' });
  const haveRol =  cookies.get('rolUser') && cookies.get('rolUser').toLowerCase() == 'director';
  const [secciones, setSecciones] = useState();
  const params = useParams();

    localStorage.removeItem('origen');

    useEffect(() => {
        fetch(`http://localhost:8080/sectionslist?idMateria=${ params.materiaID }`)
          .then((json) => json.json())
          .then((data) => {
            const array = [];
            if(data.status == 200){
              for (const { idSeccion, siglas, nombre, profesor, totalActividades } of data.data) {
                 const span = profesor + " [ " + totalActividades + " Actividades ]";
                array.push(
                  <ElementoButton
                    link={ `http://localhost:3000/materia/${ params.materia }/${ params.materiaID }/seccion/${ nombre }/${ idSeccion }` }
                    codigo={ siglas }
                    nombre={ nombre }
                    span={ span }
                  ></ElementoButton>
                );
              }

              if(array.length == 0){
                array.push(
                    <Card
                        message="Aun no tiene secciones creadas"
                    ></Card>
                );
              }
            }else{
              if(array.length == 0){
                array.push(
                    <Card
                        message="Error en el servicio"
                    ></Card>
                );
              }
            }
            setSecciones(array);
          });
      }, []);

    return (
        <div className='materiaPage-container'>
            <Header
                perfil="true"
                back="true"
                link={ `http://localhost:3000` }></Header>
            <div className='h2-container'>
                <h2 className='h2-materia'>{ params.materia }</h2>
            </div>
            <div className='body-container'>
                <div className='header-container'>
                    <h3 className='h3-secciones'>Secciones</h3>
                    <>
                      { (haveRol)? <Add link={`/materia/${ params.materia }/${ params.materiaID }/nuevaSeccion`}></Add> : <></> }
                    </>
                </div>
                <div className='secciones-list'>
                    { secciones }
                </div>
            </div>
        </div>
    );
}

export default MateriaPage;
