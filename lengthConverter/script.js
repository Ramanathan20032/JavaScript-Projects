function convert(){
    let cmVal = Number(document.getElementById("input").value)
    let inchVal = cmVal / 2.54
    let result = document.getElementById("result")
    result.textContent = inchVal.toFixed(3) + " inches"
}