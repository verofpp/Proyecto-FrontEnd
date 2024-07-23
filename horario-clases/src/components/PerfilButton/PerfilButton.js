import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './PerfilButton.css';


const PerfilButton = () => {
  const [iconoColor, setIconoColor] = useState('#21005D');
  const [buttonColor, setButtonColor] = useState('#EADDFF')
  const location = useLocation();

  localStorage.setItem('previousPath_perfil', location.pathname);

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
      to="/signup"
      className='perfil-button'
    >
      <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21 6.18396C21 9.49767 18.3137 12.184 15 12.184C11.6863 12.184 8.99999 9.49767 8.99999 6.18396C8.99999 2.87025 11.6863 0.18396 15 0.18396C18.3137 0.18396 21 2.87025 21 6.18396ZM19 6.18396C19 8.3931 17.2091 10.184 15 10.184C12.7909 10.184 11 8.3931 11 6.18396C11 3.97482 12.7909 2.18396 15 2.18396C17.2091 2.18396 19 3.97482 19 6.18396Z" fill={ iconoColor }/>
        <path d="M15 15.184C8.52561 15.184 3.00927 19.0124 0.907951 24.376C1.41985 24.8843 1.95909 25.3651 2.52328 25.816C4.08802 20.8917 8.99671 17.184 15 17.184C21.0033 17.184 25.912 20.8917 27.4767 25.816C28.0409 25.3651 28.5801 24.8843 29.092 24.376C26.9907 19.0124 21.4744 15.184 15 15.184Z" fill={ iconoColor }/>
      </svg>
    </Link>
  );
}

export default PerfilButton;
