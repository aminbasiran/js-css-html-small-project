const loading = document.querySelector('.circle')
const textElement = document.querySelector('.text')

let start = 0
let end = 100

//1ST WAY
let id = function progress(){
    
    if (start == 100){
        stop()
    }
    else {
        start ++
        
        let newNum = start
        console.log(newNum)
        textElement.innerText = newNum +"%"
        loading.style.background = `conic-gradient(
            #4d5bf9 ${newNum *  3.6}deg,
            #cadcff ${newNum * 3.6}deg
        )`
    }
}

setInterval(id,5000)

//2ND WAY

// const sleep = (time) => {
//     return new Promise((resolve) => setTimeout(resolve, time))
//   }
  
//   const doSomething = async () => {
//     for (let start = 0; start < end+1; start++) {
//       await sleep(100)
//       textElement.innerText = start + "%"
//       loading.style.background = `conic-gradient(
//         #4d5bf9 ${start*  3.6}deg,
//         #cadcff ${start * 3.6}deg
//         )`
//     }
//   }
  
//   doSomething()

  
// 3RD WAY(fix it)

// function progress(){
//     for(let start = 0;  start<end+1; start++){
//         textElement.innerText = start
//         loading.style.background = `conic-gradient(
//             #4d5bf9 ${start*  3.6}deg,
//             #cadcff ${start * 3.6}deg
//         )`
//     }
// }

// progress()






