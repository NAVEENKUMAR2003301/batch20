// variables

// var - global scope

// let - block scope

// const - block scope


// var

var a = 10   // declration // intialization

a = 15       // reuse      // reintialiazation

var a = 12   // redeclration

console.log(a)


// let 

let b = 10         // declration   // intialiazation

b = 14             // reuse        // reinti

// let b = 15      // not accepted

console.log(b);

// const 

const c = 15        // declration  // intialiazation

// c = 22           // not accepted reUse, reInti

// const c = 20     // not accept redeclration

console.log(c);





var x = 5;
var x = 10;
x = 15;
console.log(x);  // 15


let y = 8;
y = 12;
y = 20;
console.log(y);  // error


const z = 25;
 
// const z = 40;
console.log(z);   // error


var num = 50;
var num = 100;

console.log(num); // 100



let value = 10;

 value = 20;

console.log(value); // 20


// printing statements

// 1. console.log()


console.log(100);


// 2. alert()

// alert("hello guys this is our first class , all the best")


//  3 . confirm()  


// confirm("did you accept my query")


//  4.prompt()

// prompt("what is your name :-")


// 5. document.writeln()

// document.writeln("hello")


// i want to username :- 



// let username = prompt("what is your name : -")

// console.log(username);


// i want show some message to user side


// alert("hello")


// i want to ask one question to user and i want user final wish

// let userWish = confirm("did you ate")

// console.log(userWish);


// console method 

// 1. console.log()

console.log(1001);


// 2. console.warn()

console.warn(20);


// 3. console.error()

console.error(45);


// 4. console.clear()

console.clear()


// dataTypes

// primitive datatypes

// string

let str = "123"

console.log(typeof(str));


// number

let num1 = 123

console.log(typeof(num));


// boolean

let boo = false

console.log(typeof(boo));


// undefined

let a1;

console.log(a1);


// null

// let a2 = prompt()

// console.log(a2);


// non primitive datatypes

// array

// []

let arr = ["cherry","apple","banana","orange","guava","pine Apple","strawberry"]

console.log(arr);
console.log(arr[2]);
console.log(arr[0]);
console.log(arr[arr.length-1]);



// object

// {}

let obj = {
    redFruit : ["cherry","apple","strawberry"],
    yellowFruit : ["banana","pine apple"],
    orangeFruit : "orange"
}


console.log(obj);
console.log(obj.redFruit[1]);
console.log(obj.yellowFruit[1]);
console.log(obj.orangeFruit);

console.clear()


// operators

// 1. Arithmetic operator

// meaning            opeators

// addition               +

// subraction             -

// multiplication         *

// division               /

// modulus                %

// exponencial            **

// increament             ++  post  = var ++, pre = ++ var

// decreament             --  post  = var--,
// pre  = -- var  


console.log(1+2);
console.log(1-2);
console.log(1*2);
console.log(1/2);
console.log(1%2);
console.log(3**2); // 3^2 = 3*3 =9


// increament ++ = 1

let num2 = 10  // 0

num2 = ++num2

console.log(num2);







let num3 = 2   

let num4 = num3++ 

console.log("num3 :",num3);
console.log("num4 :",num4); 











let num5 = 3      

let num6 = ++num5 // ++num5 = 4 

let num7 = --num6 // ++num6 = ++4 = 5

console.log(num5); // num5 : 4
console.log(num6); // num6 : 5
console.log(num7); // num7 : 5





let num8 = 1      

let num9 = num8-- //  1

let num10 = ++num9  // ++num9 = ++1 = 2

console.log(num8); // num8 = 0
console.log(num9); // num9 = 2
console.log(num10);// num 10 = 2


// che - 0 2 2

// bha - 0 1 1

// yas - 0 0 1

// ari - 0 0 1


console.clear();


// 2. assignment operator

let hello = 5
let additionVal = 10

hello     += additionVal  // hello = hello + additionVal

hello -= additionVal
hello *= additionVal
hello /= additionVal
hello **= additionVal
hello %= additionVal

console.log(hello);


// 3. relational operator (or) comparision operator

//  meaning       operators       example          result

// lessThen           <             5<3              false

// greaterThen        >             5>5              false

// lessThenEqual      <=            5<=5             true

// greaterThenEq      >=            5>=5             true

// loosyTypeEq        ==            5=="5"           true

// strictlyTypeEq     ===           5==="5"          false

// loosyNotEq          !=            5!="5"          false

// strictlyNotEq       !==          5!=="5"          true





// 1
console.log(10 > 8);  // true

// 2
console.log(7 <= "7"); // true

// 3
console.log(4 === "4"); // false

// 4
console.log(9 != 9); // false

// 5
console.log(3 !== "3");  // true 






// 4. logical opeator

// AND         &&      

// true   &&  true  && false = false
// true   &&  true  && true  = true


// OR          ||

// true || true || true = true
// true || true || false = true
// false || false || false = false


// NOT         !

// !(true) = false



// 1
console.log((5 > 3) && (10 == "10") && (2 > 5));

// true  && true  && false = false

// 2
console.log((7 === 7) && (4 <= 4) && (3 != "3"));

// true && true && false = false

// 3
console.log((false || true || false));

// true

// 4
console.log((5 < 2) || (8 === "8") || (9 >= 9));

// false || false || true = true

// 5
console.log(!(10 > 2));

// false

console.clear();


//concatination (+)


let one = "hello"
let one1 = "world"


let finalVal = one +" "+ one1

console.log(finalVal);

// template string


let totalVal = `${one} ${one1}`

console.log(totalVal);


// type conversition

// 1. implicit type conversion

console.log(1+"1");

// string

// string anything string

console.log(typeof("1"+"1"));
console.log(typeof("1"+1));
console.log(typeof("1"+true));
console.log(typeof("1"+null));
console.log(typeof("1"+undefined));
console.log(typeof("1"+[1,2]));
console.log(typeof("1"+{a:1}));


// number

console.log(typeof(1+"1"));
console.log(typeof(1+1));
console.log((1+true));
console.log((1+null));
console.log(typeof(1+undefined));
console.log(typeof(1+[1,2]));
console.log(typeof(1+{k:1}));

// boolean

console.log(typeof(true + "1"));
console.log(typeof(true + 1));
console.log(typeof(true + true));
console.log(typeof(true + null));
console.log(typeof(true + undefined));
console.log(typeof(true + [1,2]));
console.log(typeof(true + {k:6}));





// 2. explicit type conversion





// function

// date






