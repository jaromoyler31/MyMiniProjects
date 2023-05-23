
import { Link } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faVolumeXmark,
    faVolumeHigh
} from '@fortawesome/free-solid-svg-icons';
import song1 from "./sound.mp3"
import { imagesArray } from "./varabiles/images";
import { Board, showCards } from "./varabiles/board";
import { songSound } from "./varabiles/images";
import {Submit} from "./varabiles/submit.js"

function reload() {
    const text = "Are you sure you want to play a new game?";
  const confirmed = window.confirm(text);
  if (confirmed) {
    window.location.reload();
  }
}

export default function Game() {
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
            <div className="layout">
                <div className="side">
                    <div className="box1">
                        <div className="inside">
                            <h2>Royal Kingdom <FontAwesomeIcon icon={volumeIcon} bounce id="volume" onClick={clicked} /></h2>
                            <button onClick={showCards} className="button">Compare Decks</button>
                            
                        </div>

                    </div>

                    <div className="rules">
                        <h2 className="ruleTittle">Rules </h2>
                        <p>The game is played with 10 cards - three 1's, three 2's, two 3's, one 4, and one 6.</p>
                        <p>At the start of the game, a deck of cards is created by randomly arranging the 10 cards in a pyramid shape with a base of 4 and a height of 4.</p>
                        <p>The Deck will follow the guidelines for each card when arranging the deck:</p><p>1's must be touching each other<br></br>2's cannot be touching each other<br></br>3's must be on different rows<br></br>4 must be on the top 2 rows<br></br>6 can be placed anywhere</p>
                        <p>You will take turns flipping over four cards from the deck, You will then have to create their own deck based on how they think the original deck was arranged.</p>
                        <p>Your deck will also follow the guidelines for each card when creating their own deck.</p><p>Once you finished making your deck you will compare your results to the original results</p>
                        <h2 className="ruleTittle">Points </h2>
                        <p>For every row, you get 100% correct, you will get the 1 points per card in that row. For example, if you get all cards in row 2 correct, you will receive 2 points</p>
                        <p>You will also receive additional points for any cards in the correct position, regardless of which row they are in. Each correctly placed card will earn you the number on the card for points.</p>
                        <p>The maximum number of points you can get is 35.</p>
                    </div>
                </div>

                <div className="main">
                    <h1>The Deck</h1>
                    <Board />
                    <div className="score">

                        <table>
                            <tr>
                                <th>   </th>
                                <th>Round 1</th>
                                <th>Round 2</th>
                                <th>Round 3</th>
                                <th>Round 4</th>
                                <th>Round 5</th>
                                <th>Total:</th>
                            </tr>
                            <tr>
                                <th>Points:   </th>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                            </tr>
                        </table>
                    </div>
                    <button onClick={reload} className="button">New Game</button>

                </div>
            </div>

            {/* <Submit /> */}
        </>
    )
}