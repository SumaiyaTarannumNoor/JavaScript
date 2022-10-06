// let person= {
//     name:"Sabic",
//     age: 26
// };
// //To change the namre
// //Dot Notation
// person.name = 'Muhimin';

// //Bracket Notation
// person['name'] = 'MI';
// //Bracket notation in use
// let selection = 'name';
// person[selection] = 'Sabic';

// console.log(person);
// console.log(person.name);

//===Array===
// let fruits = ['apple', 'banana'];
// fruits[2] = '1';
// console.log(fruits);
// console.log(fruits[2]);
// console.log(fruits.length);

//===Functions===
// function greet(){
//     console.log("Sabic");
// }
// greet();

// function greet(name){            //name is a parameter
//     console.log(name + " Sabic");
// }
// greet('MI') //MI is an argument to the greet function
// greet('Muhiminul Islam')

//This function is performing a task
// function greet(name , lastName){
//     console.log("Muhiminul " + name + " " +lastName);
// }
// greet('Islam', 'Sabic')

//===Types of Function

//Calculates a value
// function square(number){
//     return number * number;
// }
// let number = square(2);
// console.log(number);
// function square(number){
//     return number * number;
// }

// console.log(square(8));

//===Strings===
//String primitive
// const message = 'This is \n my message.';

// //string object
// const another = new String('hi');

//===Conditional Method===
// let hour = 20; //13,10

// if (hour>= 6 && hour<12)
//     console.log('Good Morning');

// else if(hour >= 12 && hour<18)
//     console.log('Good Afternoon');
// else
//     console.log('Good evening');

//===Loops===
// for (let i = 0; i <= 5; i++) {
//   if(i%2 !=0) console.log("Sabic", i);
// }

// for (let i = 5; i >= 1; i--) {
//     if(i%2 !==0) console.log("Sabic", i);
// }

//===Factory Function===
// function createCircle(){
//     const circle = {
//         radius: 1,
//         location:{
//             x: 1,
//             y: 1
//         },
//         isVisible: true,
//         draw: function(){
//             console.log('draw');
//         }
//     };
//     return circle;
// }
// function createCircle(){
//     return{
//         radius: 1,
//         location:{
//             x: 1,
//             y: 1
//         },
//         isVisible: true,
//         draw: function(){
//             console.log('draw');
//         }
//     };
// }
// function createCircle(radius) {
//   return{
//     radius,
//     draw() {
//       console.log("draw");
//     },
//   };
// }

// const circle1 = createCircle(1);
// console.log(circle1);

///////// Camel Notation: oneTwoThreeFour
///////// Pascal Notation: OneTwoThreeFour

//===Constructor Function===
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const circle = new Circle(1);

//===Getters & Setters===
// const person = {
//   firstName: "MI",
//   lastName: "Sabic",
//   fullName(){
//     return `${person.firstName} ${person.lastName}`
//   }
// };

// console.log(person.fullName());

// Getters => access properties of an object
//Setters => change (mutate) them
//Only get
// const person = {
//   firstName: "MI",
//   lastName: "Sabic",
//   get fullName(){  //<= Now this method is a getter
//     return `${person.firstName} ${person.lastName}`;
//   }
// };

// console.log(person.fullName);

//Getters and Setters
// const person = {
//   firstName: "MI",
//   lastName: "Sabic",
//   get fullName() {
//     //<= Now this method is a getter
//     return `${person.firstName} ${person.lastName}`;
//   },
//   set fullName(value) {
//     const parts = value.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };

// person.fullName = "Muhiminul Islam";
// console.log(person.fullName);

//===Value vs Reference===
//primitives vs objects
//these are primitives
// let x = 10;
// let y = x;

// x = 40;
// let x = {value: 10};
// let y = x;

// x.value = 40;

//primitives are copied by their value
//reference type/objects are copied by their reference

// let number = 10;

// function increase(number){
//   number++; // this number is totally independent from the above one
// }

// increase(number);
// console.log(number);
//this results in 10//

// let obj = {value: 10};

// function increase(obj){
//   obj.value++; // this number is totally independent from the above one
// }

// increase(obj);
// console.log(obj);
// //when we call increase and pass this object its pass by its reference
// //So the local parameter in the function will point to the first object

//===Scopes(Local vs Global)===
//local
// function start(){
//     const message = 'hi';

//     if (true){
//         const another = 'bye';
//     }

//     for(let i = 0; i<5 ; i++){
//     console.log(i);
//     }
// }

// start();

//Local variables take precidence over global variables.
// const color = 'red';

// function start(){
//     const message = 'hi';
//     const color = 'blue';
//     console.log(color);
// }

// start();

