const readline = require('readline-sync');


console.log("Hello and welcome to the calculator!\nThe purpose of this calculator is to assist you in solving a wide range of mathematical equations that will help you to grow and learn in your math journey.");

calculatorGame();
//Below is the function that encompasses all other functions and is the calculator game iteself.
function calculatorGame() {
    const userChoice = readline.question("The function that you can perform are: \n1.Absolute Value Calculation\n2.Power Calulation\n3.Square Root Calculation\n4.Max/Min Finder\n5.Random Number Generator\n6.Custom Rounding.\nPlease enter selection you want by number: ");
    userChoice.toLowerCase(); //placed to lowercase to make selection not case sensitice
//absolute value calculation
    if (userChoice === "1") {
      let userAnswer = readline.question("Please enter a number: ");
      let userNumChoice = Number(userAnswer);
        function absoluteValue(userNum) {
            console.log("The absolute value of the number is:", Math.abs(userNum));
    
}
    absoluteValue(userNumChoice);

//Power calculation of 2 numbers inputted by the user
    }else if (userChoice === "2") {
        let userAnswer1 = readline.question("Please enter the number that will be the base: ");
        let userNum1 = Number(userAnswer1);
        let userAnswer2 = readline.question("Please enter the number that you want to multiply by the power of: ");
        let userNum2 = Number(userAnswer2);
            function powerNumber(num1, num2) {
                console.log(`The answer to ${userNum1} raised to the power of ${userNum2} is:`, Math.pow(num1,num2));
}
powerNumber(userNum1,userNum2);

//Square Root Finder
    }else if (userChoice === "3") {
        let userAnswer = readline.question("Please enter a number: ");
        let userNumChoice = Number(userAnswer);
            function squareRootNum(userNumber) {
                console.log(`The square root of ${userNumChoice} is:`, Math.sqrt(userNumber));
    }
squareRootNum(userNumChoice);

//Max and Min Finder of set of numbers inputed by the user
    }else if (userChoice === "4") {
        let userAnswer = readline.question("Please enter multiple numbers seperated by commas in which you would like to see the min/max of: ");
        let userNums = userAnswer.split(',').map(Number); // this took me a bit of time to figure out. I ended up splitting the numbers by the comma and turning each user number from a string to a number and placing it in an array for JavaScript to read from
            function maxMinFinder(){
            //console.log(`The smallest number is ${Math.min(...userInput)} and the largest number is ${Math.max(...userInput)}`);
                console.log(`The minimum number of is:`, Math.min(...userNums));
                console.log(`The maximum number is:`, Math.max(...userNums));
    }
maxMinFinder(userNums);
//Random Number Generator
    }else if (userChoice === "5") {
        let userAnswer = readline.question("Please enter a number: ");
        let userNumChoice = Number(userAnswer);
         function randomNumber(){
            let num = Math.round(Math.random() * userNumChoice);
             console.log("Your random number is:", num);
    }
randomNumber(userNumChoice);
//Custom Rounding tot he 2nd decimal place
    }else {
        let userAnswer = readline.question("Please enter a number: ");
        let userNumChoice = Number(userAnswer);
         function customRounding(userNumber) {
            console.log(Math.round(userNumber*100)/100);
     }
     customRounding(userNumChoice);
    }
}
