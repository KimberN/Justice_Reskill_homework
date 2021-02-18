//Create a function that adds up the integers in the following array
var numbers = [10,20,30,40,50];
function addNums(numbers){
    var arrTotal = numbers.length;
    var totalSum = 0;

    for(var i=0; i<arrTotal;i++){
        totalSum += numbers[i];
        return (totalSum);
    }
}

addNums(numbers)
//returns 10
//Create a function that adds up the integers in the following array
var numbers = [10,20,30,40,50];
function addNums(numbers){
    var arrTotal = numbers.length;
    //im not understanding the usage of this next variable. how does setting to zero equate?
    var totalSum = 0;

    for(var i=0; i<arrTotal;i++){
        totalSum += numbers[i];
    }
    return (totalSum);
}
addNums(numbers);
//explained 
//set a var to an array of numbers[]
//create a function to add the array using  2 new var 
//create a loop with new var to ...
//return code to add numbers (outside the for loop)
//call your function
//returns 150
//----------------------------------------------------------------------
//Create a function that reverses the following array 
var array1 = [0,1,2,3,4,5,6,7,8,9,10];
function reverseArray(array1){
    var newArray = [];
    var i = array1.length-1;
    for (var i = array1.length-1;i>0; i--){
        newArray.push(array1[i]);
    }
    return newArray;
}
reverseArray(array1);
//returns (10) [10,9,8,7,6,5,4,3,2,1]
//yay!

//mplement Fizz Buzz. Loop from 1 to 100. If the number is divisible by both 3 and 5, print "fizzbuzz". Otherwise, if the number is divisible by 3, print "fizz", or, if the number is divisible by 5, print "buzz". If none of the above are true, print the number. This is a very common interview question! Try completing this on your own before looking up the answer.

//Challenge: Write a JavaScript program to construct the following pattern (see below), using a nested for loop.
