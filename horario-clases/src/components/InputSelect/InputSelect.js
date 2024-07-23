import Dropdown from 'react-dropdown';

import LinkNuevo from '../LinkNuevo/LinkNuevo';

import './InputSelect.css';


const InputSelect = (props) => {
    return (
        <div className="input-select">
            <div className='label-container'>
                <label className='etiqueta-text'>{ props.label }</label>
                { props.link && <LinkNuevo to={props.link } content={ props.content }></LinkNuevo> }
            </div>
            <Dropdown
                options={ props.opciones }
                onChange={ props.setValue }
                value={ props.value }
                placeholder={ props.placeholder }
            ></Dropdown>
        </div>
    );
}

export default InputSelect;
