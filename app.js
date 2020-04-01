'use strict';
var userName = prompt('Hey there, what is your name?');
alert('Welcome to my web page ' + userName);

var questions = confirm('Do you want me to ask you a few questions?');
if (questions === true) {

    //guesing game
    var iceCream = confirm('Do I like ice cream,?');
    if (iceCream === true) {
        console.log('The user knows I like ice cream');
        alert('I love ice cream!');
    } else {
        console.log('wrong, who doesn\'t love icecream?');
    }
    console.log('I love icecream and they guessed: ' + iceCream);


    var hiking = prompt('On a scale from 1 - 10 how much do you think I enjoy hiking? (10 is love it, 1 is hate it)');
    if (hiking <= 5) {
        console.log('wrong ');
        alert('Wrong, I love it! ');
        // console.log('You need to get out more ');
    } else {
        alert('I love hiking!');
        // console.log('likes to Hike');
        console.log('Correct on my hiking obsession!');
    }
    console.log('I love hiking 10/10, they guessed: ' + hiking);


    var animal = prompt('Am I r cat of a dog person?'.toLocaleLowerCase());
    if (animal === 'Cat' || animal === 'cat') {
        console.log('Cat lover woot woot');
        alert('Cat lover woot woot');
    } else if (animal === 'Dog') {
        console.log('yay for dog lovers but I am a cat lady!');
        alert('yay for dog lovers!');
    } else {
        alert('That isnt a valid answer but we can run with it');
    }
    console.log('I love cats, they guessed: ' + animal);



    var company = prompt('What is my favorite company in the world?');
    if (company === 'Microsoft') {
        console.log(company + ' is correct!');
        alert(company + ' is Awesome!');
    } else {
        alert(company + ' is cool too!');
        console.log(company + ' wrong');
    }
    console.log('I love Microsoft, they guessed: ' + company);



    var phoneLine = prompt('What phone carrier do I have ?'.toLocaleLowerCase());
    if (phoneLine === 'Verizon') {
        alert('CORRECT!');
        console.log("Verizon, Correct".toLocaleUpperCase());
    } else {
        console.log('Nopers');
        alert('WRONG!');
    }
    console.log('I use Verizon, they guessed: ' + phoneLine);
} else {
    alert('Have a nice life ' + userName);
}

alert('Goodbye ' + userName + ' see you later!');