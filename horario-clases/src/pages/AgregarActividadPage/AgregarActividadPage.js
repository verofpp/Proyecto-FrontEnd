import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header/Header';
import InputText from '../../components/InputText/InputText';
import InputSelect from '../../components/InputSelect/InputSelect';
import SaveButton from '../../components/SaveButton/SaveButton';
import CancelButton from '../../components/CancelButton/CancelButton';
import InputTextBox from '../../components/InputTextBox/InputTextBox';

import './AgregarActividadPage.css';


const AgregarActividadPage = () => {
    const [clase, setClase] = useState({});
    const [actividad, setActividad] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [claseOpciones, setClaseOpciones] = useState();
    const params = useParams();

    localStorage.removeItem('origen');

    useEffect(() => {
        fetch(`http://localhost:8080/classesList?idSeccion=${ params.seccionID }`)
          .then((json) => json.json())
          .then((data) => {
            const array = [];

            for (const { idClase, fecha } of data.data) {
                array.push({
                    value: idClase,
                    label: fecha
                });
            }

            setClaseOpciones(array);
          });
      }, []);

    return (
        <div className='actividad-container'>
            <Header 
                perfil="true"
                back="true"
                link={ `/materia/${ params.materia }/${ params.materiaID }/seccion/${ params.seccion }/${ params.seccionID }` }
            ></Header>
            <div className='container-container'>
                <div className='formAgregarActividad-container'>
                    <div className='h3-container'>
                        <h3 className='h3-actividad'>Agregar Actividad</h3>
                    </div>
                    <InputText
                        etiqueta="Actividad"
                        name="actividad"
                        value={ actividad }
                        onChange={ setActividad }
                        setValue={ setActividad }
                    ></InputText>
                    <InputSelect
                        value={ clase }
                        onChange={ setClase }
                        setValue={ setClase }
                        opciones={ claseOpciones }
                        label="Clase"
                        placeholder="Seleccione el Profesor Encargado"
                        content="Asignar clase"
                        link= { `/materia/${params.materia }/${ params.materiaID }/seccion/${ params.seccion }/${ params.seccionID }/nuevaClase` }
                    ></InputSelect>
                    <div className='inputTextBox-container'>
                        <InputTextBox
                            etiqueta="Descripción"
                            name="descripcion"
                            value={ descripcion }
                            onChange={ setDescripcion }
                        ></InputTextBox>
                    </div>
                    <div className='form-footer'>
                    <SaveButton
                        url="http://localhost:8080/activityinsert"
                        body={{
                            idClase: clase.value,
                            actividad: actividad,
                            descripcion: descripcion
                        }}
                        link={ `/materia/${ params.materia }/${ params.materiaID }/seccion/${ params.seccion }/${ params.seccionID }` }
                        label="Guardar"
                    ></SaveButton>
                    <CancelButton
                        link={ `/materia/${ params.materia }/${ params.materiaID }/seccion/${ params.seccion }/${ params.seccionID }` }
                    ></CancelButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AgregarActividadPage;
