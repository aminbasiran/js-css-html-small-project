const squares = document.querySelectorAll('.grid')
const EMPTY_CLASS = squares[0].className;
const XCLASS = "x"
const OCLASS = "o"
const textElementWin = document.getElementById('xowinMessage')
const screenElementWin = document.querySelector('.winningScreen')
const textElementDraw = document.getElementById('drawMessage')
const screenElementDraw = document.querySelector('.drawScreen')
const restartButtons = document.querySelectorAll('.button')
let circleturn
const winCombinations=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

startGame()

// restart 
restartButtons.forEach(eachbutton => {
    eachbutton.addEventListener('click', startGame)
    
})

function startGame(){
    squares.forEach(square => {
        screenElementWin.classList.remove('show')
        square.className = EMPTY_CLASS
        square.addEventListener('click', handleEvent, {once:true})
})}


function handleEvent(event){
    const cell = event.target
    const currentPlayer = circleturn ? OCLASS : XCLASS
    placeItem(cell,currentPlayer)
        
    if (checkWin(currentPlayer)){
        screenElementWin.classList.add('show')
        textElementWin.innerText = `${currentPlayer} wins!`

    }else if(checkDraw()){
        screenElementDraw.classList.add('show')
        textElementDraw.innerText = "It's a tie!"
    }
    else{
        swapTurn()
    }
}


// place X's and O's
function placeItem(cell,currentPlayer){
    cell.classList.add(currentPlayer)
}

// switch player
function swapTurn(){
    circleturn = !circleturn
}

// win algo
function checkWin(currentPlayer){
    return winCombinations.some(someCombination =>{
        return someCombination.every(everyCombinations =>{
            return squares[everyCombinations].classList.contains(currentPlayer)
        })
    })
}

// draw algo
function checkDraw(){
    return [...squares].every(grid=>{
        return grid.classList.contains(XCLASS)||grid.classList.contains(OCLASS)
    })
}

