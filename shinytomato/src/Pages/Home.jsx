import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Navbar from '../Components/Navbar';

// Custom data for sections
const sections = [
    { id: 1, image: "/image.png", text: "Sustainable Car Detailing.", description: "As pioneers in eco-friendly car detailing, we offer a full range \nof services that keep your car in tip-top condition!" },
    { id: 2, image: "/image.png", text: "Our Mission.", description: "At ShinyTomato, we deliver premium car detailing experiences in the most \neco-friendly way possible. We believe that luxury and sustainability can go \nhand in hand, and we strive to prove that every day." },
    { id: 3, image: "/images/your-image3.jpg", text: "Innovative Solutions for You", description: "Explore our cutting-edge technologies and services." },
    { id: 4, image: "/images/your-image4.jpg", text: "Join Us on Our Mission", description: "Be a part of something bigger. Let's make a difference together." }
];
const renderDescriptionWithBreaks = (text) => {
    return text.split('\n').map((line, index) => (
        <span key={index}>
            {line}
            <br />
        </span>
    ));
};
function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function ParallaxImage({ section }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 200);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
    return (
        <section className="img-container">
            <motion.div ref={ref} style={{ opacity }} className="image-wrapper">
                <img src={section.image} alt={`Section ${section.id}`} />
            </motion.div>
            <motion.h2 initial={{ visibility: "hidden" }} animate={{ visibility: "visible" }} style={{ y }}>
                {section.text}
                <div className="description-container">
                    {/* Split the description into paragraphs or multiple lines */}
                    <p>{renderDescriptionWithBreaks(section.description)}</p>
                </div>
            </motion.h2>
        </section>
    );
}

function Home() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <Box>
            <Navbar />
            <div id="home-page">
                {sections.map((section) => (
                    <ParallaxImage key={section.id} section={section} />
                ))}
                <motion.div className="progress" style={{ scaleX }} />
            </div>
            <div className="arrow-container">
                <div className="arrow"></div>
            </div>
            <style jsx>{`
                .img-container {
                    height: 100vh;
                    scroll-snap-align: start;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                }
                .image-wrapper {
                    width: 100%;
                    height: 700px;
                    background: #f5f5f5;
                    overflow: hidden;
                    transition: opacity 0.5s ease-in-out;
                }
                .image-wrapper img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: brightness(60%);
                }
                .description-container {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .description-container p {
                    font-family: 'Poppins', sans-serif;
                    font-size: 20px;
                    font-weight: 100;
                    color: #BDBEC1;
                }
                .img-container h2 {
                    color: rgb(255, 255, 255);
                    position: absolute;
                    font-family: 'Poppins', sans-serif;
                    font-size: 60px;
                    font-weight: 900;
                    top: 40%;
                    left: 10%;
                    transform: translateY(-50%);
                    text-align: left;
                    width: 80%;
                }
                .progress {
                    position: fixed;
                    left: 0;
                    right: 0;
                    height: 5px;
                    background: #DD4242;
                    bottom: 50px;
                    transform: scaleX(0);
                }
                        
            `}</style>
        </Box>
    );
}

export default Home;
