//que-1 Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button

function textOne() {
  document.getElementById("text").innerHTML = "MERN STACK";
}  

//Que-2Write code to get 1st H1 element from a webpage using DOM


document.getElementsByTagName('h1')[0];
document.querySelectorAll("h1")[0];
document.querySelector('h1');

//Que-3 Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second
function showTime() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let sec = now.getSeconds();
  
    document.querySelector(
      "#time"
    ).innerText = `TIME = ${hour} : ${minutes} : ${sec}`;
  }
  setInterval(showTime,1000)


  //Que-4 Create an HTML page having content as Hello world and a button named Replace Text.
// When user will click on this button page content should be changed to "Welcome to Elevation academy"

document.querySelector(".btn").addEventListener("click", textChange);

function textChange() {
  document.querySelector("#textchange").innerHTML =
    "Welcome to Elevation academy";

}


//Que-5 Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text

 document.querySelector(".button").addEventListener("click", hideText);

function hideText() {
  document.querySelector("#textHide").innerHTML =
    "";

}

//Que-6 Given an array of 0's and 1's find out number of 0's

let array = [0,1,1,0,1,0,1,0,0,0,1];
let count1 = 0;
for( let i=0; i<array.length;i++)
{
  if(array[i]==0)
  {
  count1++;
  }
}
console.log(`Number of 0's in given array is ${count1}`);

//Que-7 Given an array find out total no. of odd and even nos.
let number = [10,11,12,13,14,15,16,17,18,19,20];
let countEven = 0;
let countOdd = 0;
for( let i=0; i<number.length;i++)
{
  if(number[i]%2===0)
  {
  countEven++;
  }
  else{
    countOdd++;
  }
}
console.log(`total no. of odd in given array is ${countOdd} and even no. is ${countEven}`);

//Que-8 Given a string find out number of vowels 
// find the count of vowels
const count = str.match(/[aeiou]/gi).length;{

// return number of vowels
return count;
}

// take input
const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);

//que-9 Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same
let myObj = 
{
  fName : "Sumit",
  company: ["uttam" , "mahalaxmi steel" , "fabrigation" ,"JP constrction" , "SY construction"]
};
//console.log(myObj);
let myObjTwo =
{
  fName : "shailesh",
  company : ["uttam" , "mahalaxmi steel" , "fabrigation" ,"JP constrction" , "SY construction"]
};
//console.log(myObjTwo);
function checkObj(myObj, myObjTwo){ 
  let count = 0;
     for (let i = 0; i <myObj.branch.length; i++) {  
         if (myObj.branch.includes(myObjTwo.branch[i]))
       {
      count++;
  }
   else {    
     console.log("Different company name");   
    } 
    } 
      if (count == myObj.branch.length)  {
    console.log("All the elements are Equal");//All the elements are Equal
     } 
  } 
  checkObj(myObj, myObjTwo);