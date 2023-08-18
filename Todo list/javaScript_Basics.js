// let todo = [];
// let req = prompt("Please enter your request");
// while(1)
// {
//     if(req == "quit")
//     {
//         console.log("quitting app...");
//         break;
//     }
//     if(req == "list")
//     {
//         console.log("------------------------------------");
//         for(let i=0;i<todo.length;i++)
//         {
//             console.log(i,todo[i]);
//         }
//         console.log("------------------------------------");
//     }
//     else if(req == "add")
//     {
//         let task = prompt("Please enter the task you want to add");
//         todo.push(task);
//         console.log("task added");
//     }
//     else if(req == "delete")
//     {
//         let indx = prompt("Please enter the task you want to delete");
//         todo.splice(indx,1);
//         console.log("task deleted");
//     }
//     else
//     {
//         console.log("wrong request");
//     }
//     req = prompt("Please enter your request");
// }
                                                            // let number = prompt("Please enter a number: ");
                                                            // let numb = parseInt(number);
                                                            // let sum = 0;
                                                            // for(let i=0;numb;i++)
                                                            // {
                                                            //     sum = sum+numb%10;
                                                            //     numb = Math.floor(numb/10);
                                                            // }
                                                            // console.log("numbers in your number are: "+sum);
                                            // let number = prompt("Please enter a number: ");
                                            // let numb = parseInt(number);
                                            // let cal = 0;
                                            // for(cal=0;numb;cal++)
                                            // {
                                            //     numb = Math.floor(numb/10);
                                            // }
                                            // console.log("numbers in your number are: "+cal);
                            // let number = prompt("Please enter a number");
                            // let fact = 1;
                            // for(let i=0;i<number;i++)
                            // {
                            //     fact = fact*(number-i);
                            // }
                            // console.log("Factorial of "+number+" is "+fact);
                // let arr = [23,34,98,43,100,11];
                // let lar = 0; 
                // for(let i=0;i<arr.length;i++)
                // {
                //     if(lar<arr[i])
                //       lar = arr[i];
                // }
                // console.log("Largest value in array is "+lar);
// const student = {
//     name: "Dinesh Verma",
//     age: 19,
//     marks: 94.4,
//     city: "San Francisco"
//  };
// let delhi = {
//     latitude: "28.7841 N",
//     longitude: "77.1025 E"
// };
// const item = {
//     price: 100.99,
//     discount: 50,
//     colors: ["red","pink"]
// };
// const post = {
//     username: "@dineshverma",
//     content: "This is my #firstPost",
//     likes: 150,
//     reposts: 5,
//     tags: ["@apnacollege","@delta"]
// };
// const obj = {
//     1: "a",
//     2: "b",
//     true: "c",
//     null: "d",
//     undefined: "e"
// };
// const classInfo = {
//     dinesh: {
//         grade: "A",
//         city: "Delhi"
//     },
//     rahul: {
//         grade: "A+",
//         city: "Pune"
//     },
//     anita: {
//         grade: "O",
//         city: "Mumbai"
//     }
// };
// const classInfo = [
//     {
//         name: "anita",
//         grade: "A+",
//         city: "Delhi"
//     },
//     {
//         name: "rahul",
//         grade: "O",
//         city: "Pune"
//     },
//     {
//         name: "dinesh",
//         grade: "A+",
//         city: "Mumbai"
//     }
// ];
// const max = prompt("Enter the maximum number:");
// const random = Math.floor(Math.random()*max)+1;
// let guess = prompt("Guess the number:");
// while(1)
// {
//     if(guess == "quit")
//     {
//         console.log("user quit...!");
//         break;
//     }
//     if(guess == random)
//     {
                 //         break;
//     }
//     else if(guess < random)
//     {
//         guess = prompt("your number is small ");
//     }
//     else if(guess > random)
//     {
//         guess = prompt("your number is large ");
//     }
//     else
//     {
//         guess = prompt(" Your guess was wrong. Please try again.");
//     }
// }

// let dice = Math.floor(Math.random()*6)+1;
// console.log(dice);

// const car = {
//     name: "Audi",
//     model: "Audi Q7",
//     color: "royal blue"
// };
// console.log(car.name);

