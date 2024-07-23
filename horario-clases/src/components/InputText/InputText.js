import { useState } from 'react';
import ShowButton from '../ShowButton/ShowButton';

import './InputText.css';


const InputText = (props) => {
    const [pass, setType] = useState('password');

    return (
        <div className='input-text'>
            <label className='etiqueta-text'>{ props.etiqueta }</label>
            <div className='text-container'>
                <input
                    style={{
                        borderRadius: props.password? '8px 0px 0px 8px' : '8px'
                    }}
                    className='input-value'
                    type={ props.password? pass : 'text' }
                    name={ props.name }
                    value={ props.value }
                    onChange={(e) => props.onChange(e.target.value)}
                />
                <div className='show-container'>
                    <ShowButton display={ props.password? 'true' : '' } setDisplayPassword={ setType }></ShowButton>
                </div>
            </div>
        </div>
    );
}

export default InputText;
