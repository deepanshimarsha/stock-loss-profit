var userValue = document.querySelectorAll("#input")
var btnCalculate = document.querySelector("#btn-calculate")
var output = document.querySelector("#output")

function clickHandler() {
    if (userValue[0].value < 0 || userValue[1].value < 0 || userValue[2].value < 0) {
        output.innerText = "All fields should be positive"

    } else if (userValue[0].value.length === 0 || userValue[1].value.length === 0 || userValue[2].value.length === 0) {
        output.innerText = "All fields are required"

    } else {
        var initialPrice = Number(userValue[0].value)
        var stockAmount = Number(userValue[1].value)
        var currentPrice = Number(userValue[2].value)

        if (initialPrice > currentPrice) {
            var loss = initialPrice - currentPrice
            var totalLoss = loss * stockAmount
            var loss_percentage = getLossPercentage(initialPrice, totalLoss)
            output.innerText = "The loss is " + totalLoss + " and the percentage is " + loss_percentage + "%"
        } else if (currentPrice > initialPrice) {
            var profit = currentPrice - initialPrice
            var totalProfit = profit * stockAmount
            var profit_percentage = getProfitPercentage(currentPrice, totalProfit)
            output.innerText = "The profit is " + totalProfit + " and the percentage is " + profit_percentage + "%"
        } else {
            output.innerText = "no loss, no profit"
        }
    }




}


function getProfitPercentage(initialPrice, totalProfit) {
    var profitPercentage = (totalProfit / initialPrice) * 100
    return profitPercentage

}

function getLossPercentage(initialPrice, totalLoss) {
    var lossPercentage = (totalLoss / initialPrice) * 100
    return lossPercentage


}
btnCalculate.addEventListener("click", clickHandler)