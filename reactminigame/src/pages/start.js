import NavComp from "../nav/FCRouters";
import { Link } from "react-router-dom";
import React from "react";
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faVolumeXmark,
    faVolumeHigh
} from '@fortawesome/free-solid-svg-icons';
import { imagesArray } from "./varabiles/images";
import { songSound } from "./varabiles/images";
import { Submit } from "./varabiles/submit";


export default function Start() { 

    const [volumeIcon, setVolumeIcon] = useState(faVolumeXmark)

    songSound.loop = true;
    let random = 0;

    setInterval(function () {

        if (random > imagesArray.length - 2) {
            random = 0
        } else {
            random++
        }

        document.body.style.backgroundImage = "url(" + imagesArray[random] + ")";
        document.body.style.backgroundPosition = "top"

    }, 11000);

    function clicked() {

        if (volumeIcon === faVolumeXmark) {
            songSound.play();
            setVolumeIcon(faVolumeHigh)
            
        } else {
            songSound.pause();  
            setVolumeIcon(faVolumeXmark)
            
        }
    }

    return (
        <>

            <div className="box">
                <div className="inside">
                    <h2>Royal Kingdom  <FontAwesomeIcon icon={volumeIcon} bounce id="volume" onClick={clicked} /></h2>
                    <Link to={"/game"}><button className="button">New Game</button></Link>
                </div>

            </div>
            

        </>
    )
}