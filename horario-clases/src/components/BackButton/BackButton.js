import { useState } from 'react';
import { Link } from 'react-router-dom';

import './BackButton.css';


const BackButton = (props) => {
  const [iconoColor, setIconoColor] = useState('#21005D');
  const [buttonColor, setButtonColor] = useState('#EADDFF')

  return (
    <Link
      style={{ backgroundColor: buttonColor }}
      onMouseEnter={() => {
        setIconoColor('#49454F');
        setButtonColor('#DACDED');
      }}
      onMouseLeave={() => {
        setIconoColor('#21005D');
        setButtonColor('#EADDFF');
      }}
      onMouseDown={() => {
        setButtonColor('#D1C6E4');
      }}
      to={ props.link }
      className='back-button'
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.75 10H1.25M1.25 10L10 18.75M1.25 10L10 1.25" stroke={ iconoColor } stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </Link>
  );
}

export default BackButton;
