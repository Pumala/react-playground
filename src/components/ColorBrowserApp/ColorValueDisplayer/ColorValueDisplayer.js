import React from 'react';
import './ColorValueDisplayer.css';

const ColorValueDisplayer = ({color}) => {
    return (
        <span>
            {color.value}
            {
                color.name !== 'blue' &&
                ', '
            }
        </span>

    )
};

export default ColorValueDisplayer;