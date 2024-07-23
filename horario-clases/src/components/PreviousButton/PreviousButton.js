import { useState } from 'react';
import './PreviousButton.css';


const PreviousButton = (props) => {
    const [buttonColor, setButtonColor] = useState('#EADDFF');
    const fecha = new Date(props.fecha);
    
    fecha.setMonth(props.fecha.getMonth() - 1);
    
    return (
        <button
            style={{ backgroundColor: buttonColor }}
            onMouseEnter={() => setButtonColor('#DED2F1')}
            onMouseLeave={() => setButtonColor('#EADDFF')}
            onClick={() => props.setMonth(fecha)}
            className='calendar-button'
        >
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12L0 6L6 0L7.4 1.4L2.8 6L7.4 10.6L6 12Z" fill="#49454F"/>
            </svg>
        </button>
    );
}

export default PreviousButton;
