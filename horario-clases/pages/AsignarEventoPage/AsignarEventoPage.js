import { useEffect, useState } from 'react';

import Header from '../../components/Header/Header';
import InputSelect from '../../components/InputSelect/InputSelect';
import SaveButton from '../../components/SaveButton/SaveButton';
import CancelButton from '../../components/CancelButton/CancelButton';
import InputTextBox from '../../components/InputTextBox/InputTextBox';

import './AsignarEventoPage.css';


const AsignarEventoPage = () => {
    const [trimestre, setTrimestre] = useState({ value: '',  label: "Seleccione el trimestre"});
    const [trimestreOpciones, setTrimestreOpciones] = useState();
    const [semana, setSemana] = useState({ value: '',  label: "Seleccione la semana"});
    const [dia, setDia] = useState({ value: '',  label: "Seleccione el dia" });
    const [motivo, setMotivo] = useState('');

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

    return (
        <div className='evento-container'>
            <Header
                perfil='true'
                back='true'
                link="/"
            ></Header>
            <div className='form-container'>
                <div className='h3-container'>
                    <h3 className='h3-evento'>Asignar Evento</h3>
                </div>
                <InputSelect
                    value={ trimestre }
                    setValue={ setTrimestre }
                    onChange={ setTrimestre }
                    opciones={ trimestreOpciones }
                    label="Trimestre"
                ></InputSelect>
                <InputSelect
                    value={ semana }
                    setValue={ setSemana }
                    onChange={ setSemana }
                    opciones={ semanaOpciones }
                    label="Semana"
                ></InputSelect>
                <InputSelect
                    value={ dia }
                    setValue={ setDia }
                    onChange={ setDia }
                    opciones={ diaOpciones }
                    label="Día"
                ></InputSelect>
                <div className='inputTextBox-container'>
                    <InputTextBox
                        etiqueta="Motivo"
                        name="motivo"
                        value={ motivo }
                        onChange={ setMotivo }
                        setValue={ setMotivo }
                    ></InputTextBox>
                </div>
                <div className='footer-container'>
                    <SaveButton
                        url="http://localhost:8080/eventinsert"
                        body={{
                          idTrimestre: trimestre.value,
                          semana: semana.value,
                          dia: dia.value,
                          motivo: motivo
                        }}
                        link="/"
                        label="Guardar"
                        componente="evento"
                    ></SaveButton>
                    <CancelButton
                        link="/"
                    ></CancelButton>
                </div>
            </div>
        </div>
    );
}

export default AsignarEventoPage;
