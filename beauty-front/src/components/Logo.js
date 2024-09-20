import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logos from './../assets/Images/logoPMU.png';
import { motion } from 'framer-motion';

const Container = styled.div`
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 5;
    a {
        display: flex;
        align-items: flex-end;
    }
`;

const LogoImage = styled(motion.img).attrs(() => ({
    initial: { scale: 0.1, opacity: 0, filter: 'brightness(0.5)' },
    animate: { scale: 1, opacity: 1, filter: 'brightness(1)' },
    transition: {
        duration: 1.5,
        ease: "easeOut",
    },
}))`
    width: 100px;
`;

const Text = styled(motion.span).attrs(() => ({
    initial: { x: -200, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: {
        duration: 2,
        ease: "easeOut",
    },
}))`
    font-size: 1.5em;
    color: #d6c9b3;
    padding-bottom: 1em;
    
`;

const Logo = () => {
    return (
        <Container>
            <Link to='/'>
                <LogoImage src={Logos} alt="Logo" />
                <Text>Aesthetic & Permanent Make up</Text>
            </Link>
        </Container>
    );
};

export default Logo;
