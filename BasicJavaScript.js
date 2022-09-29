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
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(1);
