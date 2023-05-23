let x = 1

function clicked() {
    if (x === 1) {
        document.getElementById("sound").play();
        document.getElementById("volume").className = "fa-sharp fa-solid fa-volume-high bob"
        x = 2
    } else if (x === 2) {
        document.getElementById("sound").pause();
        document.getElementById("volume").className = "fa-sharp fa-solid fa-volume-xmark bob"
        x = 1
    }
}

let random = 0;
let images = ["IMG/backgroundImages/mossyCastle.jpg", "IMG/backgroundImages/2house.jpg", "IMG/backgroundImages/RiverLakeCastle.jpg", "IMG/backgroundImages/nightCastle.jpg", "IMG/backgroundImages/fort.jpg", "IMG/backgroundImages/grassyCastle.jpg", "IMG/backgroundImages/darkCastle.jpg", "IMG/backgroundImages/riverTemple.jpg"]
setInterval(function () {

    if (random > images.length - 2) {
        random = 0
        console.log(random)
    } else {
        random++
        console.log(random)
    }

    document.body.style.backgroundImage = "url(" + images[random] + ")";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
    document.body.style.transition = "5s";
    document.body.style.backgroundPosition = "top"
}, 11000);



const nums = [1, 1, 1, 4, 2, 2, 2, 3, 3, 6];
var lengthers = 1
var numhide = 1
var cardImg
var cardSelected1
var cardSelected2
var cardSelected3
var cardSelected4
var cardRevial
var pyramid = [
    [null],
    [null, null],
    [null, null, null],
    [null, null, null, null]
]
var board = []

function shuffleCards() {
    const cardSet = nums
    //shuffle cards
    for (let i = 0; i < cardSet.length; i++) {

        let j = Math.floor(Math.random() * cardSet.length)
        //swap 
        let temp = cardSet[i]
        cardSet[i] = cardSet[j]
        cardSet[j] = temp


    }
}

window.onload = function () {
    running()
    startGame()
}

// Define helper functions to check guidelines
const isAdjacentToOne = (i, j) => {
    const adjacentCoords = [[i - 1, j - 1], [i - 1, j], [i, j - 1], [i, j + 1], [i + 1, j], [i + 1, j + 1]];
    for (const [row, col] of adjacentCoords) {
        if (row >= 0 && row < pyramid.length && col >= 0 && col < pyramid[row].length) {
            if (pyramid[row][col] === 1) {
                return true;
            }
        }
    }
    return false;
};

const isAdjacentToTwo = (i, j) => {
    const adjacentCoords = [[i - 1, j - 1], [i - 1, j], [i, j - 1], [i, j + 1], [i + 1, j], [i + 1, j + 1],
    ];
    for (const [row, col] of adjacentCoords) {
        if (row >= 0 && row < pyramid.length && col >= 0 && col < pyramid[row].length) {
            if (pyramid[row][col] === 2) {
                return true;
            }
        }
    }
    return false;
};

function running() {
    let ending = false
    let firstTime = true

    shuffleCards()

    for (const num of cardSet) {
        if (ending === true) {
            break;
        }
        if (num === 1) {
            let end = false
            for (let i = 1; i < pyramid.length; i++) {
                if (end === true) {
                    break
                }
                for (let j = 0; j < pyramid[i].length; j++) {
                    if (firstTime === true && pyramid[i][j] === null) {
                        pyramid[i][j] = 1;
                        firstTime = false
                        end = true
                        break;
                    } else if (pyramid[i][j] === null && isAdjacentToOne(i, j)) {
                        end = true
                        pyramid[i][j] = 1;
                        break;
                    }
                }
            }
        } else if (num === 2) {
            for (let i = 0; i < pyramid.length; i++) {
                for (let j = 0; j < pyramid[i].length; j++) {
                    if (pyramid[i][j] === null && !isAdjacentToTwo(i, j)) {
                        pyramid[i][j] = 2;
                        break;
                    }
                }
            }
        } else if (num === 3) {
            let hit = false
            let end = false
            for (let i = 0; i < pyramid.length; i++) {
                if (end === true) {
                    break
                }
                for (let j = 0; j < pyramid[i].length; j++) {
                    if (end === true) {
                        break
                    }
                    if (pyramid[i][j] === null) {
                        for (let q = 0; q < pyramid[i].length; q++) {
                            if (pyramid[i][q] === 3) {
                                hit = true
                            }
                        }
                        if (hit === false) {
                            pyramid[i][j] = 3;
                            end = true
                            break;
                        }
                        break
                    }
                }
            }
        } else if (num === 4) {
            let end = false
            for (let i = 0; i < 2; i++) {
                if (end === true) {
                    break
                }
                for (let j = 0; j < pyramid[i].length; j++) {
                    if (pyramid[i][j] === null) {
                        pyramid[i][j] = 4;
                        end = true
                        break;
                    }
                }
            }
        } else if (num === 6) {
            let end = false
            for (let i = 0; i < pyramid.length; i++) {
                if (end === true) {
                    break
                }
                for (let j = 0; j < pyramid[i].length; j++) {
                    if (pyramid[i][j] === null) {
                        pyramid[i][j] = 6;
                        end = true
                        break;

                    }
                }
            }
        }

    }

    for (let i = 0; i < pyramid.length; i++) {
        for (let j = 0; j < pyramid[i].length; j++) {
            if (pyramid[i][j] === null) {
                pyramid = [
                    [null],
                    [null, null],
                    [null, null, null],
                    [null, null, null, null]
                ]
                running()
            }
            if (pyramid[i][j] === 1) {
                if (isAdjacentToOne(i, j) === false) {
                    pyramid = [
                        [null],
                        [null, null],
                        [null, null, null],
                        [null, null, null, null]
                    ]
                    running()
                }
            }

        }
    }
    //isAdjacentToOne(i, j)


}

