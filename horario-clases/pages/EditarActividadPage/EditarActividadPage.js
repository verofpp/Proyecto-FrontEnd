import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from '../../components/Header/Header';
import InputText from '../../components/InputText/InputText';
import InputSelect from '../../components/InputSelect/InputSelect';
import SaveButton from '../../components/SaveButton/SaveButton';
import CancelButton from '../../components/CancelButton/CancelButton';
import InputTextBox from '../../components/InputTextBox/InputTextBox';

import './EditarActividadPage.css';


const EditarActividadPage = () => {
    const [actividad, setActividad] = useState();
    const [descripcion, setDescripcion] = useState();
    const [clase, setClase] = useState({});
    const [id, setId] = useState();
    const [claseOpciones, setClaseOpciones] = useState();
    const [materia, setMateria] = useState();
    const [materiaID, setMateriaID] = useState({});
    const [seccion, setSeccion] = useState();
    const [seccionID, setSeccionID] = useState({});
    const params = useParams();

    useEffect(() => {
        localStorage.removeItem('idClase');
        localStorage.removeItem('idActividad');
        localStorage.setItem('origen', 'editarActividad' );
        fetch(`http://localhost:8080/classeslistActivity?idActividad=${ params.actividadID }`)
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
            const result = array.find((x) => x.value == params.claseID);
            setClase(result);
          });
        
        fetch(`http://localhost:8080/activitylist?idActividad=${ params.actividadID }`)
          .then((json) => json.json())
          .then((data) => {
            if(data.status == 200 && data.data.length > 0){
                const x = data.data[0];
                setId(x.idActividad);
                setActividad(x.actividad);
                setDescripcion(x.descripcion);
                setMateria(x.materia);
                setMateriaID(x.idMateria);
                setSeccion(x.seccion);
                setSeccionID(x.idSeccion);
                localStorage.setItem('idClase', x.idClase );
                localStorage.setItem('idActividad', x.idActividad );
            }
          });
        }, []);

    return (
        <div className='actividad-container'>
            <Header 
                perfil="true" 
                back="true"
                link= { `/actividad/${ params.actividadID }` }
            ></Header>
            <div className='container-container'>
                <div className='formActividad-container'>
                    <div className='h3-container'>
                        <h3 className='h3-actividad'>Editar Actividad</h3>
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
                        content="Asignar clase"
                        link= { `/materia/${ materia }/${ materiaID }/seccion/${ seccion }/${ seccionID }/nuevaClase` }
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
                            id: id,
                            idClase: clase.value,
                            actividad: actividad,
                            descripcion: descripcion
                        }}
                        link= { `/actividad/${ params.actividadID }` }
                        label="Guardar"
                    ></SaveButton>
                    <CancelButton
                        link= { `/actividad/${ params.actividadID }` }
                    ></CancelButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditarActividadPage;
