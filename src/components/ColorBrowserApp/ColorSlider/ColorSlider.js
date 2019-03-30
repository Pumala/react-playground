import React from 'react';
import './ColorSlider.css';

const ColorSlider = ({color, updateColorValue}) => {

    // console.log('Color Slider level: ', color);
    const { name, value } = color;

    return (
        <div>
            <span>{color.name}</span>
            <input 
                type="range" 
                name={color.name} 
                value={color.value} 
                onChange={(e) => updateColorValue(e)}
                min="0"
                max="255"
            />
            <span>{color.value}</span>
        </div>
    )
};

export default ColorSlider;