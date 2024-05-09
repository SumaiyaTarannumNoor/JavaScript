// DOM Manipulation


// Traverse the DOM

// // comment out as you go *
// // Parent Node Traversal

// let ul = document.querySelector('ul');
// console.log(ul);
// // comment out as you go *
// // Two options
// console.log(ul.parentNode);
// console.log(ul.parentElement);
// // comment out as you go *
// // Grand Parent Node
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);
// //
// // comment out as you go *
// console.log(ul.parentNode.parentElement);
// console.log(ul.parentElement.parentNode);

// // comment out as you go *
// //difference between node and element
// const html = document.documentElement;

// console.log(html)
// console.log(html.parentNode);
// console.log(html.parentElement);


// // Child Node Traversal
// // comment out as you go *
// let ul = document.querySelector('ul');

// console.log(ul);
// // comment out as you go *
// console.log(ul.childNodes); //Indentations are counted as nodes.
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// // comment out as you go *
// ul.childNodes[1].style.backgroundColor = 'blue';

// // comment out as you go *
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);



// // Sibling Node Traversal
// // comment out as you go *
// let ul = document.querySelector('ul');
// const div = document.querySelector('div');

// console.log(div.childNodes);

// // comment out as you go *
// console.log(ul.previousSibling);
// console.log(ul.nextSibling);

// // 
// // comment out as you go *
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);
