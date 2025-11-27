

// // // // // // variables

// // // // // // var - global scope

// // // // // // let - block scope

// // // // // // const - block scope

// // // // // // var

// // // // // var a = 10   // declration // intialization

// // // // // a = 15       // reuse      // reintialiazation

// // // // // var a = 12   // redeclration

// // // // // console.log(a)

// // // // // // let

// // // // // let b = 10         // declration   // intialiazation

// // // // // b = 14             // reuse        // reinti

// // // // // // let b = 15      // not accepted

// // // // // console.log(b);

// // // // // // const

// // // // // const c = 15        // declration  // intialiazation

// // // // // // c = 22           // not accepted reUse, reInti

// // // // // // const c = 20     // not accept redeclration

// // // // // console.log(c);

// // // // // var x = 5;
// // // // // var x = 10;
// // // // // x = 15;
// // // // // console.log(x);  // 15

// // // // // let y = 8;
// // // // // y = 12;
// // // // // y = 20;
// // // // // console.log(y);  // error

// // // // // const z = 25;

// // // // // // const z = 40;
// // // // // console.log(z);   // error

// // // // // var num = 50;
// // // // // var num = 100;

// // // // // console.log(num); // 100

// // // // // let value = 10;

// // // // //  value = 20;

// // // // // console.log(value); // 20

// // // // // // printing statements

// // // // // // 1. console.log()

// // // // // console.log(100);

// // // // // // 2. alert()

// // // // // // alert("hello guys this is our first class , all the best")

// // // // // //  3 . confirm()

// // // // // // confirm("did you accept my query")

// // // // // //  4.prompt()

// // // // // // prompt("what is your name :-")

// // // // // // 5. document.writeln()

// // // // // // document.writeln("hello")

// // // // // // i want to username :-

// // // // // // let username = prompt("what is your name : -")

// // // // // // console.log(username);

// // // // // // i want show some message to user side

// // // // // // alert("hello")

// // // // // // i want to ask one question to user and i want user final wish

// // // // // // let userWish = confirm("did you ate")

// // // // // // console.log(userWish);

// // // // // // console method

// // // // // // 1. console.log()

// // // // // console.log(1001);

// // // // // // 2. console.warn()

// // // // // console.warn(20);

// // // // // // 3. console.error()

// // // // // console.error(45);

// // // // // // 4. console.clear()

// // // // // console.clear()

// // // // // // dataTypes

// // // // // // primitive datatypes

// // // // // // string

// // // // // let str = "123"

// // // // // console.log(typeof(str));

// // // // // // number

// // // // // let num1 = 123

// // // // // console.log(typeof(num));

// // // // // // boolean

// // // // // let boo = false

// // // // // console.log(typeof(boo));

// // // // // // undefined

// // // // // let a1;

// // // // // console.log(a1);

// // // // // // null

// // // // // // let a2 = prompt()

// // // // // // console.log(a2);

// // // // // // non primitive datatypes

// // // // // // array

// // // // // // []

// // // // // let arr = ["cherry","apple","banana","orange","guava","pine Apple","strawberry"]

// // // // // console.log(arr);
// // // // // console.log(arr[2]);
// // // // // console.log(arr[0]);
// // // // // console.log(arr[arr.length-1]);

// // // // // // object

// // // // // // {}

// // // // // let obj = {
// // // // //     redFruit : ["cherry","apple","strawberry"],
// // // // //     yellowFruit : ["banana","pine apple"],
// // // // //     orangeFruit : "orange"
// // // // // }

// // // // // console.log(obj);
// // // // // console.log(obj.redFruit[1]);
// // // // // console.log(obj.yellowFruit[1]);
// // // // // console.log(obj.orangeFruit);

// // // // // console.clear()

// // // // // // operators

// // // // // // 1. Arithmetic operator

// // // // // // meaning            opeators

// // // // // // addition               +

// // // // // // subraction             -

// // // // // // multiplication         *

// // // // // // division               /

// // // // // // modulus                %

// // // // // // exponencial            **

// // // // // // increament             ++  post  = var ++, pre = ++ var

// // // // // // decreament             --  post  = var--,
// // // // // // pre  = -- var

