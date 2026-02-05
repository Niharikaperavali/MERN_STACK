// console.log("Hello world");
// var a=5; //global scope
// var a = 10;
// console.log(a);

// let b= 20; //block scope
// console.log(b)

// const c = 30; //block scope
// // const c=40;
// console.log(c);

// var a = 10; //number
// var str = "viky" // '' // `` //string
// var bool = true; //boolean
// var un; //undefine
// var nu = null; // null
// var big = 1234567891239n;
// var symbol = Symbol("li");
// console.log(typeof a);
// console.log(typeof str);
// console.log(typeof bool);
// console.log(typeof un);
// console.log(typeof nu);
// console.log(typeof big);
// console.log(typeof symbol);

// Arthematc operator( +,-,*,/,%)

// var a = 10;
// var b= "20";
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// //Relational operator (>,<,<=,>=,==,!=,===,!==)
// var a =10;
// var b= 20;
// console.log(a>b); //false
// console.log(a<b); //true
// console.log(a>=b); //false
// console.log(a<=b); //true
// a = 10;
// b = "10";
// console.log(a==b); //true
// console.log(a!=b); //false
// console.log(a===b); //false
// console.log(a!==b); //true

// //logical operator (&&,||,!)
// a = true;
// b = false;
// console.log(a&&b);
// console.log(a||b);
// console.log(!a);

// var arr = [10,20,30,40];
// console.log(arr);
// console.log(typeof arr);

// var obj = {
//     name:"viky",
//     age:24
// }
// console.log(obj);
// console.log(typeof obj);

//looping statements
//for loop
// for(initialization;condition;increment/decrement){
//     //statement
// }
// for(let i=0;i<=10;i++){
//     console.log(i);
// }
// //while loop
// // while(condition){
// //     statement;
// // }

// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// //do while
// // do{
// //     //statement
// // }while(condition);

// i = 1;
// do{
//     console.log('do..while'); 
// }while(i===0);

// //find even number
// for(let i=1;i<=10;i++){
//     if(i%2===0) console.log(i);
// }
// i=9;
// if(i%2===0) console.log("even");
// else console.log("odd");
// let mark = 70;
// if(mark>=90) console.log("O Grade");
// else if(mark>=80) console.log("A Grade");
// else if(mark>=70) console.log("B Grade");
// else console.log("Fail");

// //switch 
// let day = 6;
// switch(day){
//     case 1: {
//         console.log("Sunday");
//         break;
//     }
//     case 2: {console.log("Monday");
//     break;
//     }
//     case 3: {console.log("Tuesday");
//     break;
//     }
//     case 4: {console.log("Wednesday");
//     break;
//     }
//     case 5: {console.log("Thursday");
//     break;
//     }
//     case 6: {console.log("Friday");
//     break;
//     }
//     case 7:{ console.log("Saturday");
//     break;
//     }
//     default: {console.log("Invalid input");
//     break;
//     }
// }
// mark =30;
// let result = (mark>=90)?"O Grade":(mark>=80)?"A Grade":(mark>=70)?"B Grade":(mark>=35)?"Pass":"Fail";
// console.log(result);
// add(10,20);
// var c;
// function add(a,b){
//     c = 10;
//     console.log(a+b+c);
// }
// // add(10,20);
// //Arrow Function
// var add = (a,b)=>{
//     console.log(a+b);
// }
// add(10,20);

// console.log(z);
// var z;

// //Spread Operator (...)
// var arr1 = [10,20,30];
// var arr2 = [...arr1,40,50,60];
// console.log(arr2);

// //Destructuring Operator
//  var [m1,m2,m3,m4,m5]= [89,90,99,96,87]
//  console.log(m1);
//  console.log(m2);
//  console.log(m3);
//  console.log(m4);
//  console.log(m5);

//  var {name,age,Dept,marks}={
//     name:"vikraam",
//     age:24,
//     Dept:["CS","DS"],
//     marks:{
//         Mern:90,
//         Java:89,
//         c:90
//     }
//  }
// console.log(name);
// console.log(age);
// console.log(Dept);
// console.log(marks);

// let arr = [10,20,30,40];
// for..in loop
// for(variable variable_name in array_name){
//  statement
// }
// for(let i in arr){
//     console.log(i,arr[i]);   
// }

// var obj = {
//     name:"vikraam",
//     age:25
// }
// for(let i in obj){
//     console.log(i,obj[i]);
// }
//for..of
//for(variable variable_name of array_name){
// statement
// }
// for(let val of arr){
//     console.log(val);

// }
let arr = [1, 2, 3, 4];
//map
var double_arr = arr.map((i) => (i * 2));
console.log(double_arr);

//filter
var even = arr.filter((i) => (i % 2 === 0))
console.log(even);

//reduce
var total = arr.reduce((sum, i) => (sum + i), 0);
console.log(total);

var total_sum = arr.map((num) => num * 2).filter((num) => (num % 2 === 0)).reduce((sum, num) => (sum + num), 0)
console.log(total_sum);

var n = 8;
var flag = true;
if (n <= 1) flag = false;
else {
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            flag = false;
            break;
        }
    }
}
console.log(flag ? "Prime" : "not Prime");

var name = "vikraam";
console.log(`My name is ${name}`);

arr.forEach((value, index) => {
    console.log(index, value);
})



var demo = () => {
    console.log("I am callback");
}
var main = (myFunction) => {
    myFunction()
}
main(demo);

// var promise = new Promise((resolve,reject)=>{
//     var success = false;
//     if(success){
//         resolve("Promise Resolved");
//     }
//     else{
//         reject("Promise Rejected");
//     }
// })
// promise.then((res)=>console.log(res))
// .catch((err)=>console.log(err))

var promise = new Promise((resolve, reject) => {
    var success = true;
    if (success) {
        setTimeout(() => {
            resolve("Promise Resolved")
        }, 5000)
    }
    else {
        reject("Promise Rejected");
    }
})
promise.then((res) => console.log(res))
    .catch((err) => console.log(err))

// const getData =()=>{
//     return fetch('https://jsonplaceholder.typicode.com/posts')
// }
// getData().then((res)=>res.json())
// .then((data)=>console.log(data))
// .catch(err=>console.log(err))

const getData = async () => {
    try {
        var res =await fetch("https://jsonplaceholder.typicode.com/posts")
        var data =await res.json();
        console.log(data);

    } catch (err) {
        console.log(err);
    }
}
getData();