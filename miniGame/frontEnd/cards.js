var cardlist = [
    "./IMG/2.jpeg",
    "./IMG/2.jpeg",
    "./IMG/2.jpeg",
    "./IMG/1.jpeg",
    "./IMG/1.jpeg",
    "./IMG/1.jpeg",
    "./IMG/3.jpeg",
    "./IMG/3.jpeg",
    "./IMG/Wild.jpeg",
    "./IMG/4.jpeg",
    
]

var cardSet 
var cardSet1 = [[],[],[],[]] 
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
            card.addEventListener("click", selectCard)
            document.getElementById("row"+r).append(card)
        }
        num++ 
        board.push(row)
        
    }
    console.log(board)
    hideCards()
}

function hideCards(){
    for (let r = 0; r < height; r++){
        for(let c = 0;c < numhide ;c++){
            let card = document.getElementById(r.toString()+ "-" + c.toString())
            card.src = "./IMG/back.jpeg"
        }
        numhide++
    }
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