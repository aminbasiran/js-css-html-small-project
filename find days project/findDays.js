const dateInp=document.querySelector('.date')
const monthInp=document.querySelector('.month')
const yearInp=document.querySelector('.year')
const button = document.querySelector('.enterButton')
const result = document.querySelector('.result')
const resultAge = document.querySelector('.resultAge')

button.addEventListener('click',()=>{
    let getAll = new Date(`${monthInp.value}/${dateInp.value}/${yearInp.value}`)
    // let getDate = getAll.getDate()
    // let getMonth = getAll.getMonth()
    // let getYear = getAll.getFullYear()
    let getDate = getAll.getDay()

   
// //2nd method (using array)
const arrayOfDays =["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
result.innerText = arrayOfDays[getDate]
let getYear = getAll.getFullYear()
const thisAge = 2022 - getYear
resultAge.innerText = `this person is  ${thisAge}`

// //1st method (using switch case)
//     let plugInDay
//     switch(getDate) {
//         case 0:
//             plugInDay ="sunday"
//           break;
//         case 1:
//             plugInDay ="monday"
//           break;
//         case 2:
//             plugInDay= "tuesday"
//           break;
//         case 3:
//             plugInDay="wednesday"
//           break;
//         case 4:
//             plugInDay= "thursday"
//             break;
//         case 5:
//             plugInDay= "friday"
//             break;
//         case 6:
//             plugInDay= "saturday"
//             break;
//     }
// result.innerText = plugInDay
})