//===let vs var vs const===
//When we use var to declare a variable it's not limnited to the block
// in which it's declared. Rathere it's limited within the function in which its declared.
//var => function-scoped
//EC6(ES2015): let, const => block scoped
//When we use var outside of a function, this creates a global variable with the window object in the browser
//and attach that variable with the window object in the browser.

// var color = 'red';
// let age = 30;

// function sayHi(){
//     console.log('hi');
// }
// This function above bydefault creates a global scope called sayHi(),
//which is attached to the window object.

//===Cloning an object===
//old way
// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };

// const another = {};

// for(let key in circle)
//     another[key] = circle[key];

//     console.log(another);

//object.assign method to clone object
// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };

//     const another = Object.assign({},circle) //here, we can use one or more souce object

//     console.log(another);
// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };

//     const another = Object.assign({
//         //we can add more properties here.
//         color: 'yellow'
//     },circle) //here, we can use one or more souce object

//     console.log(another);

//more simple and elegent way to clone an object
// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };

//     const another = {...circle}; //These three dots are called spread operator

//     console.log(another);

//===this Keyword===
//In method -> object itself
//In function -> global object, which is the
// window object in browser and global object in node.
// const video = {
//     title: 'a',
//     play(){
//         console.log(this);
//     }
// };

// video.play();

// const video = {
//     title: 'a',
//     play(){
//         console.log(this);
//     }
// };

// video.stop = function(){
//     console.log(this);
// };

// video.stop();

//REGULAR FUNCTION
// const video = {
//   title: "a",
//   play() {
//     console.log(this);
//   },
// };

// function playVideo() {
//   console.log(this);
// }

// playVideo();

//constructor function
// const video = {
//   title: "a",
//   play() {
//     console.log(this);
//   },
// };

// function Video(title) {
//   this.title = title;
//   console.log(this);
// }

// const v = new Video("a");


// const video = {
//     tags: ['a', 'b', 'c'],

//     showTags(){
//         this.tags.forEach(function(tag){
//             console.log(tag);
//         });
//     }
// };

// video.showTags();

// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],

//     showTags(){
//         this.tags.forEach(function(tag){
//             console.log(this.title,tag);
//         }, this);
//     }
// };

// video.showTags();   

//===Template literals===
//String primitive
// const message = 
// 'This is my\n' +
// '\'first\' message';
// console.log(message);

//Object literals => {}
//Boolean => true, false
//String => '',""
//Template => ``

//Template literal
// const another = `This is my
// 'first' message`;
// console.log(another);

//
// const name = 'John';

// const another = 
// `Hi ${name} ${2+3},
// Thank you for joining my mailing list.

// Regards`;

// console.log(another);

//===Array Filter===

//callback function
// const number = [1, -1, 2, 3];

// const filtered = number.filter(function(value){
//     return value >= 0;
// });

// console.log(filtered);

//arrow function
// const number = [1, -1, 2, 3];

// const filtered = number.filter(value => value >= 0);

// console.log(filtered);

//===Array Map===
// const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(n => n>= 0);

// const items = filtered.map(n => '<li>' + n + '</li>');

// console.log(items);

//html markup to map numbers to a string
// const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(n => n>= 0);

// const items = filtered.map(n => '<li>' + n + '</li>');

// const html = '<ul>' + items.join('') + '</ul>';

// console.log(html);

//mapping number to an object
// const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(n => n >= 0);

// const items = filtered.map(n => {
//     // const obj = {value: n};
//     // return obj;
//     return {value:n};
// });

// console.log(items);
//or
// const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(n => n >= 0);

// const items = filtered.map(n => ({value:n})); //these methods are chainable
// //for arrow functions curly braces mean code blocks
// //to show an object we need to put them inside first bracket

// console.log(items);

//map method

// const numbers = [1, -1, 2, 3];

// const items = numbers
//     .filter(n => n >= 0)
//     .map(n => ({value:n})); //This is called chaining

// console.log(items);

// const numbers = [1, -1, 2, 3];

// const items = numbers
//     .filter(n => n >= 0)
//     .map(n => ({value:n})) //This is called chaining
//     .filter(obj => obj.value > 1)
//     .map(obj => obj.value);

// console.log(items);

//===Array Reduce===
// const numbers = [1, -1, 2, 3];

// //a = 0, c = 1 => a = 1
// //a = 1, c = -1 => a = 0
// //a = 0, c = 2 => a = 2
// //a = 2, c = 3 => a = 5
// const sum = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// }, 0);  //this 0 is for the initialization of the accumulator

// console.log(sum);

//short version
const numbers = [1, -1, 2, 3];

//a = 1, c = -1 => a = 0
//a = 0, c = 2 => a = 2
//a = 2, c = 3 => a = 5
const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue);

console.log(sum);