function startGame() {
    //arrange the Board Triangle base is 4 height of 4 
    for (let rownum = 0; rownum < pyramid.length; rownum++) {
        let row = []
        for (let colnum = 0; colnum < pyramid[rownum].length; colnum++) {
            if (pyramid[rownum][colnum] === 1) {
                cardImg = "./IMG/1.jpeg"
            } else if (pyramid[rownum][colnum] === 2) {
                cardImg = "./IMG/2.jpeg"
            } else if (pyramid[rownum][colnum] === 3) {
                cardImg = "./IMG/3.jpeg"
            } else if (pyramid[rownum][colnum] === 4) {
                cardImg = "./IMG/4.jpeg"
            } else if (pyramid[rownum][colnum] === 6) {
                cardImg = "./IMG/6.jpeg"
            }

            row.push(cardImg);

            let card = document.createElement("img")
            //<img id="0-0" class="card">
            card.id = rownum.toString() + "-" + colnum.toString()
            card.src = cardImg
            card.classList.add("card")
            card.addEventListener("click", selectCard)
            document.getElementById("row" + rownum).append(card)
        }
        lengthers++
        board.push(row)

    }
    hideCards()
}

function selectCard() {
    if (this.src.includes("back")) {
        if (!cardSelected1) {
            cardSelected1 = this
            let coords = cardSelected1.id.split("-")
            let r = parseInt(coords[0])
            let c = parseInt(coords[1])
            cardSelected1.src = board[r][c]

        }
        else if (!cardSelected2) {
            cardSelected2 = this
            let coords = cardSelected2.id.split("-")
            let r = parseInt(coords[0])
            let c = parseInt(coords[1])
            cardSelected2.src = board[r][c]
        }
        else if (!cardSelected3) {
            cardSelected3 = this
            let coords = cardSelected3.id.split("-")
            let r = parseInt(coords[0])
            let c = parseInt(coords[1])
            cardSelected3.src = board[r][c]
        }
        else if (!cardSelected4) {
            cardSelected4 = this
            let coords = cardSelected4.id.split("-")
            let r = parseInt(coords[0])
            let c = parseInt(coords[1])
            cardSelected4.src = board[r][c]
        }
    }
}

function hideCards() {

    for (let r = 0; r < pyramid.length; r++) {
        for (let c = 0; c < pyramid[r].length; c++) {
            let card = document.getElementById(r.toString() + "-" + c.toString())
            card.src = "./IMG/back.jpeg"
        }
    }
}

function showCards() {
    let text = "Are you Sure you want to Compare Decks";
    if (confirm(text) == true) {
        document.querySelectorAll(".card").forEach(element => {
            let coords = element.id.split("-")
            let r = parseInt(coords[0])
            let c = parseInt(coords[1])
            element.src = board[r][c]
        })
    }
    handleConfirm()
}

function reload() {
    let text = "Are you Sure you want to Play a new Game";
    if (confirm(text) == true) {
        location.reload()
    }
}