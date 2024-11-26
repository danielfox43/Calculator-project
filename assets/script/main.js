const screen = document.getElementById("screen");
const buttons = document.getElementById("buttons");

const numbers = [0,1,2,3,4,5,6,7,8,9]
let n1 =null, n2 =null,  operator= null, result = false;
const operators = ['+', "-", "/","*"]
buttons.addEventListener("click", (e) => {
    console.log("n1 = " + n1 + " n2 = " + n2 + " op = " + operator)
    if(e.target.id in numbers || e.target.id == ".") {
        Screen("add", e.target.id)
    }
    else if(operators.includes(e.target.id)) {
        
           if((n1 == null ||n1 == NaN) && operator == null) {
             n1 = parseFloat(screen.innerText)
             operator = e.target.id
             screen.innerText = 0
             console.log('1st')
           }else if(operator == null && n1 != null){
            n2 = parseFloat(screen.innerText)
            screen.innerText = Calculate(n1, n2, operator)
            operator = null
            console.log('2st')
           }
    }else if(e.target.id == "equal" && operator) {
        n2 = parseFloat(screen.innerText)

        screen.innerText = Calculate(n1, n2, operator)
        n1 = null
        n2 = null
        operator = null
        console.log(Calculate(n1, n2, operator))
    }else if(e.target.id == "clear") {
        n1 = null
        operator = null
        n2 = null
        screen.innerText = 0
    }else if(e.target.id == "delete") {
        if(!(screen.innerText.length <= 1) || screen.innerText != "0"){
            screen.innerText = screen.innerText.slice(0, - 1)

        }
    }
    
})
document.addEventListener("keydown", (e) => {
    if(screen.innerText.length < 10){
    if(e.key in numbers) {
        if(screen.innerText != "0"){
            screen.innerText += e.key
        }else {
            screen.innerText = e.key
        }
    }
}
})
function Screen(cmd, value) {
    if(cmd == "add"){
        if(screen.innerText.length < 16) {
            if(screen.innerText != "0" || screen.innerText != "Infinity"){
                screen.innerText += value
            }else {
                screen.innerText = value
            }
            if(value == "." && !screen.innerText.includes(".")) {
                screen.innerText += value
            }
    }else if(cmd == "replace") {
        screen.innerText = value
    }
}
}
function Calculate(n1, n2, operator) {
    result = 0
    if(operator == "+") {
     result = n1 + n2
    }else if(operator == "-") {
        result = n1 - n2
    }else if(operator == "/") {
        result = n1/n2
    }else {
        result = n1 * n2
    }
    if(result == NaN || result == null || result == undefined) {
        return 0;
    }else {
        return result;
    }
}