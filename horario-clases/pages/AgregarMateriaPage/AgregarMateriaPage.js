import { useState } from 'react';

import Header from '../../components/Header/Header';
import InputText from '../../components/InputText/InputText';
import SaveButton from '../../components/SaveButton/SaveButton';
import CancelButton from '../../components/CancelButton/CancelButton';

import './AgregarMateriaPage.css';


const AgregarMateriaPage = () => {
    const [materia, setMateria] = useState('');

    return (
        <div className='materia-container'>
            <Header perfil="true" back="true" link="/"></Header>
            <div className='form-container'>
                <div className='h3-container'>
                    <h3 className='h3-materia'>Registrar Materia</h3>
                </div>
                <InputText
                    name="materia"
                    etiqueta="Materia"
                    value={ materia }
                    onChange={ setMateria }
                ></InputText>
                <div className='form-footer'>
                    <SaveButton
                        url="http://localhost:8080/subjectinsert"
                        body={{ materia }}
                        link="/"
                        label="Guardar"
                    ></SaveButton>
                    <CancelButton
                        link="/"
                    ></CancelButton>
                </div>
            </div>
        </div>
    );
}

export default AgregarMateriaPage;
