import React from "react";
import './Hero.css'
import { useEffect, useState } from 'react'


function Hero() {
    const [isHovered, setIsHovered] = useState(false);
    useEffect(() => {
        if (isHovered) {textShadow: '0px 0px 10px var(--accent)'}
    }, [])

    return (

        <div className="hero">
            <div className="RGB_cover">
            </div>
                <div className="RGB1" id="RGB1">
            </div>
            <div className="header">
                <button className="header__button">
                    <h4 className="header__title">Nepya</h4>
                </button>
                <div className="header__links">
                    <a href="#my-art" className="header__link_inside">my artwork</a>
                    <a href="#contact" className="header__link_inside">contact</a>
                    <a
                        href="https://www.youtube.com/"
                        className="header__link_inside"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        about me
                    </a>
                </div>
            </div>
            <div className="header__Description">
                <h1 className="header__Description_title">Hi, I'm Nepya</h1>
                <p id="headerDescriptionText" className="header__Description_text" ref={isHovered} >
                    I am a self-taught artist who loves to create art most kinds of art. I have always been passionate about art especially pixel art.
                    currently learning how to use digital tools like Photoshop, Blender, Clip Studio Paint, and Aseprite to create my art.
                    I am also learning how to use traditional tools like pencils, pens, and markers to create my art not all that I trying to develop my own games by using Unity and video editing software.
                    seem like I want to explore more possibilities in the world of art and game development.</p>
            </div>
        </div>
    )
}


export default Hero
