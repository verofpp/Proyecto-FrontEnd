import { useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

import './LogoutButton.css';


const LogoutButton = () => {
  const [iconoColor, setIconoColor] = useState('#21005D');
  const [buttonColor, setButtonColor] = useState('#EADDFF')
  const cookies = new Cookies(null, { path: '/' });
  

  

  return (
    <button
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
      onClick={() => { 
        cookies.remove('rolUser');
        cookies.remove('idUser');
        window.open('http://localhost:3000/', '_self');
      }}
      className='perfil-button'
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill={ iconoColor }>
        <path d="M186.67-120q-27 0-46.84-19.83Q120-159.67 120-186.67v-586.66q0-27 19.83-46.84Q159.67-840 186.67-840h292.66v66.67H186.67v586.66h292.66V-120H186.67Zm470.66-176.67-47-48 102-102H360v-66.66h351l-102-102 47-48 184 184-182.67 182.66Z"/>
      </svg>
    </button>
  );
}

export default LogoutButton;
