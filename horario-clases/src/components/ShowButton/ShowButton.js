import { useState } from 'react';
import './ShowButton.css';


const ShowButton = (props) => {
    const [colorButton, setColorButton] = useState('#FFFFFF');
    const [colorIcon, setColorIcon] = useState('#21005D');

    return (
        <button
            style={{ backgroundColor: colorButton, display: props.display? 'flex' : 'none' }}
            className='show-password'
            onMouseEnter={() => {
                setColorButton('#F5F5F5');
                setColorIcon('#49454F');
            }}
            onMouseLeave={() => {
                setColorButton('#FFFFFF');
                setColorIcon('#21005D');
            }}
            onMouseDown={() => {
                setColorButton('#D9D9D9');
                props.setDisplayPassword('text');
            }}
            onMouseUp={() => {
                setColorButton('#F5F5F5')
                props.setDisplayPassword('password')
            }}
        >
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.25 15C1.25 15 6.25 5 15 5C23.75 5 28.75 15 28.75 15C28.75 15 23.75 25 15 25C6.25 25 1.25 15 1.25 15Z" stroke={ colorIcon } stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 18.75C17.0711 18.75 18.75 17.0711 18.75 15C18.75 12.9289 17.0711 11.25 15 11.25C12.9289 11.25 11.25 12.9289 11.25 15C11.25 17.0711 12.9289 18.75 15 18.75Z" stroke={ colorIcon } stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    );
}

export default ShowButton;