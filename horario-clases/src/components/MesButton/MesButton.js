import { useState } from "react";
import "./MesButton.css"


const MesButton = (props) => {
    const [buttonColor, setButtonColor] = useState('#EADDFF');

    return (
        <button
            style={{ backgroundColor: buttonColor }}
            onMouseEnter={() => setButtonColor('#DED2F1') }
            onMouseLeave={() => setButtonColor('#EADDFF') }
            className="mes-button"
        >
            <p>{ props.month } { props.year }</p>
        </button>
    );
}

export default MesButton;