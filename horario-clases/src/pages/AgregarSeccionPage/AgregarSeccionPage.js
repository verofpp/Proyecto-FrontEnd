import {  useParams } from 'react-router-dom';

import Header from '../../components/Header/Header';
import InputSelect from '../../components/InputSelect/InputSelect';
import SaveButton from '../../components/SaveButton/SaveButton';
import CancelButton from '../../components/CancelButton/CancelButton';
import InputText from '../../components/InputText/InputText';

import './AgregarSeccionPage.css';
import { useEffect, useState } from 'react';


const AgregarSeccionPage = () => {
    const params = useParams();
    const [profesores, setProfesores] = useState();
    const [profesor, setProfesor] = useState({});
    const [seccion, setSeccion] = useState('');

    useEffect(() => {
        fetch(`http://localhost:8080/professors`)
          .then((json) => json.json())
          .then((data) => {
            const array = [];
            for (const { idProfe, fullName } of data.data) {
                array.push({
                    value: idProfe,
                    label: fullName
                });
            }
            setProfesores(array);
          });
      }, []);


    return (
        <div className='seccion-container'>
            <Header
                perfil='true'
                back='true'
                link={ `/materia/${ params.materia }/${ params.materiaID }` }
            ></Header>
            <div className='form-container'>
                <div className='h3-container'>
                    <h3 className='h3-clase'>Asignar Sección</h3>
                </div>
                <InputText
                    etiqueta="Sección"
                    name="seccion"
                    value={ seccion }
                    onChange={ setSeccion }
                ></InputText>
                <InputSelect
                    value={ profesor }
                    setValue={ setProfesor }
                    opciones={ profesores }
                    label="Profesor Encargado"
                    placeholder="Seleccione el Profesor Encargado"
                ></InputSelect>
                <div className='footer-container'>
                    <SaveButton
                        url="http://localhost:8080/sectioninsert"
                        body={{
                            seccion: seccion,
                            idMateria: params.materiaID,
                            idProfe: profesor.value
                        }}
                        link={ `/materia/${ params.materia }/${ params.materiaID }` }
                        label="Guardar"
                    ></SaveButton>
                    <CancelButton
                        link={ `/materia/${ params.materia }/${ params.materiaID }` }
                    ></CancelButton>
                </div>
            </div>
        </div>
    );
}

export default AgregarSeccionPage;
