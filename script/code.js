// 1. Variable
// a value that can change, depending on conditions or on information passed to the program.

// 2. Value
// the representation of some entity that can be manipulated by a program

// 3. Data type
// a particular kind of data item, as defined by the values it can take, the programming language used, or the operations that can be performed on it.

// 4. Initialization
//  to set (something, such as a computer program counter) to a starting position, value, or configuration

// 5. Tell me the difference between let, var, and const.
 /* 
var:
-can be declared outside any function to be used inside any function
-can be declared inside any function or any other {} which are of only if or if-else or switch etc. and can be used anywhere inside the function
-can be changed again and again anywhere
let:
-can be declared outside any function to be used inside any function
-if declared inside any function or any other {} which are of only if or if-else or switch etc. and can't be used anywhere inside the function and can be only used inside statement
- can be changed again and again only inside the statement in which they are made in
const:
-can be declared outside any function to be used inside any function
-can be declared inside any function or any other {} which are of only if or if-else or switch etc. and can be used anywhere inside the function
-cannot be changed again and agan anywhere, if tried to, will result in an error

*/
// 6. What is a variable scope?
// A scope is a region of the program and broadly speaking there are three places, where variables can be declared:
// Inside a function or a block which is called local variables,
// In the definition of function parameters which is called formal parameters.
// Outside of all functions which is called global variables.

// 7. When can you decide when to use a for or while, forEach and do while loop?
// for − loops through a block of code a specified number of times.
//  while − loops through a block of code if and as long as a specified condition is true. 
//  do... while − loops through a block of code once, and then repeats the loop as long as a special condition is true.

// 8. Define hoisting and variable scoping?
// Hoisting is the process of moving function declarations to the top of the file.
// variable scoping is a place where variables can be declared for example,inside a function , in the defnition of formal parameters.
let fullName = 'Imtiyaaz Damon'
function display(fullName){
    console.log(fullName)
}

display(fullName)

// Question 2
let firstName = 'Imtiyaaz'
let lastName = 'Damon'
let age = '20'
let subjects = ['Math','English','Afrikaans','Physics','Life orentation','Design']
let address = ['Swart Street','14','Athlone','South Africa']
console.log(firstName,lastName,age,subjects,address)
 
// Question 3

function calculate() {
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
    let operator = document.getElementById("operator").value;

    // create a logical calculation based on the selected operator

    let result;

    // if (operator) {
        
    // }

    // will use switch - case for our logic with breaks if an operator has been selected. I t wil also raise an Error if the operator chosen isnt one of the ones already provided.

    switch (operator) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "**":
            result = number1**number2;
            break;
        case "/":
            result = number1 / number2
            break;
        default:
            result = "Invalid operator chosen, Please select the available operators";
    }

    document.getElementById("result").textContent = "Result: " + result;
}

// We created a button to clear the inputed values and select a new equation more efficiently.

function clearForm() {
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("operator").selectedIndex = 0;
    document.getElementById("result").textContent = "";
}
//Question 4
let subject = "programming"
console.log(subject.split('').reverse().join(''))
// console.dir(new String());

//Question 5
let person =[{
    name:"Mish-al",
    dob:"2020-05-31"
}]
let todayDate = new Date()
let birthdayDate = new Date(person[0].dob)
console.log(birthdayDate)
console.log(todayDate)

console.log(todayDate.getDate())
console.log(birthdayDate.getDate())
console.log(birthdayDate.getDate() - todayDate.getDate()  + " days left until his birthday")

//Question 6
let results = "60%"
switch(results){
    case "100%":
        results = ("100%")
}
// for (let i=0; i<10;i++){
//     if((i % 2) > 0)
//     continue
//     console.log(i)
// }
//"for of" is for an array. 
// "for in" is for an index.
// console.table(variable)

// for(let p in personDetails){
//     console.log(`${p}` `${personDetail[p]}`);
// }
// console.log(personDetail.firstName)
 let friends =['henk','peter','jack','lerato','julias']
console.log(friends.slice(2, 4))
let numbers =[2,5,7,7]
console.log(numbers);
// numbers.splice(0,2)
// let noDuplicate = []
// numbers.forEach((item)=>{
//     if(!noDuplicate.includes(item))
//     noDuplicate.push(item)
// })
// console.log(noDuplicate)
console.log(new Set(numbers));
console.log(numbers.indexOf(7));
console.log(numbers.lastIndexOf(7));
numbers.concat([28,27])
console.log(numbers.concat([28,27]));