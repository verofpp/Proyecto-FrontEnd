import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Add.css';

const Add = (props) => {
    const [colorButton, setColorButton] = useState('#EADDFF');
    const [colorIcon, setColorIcon] = useState('#21005D');

    return (
        <Link
            style={{ backgroundColor: colorButton }}
            className='add-button'
            onMouseEnter={() => {
                setColorButton('#DACDED');
                setColorIcon('#49454F');
            }}
            onMouseLeave={() => {
                setColorButton('#EADDFF');
                setColorIcon('#21005D');
            }}
            onMouseDown={() => {
                setColorButton('#D1C6E4');
                setColorIcon('#49454F');
            }}
            to={ props.link }
        >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 1.25V18.75M1.25 10H18.75" stroke={ colorIcon } stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </Link>
    );
}

export default Add;
