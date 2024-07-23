import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from '../../components/Header/Header';
import EditButton from '../../components/EditButton/EditButton';
import Cookies from 'universal-cookie';

import './ActividadPage.css';


const ActividadPage = () => {
    const cookies = new Cookies(null, { path: '/' });
    const haveRol =  cookies.get('rolUser') && (cookies.get('rolUser').toLowerCase() == 'director' || cookies.get('rolUser').toLowerCase() == 'profesor');
    const [actividad, setActividad] = useState();
    const [clase, setClase] = useState();
    const [descripcion, setDescripcion] = useState();
    const [fecha, setFecha] = useState();
    const params = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/activitylist?idActividad=${ params.actividadID }`)
          .then((json) => json.json())
          .then((data) => {
            if(data.status == 200 && data.data.length > 0){
                const x = data.data[0];
                setActividad(x.actividad);
                setClase(x.idClase);
                setDescripcion(x.descripcion);
                setFecha(x.fecha);
            }
          });
      }, []);

    return (
        <div className='actividadPage-container'>
            <Header
                perfil="true"
                back="true"
                link={ localStorage.getItem('previousPath_activity') } 
            ></Header>
            <div className='datos-container'>
                <div className='datos-actividad'>
                    <h2 className='actividad-dato'> { actividad  } </h2>
                    <span className='actividad-fecha'> { fecha } </span>
                </div>
                <div>
                <>
                    { (haveRol)? 
                         <EditButton
                            link={ `/editarActividad/${ params.actividadID }/${ clase }`}
                         ></EditButton>
                        : 
                        <></> 
                    }
                </>
                   
                </div>
            </div>
            <p>{ descripcion }</p>
        </div>
    );
}

export default ActividadPage;
