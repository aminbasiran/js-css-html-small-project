const loading = document.querySelector('.front')
const textElement = document.querySelector('.text')
let start = 0
let end = 100

let id = function progress(){
    
    if (start == 100){
        stop()
    }
    else {
        start++
        let newNum = start
        let basis = 9.43
        console.log(newNum)  //1%
        loading.style.strokeDashoffset = 943-(basis * newNum)
        textElement.innerText = newNum +"%"
    }
}

setInterval(id,30)

// let radius = loading.r

// console.log(radius)