// // // // // console.log(1+2);
// // // // // console.log(1-2);
// // // // // console.log(1*2);
// // // // // console.log(1/2);
// // // // // console.log(1%2);
// // // // // console.log(3**2); // 3^2 = 3*3 =9

// // // // // // increament ++ = 1

// // // // // let num2 = 10  // 0

// // // // // num2 = ++num2

// // // // // console.log(num2);

// // // // // let num3 = 2

// // // // // let num4 = num3++

// // // // // console.log("num3 :",num3);
// // // // // console.log("num4 :",num4);

// // // // // let num5 = 3

// // // // // let num6 = ++num5 // ++num5 = 4

// // // // // let num7 = --num6 // ++num6 = ++4 = 5

// // // // // console.log(num5); // num5 : 4
// // // // // console.log(num6); // num6 : 5
// // // // // console.log(num7); // num7 : 5

// // // // // let num8 = 1

// // // // // let num9 = num8-- //  1

// // // // // let num10 = ++num9  // ++num9 = ++1 = 2

// // // // // console.log(num8); // num8 = 0
// // // // // console.log(num9); // num9 = 2
// // // // // console.log(num10);// num 10 = 2

// // // // // // che - 0 2 2

// // // // // // bha - 0 1 1

// // // // // // yas - 0 0 1

// // // // // // ari - 0 0 1

// // // // // console.clear();

// // // // // // 2. assignment operator

// // // // // let hello = 5
// // // // // let additionVal = 10

// // // // // hello     += additionVal  // hello = hello + additionVal

// // // // // hello -= additionVal
// // // // // hello *= additionVal
// // // // // hello /= additionVal
// // // // // hello **= additionVal
// // // // // hello %= additionVal

// // // // // console.log(hello);

// // // // // // 3. relational operator (or) comparision operator

// // // // // //  meaning       operators       example          result

// // // // // // lessThen           <             5<3              false

// // // // // // greaterThen        >             5>5              false

// // // // // // lessThenEqual      <=            5<=5             true

// // // // // // greaterThenEq      >=            5>=5             true

// // // // // // loosyTypeEq        ==            5=="5"           true

// // // // // // strictlyTypeEq     ===           5==="5"          false

// // // // // // loosyNotEq          !=            5!="5"          false

// // // // // // strictlyNotEq       !==          5!=="5"          true

// // // // // // 1
// // // // // console.log(10 > 8);  // true

// // // // // // 2
// // // // // console.log(7 <= "7"); // true

// // // // // // 3
// // // // // console.log(4 === "4"); // false

// // // // // // 4
// // // // // console.log(9 != 9); // false

// // // // // // 5
// // // // // console.log(3 !== "3");  // true

// // // // // // 4. logical opeator

// // // // // // AND         &&

// // // // // // true   &&  true  && false = false
// // // // // // true   &&  true  && true  = true

// // // // // // OR          ||

// // // // // // true || true || true = true
// // // // // // true || true || false = true
// // // // // // false || false || false = false

// // // // // // NOT         !

// // // // // // !(true) = false

// // // // // // 1
// // // // // console.log((5 > 3) && (10 == "10") && (2 > 5));

// // // // // // true  && true  && false = false

// // // // // // 2
// // // // // console.log((7 === 7) && (4 <= 4) && (3 != "3"));

// // // // // // true && true && false = false

// // // // // // 3
// // // // // console.log((false || true || false));

// // // // // // true

// // // // // // 4
// // // // // console.log((5 < 2) || (8 === "8") || (9 >= 9));

// // // // // // false || false || true = true

// // // // // // 5
// // // // // console.log(!(10 > 2));

// // // // // // false

// // // // // console.clear();

// // // // // //concatination (+)

// // // // // let one = "hello"
// // // // // let one1 = "world"

// // // // // let finalVal = one +" "+ one1

// // // // // console.log(finalVal);

// // // // // // template string

// // // // // let totalVal = `${one} ${one1}`

// // // // // console.log(totalVal);

// // // // // // type conversition

// // // // // // 1. implicit type conversion

// // // // // console.log(1+"1");

// // // // // // string