// let person = {
//     name: "Dinesh",
//     age: 19,
//     city: "Jaipur"
// };
// person.city = "New York";
// person.country = "United States";
// console.log(person);
// function hello()
// {
//     console.log("hello");
// }
// function printName()
// {
//     console.log("apna college");
// }
// hello();
// printName();
// function print1to5()
// {
//     for(let i=1;i<=5;i++)
//         console.log(i);
// }
// print1to5();
// function isAdult()
// {
//     let age = 9;
//     if(age>=18)
//         console.log("Adult");
//     else
//         console.log("Not adult");    
// }
// isAdult();
// function printPoem()
// {
//     console.log("Twinkle Twinkle, little star");
//     console.log("how I wonder what you are ");
// }
// printPoem();
// function ludoDice()
// {
//     return(Math.floor(Math.random()*6)+1);
// }
// while(1)
// {
//     let dice;
//     dice = ludoDice();
//     if(dice == 6)
//     {
//         console.log(dice);
//         continue;
//     }
//     else
//     {
//         console.log(dice);
//         break;
//     }
// }
// function printName(name,age)
// {
//     console.log(name +" is "+ age +" years old.");
// }
// printName("Dinesh Verma",19);
// function average(a,b,c)
// {
//     console.log("Average is "+(a+b+c)/3);
// }
// average(50,45,45);
// function printTable(a)
// {
//     for(let i=1; i<=10; i++)
//         console.log(a*i);
// }
// printTable(7);
// function getSum(n)
// {
//     sum = 0;
//     for(let i=1; i<=n;i++)
//     {
//         sum = sum + i;
//     }
//     return sum;
// }
// console.log(getSum(10000));
// let str = ["hi ","hello ","bye ","!"];
// function concat(str)
// {
//     let result = "";
//     for(let i=0;i<str.length;i++)
//     {
//         result = result + str[i];
//     }
//     return result;
// }
// console.log(concat(str));
// let greet = "hello";
// function changeGreet()
// {
//     let greet = "namaste";
//     console.log(greet);
//     function innerGreet()
//       {}
// }
// console.log(greet);
// changeGreet();
// let name = function(a,b){
//     return a+b;
// }
// let hello = function(){
//     console.log("hello");
// }
// function multipleGreet(func,n)
// {
//     for(let i=1;i<=n;i++)
//     {
//         func();
//     }
// }
// let greet = function(){
//     console.log("hello");
// }
// multipleGreet(greet,10);
// function oddEvenTest(request){
//     if(request == "odd")
//     {
//         return function(n)
//         {
//             console.log(!(n%2 == 0));
//         }
//     }
//     else if(request == "even")
//     {
//         return function(n)
//         {
//             console.log(n%2 == 0);
//         }
//     }
//     else
//     {
//         console.log("wrong request.");
//     }
// }
// const calculator = {
//     num: 55,
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     multi: function(a,b){
//         return a*b;
//     }
// };
// const cal = {
//     add(a,b){
//         return a+b;
//     },
//     sub(a,b){
//         return a-b;
//     }
// };
// let num;
// function greaterNum(num)
// {
//     let arr = [23,12,34,46,76,43];
//     let array = "";
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i] > num)
//             array = array + " " +arr[i];
//     }
//     return array;
// }
// console.log(greaterNum(34));
// let str = "abcdabcdefgggh";
// let check = " ";
// function extractUnique(str)
// {
//     for(let i=0;i<str.length;i++)
//     {
//         for(let j=0;j<check.length;j++)
//         {
//             if(str[i] != check[j])
//             {
//                 if(j == check.length-1)
//                     check = check + str[i];
//             }
//             else
//                 break;
//         }
//     }
//     return check;
// }
// console.log(extractUnique(str));
// let country = ["Australia", "Germany", "United States of America"];
// let arr = [" "];
// function largestName(country)
// {
//     for(let i=0;i<country.length;i++)
//     {
//             if(country[i].length > arr.length)
//                 arr = country[i];
//     }
//     return arr;
// }
// console.log(largestName(country));
// let str = "dinesh verma" ;
// let vowels = ["a","e","i","o","u"];
// let count = 0;
// function countVowel()
// {
//     for(let i=0; i<str.length; i++)
//     {
//         if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u")
//         {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowel());
// function randomNum(start,end)
// {
//     let diff = end - start;
//     return Math.floor(Math.random() * diff)+start;
// }
// console.log(randomNum(3,6));
// const student = {
//     name: "Dinesh",
//     age: 23,
//     eng: 95,
//     math: 93,
//     phy: 97,
//     getAvg() {
//         console.log(this);
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(`${this.name} got average marks ${avg}`);
//     }
// }
// function getAvg() {
//     console.log(this);
// }
// console.log("hello");
// console.log("hello");
// try {
//     console.log(a);
// }
// catch(e){
//     console.log("a not found...");
// }
// console.log("hello 2");
// console.log("hello 2");
// const sum = (a,b) => {
//     console.log(a+b);
// };
// const cube = n => n*n*n;
// const power = (m,n) => {
//     console.log(m**n);
// };
// const mul = (a,b) => (
//     a*b
// );
// console.log("hi there!");
// setTimeout( () => {
//     console.log("Apna college");
// },4000);
// console.log("Welcome to");
// let id = setInterval(() => {
//     console.log("Apna College");
// },2000);
// console.log(id);

