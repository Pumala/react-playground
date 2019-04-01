import React from 'react';
import './ColorSlider.scss';

const ColorSlider = ({color, updateColorValue}) => {

    const { name, value } = color;

    const colorLetter = name.slice(0, 1).toUpperCase();

    return (
        <div className="color-slider">
            <span 
                className="color-name"
            >{colorLetter}</span>
            <input 
                type="range" 
                name={color.name} 
                value={color.value} 
                onChange={(e) => updateColorValue(e)}
                min="0"
                max="255"
            />
            <span
                className="color-value"
            >{color.value}</span>
        </div>
    )
};

export default ColorSlider;