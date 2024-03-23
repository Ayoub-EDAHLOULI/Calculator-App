let string = "";

let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");


let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let doubleZero = document.getElementById("doubleZero");


const videBox = document.getElementById("delete");
const minusOne = document.getElementById("minusOne");


const Plus = document.getElementById("Plus");
const Minus = document.getElementById("Minus");
const multipliedBy = document.getElementById("multipliedBy");
const dividedBy = document.getElementById("dividedBy");
const Percent = document.getElementById("Percent");
const Point = document.getElementById("point");

let equal = document.getElementById("equal");


one.addEventListener('click', event => {
    if(input.value != "Error" && input.value != "undefined"){
        input.value+="1";
    }else{
        input.value="";
        input.value+="1";
    }
})
two.addEventListener('click', event => {
    if(input.value != "Error" && input.value != "undefined"){
        input.value+="2";
    }else{
        input.value="";
        input.value+="2";
    }
})
three.addEventListener('click', event => {
    if(input.value != "Error" && input.value != "undefined"){
        input.value+="3";
    }else{
        input.value="";
        input.value+="3";
    }
})
four.addEventListener('click', event => {
    if(input.value != "Error" && input.value != "undefined"){
        input.value+="4";
    }else{
        input.value="";
        input.value+="4";
    }
})
five.addEventListener('click', event => {
    if(input.value != "Error" && input.value != "undefined"){
        input.value+="5";
    }else{
        input.value="";
        input.value+="5";
    }
})
six.addEventListener('click', event => {
    if(input.value != "Error" && input.value != "undefined"){
        input.value+="6";
    }else{
        input.value="";
        input.value+="6";
    }
})
seven.addEventListener('click', event => {
    if(input.value != "Error" && input.value != "undefined"){
        input.value+="7";
    }else{
        input.value="";
        input.value+="7";
    }
})
eight.addEventListener('click', event => {
    if(input.value != "Error" && input.value != "undefined"){
        input.value+="8";
    }else{
        input.value="";
        input.value+="8";
    }
})
nine.addEventListener('click', event => {
    if(input.value != "Error" && input.value != "undefined"){
        input.value+="9";
    }else{
        input.value="";
        input.value+="9";
    }
})
zero.addEventListener('click', event => {
    if(input.value != "Error" && input.value != "undefined"){
        input.value+="0";
    }else{
        input.value="";
        input.value+="0";
    }
})
doubleZero.addEventListener('click', event => {
    if(input.value != "Error" && input.value != "undefined"){
        input.value+="00";
    }else{
        input.value="";
        input.value+="00";
    }
})



Plus.addEventListener('click', event => {

    if(input.value == "+" || input.value.slice(-1) == "+"){
        input.value=input.value;
    }else if(input.value.slice(-1) == "-" || input.value.slice(-1) == "*" || input.value.slice(-1) == "/" || input.value.slice(-1) == "%" || input.value.slice(-1) == "."){
        input.value= input.value.slice(0,-1);
        input.value+="+";
    }else if(input.value != "undefined"){
        input.value+="+";
    }else{
        input.value="";
        input.value+="+";
    }
})
Minus.addEventListener('click', event => {
    if(input.value == "-" || input.value.slice(-1) == "-"){
        input.value=input.value;
    }else if(input.value.slice(-1) == "+" || input.value.slice(-1) == "*" || input.value.slice(-1) == "/" || input.value.slice(-1) == "%" || input.value.slice(-1) == "."){
        input.value= input.value.slice(0,-1);
        input.value+="-";
    }else if(input.value != "undefined"){
        input.value+="-";
    }else{
        input.value="";
        input.value+="-";
    }
})
multipliedBy.addEventListener('click', event => {
    if(input.value == "*" || input.value.slice(-1) == "*"){
        input.value=input.value;
    }else if(input.value.slice(-1) == "+" || input.value.slice(-1) == "-" || input.value.slice(-1) == "/" || input.value.slice(-1) == "%" || input.value.slice(-1) == "."){
        input.value= input.value.slice(0,-1);
        input.value+="*";
    }else if(input.value != "undefined"){
        input.value+="*";
    }else{
        input.value="";
        input.value+="*";
    }
})
dividedBy.addEventListener('click', event => {
    if(input.value == "/" || input.value.slice(-1) == "/"){
        input.value=input.value;
    }else if(input.value.slice(-1) == "+" || input.value.slice(-1) == "-" || input.value.slice(-1) == "*" || input.value.slice(-1) == "%" || input.value.slice(-1) == "."){
        input.value= input.value.slice(0,-1);
        input.value+="/";
    }else if(input.value != "undefined"){
        input.value+="/";
    }else{
        input.value="";
        input.value+="/";
    }
})
Percent.addEventListener('click', event => {
    if(input.value == "%" || input.value.slice(-1) == "%"){
        input.value=input.value;
    }else if(input.value.slice(-1) == "+" || input.value.slice(-1) == "-" || input.value.slice(-1) == "*" || input.value.slice(-1) == "/" || input.value.slice(-1) == "."){
        input.value= input.value.slice(0,-1);
        input.value+="%";
    }else if(input.value != "undefined"){
        input.value+="%";
    }else{
        input.value="";
        input.value+="%";
    }
})
Point.addEventListener('click', event => {
    if(input.value == "." || input.value.slice(-1) == "."){
        input.value=input.value;
    }else if(input.value.slice(-1) == "+" || input.value.slice(-1) == "-" || input.value.slice(-1) == "*" || input.value.slice(-1) == "/" || input.value.slice(-1) == "%"){
        input.value= input.value.slice(0,-1);
        input.value+=".";
    }else if(input.value != "undefined"){
        input.value+=".";
    }else{
        input.value="";
        input.value+=".";
    }
})




videBox.addEventListener('click', event => {
    input.value="";
})
minusOne.addEventListener('click', event => {
    input.value= input.value.slice(0,-1);
})

equal.addEventListener('click', event => {
    try{
        if(input.value=="undefined"){
            input.value="";
        }else{
            input.value = eval(input.value);
        }
    }
    catch(error){
        input.value="undefined";
        input.value="";
    }
})