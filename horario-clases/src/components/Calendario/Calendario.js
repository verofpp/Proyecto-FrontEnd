import Calendar from 'react-calendar';
import { useState } from 'react';
import Cookies from 'universal-cookie';


import PreviousButton from '../PreviousButton/PreviousButton';
import NextButton from '../NextButton/NextButton';
import MesButton from '../MesButton/MesButton';
import LinkNuevo from '../LinkNuevo/LinkNuevo';

import getMes from '../../functions/mes';
import getDia from '../../functions/dia';

import './Calendario.css';


const Calendario = (props) => {
    const cookies = new Cookies(null, { path: '/' });
    const [value, onChange] = useState(new Date());
    const mes = getMes(value);
    const fecha = new Date();
    
    const haveRol =  cookies.get('rolUser') && cookies.get('rolUser').toLowerCase() == 'director';
    const haveRolTotal = cookies.get('rolUser') && (cookies.get('rolUser').toLowerCase() == 'director' || cookies.get('rolUser').toLowerCase() == 'profesor');
    return (
        <div className='calendar'>
            <div className='fecha-contenedor'>
                <h2 className='fecha-actual'>{ getDia(fecha) }, { fecha.getDate() } de { getMes(fecha) }</h2>
            </div>
            <hr className='linea' />
            <div className='control-container'>
                <div className='control'>
                    <MesButton month={ mes } year={ value.getFullYear() }></MesButton>
                    <div className='cambio-mes-botones'>
                        <PreviousButton fecha={ value } setMonth={ onChange }></PreviousButton>
                        <NextButton fecha={ value } setMonth={ onChange }></NextButton>
                    </div>
                </div>
            </div>
            <div className='dias'>
                <Calendar onChange={ onChange } value={ value }></Calendar>
            </div>
            <div className='footer-container'>
                <div className='footer-calendar'>
                    { haveRol && props.trimestre && <LinkNuevo content='Crear Trimestre' to={ props.link }></LinkNuevo> }
                    { haveRol && props.evento && <LinkNuevo content='Asignar Evento' to={ props.linkevent }></LinkNuevo> }
                    { haveRolTotal && props.clase && <LinkNuevo content='Asignar Clase' to={ props.link } clase="true"></LinkNuevo> }
                </div>
            </div>
        </div>
    );
}

export default Calendario;
