import { useState } from "react";
import Dropdown from "react-dropdown";

import Header from "../../components/Header/Header";
import InputText from "../../components/InputText/InputText";
import LinkNuevo from "../../components/LinkNuevo/LinkNuevo";
import SaveButton from "../../components/SaveButton/SaveButton";
import CancelButton from "../../components/CancelButton/CancelButton";

import './PerfilPage.css';


const PerfilPage = () => {
    const [rol, setRol] = useState({ value: 'profesor', label: 'Profesor' });
    const [correo, setCorreo] = useState('');
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const opciones = [
        { value: 'profesor', label: 'Profesor' },
        { value: 'director', label: 'Director' }
    ];

    return (
        <div className="registro-container">
            <Header
                back='true'
                link={ localStorage.getItem('previousPath_perfil') } 
            ></Header>
            <div className="form-register">
                <div className="registro-h3-container">
                    <h3 className="registro-h3">Regístrese</h3>
                </div>
                <InputText
                    etiqueta="Correo"
                    name="correo"
                    value={ correo }
                    onChange={ setCorreo }
                ></InputText>
                <InputText
                    etiqueta="Usuario"
                    name="usuario"
                    value={ usuario }
                    onChange={ setUsuario }
                ></InputText>
                <InputText
                    etiqueta="Contraseña"
                    name="password"
                    value={ password }
                    onChange={ setPassword }
                    password='true'
                ></InputText>
                <>
                    { (rol.value != 'director')?
                        <InputText
                            etiqueta="Nombre"
                            name="nombre"
                            value={ nombre }
                            onChange={ setNombre }
                        ></InputText>
                        :
                            <></>
                    }
                </>
                <>
                    { (rol.value != 'director')?
                        <InputText
                            etiqueta="Apellido"
                            name="apellido"
                            value={ apellido }
                            onChange={ setApellido }
                        ></InputText>
                        :
                            <></>
                    }
                </>
                 <div className="input-select">
                    <label className='etiqueta-text'>Rol</label>
                    <Dropdown
                        options={ opciones }
                        onChange={ setRol }
                        value={ rol }
                    ></Dropdown>
                </div>
                <div className="link-registrar">
                    <span className="link-label">¿Ya está registrado?</span>
                    <LinkNuevo to="/login" content='Inicie Sesión'></LinkNuevo>
                </div>
                <div className="form-footer">
                    <SaveButton
                      url="http://localhost:8080/user"
                      body={{
                          correo: correo,
                          usuario: usuario,
                          password: password,
                          nombre: nombre,
                          apellido: apellido,
                          rol: rol.value
                      }}
                      link="/login"
                      label="Crear"
                      componente="perfil"
                    ></SaveButton>
                    <CancelButton
                        link={ localStorage.getItem('previousPath_perfil') }
                    ></CancelButton>
                </div>
            </div>
        </div>
    );
}

export default PerfilPage;
