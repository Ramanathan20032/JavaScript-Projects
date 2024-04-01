function convert(){
    let celciusVal = Number(document.getElementById("input").value)
    let fahrenheitVal = celciusVal*(9/5) + 32
    let result = document.getElementById("result")
    result.textContent = fahrenheitVal.toFixed(3) + " fahrenheit"
}