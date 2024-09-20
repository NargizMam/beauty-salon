import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavContainer = styled(motion.div)`
    width: 100vw;
    z-index: 6;
    position: absolute;
    top: ${props => (props.click ? '0' : `-${props.theme.navHeight}`)};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
`;

const MenuBtn = styled(motion.li)`
    background-color: ${props => `rgba(${props.theme.textRgba}, 0.7)`};
    list-style-type: none;
    color: ${props => props.theme.body};
    width: 15rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 99%);
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    font-size: ${props => props.theme.fontmd};
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    z-index: 7;
`;

const MenuItems = styled(motion.ul)`
    position: relative;
    height: ${props => props.theme.navHeight};
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 10rem;
    z-index: 7;
`;

const MenuItem = styled(motion.li)`
    text-transform: uppercase;
    color: ${props => props.theme.text};
    cursor: pointer;
`;

const NavBar = () => {
    const [click, setClick] = useState(false);
    const menuRef = useRef(null);

    return (
        <>
            <NavContainer
                click={click}
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 2, delay: 2 }}
            >
                <MenuItems
                    ref={menuRef}
                    drag="y"
                    dragConstraints={{ top: 0, bottom: 100 }} // Установлены корректные ограничения
                    dragElastic={0.05}
                    dragSnapToOrigin
                >
                    <MenuBtn onClick={() => setClick(!click)}>Menu</MenuBtn>
                    <MenuItem
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.9, y: 0 }}
                    >
                        Home
                    </MenuItem>
                    <MenuItem
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.9, y: 0 }}
                    >
                        About me
                    </MenuItem>
                    <MenuItem
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.9, y: 0 }}
                    >
                        Services
                    </MenuItem>
                    <MenuItem
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.9, y: 0 }}
                    >
                        Appointment
                    </MenuItem>
                </MenuItems>
            </NavContainer>
        </>
    );
};

export default NavBar;