// // // // // // string anything string

// // // // // console.log(typeof("1"+"1"));
// // // // // console.log(typeof("1"+1));
// // // // // console.log(typeof("1"+true));
// // // // // console.log(typeof("1"+null));
// // // // // console.log(typeof("1"+undefined));
// // // // // console.log(typeof("1"+[1,2]));
// // // // // console.log(typeof("1"+{a:1}));

// // // // // // number

// // // // // console.log(typeof(1+"1"));
// // // // // console.log(typeof(1+1));
// // // // // console.log((1+true));
// // // // // console.log((1+null));
// // // // // console.log(typeof(1+undefined));
// // // // // console.log(typeof(1+[1,2]));
// // // // // console.log(typeof(1+{k:1}));

// // // // // // boolean

// // // // // console.log(typeof(true + "1"));
// // // // // console.log(typeof(true + 1));
// // // // // console.log(typeof(true + true));
// // // // // console.log(typeof(true + null));
// // // // // console.log(typeof(true + undefined));
// // // // // console.log(typeof(true + [1,2]));
// // // // // console.log(typeof(true + {k:6}));

// // // // // console.clear();

// // // // // // 2. explicit type conversion

// // // // // // number constractor  (Number)

// // // // // console.log(1 + Number("1"));

// // // // // console.log(Number());
// // // // // console.log(Number(""));
// // // // // console.log(Number("123"));
// // // // // console.log(Number("abc"));
// // // // // console.log(Number(1));
// // // // // console.log(Number(true));
// // // // // console.log(Number(false));
// // // // // console.log(Number(undefined));
// // // // // console.log(Number(null));
// // // // // console.log(Number([1,2]));
// // // // // console.log(Number({k:1}));

// // // // // // Boolean

// // // // // console.log(Boolean());
// // // // // console.log(Boolean(""));
// // // // // console.log(Boolean("123"));
// // // // // console.log(Boolean("abc"));
// // // // // console.log(Boolean(1));
// // // // // console.log(Boolean(0));
// // // // // console.log(Boolean(true));
// // // // // console.log(Boolean(false));
// // // // // console.log(Boolean(undefined));
// // // // // console.log(Boolean(null));
// // // // // console.log(Boolean([1,2]));
// // // // // console.log(Boolean({l:1}));

// // // // // // String

// // // // // console.log(String(1));
// // // // // console.log(""+1);

// // // // // // flow control statement

// // // // // // conditional statement

// // // // // // 1. if statement

// // // // // // condition true = allow

// // // // // if(5=="5"){
// // // // //     console.log("true val");
// // // // // }

// // // // // // 2. if else statement

// // // // // if(6>=6){
// // // // //    console.log("true value111");

// // // // // }else{
// // // // //   console.log("false value");

// // // // // }

// // // // // // 3. else if statement

// // // // // let hour = 1000

// // // // // if(hour >= 1 && hour<=6) {
// // // // //     console.log("early morning");

// // // // // }else if(hour >= 7 && hour <= 12){
// // // // //     console.log("good morning");

// // // // // }else if(hour >= 13 && hour <= 17){
// // // // //     console.log("good afternoon");

// // // // // }else if(hour >= 18 && hour <= 20){
// // // // //     console.log("good evening");

// // // // // }else{
// // // // //     console.log("good night");

// // // // // }

// // // // // // 4. nested if statement

// // // // // //  let age = prompt("enter your age")
// // // // // //  let height = prompt("enter your height")
// // // // // //  let weight = prompt("enter your weight")

// // // // // //  if(age >= 18){
// // // // // //     if(height >= 160){
// // // // // //         if(weight >= 60){
// // // // // //             console.log("congradulations you are selected");

// // // // // //         }else{
// // // // // //             console.log("your weight is unfit");

// // // // // //         }
// // // // // //     }else{
// // // // // //         console.log("your height is unfit");

// // // // // //     }
// // // // // //  }else{
// // // // // //     console.log("your age is unfit");

// // // // // //  }

// // // // // // 5. switch statement

// // // // // // switch(){
// // // // // //    case value : statement ;break
// // // // // //    case value : statement ;break
// // // // // //    case value : statement ;break
// // // // // //    case value : statement ;break
// // // // // //    case value : statement ;break
// // // // // // }

