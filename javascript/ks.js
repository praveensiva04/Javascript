// var firstname = "Praveen ";
// var lastname = "S";
// firstname+=lastname;

// var mystr = "hello "+ firstname+" ,welcome to javascript"
// console.log(mystr);

// --------length----->

// var length=0;
// var mystr="Praveen s";

// length+=mystr.length;
// console.log(length);

// --------firstletter----->

// var firstletter="";
// var name="praveen s";

// firstletter=name[1];
// console.log(firstletter);

// ---------change the first letter---->

// var name="qraveens";

// // name[0]="p"; ---> String is immutable
// name="praveens";
// console.log(name);

// --------lastletter without giving index-------->

// var name="Praveen s";
// var lastletter=name[name.length-1];
// console.log(lastletter);

// -------bracket notation to find nth to last character in string-------->

//  var name="Praveen s";
// var lastletter=name[name.length-3];
// console.log(lastletter);

// -------Word blanks---->

// function welcome(name,age,from)
// {
//     var result="";
//     result+="hello ,my name is "+name+" ,my age is "+age+" ,iam from "+from;

//     return result
// }
// console.log(welcome("praveen",21,"thanjavur"))
// console.log(welcome("arun",21,"thiruvarur"))

// ----------array-------->

// var myarr=["praveen",21]
// console.log(myarr);

// ------------Nested array------->

// var myarr=[["praveen",21] ["hari",24]];

// ------------Access Array data----------->

// var myarr=["praveen",21]
// var data=myarr[0];
// console.log(data);

// -----------Modify Array data with indexes------->

//  var myarr=["praveen",21];
//  myarr[0]="Anbu";
// console.log(myarr);

// --------Access Multi dimensional Arrays---------->

// var num=[[1,2,3],[4,5,6],[2,4,3],[9,7,8]];
// var data=num[3][0];
// console.log(data);

// --------push() function------>

// var arr=["praveen",21,"peravurani"];
// arr.push("Btech it");
// console.log(arr);

//--------pop() function-------->

// var arr=[1,2,3,4];
// var poped=arr.pop([3]);

// console.log(arr);
// console.log(poped);

// ----------------shift()-------->

// var arr=[[1,1,3,4],[2,2,1,3]];
// var rarr=arr.shift();
// console.log(arr);
// console.log(rarr);

// ----------------unshift()-------->

// var arr=[[1,1,3,4],[2,2,1,3]];
// arr.shift();
// var rarr=arr.unshift("happy");
// console.log(arr);
// console.log(rarr);

// -----------reusable code using function-------->

// function reuse(){
//     console.log("Hello");
    
// }
// reuse();
// reuse();
// reuse();
// reuse();

// ---------passing Arguments------->

// function add(a,b){
//     console.log(a+b);
    
// }
// add(10,20);
// add(20,30);


// ----------Global scope--------->

// var globe=10;

// function a(){
//     let aglobe=12;    
// }

// function b(){
//     var output=""
//     if (typeof globe != "undefined") {
//         output += globe;
//     }
//     console.log(output);
//     // console.log(aglobe)
    
// }
// b();  

// -------------local scope--------->

// function local(){
//     var a=10;
//     console.log(a);
    
// }
// local();
// console.log(a); it is not defined in global scope

// ---------conditional statement------------->

// let rating = 1;

// if (rating>=1) {
//     console.log("You are ready to get the requirment!!!🔥🔥");
    
// }
// else if (rating <1) {
//     console.log("prepare well and give another mock!😊");
    
// }


// ------------Mark calculation------------->

// let tamizh =89;
// let english=75;
// let maths  =90;
// let science=85;
// let social =88;

// let total  =(tamizh+english+maths+science+social);
// let perc   =(total/5).toFixed(2);

// if (perc>=90) {
//     console.log("Outstanding🔥🔥");
//     console.log(perc);
// }

// else if (perc>=80) {
//     console.log("Excellent🔥🔥");
//     console.log(perc);
// }
// else if (perc>=70) {
//     console.log("Average👌");
//     console.log(perc);
// }
// else if(perc>=60)
// {
//     console.log("Passed😁");
//     console.log(perc);
// }else if(perc>=40){
//     console.log("Poor Grade,but Passed💀");
//     console.log(perc);
// }
// else if (perc>=33) {
//     console.log("failed🤡");
//     console.log(perc);
    
