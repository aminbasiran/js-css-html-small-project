let startButton = document.querySelector('.start')
let stopButton = document.querySelector('.stop')
let resetButton = document.querySelector('.reset')
let minuteSpan = document.querySelector('.minutesSpan')
let secondSpan = document.querySelector('.secondsSpan')
let secondsInitialValue = 00
let total60mins = 60
let minsInitialValue = 00
let interval

startButton.addEventListener('click',()=>{
    interval =  setInterval(startwatch,20)
})

function startwatch(){
    secondsInitialValue++
    if(secondsInitialValue<=9){
        secondSpan.innerText = `0${secondsInitialValue}`
    }
    if(secondsInitialValue>9){
        secondSpan.innerText = `${secondsInitialValue}`
    }
    if(secondsInitialValue>=60){
        minsInitialValue++
        minuteSpan.innerText = `0${minsInitialValue}`
        secondsInitialValue = 0
        secondSpan.innerText = `0${secondsInitialValue}`
    }
    if(minsInitialValue<=9){
        minuteSpan.innerText =`0${minsInitialValue}`
    }
    if(minsInitialValue>9){
        minuteSpan.innerText = `${minsInitialValue}`
    }
    if(minsInitialValue>=60){
        minuteSpan.innerText = "60"
        secondSpan.innerText = "00"
    }
    
}

stopButton.addEventListener('click',()=>{
    clearInterval(interval)
})

resetButton.addEventListener('click',()=>{
    secondSpan.innerText= total60mins
    minuteSpan.innerText= "00"
    secondsInitialValue = 00
    minsInitialValue = 00
    clearInterval(interval)


})
    
    

