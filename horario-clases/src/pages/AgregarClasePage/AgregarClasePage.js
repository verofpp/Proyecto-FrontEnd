import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header/Header';
import InputSelect from '../../components/InputSelect/InputSelect';
import SaveButton from '../../components/SaveButton/SaveButton';
import CancelButton from '../../components/CancelButton/CancelButton';

import './AgregarClasePage.css';


const AgregarClasePage = () => {
    const params = useParams();
    const [trimestre, setTrimestre] = useState({});
    const [trimestreOpciones, setTrimestreOpciones] = useState();
    const [semana, setSemana] = useState({ value: 1,  label: 1 });
    const [dia, setDia] = useState({ value: 'lunes',  label: 'Lunes' });


    let enlace;
    switch (localStorage.getItem('origen')) {
        case 'clase':
            enlace  = `/materia/${ params.materia }/${ params.materiaID }/seccion/${ params.seccion }/${ params.seccionID }`;
            break;
        case 'editarActividad':
            enlace  = '/editarActividad/' + localStorage.getItem('idActividad') + '/' + localStorage.getItem('idClase');
            break;
        default:
            enlace = `/materia/${ params.materia }/${ params.materiaID }/seccion/${ params.seccion }/${ params.seccionID }/nuevaActividad`;
      }

    useEffect(() => {
        fetch(`http://localhost:8080/trimesterlist`)
          .then((json) => json.json())
          .then((data) => {
            const array = [];
            for (const {value , label} of data.data) {
                array.push({
                    value: value,
                    label: label
                });
            }
            setTrimestreOpciones(array);
          });
      }, []);

    
    const semanaOpciones = [
        { value: 1,  label: 1 },
        { value: 2,  label: 2 },
        { value: 3,  label: 3 },
        { value: 4,  label: 4 },
        { value: 5,  label: 5 },
        { value: 6,  label: 6 },
        { value: 7,  label: 7 },
        { value: 8,  label: 8 },
        { value: 9,  label: 9 },
        { value: 10,  label: 10 },
        { value: 11,  label: 11 },
        { value: 12,  label: 12 } 
    ];
    const diaOpciones = [
        { value: 'lunes',  label: 'Lunes' },
        { value: 'martes',  label: 'Martes' },
        { value: 'miercoles',  label: 'Miercoles' },
        { value: 'jueves',  label: 'Jueves' },
        { value: 'viernes',  label: 'Viernes' },
        { value: 'sabado',  label: 'Sabado' },
        { value: 'domingo',  label: 'Domingo' }
    ];

    return (
        <div className='evento-container'>
            <Header 
                perfil='true' 
                back='true'
                link={ enlace }
            ></Header>
            <div className='form-container'>
                <div className='h3-container'>
                    <h3 className='h3-evento'>Asignar Clase</h3>
                </div>
                <InputSelect
                    value={ trimestre }
                    setValue={ setTrimestre }
                    opciones={ trimestreOpciones }
                    label="Trimestre"
                    onChange={ setTrimestre }
                ></InputSelect>
                <InputSelect
                    value={ semana }
                    setValue={ setSemana }
                    opciones={ semanaOpciones }
                    label="Semana"
                    onChange={ setSemana }
                ></InputSelect>
                <InputSelect
                    value={ dia }
                    setValue={ setDia }
                    opciones={ diaOpciones }
                    label="Día"
                    onChange={ setDia }
                ></InputSelect>
                <div className='footer-container'>
                    <SaveButton
                        url="http://localhost:8080/classinsert"
                        body={{
                            idSeccion: params.seccionID,
                            idTrimestre: trimestre.value,
                            semana: semana.value,
                            dia: dia.value
                        }}
                        link={ enlace }
                        label="Guardar"
                    ></SaveButton>
                    <CancelButton
                        link={ enlace }
                    >
                    </CancelButton>
                </div>
            </div>
        </div>
    );
}

export default AgregarClasePage;