// let id2 = setInterval(() => {
//     console.log("Hello World!");
// },2000);
// console.log(id2);
// const student = {
//     name: "Dinesh",
//     marks: 95,
//     prop: this,
//     getName: function() {
//         console.log(this);    //Normal function this -> student
//         return this.name;
//     },
//     getMarks: () => {
//         console.log(this);    //Arrow function this -> student-this ->window
//         return this.marks;
//     },
//     getInfo1: function() {
//         setTimeout(() => {
//             console.log(this);  //student
//         },2000);
//     },
//     getInfo2: function() {
//         setTimeout(function() {
//             console.log(this);  //window
//         },2000);
//     }
// };
// let sq = n => ( n*n );
// let id = setInterval(() => {
//     console.log("Hello World!");
// },2000);

// setTimeout(() => {
//     clearInterval(id);
//     console.log("clear interval run");
// },10000);
// let arrayAveraged = (arr) => {
//     let avg=0;
//     for(let i=0;i<arr.length;i++)
//     {
//         avg = avg + arr[i];
//     }
//     avg = avg/arr.length;
//     console.log(avg);
// }
// let array = [4,4,4];
// arrayAveraged(array);
// let isEven = n => {
//     if(n%2 == 0)
//         return true;
//     return false;    
// }
// console.log(isEven(4));
// const object = {
//     message: 'Hello, World!',
//     logMessage() {
//     console.log(this.message);
//     }
//     };
//     setTimeout(object.logMessage, 1000);
    // let length = 4;
    // function callback() {
    // console.log(this.length);
    // }
    // const object = {
    // length: 5,
    // method(callback) {
    // callback();
    // },
    // };
    // object.method(callback, 1, 2);
// let arr = [1,2,3,4,5];
// function print(el) {
//     console.log(el);
// }
// arr.forEach(function (el)
//     {
//         console.log(el);
//     }
// );
// let arr = [{
//     name: "Dinesh",
//     marks: 89
// },{
//     name: "Anita",
//     marks: 90
// },{
//     name: "Rahul",
//     marks: 90
// }];
// arr.forEach((student) => {
//     console.log(student.marks);
// });
// let num = [1,2,3,4];
// let double = num.map((el) =>{ 
//     return el*el;
// });
// console.log(double);
// let students = [{
//     name: "Dinesh",
//     marks: 89
// },{
//     name: "Anita",
//     marks: 90
// },{
//     name: "Rahul",
//     marks: 90
// }];
// let gpa = students.map((el) => {
//     return el.marks/10;
// });
// let nums = [2,4,1,5,6,2,7,8,9];
// let even = nums.filter((el) =>{
//     return(el%2 == 0)
// });
// let odd = nums.filter((el) => {
//     return(el%2 != 0)
// });
// let arr = [1,2,4,6];
// let t=arr.some((el) => {
//     return (el%2 ==0)
// });
// let arr = [1,2,3,4,5];
// let add_all = arr.reduce((res,el) => res+el);
// let arr = [12,34,36,23,54,43];
// let max = arr.reduce((max,el) => {
//     if(max < el)
//     {
//         return el;
//     }
//     else{
//         return max;
//     }
// });
// let arr = [10,2,30,40];
// let mul = arr.every((el) => el % 10 ==0);
// console.log(mul);
// let min = arr.reduce((res,el) => {
//     console.log(res);
//     if(res < el)
//     {
//         return res;
//     }
//     else{
//         return el;
//     }
// })
// console.log(min);
// function sum(a,b=0,c=0){
//     return res = a+b+c;
// }
// console.log(sum(12,8));
// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
// console.log(Math.min(...arr));
// let name = "Dinesh Verma";
// console.log(...name);
// let arr = [1,2,3,4,5];
// let newArr = [...arr];
// console.log(newArr);
// let array = [..."Dinesh Verma"];
// console.log(array);
// let odd = [1, 3, 5, 7, 9];
// let even = [2, 4, 6, 8, 10];
// let all = [...odd, ...even];
// console.log(all);
// let data = {
//     email: "dv15072003@gmail.com",
//     password: "1234dineshD#"
// };
// let copyData = {...data, id: "101", country: "India"};
// let arr = [1, 2, 3, 4, 5];
// let obj = {...arr, ..."Dinesh"};
// function sum(...args){
//     return args.reduce((ans,el) => ans+el);
// }
// function min(a, b, c, d)
// {
//     console.log(arguments);
// }
// function min(msg, ...args){
//     console.log(msg);
//     return args.reduce((min, el) => {
//         if(min > el)
//         {
//             return el;
//         }
//         else{
//             return min;
//         }
//     })
//}
// let names = ["tony", "bruce", "peter", "steve", "james", "groove"];
// let [winner, runnerup, secondRunnerup, ...others] = names;
// const student = {
//     name: "Dinesh",
//     age: 14,
//     class: 9,
//     subjects: ["hindi", "english", "math", "science"],
//     username: "dineshverma@gmail.com",
//     password: "abcd"
// };
// let {username: user, password: seceret, city : place = "Jaipur"} = student;
// let hclass = document.getElementsByClassName("heading");
// for(let i=0; i<hclass.length; i++)
// {
//     hclass[i].innerText = "completed";
//     console.log(`inner text of ${i} has changed`);
// }
// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#mainImg"));
// console.dir(document.querySelector(".heading3"));
// console.dir(document.querySelectorAll("h1"));
// let headingh3 = document.querySelectorAll(".box h3");
// for(let i=0; i<headingh3.length; i++)
// {
//     headingh3[i].style.color = "skyblue";
// }
// let headingh4 = document.querySelector("h4");
// headingh4.style.color = "blue";
// let p1 = document.createElement("p");
// p1.innerText = "Hey I'm red!";
// // p1.style.color = "red";
// p1.classList.add("red");
// let body = document.querySelector("body");
// body.append(p1);

