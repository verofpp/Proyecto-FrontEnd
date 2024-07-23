import { useState } from 'react';
import { Link } from 'react-router-dom';

import './SearchButton.css';


const SearchButton = () => {
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
      to="/search/materia"
      className='search-button'
    >
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 21L16.1667 16.1667M18.7778 9.88889C18.7778 14.7981 14.7981 18.7778 9.88889 18.7778C4.97969 18.7778 1 14.7981 1 9.88889C1 4.97969 4.97969 1 9.88889 1C14.7981 1 18.7778 4.97969 18.7778 9.88889Z" stroke={ iconoColor } stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </Link>
  );
}

export default SearchButton;
