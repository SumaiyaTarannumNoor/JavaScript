// To make this work, visit: https://cors-anywhere.herokuapp.com/corsdemo
//click on: Request temporary access to the demo server

var baseURL = "https://api.coinranking.com/v2/coins"
var proxyURL= "https://cors-anywhere.herokuapp.com/"

var apiURL = `${proxyURL}${baseURL}`;

var coinsData = [];

let pageSize = 10;  //skip/offset
let currentPage = 1;

async function renderTable(page = 1){
    await getData();

    if(page == 1){
        prevButton.style.visibility = "hidden"
    }else{
        prevButton.style.visibility = "visible"
    }

    if(page == numberOfPages()){
        nextButton.style.visibility = "hidden"
    }else{
        nextButton.style.visibility = "visible"
    }


    //create HTML table data
    var cryptoCoin = "";
    console.log(coinsData);

    coinsData.filter((row, index) => {
        let start = (currentPage - 1) * pageSize;
        let end = currentPage * pageSize;

        if (index >= start && index < end) return true;
    }).forEach(coin => {
        cryptoCoin += "<tr>"
        cryptoCoin += `<td> ${parseFloat(coin.btcPrice).toFixed(6)} </td>`
        cryptoCoin += `<td>${(coin.rank)}</td>`
        cryptoCoin += `<td>${(coin.tier)}</td>`
        cryptoCoin += `<td>${(coin.name)}</td>`
        cryptoCoin += `<td>${Math.round(coin.price)} Billion</td>`
        cryptoCoin += `<td>${(coin.symbol)}</td>`
        "<tr>"
    });
    document.getElementById("data").innerHTML = cryptoCoin;
}

renderTable()

function previousPage(){
    if(currentPage > 1)
        currentPage-- ;
        renderTable(currentPage)
}

function nextPage(){
    if((currentPage * pageSize ) < coinsData.length)
        currentPage++ ;
        renderTable(currentPage)
}

function numberOfPages(){
    return Math.ceil(coinsData.length / pageSize)
}

document.querySelector('#prevButton').addEventListener('click', previousPage, false)

document.querySelector('#nextButton').addEventListener('click', nextPage, false)

//Fetch DATA from REST API
async function getData(){
    const response = await fetch(apiURL);
    const coins = await response.json()
    coinsData = coins.data.coins

}