// // // // // let trafficLight = "green"

// // // // // switch(trafficLight){
// // // // //    case "red" : console.log("vechile stop");break
// // // // //    case "yellow" : console.log("vechile start");break
// // // // //    case "green" : console.log("vechile go");break

// // // // // }
// // // // // // 6. ternary operator

// // // // // // condition ? statment : statment

// // // // // let pwd = 1

// // // // // pwd ? console.log("welcome the home page") : console.log("your password is incorrect");

// // // // // console.clear();

// // // // // // looping statement

// // // // // // for loop

// // // // // // for(intialiazation; condition ;iteration){
// // // // // //     // statement
// // // // // // }

// // // // // for(let a = 1 ; a <= 3 ; a++){
// // // // //     console.log(a); //1  2  3
// // // // // }

// // // // // //  a=1 ; 1 <= 3 = true ; 1++ = 2;

// // // // // //  a=2 ; 2 <= 3 = true ; 2++ = 3;

// // // // // //  a=3 ; 3 <= 3 = true ; 3++ = 4;

// // // // // //  a=4 ; 4 <= 3 = false ;

// // // // // // while loop

// // // // // //  intialiazation

// // // // // //  while(condition){
// // // // // //     // statement

// // // // // //     iteration
// // // // // //  }
// // // // // // let i = 10

// // // // // // while(i>=20){
// // // // // //     console.log(i);

// // // // // //     i--
// // // // // // }

// // // // // // do while loop

// // // // // // intialiazation

// // // // // // do {
// // // // // //   //statement
// // // // // //   iteration;
// // // // // // } while (condition);

// // // // // let i1 = 3 // 2 // 1 // 0

// // // // // do{
// // // // //     console.log(i1); // 3 2 1 0

// // // // //     i1--; // 3-- =2, 2-- = 1 // 1-- = 0 // 0-- = -1

// // // // // }
// // // // // while(i1>=0) // 2>=0 true , 1>=0 true ,0>=0 true , -1>=0 false

// // // // // // for of loop

// // // // // // string, array, function

// // // // // let str1 = "javascript"

// // // // // for(let a of str1){
// // // // //     console.log(a);

// // // // // }

// // // // // let arr1 = ["apple","orange","banana","graps"]

// // // // // for(let b of arr1){
// // // // //     console.log(b);

// // // // // }

// // // // // // for in loop

// // // // // // object

// // // // // let obj1 = {
// // // // //     redFruit : "apple",
// // // // //     yellowFruit : "banana",
// // // // //     orangeFruit : "orange"
// // // // // }

// // // // // for(let ab in obj1){
// // // // //     console.log(obj1[ab]);

// // // // // }

// // // // // console.clear();

// // // // // function

// // // // function one() {
// // // //   // statement
// // // //   console.log("hello world");

// // // //   if (true) {
// // // //     console.log("true val");
// // // //   }

// // // //   for (let i = 0; i <= 3; i++) {
// // // //     console.log(i);
// // // //   }
// // // // }

// // // // one();

// // // // function two(a) {
// // // //   console.log("hi");
// // // //   console.log(a);
// // // // }

// // // // two("hello");
// // // // console.clear();

// // // // // function types

// // // // // 1. named function

// // // // named("named");
// // // // function named(a) {
// // // //   console.log("named function");
// // // //   console.log(a);
// // // // }

// // // // // 2. annonymous function

// // // // var annonymous = function (a) {
// // // //   console.log("annoymous function");
// // // //   console.log(a);
// // // // };
// // // // annonymous("annonmous");

// // // // // 3. arrow function

// // // // var arrow = (a) => {
// // // //   console.log("arrow function");
// // // //   console.log(a);
// // // // };

// // // // arrow("arrow");

// // // // // scopes

// // // // console.log(a1);
// // // // var a1 = 5;

// // // // let b1 = 6;
// // // // console.log(b1);

// // // // const c1 = 5;

// // // // console.log(c1);

