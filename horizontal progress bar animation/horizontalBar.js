const progressBarBack = document.querySelector(".hero")
const progressBar = document.querySelector(".progress")
const result = document.querySelector(".number")

// const width = progressBarBack.offsetWidth;
// console.log({ width, height });

let start = 0
let end = 100

function cycle(){
    if (start === end){
        stop()
    }
    else{
        start++
        // let basis = width/100
        // let newStart = start
        // let plugIn = newStart*basis
        result.innerText = start + "%"
        progressBar.style.width = `${start}%`
        // console.log(basis)

    }
}

setInterval(cycle,100)
