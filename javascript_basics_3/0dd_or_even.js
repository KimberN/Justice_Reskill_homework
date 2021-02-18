//In this class exercise we are going to print if a number stored in an array is odd or even.
//Create an array with 10 random numbers.
//Loop through the array
//If the number at the current index is even, print out even, otherwise print odd
var numbers = [12,13,7,10,4,8,3,27,14,45];
var even = numbers[i];
var odd = numbers[i];

function evenOdd(numbers){
    for(var i = 0; i < numbers.length; i++){  //  or else take every second element
        if (numbers[i] % 2 === 0) {
            even.push(numbers[i]( "is even"));
          } else {
            odd.push(numbers[i]( "is odd"));
          }
}
console.log(evenOdd);


//new try 
var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var evens = [];
var odds = [];

var evenNumbers = function(nums) {
    for (var i = 0; i < nums.length; i+2) {

        if ((nums[i] % 2) != 1) {
            evens.push(nums[i]);
                
        }
        else {
            odds.push(nums[i]);
                console.log(odds);
        }
    }

};

evenNumbers(nums);
alert(evens(" is even"));
alert(odds("is odd"));
//returns2,34,54,34,32,54,66

//try again
var RandoNums = [];

function even(a) {
  var ar = [];

  for (var i = 0; i < arr.length; i+2) {
    ar.push(a[i]);
  }

  return ar;
}

even(arr)
// try one more time Acch
var arr = [4, 5, 7, 8, 14, 45, 76];

function even(a) {
  var ar = [];
  for (var i = 0; i < a.length; i++) {
    if(i % 2 === 0) { // index is even
        ar.push(a[i]);
    }
}


