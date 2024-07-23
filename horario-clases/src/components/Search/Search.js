import { useState } from 'react';

import './Search.css';


const Search = (props) => {
    const [colorInput, setColorInput] = useState('#EADDFF');
    const [colorIcon, setColorIcon] = useState('#21005D');

    return (
        <div
            style={{ backgroundColor: colorInput }}
            className='search-container'
        >
            <input
                style={{ backgroundColor: colorInput }}
                type="text"
                name={ props.name }
                className='search-input'
                onMouseDown={() => {
                    setColorInput('#D1C6E4');
                    setColorIcon('#49454F');
                }}
                onMouseUp={() => {
                    setColorInput('#EADDFF');
                    setColorIcon('#21005D');
                }}
            />
            <div className='iconSearch'>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L16.1667 16.1667M18.7778 9.88889C18.7778 14.7981 14.7981 18.7778 9.88889 18.7778C4.97969 18.7778 1 14.7981 1 9.88889C1 4.97969 4.97969 1 9.88889 1C14.7981 1 18.7778 4.97969 18.7778 9.88889Z" stroke={ colorIcon } stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    );
}

export default Search;
