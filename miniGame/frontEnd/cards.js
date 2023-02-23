var cardlist = [
    "./IMG/2.jpeg",
    "./IMG/2.jpeg",
    "./IMG/2.jpeg",
    "./IMG/1.jpeg",
    "./IMG/1.jpeg",
    "./IMG/1.jpeg",
    "./IMG/3.jpeg",
    "./IMG/3.jpeg",
    "./IMG/6.jpeg",
    "./IMG/4.jpeg",
]

var cardSet 

var board = []
var height = 4
var num = 1
var numhide = 1
var cardSelected1
var cardSelected2
var cardSelected3
var cardSelected4
var cardRevial


window.onload =function(){
    shuffleCards()
    startGame()
}

function shuffleCards(){
    cardSet = cardlist
    //shuffle cards
    for(let i = 0; i < cardSet.length; i++){

        let j = Math.floor(Math.random()* cardSet.length)
        //swap 
        let temp = cardSet[i]
        cardSet[i] = cardSet[j]
        cardSet[j] = temp

    
    }
}

function startGame(){
    //arrange the Board Triangle base is 4 height of 4 
    for(let r = 0; r < height; r++){
        let row = []
        for(let c = 0; c < num; c++){
            let cardImg = cardSet.pop()
            row.push(cardImg); //js
            console.log(cardImg)

            let card = document.createElement("img")
            //<img id="0-0" class="card">
            card.id = r.toString() +"-"+ c.toString()
            card.src = cardImg
            card.classList.add("card")
            // card.addEventListener("click", selectCard)
            document.getElementById("row"+r).append(card) 
        }
        num++ 
        board.push(row)
        
    }
    console.log(board)
}

function reload(){
    location.reload()
}