// let h3 = document.createElement("h3");
// h3.innerText = "I'm a blue h3!";
// h3.classList.add("blue");
// body.append(h3);

// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// h1.innerText = "I'm in a div"
// let p = document.createElement("p");
// p.innerText = "ME TOO!";
// div.append(h1);
// div.append(p);
// div.classList.add("divc");
// body.append(div);
// body.append(document.createElement("br"));

// let input = document.createElement("input");
// input.setAttribute("type","text");
// input.setAttribute("placeholder","username");
// let button = document.createElement("button");
// button.setAttribute("id","btn");
// button.innerText = "Click me";
// body.append(input);
// body.append(document.createElement("br"));
// body.append(document.createElement("br"));
// body.append(button);
// let btn  = document.querySelector("#btn");
// btn.classList.add("white");

// let head1 = document.createElement("h1");
// head1.innerHTML = "<u>DOM Practice</u>"
// head1.classList.add("headStyle");
// body.append(head1);

// let para = document.createElement("p");
// para.innerHTML = "Apna College <b>Delta</b> Practice";
// body.append(para);
// let btn = document.querySelector("button");
// console.dir(btn);
// btn.onclick = function () {
//     console.log("button was clicked");
// }
// function sayHello() {
//     alert("hello!");
// }
// btn.onclick = sayHello;
// let btns = document.querySelectorAll("button");
// for(btn of btns) {
//     btn.onclick = sayHello;
//     btn.onmouseenter = function () {
//         console.log("you entered a button");
//     };
// }
// function sayName() {
//     alert("apna college");
// }
// btn.addEventListener("click",sayHello);
// btn.addEventListener("dblclick",function () {
//     console.log("you double clicked me");
// });
// let btn = document.querySelector("button");

// btn.addEventListener("click",function () {
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText =  randomColor;
//     console.log("color updated");
    
