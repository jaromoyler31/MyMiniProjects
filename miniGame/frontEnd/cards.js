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
var cardSwap = 1
var firstCard
var secondCard

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
            card.addEventListener("click", selectCard)
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

const selectCard = e =>{
    
    if(cardSwap === 1){
        firstCard = e.target.id
        e.target.style.borderColor = "blue"
        cardSwap = 2
    }else if(e.target.id === firstCard){
        console.log("That the Same Card")
    } else{
        secondCard = e.target.id
        const swap1 = document.getElementById(firstCard).src
        const swap2 = document.getElementById(secondCard).src
        const swap1link = swap1.split("/IMG")
        const swap2link = swap2.split("/IMG")
        document.getElementById(firstCard).style.borderColor = "black"

        document.getElementById(firstCard).src = "/IMG"+swap2link[1]
        document.getElementById(secondCard).src = "/IMG"+swap1link[1]
        
        cardSwap = 1
    }

}