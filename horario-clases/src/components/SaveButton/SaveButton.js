import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

import './SaveButton.css';


const  SaveButton = (props) => {
    const cookies = new Cookies(null, { path: '/' });

    let enviarPeticion = true;
    
    for(const x of Object.keys(props.body)){
        if(!(props.componente && props.componente == 'perfil' && props.body.rol == 'director' && (x == 'nombre' ) || x == 'apellido')){
            if((props.body[x] == '')) enviarPeticion = false;
        }
    }
   
    if(enviarPeticion){
        return (
            <Link
                className='save-button'
                onClick={ () => {
                    if(props.componente == 'sesion') props.body.password = btoa(props.body.password);
                     fetch(props.url, {
                        method: "POST",
                        mode: "cors",
                        cache: "no-cache",
                        credentials: "same-origin",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(props.body),
                    })
                    .then((json) => json.json())
                    .then((data) => {
                        if(props.componente && props.componente == 'sesion' &&  data.status == 200){
                            cookies.set('idUser', data.data.idUser);
                            cookies.set('rolUser', data.data.rolUser);
                        }
                    });
                }}
                to={ props.link }
            > { props.label } </Link>
        );
    }else{
        return (
            <button
                className='save-button-disable'
                disabled='true'
            > { props.label } </button>
        );
    }
   
}

export default SaveButton;