//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;
// });

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }
// let p = document.querySelector("p");
// p.addEventListener("click", function() {
//     console.log("paragraph was clicked.");
// });

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function() {
//     box.style.backgroundColor = "wheat";
// });

// box.addEventListener("click", function() {
//     box.style.backgroundColor = "red";
// });
// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// function changeColor() {
//     console.log(this.innerText);
//     this.style.backgroundColor = "skyblue";
// }

// btn.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);
// let btn = document.querySelector("button");
// btn.addEventListener("dblclick", function(event) {
//     console.log(event);
//     console.log("button clicked");
// });
// let inp = document.querySelector("input");
// inp.addEventListener("keydown", function() {
//     console.log("key was pressed");
// });
// let inp = document.querySelector("input");
// inp.addEventListener("keydown", function(event) {
//     console.log(event);
//     console.log(event.key);
//     console.log(event.code);
//     console.log("key was pressed");
// });
// inp.addEventListener("keyup", function(event) {
//     console.log(event);
//     console.log(event.key);
//     console.log(event.code);
//     console.log("key was released");
// });
// let form = document.querySelector("form");
// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     let inp1 = document.querySelector("#user");
//     let inp2 = document.querySelector("#pass");
//     console.log(inp1.value);
//     console.log(inp2.value);
//     alert   (`Hi ${inp1.value} your password is set to ${inp2.value}`);
// });
// let inp1 = document.querySelector("#user");
// let form = document.querySelector("form");
// form.addEventListener("submit", function(event) {
//     event.preventDefault();
// });

// inp1.addEventListener("change", function() {
//     console.log("changed event");
//     console.log("final Value: "+ this.value);
// });

// inp1.addEventListener("input", function() {
//     console.log("input event");
//     console.log("final Value: "+ this.value);
// });
// let inp = document.querySelector("#text");
// let p = document.querySelector("p");
// inp.addEventListener("input", function() {
//     p.innerText = inp.value;
//     console.log(inp.value);
// })
// let box = document.querySelector(".box");

// box.addEventListener("mouseout", function() {
//     box.style.backgroundColor = "pink";
// });

// box.addEventListener("mouseenter", function() {
//     box.style.backgroundColor = "wheat";
// });

// let inp = document.querySelector("#text");
// let h1 = document.querySelector("h1");
// let body = document.querySelector("body");

// inp.addEventListener("keyup", function() {
//     h1.innerText = inp.value;
// })

// h1.addEventListener("reload", function() {
//     console.log("loaded");
//     h1.style.backgroundColor = "black";
//     h1.style.color = "white";
// })
// let button = document.createElement("button");
// button.innerText = "click me";
// let body = document.querySelector("body");
// body.append(button);
// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//     btn.style.backgroundColor = "green";
// });
// let inp = document.querySelector("#text");
// let h2 = document.querySelector("h2");

// inp.addEventListener("keyup", function() {
//     inp.addEventListener("change", function() {
//         h2.innerText = inp.value;
//     })
// })

// document.addEventListener("scroll", function() {
//     h2.innerText = "Heading 2";    
// })

// window.addEventListener("load", function() {
//     h2.innerText = "Heading 2-2";    
// })
// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function() {
//     console.log("div was clicked.");
// })

// ul.addEventListener("click", function(event) {
//     event.stopPropagation();
//     console.log("ul was clicked.");
// })

// for(li of lis) {
//     li.addEventListener("click", function(event) {
//         event.stopPropagation();
//         console.log("li was clicked.");
//     })
// }

// let inp = document.querySelector("input");
// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// inp.addEventListener("change", function() {
//         btn.addEventListener("click", function(event) {
//             event.stopPropagation();
//             for(let i=0; i<=lis.length; i++)
//             {
//                 if(i == lis.length)
//                 {
//                         let li = document.createElement("li");
//                         if(inp.value == "")
//                         {
//                             break;
//                         }
//                         li.innerText = inp.value;
//                         ul.appendChild(li);
//                 }
//             }
//             inp.value = "";
//         })        
// })

                                                                let inp = document.querySelector("input");
                                                                let btn = document.querySelector("button");
                                                                let ul = document.querySelector("ul");

                                                                btn.addEventListener("click", function() {
                                                                    let item = document.createElement("li");
                                                                    item.innerText = inp.value;

                                                                    let delBtn = document.createElement("button");
                                                                    delBtn.innerText = "delete";
                                                                    delBtn.classList.add("delete");

                                                                    item.appendChild(delBtn);
                                                                    ul.appendChild(item);
                                                                    inp.value = "";
                                                                })

                                                                ul.addEventListener("click", function(event) {
                                                                    if(event.target.nodeName == "BUTTON")
                                                                    {
                                                                        let listItem = event.target.parentElement;
                                                                        listItem.remove();
                                                                    }
                                                                })

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns)
// {
//     delBtn.addEventListener("click", function() {
//         let par = this.parentElement;
//         par.remove();
//     })
// }

// let inp = document.querySelector("input");
// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");

// btn.addEventListener("click", function() {
//     let item = document.createElement("li");
//     item.innerText = inp.value;
    
//     let delBtn = document.createElement("button");
//     delBtn.innerText = "delete";
//     delBtn.classList.add("delete");
//     item.appendChild(delBtn);
    
//     ul.appendChild(item);
//     inp.value = "";
// })

// ul.addEventListener("click", function(event) {
//     if(event.target.nodeName == "BUTTON") {
//         let listItem = event.target.parentNode;
//         listItem.remove();
//     }
// })