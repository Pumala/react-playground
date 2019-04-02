import React from 'react';
// import './RGBDisplayer.scss';
import styled, { css } from 'styled-components';
import ColorValueDisplayer from '../ColorValueDisplayer/ColorValueDisplayer';

const Container = styled.div`
    // width: 100%;
    // height: 100%;
`

const Box = styled(Container)`
    background: rgb( ${props => props.redVal}, ${props => props.greenVal}, ${props => props.blueVal});
    max-width: 300px;
    max-height: 300px;
    margin: 0 auto;
    width: 300px;
    height: 300px;
`

const Text = styled.p`
    padding: 2rem 0;
    font-weight: bold;
`

const RGBDisplayer = ({ colors }) => {

    const redVal = colors[0].value;
    const greenVal = colors[1].value;
    const blueVal = colors[2].value;

    return (
        <Container className="rgbDisplayer-container">
            <Text>
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
            </Text>
            <Box 
                redVal={redVal}
                greenVal={greenVal}
                blueVal={blueVal}
            >
            </Box>
        </Container>
    )
};

export default RGBDisplayer;