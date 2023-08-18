let cross = "X";
let zero = "O";
let count = 0;
let p = document.querySelector("p");
let restart = document.querySelector(".restart");

let one = document.querySelector(".one");
one.addEventListener("click", () => {
    if(count % 2 == 0) {
        one.innerText = cross;
    } else {
        one.innerText = zero;
    }
    count++;
    check();
})

let two = document.querySelector(".two");
two.addEventListener("click", () => {
    if(count % 2 == 0) {
        two.innerText = cross;
    } else {
        two.innerText = zero;
    }
    count++;
})

let three = document.querySelector(".three");
three.addEventListener("click", () => {
    if(count % 2 == 0) {
        three.innerText = cross;
    } else {
        three.innerText = zero;
    }
    count++;
    check();
})

let four = document.querySelector(".four");
four.addEventListener("click", () => {
    if(count % 2 == 0) {
        four.innerText = cross;
    } else {
        four.innerText = zero;
    }
    count++;
    check();
})

let five = document.querySelector(".five");
five.addEventListener("click", () => {
    if(count % 2 == 0) {
        five.innerText = cross;
    } else {
        five.innerText = zero;
    }
    count++;
    check();
})

let six = document.querySelector(".six");
six.addEventListener("click", () => {
    if(count % 2 == 0) {
        six.innerText = cross;
    } else {
        six.innerText = zero;
    }
    count++;
    check();
})

let seven = document.querySelector(".seven");
seven.addEventListener("click", () => {
    if(count % 2 == 0) {
        seven.innerText = cross;
    } else {
        seven.innerText = zero;
    }
    count++;
    check();
})

let eight = document.querySelector(".eight");
eight.addEventListener("click", () => {
    if(count % 2 == 0) {
        eight.innerText = cross;
    } else {
        eight.innerText = zero;
    }
    count++;
    check();
})

let nine = document.querySelector(".nine");
nine.addEventListener("click", () => {
    if(count % 2 == 0) {
        nine.innerText = cross;
    } else {
        nine.innerText = zero;
    }
    count++;
    check();
})

function check() {
    let num = 1;
    switch(num) {
        case 1:if(one.innerText == cross && two.innerText == cross && three.innerText == cross) {
            p.innerText = "X won!, click Restart ";
            break;
        }
        case 2:if(one.innerText == cross && four.innerText == cross && seven.innerText == cross) {
            p.innerText = "X won!, click Restart ";
            break;
        }
        case 3:if(one.innerText == cross && five.innerText == cross && nine.innerText == cross) {
            p.innerText = "X won!, click Restart ";
            break;
        }
        case 4:if(two.innerText == cross && five.innerText == cross && eight.innerText == cross) {
            p.innerText = "X won!, click Restart ";
            break;
        }
        case 5:if(three.innerText == cross && five.innerText == cross && seven.innerText == cross) {
            p.innerText = "X won!, click Restart ";
            break;
        }
        case 6:if(three.innerText == cross && six.innerText == cross && nine.innerText == cross) {
            p.innerText = "X won!, click Restart ";
            break;
        }
        case 7:if(four.innerText == cross && five.innerText == cross && six.innerText == cross) {
            p.innerText = "X won!, click Restart ";
            break;
        }
        case 8:if(seven.innerText == cross && eight.innerText == cross && nine.innerText == cross) {
            p.innerText = "X won!, click Restart ";
            break;
        }
    
    
        case 9:if(one.innerText == zero && two.innerText == zero && three.innerText == zero) {
            p.innerText = "O won!, click Restart ";
            break;
        }
        case 10:if(one.innerText == zero && four.innerText == zero && seven.innerText == zero) {
            p.innerText = "O won!, click Restart ";
            break;
        }
        case 11:if(one.innerText == zero && five.innerText == zero && nine.innerText == zero) {
            p.innerText = "O won!, click Restart ";
            break;
        }
        case 12:if(two.innerText == zero && five.innerText == zero && eight.innerText == zero) {
            p.innerText = "O won!, click Restart ";
            break;
        }
        case 13:if(three.innerText == zero && five.innerText == zero && seven.innerText == zero) {
            p.innerText = "O won!, click Restart ";
            break;
        }
        case 14:if(three.innerText == zero && six.innerText == zero && nine.innerText == zero) {
            p.innerText = "O won!, click Restart ";
            break;
        }
        case 15:if(four.innerText == zero && five.innerText == zero && six.innerText == zero) {
            p.innerText = "O won!, click Restart ";
            break;
        }
        case 16:if(seven.innerText == zero && eight.innerText == zero && nine.innerText == zero) {
            p.innerText = "O won!, click Restart ";
            break;
        }
        case 17: if(count > 8) {
                 p.innerText = "Draw!";
                 break;
        }
        default: p.innerText = "";
    }
}

restart.addEventListener("click", () => {
    let arr = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for(let i=0; i<arr.length; i++) {
        arr[i].innerText = "";
    }
})