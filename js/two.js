/***
 * JS: Part Two
 * -Operators
 * - Control Flow
 * - Functions
 * ***/

 //Comparison Operators
 let value1 = 35;
 let value2 = 45;

 console.log('Does Value 1 equal value 2?' value1 === value2) //true

 let value1b = 35;
 let value2b = '35';

 console.log('Does Value 1b equal value 2b?') value1b>= value2b? //this will give you a true because you only used a single = 


//Logical Operators

//Logical operator && 
//in order for the result to be true, all conditions must be met with true
console.log('Are my two conditions true or false?', value1 > value2 && value1 !== value2);

//Logical || (Or operator)
// is either one of these true=that's what we are asking
console.log('Are my two conditions true or false?', value1 > value2 || value1 !== value2);
//this is true

// Combining Logical || and Logical &&
let value1c = 35;
let value2c = 100;
let value3c = 500;

console.log('Are my two conditions true or false?', (value1c > value2c || value1c !== value2c) && value2c > value3c);
//this is false because...

/******* Control Flow ********/

//If/Else
let numberOne = 100;
let numberTwo = 445;
let numberThree = 200;

if(numberOne < numberTwo){
    alert('You are correct!');
}else {
    alert('Sorry its not greater than :(');
}

//This is true, if you have a > instead you will get nothing because it it false unless you have the added else statement 

//If, Else IF, Else
//else is not followed by a condition
//an if and and else if are followed by a condition
if (numberOne > numberTwo){
    alert('You are Boss!');
}else if (numberOne ===numberTwo){
    alert('These match!');
}else {
    alert('You lost!');
}

if (numberOne < numberTwo && numberOne !== numberThree){
    alert('You are correct!');
}else if (numberTwo > numberOne) {
    alert('Two for two');
}
//so it alerts you are correct, but stops because condition one was met so it doesn't continue on to the next block of code

// ====== Loops

//Count Up
//for (let i = 0; i < 0; i++){
    //Render the number 10
//    if (i === 10){
//        console.log("THE NUMBER:", i)
//    }
    //console.log('my counter: ', i);
//}

//for.Each is the same 

//Count Down
//for (let i = 20; i > 0; i--){
//    console.log('my downward counter: ', i);
//}
//
//create a for loop that counts by 10 starting with index at 0 and ending at 100

for (let i =0; i <= 101; i+10){
    console.log('My counter by 10:', i);
}
    
//to end the loop or break out of a loop
for (let i = 0; i<=100; i++) {
    if (i === 50) {
        break;
    } else {
        console.log(i);
    }
}

//while loop

while(i < 10){
    console.log(i);
    i++;
}

//Do While
let j = 0;
do{
    console.log('this is j, ' , j);
    j++;
}while (j < 20);

/**** Ternary Operators ****/

//if condition = true ? (run this code()) : (run this code())
//condition ? statement1 : statement2
let age = 20;

age => 21 ? alert('Have fun, be safe!') : alert('Sorry, no babies aloud in!')


/****** Switch Statement 
  switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
} 
 * *****/

let animal = 'cow';
switch (animal){
    case 'dog':
        alert("It's a dog!"); //my code/my statement
        break;
    case 'dog':
        alert("It's a cat!"); //my code/my statement
            break;
    case 'dog':
    alert("It's a monkey!"); //my code/my statement
        break;
    default:
        alert("This doesn't match!");
}


/****** FUNCTIONS ******/

function firstFunction(){
    console.log ('this is my first function');
    return;
}

//firstFunction();

//cannot use a const with this statement below because it is changing the number in the function 
let i = 0;
function countDown(){
    for (let i = 10; i>= 0; i--) {
        console.log('counting from inside my function!', i)
    }
}

//countDown();

//ARROW FUNCTION EXPRESSIONS

const doMath = () => {
    letNum1 = 10;
    letNum2 = 24;
    console.log('my sum of nums: ', num1 + num2)
};
doMath();

const startMath = () => {
    let firstNum = 20;
    let secondNum = 30;
    sumNumbers(firstNum, secondNum);
}

const sumNumbers = (arg1, arg2) => {
    console.log('Sum of numbers:', arg1 + arg2);
};
startMath();