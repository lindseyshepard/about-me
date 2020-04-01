'use strict';
var userName = prompt('Hey there, what is your name?');
alert('Welcome to my web page ' + userName);

var questions = confirm('Do you want me to ask you a few questions?');
if (questions === true) {

    //guesing game
    var iceCream = confirm('Do you like ice cream, because I do');
    if (iceCream === true) {
        console.log('The user likes ice cream too');
        alert('The user likes ice cream too');
    } else {
        console.log('ice cream hater');
    }
    console.log('Do they like icecream: ' + iceCream);


    var hiking = prompt('On a scale from 1 - 10 how much do youenjoy hiking? (10 is love it, 1 is hate it)');
    if (hiking <= 5) {
        console.log('Does not like hiking ');
        alert('Does not like hiking ');
        // console.log('You need to get out more ');
    } else {
        alert('I am so happy you love hiking!');
        // console.log('likes to Hike');
        alert('likes to Hike');
    }
    console.log('Like to hike: ' + hiking);


    var animal = prompt('Are you a cat of a dog person?'.toLocaleLowerCase());
    if (animal === 'Cat' || animal === 'cat') {
        console.log('Cat lover woot woot');
        alert('Cat lover woot woot');
    } else if (animal === 'Dog') {
        console.log('yay for dog lovers!');
        alert('yay for dog lovers!');
    } else {
        alert('That isnt a valid answer but we can run with it');
    }
    console.log('Favorite Animal: ' + animal);



    var company = prompt('What is the best company in the world?'.toLocaleLowerCase());
    if (company === 'Microsoft') {
        console.log(company + ' is Awesome!');
        alert(company + ' is Awesome!');
    } else {
        alert(company + ' is cool too!');
    }
    console.log('Favorite Company: ' + company);



    var phoneLine = prompt('Are you a verizon lover?'.toLocaleLowerCase());
    if (phoneLine === 'yes') {
        alert('GOOD!');
        console.log("They have good taste in phones".toLocaleUpperCase());
    } else {
        console.log('Never call them they will never have service!');
        alert('Never call them they will never have service!');
    }
    console.log('Verizon is preferred: ' + phoneLine);
} else {
    alert('Have a nice life ' + userName);
}

alert('Goodbye ' + userName + ' see you later!');

