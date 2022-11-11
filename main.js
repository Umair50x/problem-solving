//fizzbuzz problem solving
//number divisible by 3 will be called 'fizz' and and number divisible by 5 to be called 'buzz'
//if number divisible by 3 & 5 at the same time; print

//-----------------------------

//prompt the user for input and save it in a variable
//since we are iterating over each and every number till the user's unput, we need a loop
//inside the loop we need to check for 3 conditions;
//if a number is divisible by 3 and at the same time by 5 too, print "fizzbuzz" instead of the number
//if a number is divisile by only 3; print 'fizz' instead of that number
//if a number is divisible by only 5; print 'buzz' instead of that number



let num = parseInt(prompt("Type your number: "));

    for (let i = 1; i <= num; i++ ) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }

