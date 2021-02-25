/****
 * Fun with functions
 * 
 * ****/

 // Basic Form

function showMyName(firstName, lastName){
     //setting my variables
    //let firstName = 'Alex';
    //let lastName = 'Gutierrez';
    let fullName = firstName + ' ' + lastName;

    //use the console.log to render fullName
    console.log('You are: ', fullName);
}

showMyName('Alex', 'Gutierrez');

function multiplyTwoNumbers(firstNumber, secondNumber) {
    //take the passed in parameters and multiply
    //setting to a new variable
    let multipliedNumbers = firstNumber + secondNumber;

    //console.log the result
    console.log('These numbers are multiplied! ', multipliedNumbers);

}

multiplyTwoNumbers(15,31);

/** ARROW FUNCTIONS  **/
//Base Function Syntax
function basicSyntaxFunction() {}

//Arrow function syntax
const countToTen =  () => {
    //create a for loop that counts to 10
    for (let i = 0; i <= 10; i++){
        //console.log i
        console.log(i);
    }
};

countToTen();


const countToTenNewStartingPoint = (startingNumber) => {
    if(startingNumber <= 10){
        //create a for loop that count to 10  
        for (startingNumber; startingNumber <= 10; startingNumber++);{
        //console.log i
        console.log(startingNumber);
        }
    }else {
        alert('The number is larger than 10')
    }
};

countToTenNewStartingPoint(5);


//Function that alerts user a welcome with first and last name
const welcomeNewUser = () => {
    //initialize your variables
    //set name variables and welcome message

    let firstName = 'Alex';
    let lastName = 'Gutierrez';
    let welcomeMessage = 'Hey there, ';
    let fullMessage = welcomeMessage + firstName + ' ' + lastName;

    //Alert to render the concat name with fullMessage
    alert(fullMessage);
}

//Add a button to your html page 
//button is tied to a function
//function alerts your user with your favorite animal

const myFaveAnimal = () => {
    let animal = 'octopus';
    let whosWhat = "Anna's favorite animal is an ";
    let annasFaveAnimal = whosWhat + animal;
    alert( annasFaveAnimal);
};

const getUserName = () => {
    //prompt the user for their name
    //bind that value to a variable
    //render a welcome message 

    let userName =  prompt("Hey, what's your name?");
    alert('Welcome, ' + userName);

};

getUserName();