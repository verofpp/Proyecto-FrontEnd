import { useState } from 'react';
import './LinkNuevo.css';
import { Link } from 'react-router-dom';


const LinkNuevo = (props) => {
    const [color, setColor] = useState('#21005D');
    const [decoration, setDecoration] = useState('underline');

    if(props.clase){
        localStorage.setItem('origen', 'clase' );
    }

    return (
        <Link
            style={{ color: color, textDecoration: decoration }}
            onMouseEnter={() => setColor('#49454F')}
            onMouseLeave={() => setColor('#21005D')}
            onMouseDown={() => setDecoration('none')}
            onMouseUp={() => setDecoration('underline')}
            className='link-nuevo'
            to={ props.to }
        >
            { props.content }
        </Link>
    );
}

export default LinkNuevo;
