import { Link } from 'react-router-dom';

import './CancelButton.css';


const CancelButton = (props) => {
    return (
        <Link
            className='cancel-button'
            to={ props.link }
        >Cancelar</Link>
    );
}

export default CancelButton;