// }
// console.log("eighteen">=18);


// -----------Switch------------>

// let food ="a";
// switch (food) {
//     case "a":
//         break;
//     case b:
//         console.log("I am text b");
    

//     default:
//         console.log("No value matched!!");
        
//         break;
// }


// ----------------CALCULATOR--------------

// var a = 10;
// var b = 5;
// var operator = "+";

// switch (operator) {
//     case "+":
//         console.log(a+b);
//         break;
//     case "-":
//         console.log(a-b);
//         break;
//     case "*":
//         console.log(a*b);
//         break;
//     case "/":
//         console.log(a/b);
//         break;
//     case "%":
//         console.log(a%b);
//         break;
//     default:
//         console.log("ENTER THE VALID OPERATOR!!");  
//         break;
// }

// ------------Ternary operator----------->

// let rcb = "won";
// rcb=="won" ? console.log(" won the match") : console.log("lost the match");

// ------------Nested Ternary operator---------->

// let isvalidate = true;

// let israting = "*";
// israting == "*" ? isvalidate == true ? console.log("Give another Chance") 
//                                     : console.log("Ready for punishment")
//                 : console.log("Person will not attend any classes");

// let age = 18;
// age<5 ? console.log("You are Toddler"): age>5 && age<12 ? console.log("You are a kid") :
//                                                         age>12 && age<18 ? console.log("You are Teenage") :
//                                                         age>= 18 && age<=45 ? console.log("You are Adult"):
//                                                         age>45?console.log("You are matured"):
//                                                         console.log("enter valid age");
//                

// let name="Praveen";
// let age=21;
// let isdeveloper = true;
// let college="hicet";
// let percentage = 82;

// console.log("Name: "+ name + 
//              "\n age: "+age+
//             "\n developer: "+isdeveloper+
//             "\n College: "+college+
//             "\n Percentage: "+percentage);
// console.log(`Name: ${name}
//     Age: ${age}`
//     );

//     if (num==0) {
//         console.log("zero");
        
//     }
//     else if (num>=1) {
//         console.log("Positive");
//     }
//     else
//     {
//         console.log("Negative");
        
//     }



// PRINT 10 TO 1

// for(let i=10;i>=1;i--)
// {
//     console.log(i);
    
// }

// MULTIPLICATION TABLE

// for (let i = 1; i <=10; i++) {
//     console.log("2 * "+i+" = "+(i*2));
    
  

// }
// for(let i=5;i>=1;i--){
//     var star="";
//     for(let j=1;j<=i;j--)
//     {
//         star+="*";
//     }
//     console.log(star);
    
// }
// return star;



// for(let i=1;i<=5;i++)
// {
//     let star="";
//     for(let j=5;j>=i;j--)
//     {
//         star+="*";
//     }
//     console.log(star);
// }


// --------05/11/2025---TASK->== LEAP YEAR | CELCIUS TO FARENHEIT

//! Types of functions
/* In javascript is a reusable block of codes designed to perform a Specific task.
    *it allows code modularity and reusablity and it is declared by function keyword followed by an identifier
    followed by a parenthesis and block of codes and statements and closes curlibraces
    
    * PARAMETERS AND ARGUMENTS
        * Parameters are nothing but only listed in the function definition. 
        * it acts as a place holders for values that will be pass into the function
        * when the function is called the actual values passed are called as arguments
        
    *we have several types of functions

        *NAMED FUNCTION 
        *ANONYMOUS FUNCTION
        *IIFE FUNCTION -- IMMEDIATE INVOKING FUNCTION EXPRESSION
        *FUNCTION EXPRESSION
        *ARROW FUNCTION
        *HIGHER ORDER FUNCTION
        *CALLBACK FUNCTION

    
 */

// NAMED FUNCTION
// sum();
// function sum()
// {
//     console.log("Vanakkam da mapla");
    
// }
// sum();

// ANONYMOUS FUNCTION

// function()
// {
//     console.log("<MANKATHA DA>");
    
// }

// 3 FUNCTION EXPRESSION

