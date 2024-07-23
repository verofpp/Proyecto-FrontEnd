import { useState } from 'react';
import { Link } from 'react-router-dom';
import './EditButton.css';


const EditButton = (props) => {
    const [colorButton, setColorButton] = useState('#EADDFF');
    const [colorIcon, setColorIcon] = useState('#21005D');

    return (
        <Link
            style={{ backgroundColor: colorButton }}
            className='edit-button'
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
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 18.8333H19.875M15.1875 1.64584C15.6019 1.23143 16.1639 0.998627 16.75 0.998627C17.0402 0.998627 17.3275 1.05578 17.5956 1.16683C17.8637 1.27788 18.1073 1.44064 18.3125 1.64584C18.5177 1.85103 18.6805 2.09462 18.7915 2.36272C18.9026 2.63081 18.9597 2.91815 18.9597 3.20834C18.9597 3.49852 18.9026 3.78586 18.7915 4.05395C18.6805 4.32205 18.5177 4.56564 18.3125 4.77084L5.29167 17.7917L1.125 18.8333L2.16667 14.6667L15.1875 1.64584Z" stroke={ colorIcon } stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </Link>
    );
}

export default EditButton;
