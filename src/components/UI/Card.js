import React from 'react';
import './Card.css';
const Card = (props) => {
    const classe = "card " + props.className;
    return <div className={classe}>{props.children}</div>;
}

export default Card;