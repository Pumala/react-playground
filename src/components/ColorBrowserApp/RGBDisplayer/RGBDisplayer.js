import React from 'react';
import './RGBDisplayer.css';
import ColorValueDisplayer from '../ColorValueDisplayer/ColorValueDisplayer';

const RGBDisplayer = ({colors}) => {

    const redVal = colors[0].value;
    const greenVal = colors[1].value;
    const blueVal = colors[2].value;

    return (
        <div className="rgbDisplayer-container">
            <div style={{ background: `rgb(${redVal}, ${greenVal}, ${blueVal})` }}>
                <p>
                    RGB(
                        {
                            colors.map((color, idx) => (
                                <ColorValueDisplayer
                                    key={idx}
                                    color={color}
                                />
                            ))
                            
                        }
                    )
            </p>
            </div>
        </div>
    )
};

export default RGBDisplayer;