const secondHand=document.querySelector('.second')
const minuteHand=document.querySelector('.minute')
const hourHand=document.querySelector('.hour')
const numbers = document.querySelectorAll('.digit')
const arrayColors = [0,1,2,3,4,5,6,7,8,9, "A","B","C", "D","E","F"]

setInterval(activate,500);

function activate(){
    const myDate = new Date
    const minute = myDate.getMinutes()
    const hour = myDate.getHours()
    const second = myDate.getSeconds()
    
    const insertSec = (360 / 60) * second ;
    // const insertMin = (minute/60)*360
    // const insertHour = (hour/12)*360
    const insertMin = (360 * minute) / 60 + (360 * second) / (60 * 60) ;
    const insertHour = (360 * hour) / 12 + (360 * minute) / (12 * 60) ;

    secondHand.style.transform = `rotate(${insertSec}deg)`
    minuteHand.style.transform = `rotate(${insertMin}deg)`
    hourHand.style.transform = `rotate(${insertHour}deg)`
}

setInterval(changeColor,1000)

function changeColor(){
    numbers.forEach(number =>{
    let hex = '#'
    for (let k=0;k<6;k++){
        hex = hex + arrayColors[Math.floor(Math.random()*arrayColors.length)]
       
    }
    number.style.color = `${hex}`
    number.style.textShadow = `0 10px 21px ${hex},0 0 10px ${hex},0 0 21px ${hex},0 0 42px ${hex},0 0 82px #0fa,0 0 92px #0fa,0 0 102px ${hex},0 0 151px ${hex}`
    })
}

