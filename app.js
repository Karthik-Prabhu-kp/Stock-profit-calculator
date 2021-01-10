var btnCalc = document.querySelector("#btn");
var Symbol = document.querySelector("#symbol");
var Price = document.querySelector("#price");
var Qty = document.querySelector("#qty");
var outputDiv = document.querySelector("#out");
var stockValue =0
var diffrence =0
var totalBuyPrice =0

var serverUrl = "https://www.alphavantage.co/query"

function stockUrl(text){
    return serverUrl+"?"+"function=GLOBAL_QUOTE&symbol="+text+"&apikey=J3HT5EH86OYKBQ87"
    
}


function outputHandler(){
    var percentage = ( diffrence/totalBuyPrice )*100

    if (diffrence > 0 ){
        outputDiv.innerText = "$"+diffrence+" profit | Profit percentage :"+percentage+"%"
    }
    else if (diffrence == 0){
        outputDiv.innerText = "No profit or loss"
    }
    else{
        outputDiv.innerText = "$"+Math.abs(diffrence)+"Loss | Loss percentage :"+Math.abs(percentage)+"% "
    }
}


function profitCheck(buyPrice,quantity){
        totalBuyPrice = buyPrice*quantity;
    var currentPrice= stockValue*quantity
        diffrence = currentPrice - totalBuyPrice

    outputHandler(diffrence,totalBuyPrice)
}

function clickHandler(){
    var company = Symbol.value
    // var buyPrice = price.value
    // var quantity = Qty.value

    fetch(stockUrl(company))
    .then(response => response.json())
    .then(json => {
        quote = json["Global Quote"];
        stockValue = quote["05. price"]
    })
    // .then(run => {profitCheck(price.value,Qty.value);})
    function profitCheck(price.value,Qty.value)
    
}


btnCalc.addEventListener("click", clickHandler)