// // // // let checkSCope = () => {
// // // //   if (true) {
// // // //     var a2 = "gs value";
// // // //     let b2 = "bs value";
// // // //     const c2 = "bs value";
// // // //     console.log(b2);
// // // //     console.log(c2);
// // // //   }

// // // //   console.log(a2);
// // // // };

// // // // checkSCope();

// // // // // default parameter method

// // // // function clgForm(a, b, c, d = "no") {
// // // //   console.log("name :", a);
// // // //   console.log("dep :", b);
// // // //   console.log("cgpa :", c);
// // // //   console.log("disability :", d);
// // // // }

// // // // clgForm("kamal", "ece", 9);


// // // // self invoke function

// // // // (function(a){
// // // //     alert(`john : ${a}`);
    
// // // // })("hello")


// // // // callback function & higher order function

// // // function function1(){
// // //     console.log("higher order function");
    
// // // }
// // // function function2(){
// // //     console.log("callback function");
    
// // // }


// // // function1(function2())


// // // function add(callback,a,b){
// // //     // callback = sub,a=20,b=40

// // //     console.log(a+b); // 20 + 40 = 60

// // //     callback(20,20) // sub(20,20)

// // // }


// // // function sub(num1,num2){
// // //     console.log(num1-num2);
    
// // // }

// // // add(sub,20,40)


// // // // generator function


// // // function* gen(){
// // //     yield "click me"
// // //     yield "click me again you will get rewards"
// // //     yield "you get now 50% rewards"
// // //     yield "you get 100% off"
// // // }

// // // let storeAllData = gen()

// // // console.log(storeAllData.next().value);
// // // console.log(storeAllData.next().value);
// // // console.log(storeAllData.next().value);
// // // console.log(storeAllData.next().value);
// // // console.log(storeAllData.next().value);

// // // console.clear();


// // // // es6 edition

// // // // spread operation

// // // // array , object

// // // // [...] , {...}

// // // // we can merge two arr, obj value & clone

// // // // array

// // // let arr1 = [1,2,3,4]
// // // let arr2 = [5,6,7,8]

// // // let totalArr = [...arr1,...arr2,9,10]

// // // console.log(totalArr);

// // // let obj1 = {
// // //     name1 : "a",
// // //     role : "developer",
// // //     salary : 100000
// // // }

// // // let obj2 = {
// // //     name12 : "b",
// // //     role1  : "full stack developer",
// // //     salary1 : 200000 
// // // }

// // // let allData = {...obj1,...obj2,experiance : "4"}

// // // console.log(allData);

// // // console.clear();

// // // // rest operator

// // // // function

// // // // (...)

// // // // we can store multiple argument in single parameter

// // // function random(a,b,...c){
// // //  console.log(a+b);

// // //  console.log(c);
 
 
// // // }

// // // random(1,2,3,4,5,6)


// // // // destracture

// // // let first = [1,2,3,4]

// // // let one = first[0]
// // // let one1 = first[1]
// // // let one11 = first[2]
// // // let one111 = first[3]

// // // console.log(one,one1,one11,one111);


// // // let [a1,a2,a3,a4] = first

// // // console.log(a1,a2,a3,a4);

// // // let obj3 = {
// // //     name1 : "john"
// // // }

// // // let {name1} = obj3

// // // console.log(name1);

// // // let nestedVal = [1,2,3,[4,5,6,7,[8]]]

// // // console.log(nestedVal[3][4][0]);

// // // let [b1,b2,b3,[b4,b5,b6,b7,[b8]]] = nestedVal

// // // console.log(b7,b8);

// // // console.clear();


// // // // advance concept array 

// // // let sample = [2,1,2,3,5,"one",true,[1,2],{k:3}]

// // // console.log(sample[0]);
// // // console.log(sample[sample.length-1]);

// // // // homogeneous

// // // // hetrogeneous

// // // // flexible



// // // // array manipulated method

// // // // 1. if your are used add method u can add mulitiple data

// // // // 2. if your are used remove method u can only one data remove

// // // // push() - adding we can last of array

// // // // pop() -  remove we can remove last of array

// // // // shift() - remove we can remove first of array

// // // // unshift() - adding we can add first of array

// // // // splice()


