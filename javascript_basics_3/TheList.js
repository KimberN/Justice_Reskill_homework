//In a repl, code editor or in your browser console, create and name an array filled with items! Some ideas:
//example grocery list
//In the code:
//access the first element in your array
//Add some more items using the unshift or push function
//update a value from the third element in the array
//Now, let’s suppose that we need to use information from 
//every single one of our items. How could we accomplish this?
//What’s one way to access every element in your array?
//What are some drawbacks you can think of?
var outside = ['squirrel','tree','rocks','creek','snow'];
var first = outside[0];
console.log(first);
//output squirrel
var newThings = outside.push('woodpecker','hill','sledder');
console.log(newThings);
//output 8
console.log(outside);
//outputs all animals
outside[2] = 'rockpile';
console.log(outside);
//output changes rock to rockpile------------------------

//Now, let’s suppose that we need to use information from 
//every single one of our items. How could we accomplish this?

for (let i=0; i<outside.length;i++) {
    console.log(outside[i])
}
//outputs list of all outside objects



