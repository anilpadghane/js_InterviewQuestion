console.log("working");

//Que-1 What is a Temporal Dead Zone?
//A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value.
//Temporal means something temporary, not permanent, and Dead means something which is not working or can say it is in a lifeless state, Zone denotes an area but here we are in programming so this term area will be something related to memory, or also zone can be thought of as the time period or phase. So merging these terms narrates that some entity is temporarily in a lifeless or inactive state and cannot be used for any kind of work.



//Que-2 What is the for-in loop in JavaScript? Give its syntax ?
//The for loop repeats a block of code as long as a certain condition is met. It is typically used to execute a block of code for certain number of times. Its syntax is:

for(initialization; condition; increment)
{

}// Code to be executed.


//Que-3 Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript ?
//JavaScript has 3 types of scope:
//Block scope
//Function scope
//Global scope

//Block Scoped :-Before ES6 (2015), JavaScript had only Global Scope and Function Scope. ES6 introduced two important new JavaScript keywords: let and const. These two keywords provide Block Scope in JavaScript. Variables declared inside a { } block cannot be accessed from outside the block:

//Local Scoped:-Variables declared within a JavaScript function, become LOCAL to the function.
    // code here can NOT use carName

    function myFunction() {
      let carName = "Volvo";
      // code here CAN use carName
    }
    
    // code here can NOT use carName
//Local variables have Function Scope: They can only be accessed from within the function.

//Function Scoped:-JavaScript has function scope: Each function creates a new scope. Variables defined inside a function are not accessible (visible) from outside the function. Variables declared with var, let and const are quite similar when declared inside a function. They all have Function Scope:
function myFunction() {
  var carName = "Volvo";   // Function Scope
}


//Que-4 What is difference between null and undefined and where to use what?
//In JavaScript, undefined is a type, whereas null an object. It means a variable declared, but no value has been assigned a value. Whereas, null in JavaScript is an assignment value.
//We can assign it to a variable.


//Que-5 what is Symbol?
//Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique
//Que-6 Write code to explain map and filter in arrays ?
//Map:-The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.
//code:-
    const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled); 


//Filter:-The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.
const numbersOne = [1, 2, 3, 4];
const evens = numbersOne.filter(item => item % 2 === 0);
console.log(evens); 



//Que-7 Explain passed by value and passed by reference ?
//"Passed by value" means that you pass the actual value of the variable into the function. So, in your example, it would pass the value 9. 
//"Passed by reference" means that you pass the variable itself into the function (not just the value). So, in your example, it would pass an integer object with the value of 9

//"Passed by reference" means to pass the reference of an argument in the calling function to the corresponding formal parameter of the called function. The called function can modify the value of the argument by using its reference passed in. The following example shows how arguments are passed by reference.



//Que-8 Please explain Self Invoking Function and its code ?
//A self-invoking (also called self-executing) function is a nameless (anonymous) function that is invoked immediately after its definition. An anonymous function is enclosed inside a set of parentheses followed by another set of parentheses () , which does the execution.