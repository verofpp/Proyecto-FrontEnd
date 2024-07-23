import { useState } from "react";
import Header from '../../components/Header/Header';
import InputText from '../../components/InputText/InputText';
import LinkNuevo from '../../components/LinkNuevo/LinkNuevo';
import SaveButton from '../../components/SaveButton/SaveButton';
import CancelButton from '../../components/CancelButton/CancelButton';

import './SesionPage.css';


const  SesionPage = () => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <div className='sesion-container'>
            <Header
                back="true"
                link={ localStorage.getItem('previousPath_perfil') }
            ></Header>
            <div className='form-container'>
                <div className='h3-container'>
                    <h3 className='h3-sesion'>Inicie Sesión</h3>
                </div>
                <InputText 
                    etiqueta="Usuario"
                    name="usuario"
                    onChange={ setUsuario }
                    value={ usuario }
                ></InputText>
                <InputText
                    etiqueta="Contraseña"
                    name="password"
                    password="true"
                    onChange={ setPassword }
                    value={ password }
                ></InputText>
                <div className='link-sesion'>
                    <span className='link-label'>¿No está registrado?</span>
                    <LinkNuevo  to="/signup" content='Regístrese'></LinkNuevo>
                </div>
                <div className='form-footer'>
                    <SaveButton
                        url="http://localhost:8080/login"
                        body={{
                          usuario: usuario,
                          password: password
                        }}
                        link={ localStorage.getItem('previousPath_perfil') }
                        label="Iniciar sesión"
                        componente="sesion"
                    ></SaveButton>
                    <CancelButton
                        link={ localStorage.getItem('previousPath_perfil') }
                    ></CancelButton>
                </div>
            </div>
        </div>
    );
}

export default SesionPage;
