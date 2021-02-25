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

const getUserAge = () => {
    if (userAge > 13){
        alert('Welcome, come on in!');
    } else {
        alert('Sorry, come back when you are older');
    }
    
};

//getUserAge();

//to use a ternary
//userAge < 13 ?  alert('Sorry not old enough') : alert ('Hey welcome')



//Exercise 4 Temperature in Fahrenheit

const tempChange = () => {
    let tempMessage = prompt('What is the temp?');
    let farenheit = tempMessage * 1.8 + 32;
   
    alert('It is ' + farenheit + '*F outside.');
};

//tempChange(45);

//Exercise 5 Guess the number between 1 and 10


const guessGame = () => {
    let correctAnswer = 3;
        for (let i = 0; i <=2; i++){
            let guessNum = prompt('Guess a number 1-10');
            if (guessNum == correctAnswer){
                alert('You guess the correct number!');
            }else{
                alert('Guess again.');
            }
            if (i === 2) alert('You are out of guesses');
        }
};
//guessGame();



