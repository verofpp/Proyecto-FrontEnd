import { useState } from "react";
import "./NextButton.css";


const NextButton = (props) => {
    const [buttonColor, setButtonColor] = useState('#EADDFF');
    const fecha = new Date(props.fecha);

    fecha.setMonth(props.fecha.getMonth() + 1);

    return (
        <button
            style={{ backgroundColor: buttonColor }}
            onMouseEnter={() => setButtonColor('#DED2F1')}
            onMouseLeave={() => setButtonColor('#EADDFF')}
            onClick={() => props.setMonth(fecha)}
            className="calendar-button"
        >
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6L4.6 6Z" fill="#49454F"/>
            </svg>
        </button>
    );
}

export default NextButton;