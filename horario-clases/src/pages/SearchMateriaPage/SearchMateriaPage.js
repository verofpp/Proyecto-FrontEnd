import { useEffect, useState } from 'react';
import ElementoButton from '../../components/ElementoButton/ElementoButton';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';

import './SearchMateriaPage.css';


const SearchMateriaPage = () => {
    const [materias, setMaterias] = useState();
    const [materiasr, setMateriasr] = useState();
    const [colorInput, setColorInput] = useState('#EADDFF');
    const [colorIcon, setColorIcon] = useState('#21005D');

    useEffect(() => {
      fetch('http://localhost:8080/subjectsdashboard')
        .then((json) => json.json())
        .then((data) => {
          const array = [];
          for (const { idMateria, nombre, siglas, total } of data.data) {
            array.push(
              <ElementoButton
                link={ `http://localhost:3000/materia/${ nombre }/${ idMateria }` }
                codigo={ siglas }
                nombre={ nombre }
                span={ `${ total } Secciones` }
              ></ElementoButton>
            );
          }

          if(array.length == 0){
            const message = "Aun no se han registrado materias";
            array.push(
                <Card
                    message = { `${ message }` }
                ></Card>
            );
            }
          setMaterias(array);
          setMateriasr(data.data);
        });
    }, []);

    const handleInputChange = (event) => {
        const array = [];
        const texto = (event.target.value).toLowerCase();
        if(texto != ''){
            for (const  { idMateria, nombre, siglas, total } of materiasr) {
                if(nombre.toLowerCase().includes(texto)){
                    array.push(
                        <ElementoButton
                          link={ `http://localhost:3000/materia/${ nombre }/${ idMateria }` }
                          codigo={ siglas }
                          nombre={ nombre }
                          span={ `${ total } Secciones` }
                        ></ElementoButton>
                      );
                }
            }

            if(array.length == 0){
                const message = "No existe coincidencia con: '" + texto +  "'";
                array.push(
                    <Card
                        message = { `${ message }` }
                    ></Card>
                );
            }
            setMaterias(array);
        }else{
            for (const { idMateria, nombre, siglas, total } of materiasr) {
                array.push(
                  <ElementoButton
                    link={ `http://localhost:3000/materia/${ nombre }/${ idMateria }` }
                    codigo={ siglas }
                    nombre={ nombre }
                    span={ `${ total } Secciones` }
                  ></ElementoButton>
                );
              }
            setMaterias(array);
        }
    }

    return (
        <div className='searchPage-container'>
            <Header perfil="true" back="true" link="/"></Header>
            <div
                style={{ backgroundColor: colorInput }}
                className='search-container'
            >
                <input
                    style={{ backgroundColor: colorInput }}
                    type="text"
                    className='search-input'
                    onMouseDown={() => {
                        setColorInput('#D1C6E4');
                        setColorIcon('#49454F');
                    }}
                    onMouseUp={() => {
                        setColorInput('#EADDFF');
                        setColorIcon('#21005D');
                    }}
                    onChange={(event) => handleInputChange(event)}
                />
                <div className='iconSearch'>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 21L16.1667 16.1667M18.7778 9.88889C18.7778 14.7981 14.7981 18.7778 9.88889 18.7778C4.97969 18.7778 1 14.7981 1 9.88889C1 4.97969 4.97969 1 9.88889 1C14.7981 1 18.7778 4.97969 18.7778 9.88889Z" stroke={ colorIcon } stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div className='materias-list'>
                { materias }
            </div>
        </div>
    );
}

export default SearchMateriaPage;
