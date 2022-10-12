let startstopButton = document.querySelector('.startstop')
let resetButton = document.querySelector('.reset')
let minuteSpan = document.querySelector('.minutesSpan')
let secondSpan = document.querySelector('.secondsSpan')
let secondsInitialValue = 0
let minsInitialValue = 0
let total60mins = 60
let interval

startstopButton.addEventListener('click',()=>{
    interval = setInterval(startwatch,100)
    startstopButton.removeEventListener('click',startwatch)
    startstopButton.addEventListener('click',()=>stopwatch(interval))
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

function stopwatch(some){
    clearInterval(some)
    startstopButton.removeEventListener('click',stopwatch)
    startstopButton.addEventListener('click',startwatch)
}

resetButton.addEventListener('click',()=>{
    secondSpan.innerText= "00"
    minuteSpan.innerText= "00"
    secondsInitialValue = 00
    minsInitialValue = 00
    clearInterval(interval)


})
    
    

