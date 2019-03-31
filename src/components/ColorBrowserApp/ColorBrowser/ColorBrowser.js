import React, { useState } from 'react';
import './ColorBrowser.scss';
import ColorSliders from '../ColorSliders/ColorSliders';
import RGBDisplayer from '../RGBDisplayer/RGBDisplayer';

const ColorBrowser = () => {

    const initialColorValues = [
        {
            name: 'red',
            value: 100
        },
        {
            name: 'green',
            value: 168
        }, {
            name: 'blue',
            value: 80
        }
    ];

    const title = 'Color Browser';

    const [colors, setColorValues] = useState(initialColorValues);

    const updateColorValue = (e) => {

        e.persist();

        const colorName = e.target.name;
        const newValue = parseInt(e.target.value);

        setColorValues(colorValues => {
            const colors = colorValues.map(color => {
                if (color.name === colorName) {
                    return {
                        ...color,
                        value: newValue
                    }
                }
                return color;
            });
            return colors;
        });

    }

    return (
        <div className="color-browser-app">
            <div className="content">
                <h1>{title}</h1>
                <ColorSliders colors={colors} updateColorValue={updateColorValue} />
                <RGBDisplayer colors={colors} />
            </div>
        </div>
    )
};

export default ColorBrowser;