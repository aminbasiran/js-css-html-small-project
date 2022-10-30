
const axios = require("axios");
const getData = async (initCurrency,finalCurrency) => {
    const response = await axios.get(`https://v6.exchangerate-api.com/v6/dd3ddd6a10ff70f35aecfb12/latest/${initCurrency}`);
    const rate = response.data.conversion_rates[finalCurrency]
    console.log(rate)
    return rate
}

const convertValue = async (initCurrency,finalCurrency ,amount) =>{
    const waitgetData = await getData(initCurrency, finalCurrency);
    const convertAmount = (waitgetData * amount).toFixed(2);
    console.log(convertAmount)

}

convertValue("USD","MYR",2)
