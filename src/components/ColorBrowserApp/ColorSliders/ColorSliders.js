import React from 'react';
import './ColorSliders.css';
import ColorSlider from '../ColorSlider/ColorSlider';

const ColorSliders = ({colors, updateColorValue}) => {
    
    console.log('colors', colors);

    return (
        <div>
            {
                colors && colors.map((color, idx) => (
                    <ColorSlider 
                        key={idx}
                        color={color} 
                        updateColorValue={updateColorValue} 
                    />
                ))
            }
        </div>
    )
};
    
export default ColorSliders;