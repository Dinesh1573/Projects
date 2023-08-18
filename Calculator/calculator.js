let p = document.querySelector("p");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let zero = document.querySelector("#zero");
let dot = document.querySelector("#dot");
let C = document.querySelector("#clear");
let div = document.querySelector("#div");
let add = document.querySelector("#add");
let min = document.querySelector("#min");
let mul = document.querySelector("#mul");
let rem = document.querySelector("#rem");
let equal = document.querySelector("#equal");
let del = document.querySelector("#del");
let sign = document.querySelector("#sign");
let first;
let second;

p.innerText = "";

one.addEventListener("click", () => {
    // one.innerText = parseInt(one.innerText);
    p.append(one.innerText);
})

two.addEventListener("click", () => {
    p.append(two.innerText);
})

three.addEventListener("click", () => {
    p.append(three.innerText);
})

four.addEventListener("click", () => {
    p.append(four.innerText);
})

five.addEventListener("click", () => {
    p.append(five.innerText);
})

six.addEventListener("click", () => {
    p.append(six.innerText);
})

seven.addEventListener("click", () => {
    p.append(seven.innerText);
})

eight.addEventListener("click", () => {
    p.append(eight.innerText);
})

nine.addEventListener("click", () => {
    p.append(nine.innerText);
})

zero.addEventListener("click", () => {
    p.append(zero.innerText);
})

dot.addEventListener("click", () => {
    p.append(dot.innerText);
})

C.addEventListener("click", () => {
    p.innerText = "";
})

add.addEventListener("click", () => {
   dummy(add);
})

min.addEventListener("click", () => {
    dummy(min);
})

mul.addEventListener("click", () => {
    min.innerText = "*";
    dummy(min);
})

div.addEventListener("click", () => {
    dummy(div);
})

rem.addEventListener("click", () => {
    dummy(rem);
})

equal.addEventListener("click", function result() {
    second = p.innerText;
    // console.log("second", second);
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

sign.addEventListener("click", () => {
    let minus = '-';
    if(p.innerText.charAt(0) == '-') {
        p.innerText = p.innerText.slice(1, p.innerText.length);
    } else {
        p.innerText = minus + p.innerText;
    }
})

del.addEventListener("click", () => {
    // let letters = p.innerText;
    // let lastCharacter = letters.charAt(letters.length = 1);
    // let lastCharacter = p.innerText.charAt(p.innerText.length - 1);
    // console.log(lastCharacter);
    p.innerText = p.innerText.slice(0, p.innerText.length-1);
})

function firstVal(ope) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(p.innerText != "") {
                first = p.innerText;
                // console.log(first);
                p.innerText = "";
                p.innerText = ope.innerText;
                operator = ope.innerText;
                p.innerText = "";
                resolve();
            } else {
                // console.log("firstVal has error because of no inner Text");
                alert("Enter any value");
                reject();
            }
        }, 100);
    })
}

// function secondVal() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(p.innerText != "") {
//                 second = p.innerText;
//                 console.log(second);
//                 p.innerText = "";
//                 resolve();
//             } else {
//                 console.log("secondVal has error because of no inner Text");
//                 reject();
//             }
//         }, 1000);
//     })
// }

async function dummy(ope) {
    // console.log(ope);
    await firstVal(ope)
    // .then((res) => {
    //     console.log("firstVal successful");
    // })
    // .catch((err) => {
    //     console.log("error catch in seconVal calling");
    // })
}