
//basic function
function ShowMessage() {
    alert("Hello World!");
}

ShowMessage();
//gradescale using array-not working token error
function numbertograde(arr) {
    var grade = '';
    var result = [];
    for (i = 0; i < arr.length; i++) {
      grade = '';
      if (arr[i] >= 95 && <= 100) {
        grade = "A";
      } else if (arr[i] >= 90 && <= 94) {
        grade = "A-";
      } else if (arr[i] >= 87 && <90) {
        grade = "B+";
      } else if (arr[i] >= 84 && < 87) {
        grade = "B";
      } else if (arr[i] >= 80 && <84) {
        grade = "B-";
      } else if (arr[i] >= 77 && <=89) {
        grade = "C+";
      } else if (arr[i] >= 74 && <=77) {
        grade = "C";
      } else if (arr[i] >= 70 && <74) {
        grade = "C-";
      } else if (arr[i] >= 60 && <=69) {
        grade = "D";
      } else {
        grade = "F";
      }
      result.push(grade);
    }
    return result;
  }
  
  document.write(numbertograde([90, 80, 70]))
  for(1+7; i<44; i=5;
    VM339:1 Uncaught SyntaxError: Unexpected token ';'
    for(1+7; i<44; i=5;);
    VM351:1 Uncaught SyntaxError: Unexpected token ';'
    for(i=100; >-1000; i=-100);
    VM435:1 Uncaught SyntaxError: Unexpected token '>'
    string1 = ('KATAKNA')
    "KATAKNA"
    //dynamic variables exp
    var string1 ="java";
for(var i=0;i<string1.length;i++){
  console.log(string1.charAt(i));
}
VM87:3 j
VM87:3 a
VM87:3 v
VM87:3 a
undefined
for(i =7; i<=44;i+5;){
  console.log
}
// call out every A
var string1 = 'katakana';
 for(vari =0;i< string1.length;i++){
   if (string1.charAt(i) == 'a'){
     console.log('found an a!');
   }
 }