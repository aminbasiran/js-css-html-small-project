const hourHand = document.querySelector('.circle.hour')
const minuteHand = document.querySelector('.circle.minute')
const secondHand = document.querySelector('.circle.second')
const textElement = document.querySelector('.text')

// hours item
const getHourR = hourHand.r.baseVal.value
const hourCf = 2*3.142*getHourR
const hourBasis = hourCf/12
// 

// minutes item
const getMinR = minuteHand.r.baseVal.value
const minCf = 2*3.142*getMinR
const minuteBasis = minCf/60
// 


// seconds item
const getSecR = secondHand.r.baseVal.value
const secCf = 2*3.142*getSecR
const secondBasis = secCf/60
// 

function setClock(){
    const myDate= new Date()
    const hour = myDate.getHours()
    const minute = myDate.getMinutes()
    const second = myDate.getSeconds()
    // console.log(second)
    // console.log(minute)
    secondHand.style.strokeDashoffset= secCf - (second*secondBasis)
    minuteHand.style.strokeDashoffset= minCf - (minute*minuteBasis)
    // hourHand.style.strokeDashoffset= hourCf - (hour*hourBasis)
    hourHand.style.strokeDashoffset= hourCf - ((hour*hourBasis)+ (hourCf * minute) / (12 * 60))
    textElement.innerText=`${hour}:${minute}:${second}`
}

setInterval(setClock,1000)

