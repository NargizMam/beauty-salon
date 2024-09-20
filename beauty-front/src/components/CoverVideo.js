import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import MainVideo from './../assets/mainVideo.mp4';
import { motion, useAnimation } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
import '@fontsource/kaushan-script';
import '@fontsource/sirin-stencil';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Стили для Locomotive Scroll

const VideoContainer = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;

    video {
        width: 100%;
        height: 100vh;
        object-fit: cover;
        filter: brightness(0.5);
        opacity: 0.8;
    }
`;

const DarkOverlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
`;

const Title = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    color: ${props => props.theme.text};

    div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        text-align: center;
    }

    h1 {
        font-family: 'Kaushan Script';
        font-size: ${props => props.theme.fontbig};
        text-shadow: 1px 1px 1px ${props => props.theme.body};
        opacity: 0;
    }

    h2 {
        font-family: 'Kaushan Script';
        font-size: ${props => props.theme.fontxxl};
        text-shadow: 1px 1px 1px ${props => props.theme.body};
        font-weight: 300;
        opacity: 0;
    }

    h6 {
        font-family: 'Sirin Stencil';
        font-size: ${props => props.theme.fontls};
        text-shadow: 1px 1px 1px ${props => props.theme.body};
        margin-top: 30px;
    }
`;

const CoverVideo = () => {
    const videoRef = useRef(null);
    const scrollRef = useRef(null);
    const controls = useAnimation();

    useEffect(() => {
        // Настройка скорости видео
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.3;
        }

        // Инициализация Locomotive Scroll
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            multiplier: 1, // Настройка плавности скролла
        });

        // Анимация текста с framer-motion при появлении на экране
        controls.start(i => ({
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: i * 0.2 },
        }));

        // Обновление и уничтожение скролла при размонтировании
        return () => {
            scroll.destroy();
        };
    }, [controls]);

    return (
        <div ref={scrollRef} data-scroll-container>
            <VideoContainer>
                <DarkOverlay />
                <Title>
                    <div>
                        <motion.h1
                            custom={0}
                            initial={{ opacity: 0, y: -50 }}
                            animate={controls}
                            data-scroll
                            data-scroll-delay="0.13"
                            data-scroll-speed="4"
                        >
                            P
                        </motion.h1>
                        <motion.h1
                            custom={1}
                            initial={{ opacity: 0, y: -50 }}
                            animate={controls}
                            data-scroll
                            data-scroll-delay="0.07"
                            data-scroll-speed="4"
                        >
                            M
                        </motion.h1>
                        <motion.h1
                            custom={2}
                            initial={{ opacity: 0, y: -50 }}
                            animate={controls}
                            data-scroll
                            data-scroll-delay="0.04"
                            data-scroll-speed="4"
                        >
                            U
                        </motion.h1>
                    </div>
                    <div>
                        <motion.h2
                            custom={3}
                            initial={{ opacity: 0, x: -50 }}
                            animate={controls}
                            data-scroll
                            data-scroll-delay="0.13"
                            data-scroll-speed="4"
                        >
                            Altynai
                        </motion.h2>
                        <motion.h2
                            custom={4}
                            initial={{ opacity: 0, x: 50 }}
                            animate={controls}
                            data-scroll
                            data-scroll-delay="0.07"
                            data-scroll-speed="4"
                        >
                            Kasymalieva
                        </motion.h2>
                    </div>
                    <motion.h6>Love yourself endlessly</motion.h6>
                </Title>
                <video ref={videoRef} src={MainVideo} type="video/mp4" autoPlay loop muted />
            </VideoContainer>
        </div>
    );
};

export default CoverVideo;
