/*  Lines 1 thru 37 are the prime number finder.  this takes a number and displays all factors, and will state if the number is prime, as well as if it is a perfect square




let endnum = 102; // Once I learn how to make it happen, this will accept the input from the form

let factorCount = 0; //This will be used later to determine if the number entered is a Prime or a Perfect Square

console.log('The number you entered was: ' + endnum); //confirms the number entered

for (let i = 0; i <= endnum; ++i) { //This starts a loop which will run through increasingly larger divisors until it reaches the input number.

    if (endnum % i == 0) { // This IF statement divides the input number by the current 'i' divisor and checks the remainder.
        
        factorCount++; // Increments the factorCount variable to determine if the number is a a Prime or a Perfect Square
        
        console.log(i + ' is a factor!'); //displays the factor in the console
    }
}
console.log('You have ' + factorCount + ' factors!'); //displays how many factors are in the number entered

if (factorCount == 2) { //tests if the number is prime, if true, send msg to the console

    console.log(endnum + ' only has 2 unique factors, so ' + endnum + ' is a Prime Number!')
} else {
    console.log(endnum +' is not a Prime Number');
}

if (factorCount % 2 == 1) {//tests if the number is a perfect square, if true, send msg to the console

    console.log(endnum +' has an odd number of factors, so ' + endnum + ' is a Perfect Square!')
} else {
    console.log(endnum +' is not a Perfect Square');
}

*/


// Fizzbuzz counts to a specified number, and replaces numbers divisible by 3 with 'fizz' and numbers divisible by 5 with 'buzz'
// numbers divisible by both will be replaced with fizzbuzz.  

let fb = 31;

//the concatentation with i allows for easier checking of divisibility

for (let i = 1; i <= fb; ++i) {

    if (i % 3 == 0 && !(i % 5 == 0)) {     //This will test if i is divisible by 3, and not by 5.  true will give fizz
        console.log('(' + i + ')' + 'Fizz!');
    } else if (!(i % 3 == 0) && i % 5 == 0) {    //This will test if i is not divisible by 3, and is by 5.  true will give buzz
        console.log('(' + i + ')' + 'Buzz!');
    } else if (i % 3 == 0 && i % 5 == 0) {    //This will test if i is divisible by 3, and  by 5.  true will give fizzbuzz
        console.log('(' + i + ')' + 'FizzBuzz!');
    } else {console.log(i)};    //This will log i as it is not divisible by 3 or 5
}






// number of factors == 2 is prime
//number of factors is odd is a perfect square