import React from 'react';
import './ColorSliders.scss';
import ColorSlider from '../ColorSlider/ColorSlider';

const ColorSliders = ({colors, updateColorValue}) => {

    return (
        <div className="color-sliders">
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