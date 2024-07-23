import { useParams } from 'react-router-dom';

import ElementoButton from '../../components/ElementoButton/ElementoButton';
import Card from '../../components/Card/Card';
import Add from '../../components/Add/Add';
import Header from '../../components/Header/Header';
import Calendario from '../../components/Calendario/Calendario';
import Cookies from 'universal-cookie';

import './ActividadesPage.css';
import { useEffect, useState } from 'react';



const ActividadesPage = () => {
    const cookies = new Cookies(null, { path: '/' });
    const haveRol = cookies.get('rolUser') && (cookies.get('rolUser').toLowerCase() == 'director' || cookies.get('rolUser').toLowerCase() == 'profesor');
    const [actividades, setActividades] = useState();

    const params = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/activitieslist?idSeccion=${ params.seccionID }`)
          .then((json) => json.json())
          .then((data) => {
            const array = [];

            for (const { actividad, siglas, fecha, idActividad } of data.data) {
              array.push(
                <ElementoButton
                  link={ `http://localhost:3000/actividad/${ idActividad }` }
                  codigo={ siglas }
                  nombre={ actividad }
                  span={ fecha }
                ></ElementoButton>
              );
            }

            if(array.length == 0){
                array.push(
                    <Card
                        message="Aun no tiene actividades asignadas"
                    ></Card>
                );
            }

            setActividades(array);
          });
      }, []);

    return (
        <div className='actividades-container'>
            <Header
                perfil="true"
                back="true"
                link={ `/materia/${ params.materia }/${ params.materiaID }` }
            ></Header>
            <div className='body-container'>
                <div className='h1-container'>
                    <h1 className='h1-seccion'>{ params.materia }- { `Seccion ${ params.seccion }` }</h1>
                </div>
                <div className='list-calendar'>
                    <div className='actividades-list'>
                        <div className='actividades-header'>
                            <h3 className='actividades-h3'>Actividades</h3>
                            <>
                                { (haveRol)? <Add link={ `/materia/${ params.materia }/${ params.materiaID }/seccion/${ params.seccion }/${ params.seccionID }/nuevaActividad` }></Add> : <></> }
                            </>
                        </div>
                        <div className='actividadesButton-list'>
                            { actividades }
                        </div>
                    </div>
                    <Calendario
                        clase="true"
                        link= { `/materia/${params.materia }/${ params.materiaID }/seccion/${ params.seccion }/${ params.seccionID }/nuevaClase` }
                    ></Calendario>
                </div>
            </div>
        </div>
    );
}

export default ActividadesPage;