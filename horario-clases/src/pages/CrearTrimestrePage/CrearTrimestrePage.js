import { useState } from 'react';

import InputDate from '../../components/InputDate/InputDate';
import Header from '../../components/Header/Header';
import SaveButton from '../../components/SaveButton/SaveButton';
import CancelButton from '../../components/CancelButton/CancelButton';

import './CrearTrimestrePage.css';


const CrearTrimestrePage = () => {
    const [inicio, setInicio] = useState('');
    const [fin, setFin] = useState('');
    

    return (
        <div className='trimestre-container'>
            <Header
                perfil='true'
                back='true'
                link="/"
            ></Header>
            <div className='form-container'>
                <div className='h3-container'>
                    <h3 className='h3-trimestre'>Crear Trimestre</h3>
                </div>
                <InputDate
                    etiqueta="inicio"
                    name="inicio"
                    onChange={ setInicio }
                    value={ inicio }
                ></InputDate>
                <InputDate
                    etiqueta="fin"
                    name="fin"
                    onChange={ setFin }
                    value={ fin }
                ></InputDate>
                <div className='form-footer'>
                    <SaveButton
                        url="http://localhost:8080/trimesterinsert"
                        body={
                            {
                                inicio: inicio,
                                fin: fin
                            }
                        }
                        link="/"
                        label="Crear"
                        componente="trimestre"
                    ></SaveButton>
                    <CancelButton
                        link="/"
                    ></CancelButton>
                </div>
            </div>
        </div>
    );
}

export default CrearTrimestrePage;
