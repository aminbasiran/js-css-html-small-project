const secondHand=document.querySelector('.second')
const minuteHand=document.querySelector('.minute')
const hourHand=document.querySelector('.hour')
console.log(secondHand)

setInterval(activate,500);

function activate(){
    const myDate = new Date;
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