// // // let a = [1,2,3,4]

// // // a.push(5,6,7,8)

// // // a.pop()

// // // a.shift()

// // // a.unshift(0,1)

// // // console.log(a);



// // // // splice(// startingInd , //deleteCount , // addVal)

// // // let b = [10,20,3,4,5,60]

// // // b.splice(2,3,30,40,50)

// // // console.log(b);

// // // console.clear();


// // // // array merge method 

// // // // 1. concat()

// // let a = [1,2,3,4]

// // let b = [5,6,7,8]

// // let totalVal = a.concat(b,9,10)

// // console.log(totalVal);


// // // // 2. slice()

// // let b1 = [1,2,3,4,5,6]

// // let sliceVal = b1.slice(3,6) // sI, eI

// // console.log(sliceVal);



// // // // 3. flat()

// // let c = [1,2,3,4,[5,6,[7]]]

// // let flatVal = c.flat(Infinity)

// // console.log(flatVal);


// // // // 4. fill()

// // let d = [1,2,3,4] // 1,2,3,"four"

// // d.fill("four",3,5) // value , si , ei

// // console.log(d);


// // // // 5. indexOf()

// // let e = [1,2,3,4,5,6,2,1]

// // let indexOfVal = e.indexOf(1,1) // sI,fI

// // console.log(indexOfVal);


// // // // 6. lastIndexOf

// // let d1 = [1,2,3,4,3,2,1]

// // let lastIndexOfVal = d1.lastIndexOf(3,3)

// // console.log(lastIndexOfVal);


// // // // 7. includes

// // let f = [1,23,3,6,4,4,55,100,0]

// // let includesVal = f.includes(60)

// // console.log(includesVal);


// // // // 8. sort

// // let g = [3,111,70,3,2,3000,1,9,9]
// // let SortVal = g.sort()

// // console.log(SortVal);


// // // conversion array to string

// // // // 9. Join

// // let h = [1,2,3]

// // console.log(h);


// // let joinVal = h.join()

// // console.log(typeof(joinVal));


// // // // 10. toString()

// // let j = [2,4,6]
 
// // let stringVal = j.toString()

// // console.log(typeof(stringVal));

// // console.clear();


// // // array higher order method 

// // let games = ["kabadi","cricket","volley ball","basket ball"]



// // // 1. forEach()

// // let forEachVal = games.forEach((c,i,t)=>{
// //     return(c);
    
// // })

// // console.log(forEachVal);




// // // 2. map()

// // let mapVal = games.map((cu,ind,tot)=>{

// //     return(cu);
    
// // })

// // console.log(mapVal);


// // // 3. filter()

// // let employee = [
// //     {ename :  "a", salary : 100000},
// //     {ename :  "b", salary : 200000},
// //     {ename :  "c", salary : 300000},
// //     {ename :  "d", salary : 400000},
// //     {ename :  "e", salary : 500000}
// // ]

// // let filterVal = employee.filter((c,i,t)=>{
// //  return c.salary <= 300000
// // })

// // console.log(filterVal);

// // // 4. find()

// // let findVal = employee.find((c,i,t)=>{
// // return c.salary <= 300000;
// // })

// // console.log(findVal);


// // // 5. reduce()

// // employee = [
// //   { ename: "a", salary: 100000 },
// //   { ename: "b", salary: 200000 },
// //   { ename: "c", salary: 300000 },
// //   { ename: "d", salary: 400000 },
// //   { ename: "e", salary: 500000 },
// // ];

// // let reduceVal = employee.reduce((acc,c,i,t)=>{
// // return acc + c.salary

// // //  0 + 100000 = 1
// // //  1 + 2      = 3
// // //  3 + 3      = 6
// // //  6 + 4      = 10
// // // 10 + 5      = 15

// // // return 15 + 0 =  15


// // },0) // 1 // 3 // 6 // 10 // 15

// // console.log(reduceVal);




// // // higher order function method 

// // // sort 

// let a = [1231,2000,3,4,7,4,1,9] 

// let sortVal = a.sort()

// console.log(sortVal);


// let sortval1 = a.sort((a,b)=>{
// return b-a
// })

// console.log(sortval1);


