import React, { useRef } from 'react';
import { Box, Grid2 } from '@mui/material';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Navbar from '../Components/Navbar';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

// Custom data for sections
const sections = [
    { id: 1, image: "/image.png", text: "Sustainable Car \nDetailing.", description: "As pioneers in eco-friendly car detailing, we offer a full range \nof services that keep your car in tip-top condition!" },
    { id: 2, image: "/image.png", text: "Our Mission.", description: "At ShinyTomato, we deliver premium car detailing experiences in the most \neco-friendly way possible. We believe that luxury and sustainability can go \nhand in hand, and we strive to prove that every day." },
    { id: 3, image: "/image.png", text: "Innovative Solutions for You", description: "Explore our cutting-edge technologies and services." },
    { id: 4, image: "/image.png", text: "Join Us on Our Mission", description: "Be a part of something bigger. Let's make a difference together." }
];

const renderDescriptionWithBreaks = (text, isHeader = false) => {
    return text.split('\n').map((line, index) => (
        <span key={index}>
            {line.split('.').map((part, i) => (
                <React.Fragment key={i}>
                    {part}
                    {i !== line.split('.').length - 1 && isHeader && <span style={{ color: 'red' }}>.</span>} {/* Only apply red full stop to headers */}
                </React.Fragment>
            ))}
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
    const sectionClass = `img-container section-${section.id}`;

    return (
        <section className={sectionClass} style={{ backgroundColor: section.bgColor || "transparent" }}>
            <motion.div ref={ref} style={{ opacity }} className="image-wrapper">
                <img src={section.image} alt={`Section ${section.id}`} />
            </motion.div>

            {/* Dynamic Layouts Based on Section ID */}
            {section.id === 1 ? (
                <motion.h2 style={{ y, color: section.textColor }} >
                    {renderDescriptionWithBreaks(section.text, true)}
                    <div className="description-container">
                        <p>{renderDescriptionWithBreaks(section.description)}</p>
                    </div>
                    <div className="video-container">
                        <button className="play-button"><img src="/PlayButton.png" alt="" /></button>
                        <div className="video-text">
                            <h3>OUR STORY</h3>
                            <p>Promotional Video</p>
                        </div>
                    </div>
                </motion.h2>
            ) : section.id === 2 ? (
                <motion.h2 style={{ y, color: section.textColor, top: '10%' }}>
                    {renderDescriptionWithBreaks(section.text, true)}
                    <div className="description-container">
                        <p>{renderDescriptionWithBreaks(section.description, true)}</p>
                    </div>
                    <div className="description-container">
                        <h3>Why Us?</h3>
                        <p>{renderDescriptionWithBreaks('We offer a wide range of services to meet the diverse needs of our \ncustomers. We take pride in ensuring that our products are free from \nVOCs (Volatile Organic Compounds; chemicals known to contribute \nto climate change) and that we minimise our water usage.', true)}</p>
                    </div>
                    <button className="find-out-more-button">
                        <img src="/zoom icon.png" alt="" />Find Out More
                    </button>
                </motion.h2>
            ) : section.id === 3 ? (
                <motion.h2 style={{ y, color: section.textColor }}>
                    {section.text}
                    <div className="description-container">
                        <p>{renderDescriptionWithBreaks(section.description)}</p>
                    </div>

                </motion.h2>
            ) : (
                <motion.h2 style={{ y, color: section.textColor }}>
                    {section.text}
                    <div className="description-container">
                        <p>{renderDescriptionWithBreaks(section.description)}</p>
                    </div>
                </motion.h2>
            )}
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
            <button className="faq-button" >
                FAQ <img src="/FAQLogo.png" alt="" />
            </button>
            <style jsx>{`
                .find-out-more-button {
                    background: rgba(118, 121, 128, 0.7);
                    color: white;
                    padding: 14px 35px; 
                    border: none;
                    border-radius: 50px;
                    font-size: 32px;
                    font-weight: 500;
                    cursor: pointer;
                    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
                    display: flex;
                    align-items: center;
                    gap: 12px; /* Increase the gap between icon and text */
                    margin-top: 30px;
                }

                .find-out-more-button:hover {
                    background: #767980;
                }
                .find-out-more-button img { 
                    width: 64px;
                    height: 64px;
                }
                .video-container {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-top: 20px;
                }
                .play-button {
                    background: #DD4242;
                    color: white;
                    border: none;
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    font-size: 20px;
                    font-weight: bold;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
                    transition: 0.3s;
                }
                .play-button img{
                    width: 30px;
                    height: 30px;
                    margin: auto;
                }
                .video-text h3 {
                    font-weight: 500;
                    font-size: 20px;
                    color: white;
                    margin-top: 8px;
                    margin-bottom: 0;
                }
                .video-text p {
                    font-weight: 300;   
                    font-size: 14px;
                    color: #FF5454;
                    margin-top: 0;
                }
                .faq-button {
                    position: fixed;
                    bottom: 55px;
                    right: 55px;
                    background: #DD4242;
                    color: white;
                    padding: 15px 30px;
                    border: none;
                    border-radius: 50px;
                    font-size: 40px;
                    font-weight: bold;
                    cursor: pointer;
                    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
                    transition: 0.3s;
                    display: flex;
                    align-items: center;  /* Center items vertically */
                    gap: 20px;  /* Adds spacing between icon and text */
                }
                .faq-button img {
                    width: 54px;
                    height: 54px;
                }
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
                    margin-top: 0;
                }
                .description-container h3 {
                    font-size: 30px;
                    color: white;
                    position: relative;
                }
                .img-container h2 {
                    color: rgb(255, 255, 255);
                    position: absolute;
                    font-family: 'Poppins';
                    font-size: 80px;
                    font-weight: 700;
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
                /* Responsive Design */
                @media (max-width: 1200px) {
                    .img-container h2 {
                        font-size: 60px;
                        left: 5%;
                        width: 90%;
                    }
                    .description-container p {
                        font-size: 18px;
                    }
                    .find-out-more-button {
                        font-size: 28px;
                        padding: 12px 30px;
                    }
                    .find-out-more-button img {
                        width: 50px;
                        height: 50px;
                    }
                    .play-button {
                        width: 60px;
                        height: 60px;
                    }
                    .play-button img {
                        width: 24px;
                        height: 24px;
                    }
                }

                @media (max-width: 992px) {
                    .img-container h2 {
                        font-size: 50px;
                        left: 5%;
                        width: 90%;
                        text-align: center;
                    }
                    .description-container {
                        align-items: center;
                        text-align: center;
                    }
                    .description-container p {
                        font-size: 16px;
                    }
                    .find-out-more-button {
                        display: flex;
                        justify-content: center;
                        margin: 20px auto;
                    }
                    .find-out-more-button img {
                        width: 40px;
                        height: 40px;
                    }
                    .video-container {
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                    }

                    .video-text {
                        margin-top: 10px;
                        text-align: center;
                    }
                    .play-button {
                        margin: 0 auto;
                    }
                    .play-button img {
                        width: 20px;
                        height: 20px;
                    }
                    .faq-button {
                        font-size: 30px;
                        padding: 12px 24px;
                        gap: 12px;
                    }
                    .faq-button img {
                        width: 40px;
                        height: 40px;
                    }
                    .progress {
                        height: 4px;
                    }
                }

                @media (max-width: 768px) {
                    .img-container h2 {
                        font-size: 40px;
                        left: 5%;
                        width: 90%;
                    }
                    .description-container p {
                        font-size: 14px;
                    }
                    .find-out-more-button {
                        font-size: 22px;
                        padding: 8px 20px;
                    }
                    .find-out-more-button img {
                        width: 35px;
                        height: 35px;
                    }
                    .play-button {
                        width: 45px;
                        height: 45px;
                    }
                    .play-button img {
                        width: 18px;
                        height: 18px;
                    }
                    .faq-button {
                        font-size: 26px;
                        padding: 10px 20px;
                        bottom: 30px;
                        right: 30px;
                    }
                    .faq-button img {
                        width: 35px;
                        height: 35px;
                    }
                }

                @media (max-width: 576px) {
                    .img-container {
                        height: auto;
                        flex-direction: column;
                        padding: 20px;
                    }
                    .img-container h2 {
                        font-size: 30px;
                        text-align: center;
                        left: 0;
                        transform: translateY(0);
                        width: 100%;
                    }
                    .description-container {
                        text-align: center;
                        align-items: center;
                    }
                    .description-container p {
                        font-size: 12px;
                    }
                    .find-out-more-button {
                        font-size: 18px;
                        padding: 6px 15px;
                        gap: 8px;
                    }
                    .find-out-more-button img {
                        width: 30px;
                        height: 30px;
                    }
                    .play-button {
                        width: 40px;
                        height: 40px;
                    }
                    .play-button img {
                        width: 16px;
                        height: 16px;
                    }
                    .video-container {
                        flex-direction: column;
                        gap: 5px;
                        text-align: center;
                    }
                    .video-text h3 {
                        font-size: 16px;
                    }
                    .video-text p {
                        font-size: 12px;
                    }
                    .faq-button {
                        font-size: 22px;
                        padding: 8px 16px;
                        bottom: 20px;
                        right: 20px;
                    }
                    .faq-button img {
                        width: 30px;
                        height: 30px;
                    }
                    .progress {
                        height: 3px;
                    }
                }
                .parallax {
                    position: relative;
                    background-attachment: fixed; /* Fallback for desktops */
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    min-height: 100vh; /* Full height */
                }
            `}</style>
        </Box>
    );
}

export default Home;
