import { useState } from 'react';

import './Card.css';


const Card = (props) => {

    return (
        <div className="card">
            <h1> { props.message } </h1>
      </div>
    );
}

export default Card;