// let myfunc = function()
// {
//     console.log("MANKATHA DA №");
    
// }
// myfunc();

// let namedvar = function sum()
// {
//     console.log("Iam a function expression with default name");
    
// }
// sum()
// namedvar();

// 4 IIFE (IMMEDIATE INVOKING FUNCTION EXPRESSION)
                                                        
// (function life ()x
// {
//     console.log("Iam a IIFE Function");
    
// })()
// life();
// 5 ARROW FUNCTION


// let name = () =>{

//     console.log("Praveen");
// };
// name();


// let age = () => {
//     console.log("Hello Javascript");
// }
// age();

// 6 HOF ---HIGHER ORDER FUNCTION

// function greet(n) {
// //   return `Hello, ${n};
//     console.log(n);
    
// }
// greet("praveen");

// closures and Scopes
// if (true) {
    
//     var a = "John snow";
//     let b = "Groot";
//     const c ="Stark";  
    //we can't change the value
// }

// console.log(a);
// we can't print this, because the a is defined inside the if block.
// console.log(b);
// console.log(c);

// function demo() {
//     let a = "Reyash";
//     var b = "Fayas";
//     const c = "Ganesh";

// }
// console.log(a);
// console.log(b);
// console.log(c);
// we can't print this, because the a is defined inside the function demo block.

// function demo() {
//     let a = "Reyash";
//     var b = "Fayas";
//     const c = "Ganesh";

//     function fun() {
//         console.log(a + " Ahmed");     
//     }
//     fun();  
// }
// demo();
// fun();
// console.log(a);
// console.log(b);
// console.log(c);


// ------------WHILE LOOP--------------
// function loop(a) {
    
    // let a = 1
    // if(a%2==0) {
    //     console.log("Even Number : "+a);
        
    // }
    // else
    // {
    //     console.log("Odd Number : "+a);
        
    // }

    // if (a%1==0 && a%a==0) {
    //     console.log("prime number : "+a);
    // }
    // else
    // {
    //     console.log("Not a Prime number : "+a);
        
    // }
// }
// loop(1);

// --------------FOR LOOP------------------


    
// -------------STRING METHODS------------

// let n = "Praveen Shiv";
// n.
// let n2 = "a"
// console.log(n.toUpperCase());
// console.log(n.toLowerCase());
// console.log(n.at(3));
// console.log(n.includes('e'));
// console.log(n.length);
// console.log(n.slice(3,7));
// console.log(n.startsWith('P'));
// console.log(n.endsWith('v'));
// console.log(n.indexOf('h'));
// console.log(n.replace(' ','_'));
// console.log(n.concat(n2));
// console.log(n.lastIndexOf('H',));
// console.log(n.substring(0,7));
// console.log(n.substr(-1,5));
// console.log(n.charCodeAt(0));
// console.log(n.codePointAt(4));
// console.log('------------------');
// let ct = "1234567890";

// console.log(ct.padStart(15,'x'));
// console.log(ct.slice(0,6).padEnd(10,'X'));
// let pdct = ct.slice(0,7);
// console.log(pdct.padEnd(10,'*'));

// let name = "praveen";
// let mob = "9098979687"
// let dob = "04/09/2004";

// let pname =name.slice(0,4);
// console.log(pname);

// let pmob = mob.slice(0,5);
// console.log(pmob);

// let pdob = dob.slice(0,1).slice(3,4).slice(6,7);
// console.log(pdob);

// function password(name, dob, phno) {
    // Remove trailing space
    // name = name.trim();

    // Extract separator (e.g. "04/09/2004" → "/")
    // let separator = dob.at(-5);

    // Extract last name
    // let lastname = name.slice(name.lastIndexOf(" ") + 1);

    // Extract last 4 digits of phone number
    // let phnoextract = phno.slice(-4);

    // Extract 1st digit, month digit, year digit (D, M, Y)
    // let dobext = dob[0] + dob[3] + dob[6];

    // Final password
//     return "@"+ lastname + phnoextract + dobext;
// }

// console.log(password("Praveen", "04/09/2004", "7848487874"));


// let name = 'Praveen';
// console.log(name);

// console.log(name.slice(-5,1));
// console.log(name.slice(1,2));
// console.log(name.substr(1,4));

