

const nums = [1, 1, 1,4, 2, 2, 2, 3, 3, 6];
var lengthers = 1
var numhide = 1
var pyramid = [
    [null],
    [null,null],
    [null,null,null],
    [null,null,null,null]
] 
var board = []

function shuffleCards(){
    cardSet = nums
    //shuffle cards
    for(let i = 0; i < cardSet.length; i++){

        let j = Math.floor(Math.random()* cardSet.length)
        //swap 
        let temp = cardSet[i]
        cardSet[i] = cardSet[j]
        cardSet[j] = temp

    
    }
    console.log(cardSet)
}

window.onload =function(){
    running()
    startGame()
}

// Define helper functions to check guidelines
const isAdjacentToOne = (i, j) => {
    const adjacentCoords = [    [i-1, j-1], [i-1, j], [i-1, j+1], [i, j-1], [i, j+1], [i+1, j], [i+1, j+1], [i+1, j-1]
    ];
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
    const adjacentCoords = [    [i-1, j-1], [i-1, j], [i-1, j+1], [i, j-1], [i, j+1], [i+1, j], [i+1, j+1], [i+1, j-1]
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

function running(){
    let ending = false
    let firstTime = true

    shuffleCards()

    for (const num of cardSet) {
        if(ending === true){
            break;
        }
        if (num === 1){
            let end = false
            for (let i = 1; i < pyramid.length; i++) {
                if(end === true ){
                    break
                }
                for (let j = 0; j < pyramid[i].length; j++) {
                    if(firstTime === true && pyramid[i][j] === null){
                        pyramid[i][j] = 1;
                        firstTime = false
                        end = true
                        break;
                    }else if (pyramid[i][j] === null && isAdjacentToOne(i, j)) {
                        end = true
                        pyramid[i][j] = 1;
                        break;
                    }
                }
            }
        }else if (num === 2) {
            for (let i = 0; i < pyramid.length; i++) {
                for (let j = 0; j < pyramid[i].length; j++) {
                    if (pyramid[i][j] === null && !isAdjacentToTwo(i, j)) {
                        pyramid[i][j] = 2;
                        break;
                    }
                }
            }
            }else if (num === 3) {

                let end = false
                for (let i = 0; i < pyramid.length; i++) {
                    if(end === true ){
                        break
                    }
                    for (let j = 0; j < pyramid[i].length; j++) {
                        if (pyramid[i][j] === null) {
                            for(let q = 0; q < pyramid[i].length; q++){
                                if (pyramid[i][q] === 3) {
                                    i++
                                    j=0
                                    break
                                }
                            }
                                        
                            pyramid[i][j] = 3;
                            end = true
                            break;
                            
                        }
                    }
                }
            }else if (num === 4){
                let end = false
                for (let i = 0; i < 2; i++) {
                    if(end === true ){
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
            }else if (num === 6){
                let end = false
                for (let i = 0; i < pyramid.length; i++) {
                    if(end === true ){
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
                    [null,null],
                    [null,null,null],
                    [null,null,null,null]
                ] 
                running()
            }
        }
    }

    
}


function startGame(){
    //arrange the Board Triangle base is 4 height of 4 
    for(let r = 0; r <= 4; r++){
        let row = []
        for(let c = 0; c < lengthers; c++){
            if(pyramid[r][c]===1){
                cardImg = "./IMG/1.jpeg"
            } else if(pyramid[r][c]===2){
                cardImg = "./IMG/2.jpeg"
            }else if(pyramid[r][c]===3){
                cardImg = "./IMG/3.jpeg"
            }else if(pyramid[r][c]===4){
                cardImg = "./IMG/4.jpeg"
            }else if(pyramid[r][c]===6){
                cardImg = "./IMG/6.jpeg"
            }
            
            row.push(cardImg); 

            let card = document.createElement("img")
            //<img id="0-0" class="card">
            card.id = r.toString() +"-"+ c.toString()
            card.src = cardImg
            card.classList.add("card")
            card.addEventListener("click", selectCard)
            document.getElementById("row"+r).append(card)
        }
        lengthers++ 
        board.push(row)
        
    }
    
    console.log(board)
    hideCards()
}

function selectCard(){
    if(this.src.includes("back")){
        if(!cardSelected1){
            cardSelected1 = this
            let coords = cardSelected1.id.split("-")
            let r = parseInt(coords[0])
            let c = parseInt(coords[1])
            cardSelected1.src = board[r][c]

            console.log(coords[0]+"-"+coords[1])
        }
        else if(!cardSelected2){
            cardSelected2 = this
            let coords = cardSelected2.id.split("-")
            let r = parseInt(coords[0])
            let c = parseInt(coords[1])
            cardSelected2.src = board[r][c]
            console.log(coords[0]+"-"+coords[1])
        }
        else if(!cardSelected3){
            cardSelected3 = this
            let coords = cardSelected3.id.split("-")
            let r = parseInt(coords[0])
            let c = parseInt(coords[1])
            cardSelected3.src = board[r][c]
            console.log(coords[0]+"-"+coords[1])
        }
        else if(!cardSelected4){
            cardSelected4 = this
            let coords = cardSelected4.id.split("-")
            let r = parseInt(coords[0])
            let c = parseInt(coords[1])
            cardSelected4.src = board[r][c]
            console.log(coords[0]+"-"+coords[1])
        }
    }
}


function hideCards(){
    console.log("running")
    for (let r = 0; r < height; r++){
        for(let c = 0;c < numhide ;c++){
            let card = document.getElementById(r.toString()+ "-" + c.toString())
            card.src = "./IMG/back.jpeg"
        }
        numhide++
    }
}

function showCards(){
    document.querySelectorAll(".card").forEach(element =>{
        let coords = element.id.split("-")
        let r = parseInt(coords[0])
        let c = parseInt(coords[1])
        element.src = board[r][c]
    })
}

function reload(){
    location.reload()
}