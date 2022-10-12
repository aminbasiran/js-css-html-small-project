const inputCountry = document.querySelector('#country')
const button = document.querySelector('#button')
const place = document.querySelector('.name')
const flag = document.querySelector('.flag')
const currency = document.querySelector('.currency')
const language = document.querySelector('.language')
const population = document.querySelector('.population')

button.addEventListener('click', getInfo)

function getInfo(){
    let value = inputCountry.value
    let link = `https://restcountries.com/v3.1/name/${value}?fullText=true`
    fetch(link)
        .then((response) => response.json())
        .then((data) => {
            console.log(data[0]);
            console.log(data[0].capital[0]);
            console.log(Object.keys(data[0].currencies)[0]);
            console.log(Object.keys(data[0].languages)[0]);
            console.log(data[0].population);
            place.innerText = data[0].capital[0];
            flag.src = data[0].flags.svg;
            currency.innerText= `Currency: ${Object.keys(data[0].currencies)[0]}`
            language.innerText= `Language: ${Object.keys(data[0].languages)[0]}`
            population.innerText= `Population: ${data[0].population}`
            
        })
    }
