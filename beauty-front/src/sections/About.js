import React from 'react';
import styled from "styled-components";


const Section = styled.section`
position: relative;
min-height: 100vh;
    overflow: hidden;
`;
const Title = styled.h1`
font-size: ${props => props.theme.fontbig};
font-family: 'Kaushan Script';
    font-weight: 300;
    position: absolute;
    top: 1rem;
    z-index: 5;
    display: flex;
`;
const Left = styled.div`
width: 50%;
`;
const Right = styled.div`
width: 50%;
`;
const About = () => {
    return (
        <Section>
            <Title data-scroll data-scroll-speed='-2' data-scroll-direction="horizont">
                About Me
            </Title>
            <Left>
                Text
            </Left>
            <Right>
                Image
            </Right>
        </Section>
    );
};

export default About;