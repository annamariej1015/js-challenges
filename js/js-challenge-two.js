//Exercise 1- For Loop
function oddNum(){
    for (let i = 1; i>= 100; i += 2) {
        console.log('This is my odd counter!', i);
    }
}

oddNum();

//Exercise 2
let firstName = 'Tony';
let lastName = 'Stark';
let message = 'Welcome Home, Sir';
function welcomeUser(){
    alert(message + ' ' + firstName + ' ' + lastName);
}

//welcomeUser(); 


//Exercise 3 Verify a User's Age

//let userAge =  prompt("How old are you?");

const getUserName = () => {
    if (userAge > 13){
        alert('Welcome, come on in!');
    } else {
        alert('Sorry, come back when you are older');
    }
    
};

//getUserName();



//Exercise 4 Temperature in Fahrenheit
let tempMessage = prompt('What is the temp in Celsius?');


const tempChange = (celsius) => {
    let farenheit = celsius * 9/5 +32;
   
    console.log('Your temp in Farenheit is: ',  farenheit);
};

tempChange();

//Exercise 5 Guess the number between 1 and 10


const guessGame = () => {
    let guessNum = prompt('Guess a number 1-10');

        if(guessNum === 3){
            alert('You guess the correct number!');
        }else{
            alert('Guess again.');
        };
}
//guessGame();



