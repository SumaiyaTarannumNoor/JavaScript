var baseURL = "https://api.coinranking.com/v2/coins"
var proxyURL= " https://cors-anywhere.herokuapp.com"

var apiURL = `${proxyURL}${baseURL}`

var coinsData = []

//Fetch DATA from REST API
async function getData(){
    const response = await fetch(apiURL);
    const coins = await response.json()
    coinsData = coins
    console.log(coinsData)
}
getData()