//Write a loop that makes seven calls to console.log 
//to output the following triangle:
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);
  //#
//##
//###
//####
//#####
//######
//#######
//fizz buzz
for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }
  //Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

# # # #
# # # # 
# # # #
# # # # 
# # # #
# # # # 
# # # #
# # # #
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);