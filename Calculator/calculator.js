let p = document.querySelector("p");
let first;
let second;

p.innerText = "";

let one = document.querySelector("#one");
one.addEventListener("click", () => {
    p.append(one.innerText);
})

let two = document.querySelector("#two");
two.addEventListener("click", () => {
    p.append(two.innerText);
})

let three = document.querySelector("#three");
three.addEventListener("click", () => {
    p.append(three.innerText);
})

let four = document.querySelector("#four");
four.addEventListener("click", () => {
    p.append(four.innerText);
})


let five = document.querySelector("#five");
five.addEventListener("click", () => {
    p.append(five.innerText);
})

let six = document.querySelector("#six");
six.addEventListener("click", () => {
    p.append(six.innerText);
})

let seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
    p.append(seven.innerText);
})

let eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
    p.append(eight.innerText);
})

let nine = document.querySelector("#nine");
nine.addEventListener("click", () => {
    p.append(nine.innerText);
})

let zero = document.querySelector("#zero");
zero.addEventListener("click", () => {
    p.append(zero.innerText);
})

let dot = document.querySelector("#dot");
dot.addEventListener("click", () => {
    p.append(dot.innerText);
})

let C = document.querySelector("#clear");
C.addEventListener("click", () => {
    p.innerText = "";
})

let add = document.querySelector("#add");
add.addEventListener("click", () => {
   dummy(add);
})

let min = document.querySelector("#min");
min.addEventListener("click", () => {
    dummy(min);
})

let mul = document.querySelector("#mul");
mul.addEventListener("click", () => {
    min.innerText = "*";
    dummy(min);
})

let div = document.querySelector("#div");
div.addEventListener("click", () => {
    dummy(div);
})

let rem = document.querySelector("#rem");
rem.addEventListener("click", () => {
    dummy(rem);
})

let equal = document.querySelector("#equal");
equal.addEventListener("click", function result() {
    second = p.innerText;
    if(operator == "+") {
        p.innerText = parseFloat(first) + parseFloat(second);
    } else if(operator == "-") {
        p.innerText = parseFloat(first) - parseFloat(second);
    } else if(operator == "/") {
        p.innerText = parseFloat(first) / parseFloat(second);
    } else if(operator == "*") {
        p.innerText = parseFloat(first) * parseFloat(second);
    } else if(operator == "%") {
        p.innerText = parseFloat(first) % parseFloat(second);
    } else {
        p.innerText = "Not a valid operator! Try again";
    }
})

let sign = document.querySelector("#sign");
sign.addEventListener("click", () => {
    let minus = '-';
    if(p.innerText.charAt(0) == '-') {
        p.innerText = p.innerText.slice(1, p.innerText.length);
    } else {
        p.innerText = minus + p.innerText;
    }
})

let del = document.querySelector("#del");
del.addEventListener("click", () => {
    p.innerText = p.innerText.slice(0, p.innerText.length-1);
})

function firstVal(ope) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(p.innerText != "") {
                first = p.innerText;
                p.innerText = "";
                p.innerText = ope.innerText;
                operator = ope.innerText;
                p.innerText = "";
                resolve();
            } else {
                alert("Enter any value");
                reject();
            }
        }, 100);
    })
}

async function dummy(ope) {
    await firstVal(ope)
}