// // // some - or

// let b = [1,2,3,4]

// let someVal = b.some((c,i,t)=>{
// return c%2==0
// // 1%2==0 false
// // 2%2==0 true
// // 3%2==0 false
// // 4%2==0 true

// // false || true || false || true = true
// })

// console.log(someVal);


// // // every - and

// let d = [2,2,2,6]

// let everyVal = d.every((c,i,t)=>{
//     return c%2==0

//     // 0%2==0  true
//     // 1%2==0  false
//     // 2%2==0  true
//     // 3%2==0  fasle
    
//     // true && false && true && false = false
// })

// console.log(everyVal);



// // // string methods 

// // // length;

// let str = "javascript"

// let lengthVal = str.length

// console.log(lengthVal);


// // // toUpperCase();

// str = "javascript";

// let upper = str.toUpperCase()

// console.log(upper);



// // // toLowerCase();

// let str1 = "JAVAscript"

// let lower = str1.toLowerCase()

// console.log(lower);


// // // trim();

// let backendCode = " data "

// console.log(backendCode);

// let trimVal = backendCode.trim()

// console.log(trimVal);

// // trimStart()

// let front = backendCode.trimStart()

// console.log(front);

// // trimEnd()

// let end = backendCode.trimEnd()

// console.log(end);

// // // charAt();

// let str2 = "helloworld"

// let charAtVal = str2.charAt(7)

// console.log(charAtVal);


// // // includes();

// let includesVal = str2.includes("o")

// console.log(includesVal);


// // // indexOf();

// let str4 = "helooooooolo"

// let indexOfVal = str4.indexOf("l",3)// value , fromIndex

// console.log(indexOfVal);

// // lastIndexOf()

// let lastIndexOfVal = str4.lastIndexOf("l",9) // value , fromIndex

// console.log(lastIndexOfVal);



// // // slice();

// let str5 = "qweAPPLEijijn"

// let sliceVal = str5.slice(3,8)// sI,EI

// console.log(sliceVal);

// // // split();

// let str6 = "spider-man"

// let splitVal = str6.split("a")

// console.log(splitVal);

// // repeat()

// let str7 = "avengers"

// let repeatVal = str7.repeat(100)

// console.log(repeatVal);

// console.clear();



// // // // // // date

// let dateVal = new Date()

// console.log(dateVal);


// // get data

// // year

// let yearVal = dateVal.getFullYear()

// console.log(yearVal);

// // month

// let monthVal = dateVal.getMonth()

// console.log(monthVal);

// // day

// let dayVal = dateVal.getDay()

// console.log(dayVal);

// // date

// let date1Val = dateVal.getDate()

// console.log(date1Val);

// // hours

// let hourVal = dateVal.getHours()

// console.log(hourVal);

// // minutes

// let minutesVal = dateVal.getMinutes()

// console.log(minutesVal);

// // seconds

// let secondsVal = dateVal.getSeconds()

// console.log(secondsVal);


// // local data

// let time = dateVal.toLocaleTimeString()

// console.log(time);


// let date1 = dateVal.toLocaleDateString()

// console.log(date1);


// let allData = dateVal.toLocaleString()

// console.log(allData);

// console.clear();


// // manipulated method

// // set

// let date2 = new Date()

// console.log(date2);

// // year

// date2.setFullYear(2003)

// console.log(date2);

// // month

// date2.setMonth(0)

// console.log(date2);

// // date

// date2.setDate(31)

// console.log(date2);

// // hours

// date2.setHours(9)

// console.log(date2);


// // minutes

// date2.setMinutes(55)

// console.log(date2);

// // seconds

// date2.setSeconds(55)

// console.log(date2);

// console.clear();


// // birthday day finder

// // year 
// // month
// // date


let year = prompt("enter you dob year")
let month = prompt("enter your dob month")
let date = prompt("enter your dob date")

let dateVal = new Date()

dateVal.setFullYear(year)
dateVal.setMonth(month-1)
dateVal.setDate(date)

console.log(dateVal);

let day = dateVal.getDay()

console.log(day);

let dayData = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]


alert(dayData[day]);

























// // manipulate data / set data




