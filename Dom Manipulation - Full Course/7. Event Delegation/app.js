// DOM Manipulation

// Event Delegation

// It allows users to append a SINGLE event listner 
// to a parent element that adds it to all of its 
// present AND future descendents that match a selector.

// // comment out as you go *
// document.querySelector('#kina').addEventListener
// ('click', function(e){
//     console.log('Kina is Clicked.');

//     const target = e.target

//     if(target.matches('li')){
//         target.style.backgroundColor = 'blue'
//     }
// })

// document.querySelector('#mishaal').addEventListener
// ('click', function(e){
//     console.log('Mishaal is Clicked.');

//     const target = e.target

//     if(target.matches('li')){
//         target.style.backgroundColor = 'blue'
//     }
// })

// document.querySelector('#one_heart').addEventListener
// ('click', function(e){
//     console.log('One Heart is Clicked.');

//     const target = e.target

//     if(target.matches('li')){
//         target.style.backgroundColor = 'blue'
//     }
// })

// document.querySelector('#lil_peep').addEventListener
// ('click', function(e){
//     console.log('Lil Peep is Clicked.');

//     const target = e.target

//     if(target.matches('li')){
//         target.style.backgroundColor = 'blue'
//     }
// })

// document.querySelector('#jack_stauber').addEventListener
// ('click', function(e){
//     console.log('Jack Stauber is Clicked.');

//     const target = e.target

//     if(target.matches('li')){
//         target.style.backgroundColor = 'blue'
//     }
// })

///////////////////////////////////////////////
// comment out as you go *
document.querySelector('#musicians').addEventListener('click', function(e){

    console.log(e.target.getAttribute('id') + ' is clicked!');

    const target = e.target;

    if(target.matches('li')){
        target.style.backgroundColor = 'blue';
    }

})

const musicians = document.querySelector('#musicians');
const newMusician = document.createElement('li');

newMusician.innerText = 'Narvent';
newMusician.setAttribute('id', 'narvent');

newMusician.style.border = '4px solid #ffffff';
newMusician.style.width = '140px';
newMusician.style.height = '60px';
newMusician.style.borderRadius = '10px';
newMusician.style.color = '#ffffff';
newMusician.style.marginBottom = '10px';
newMusician.style.alignItems = 'center';
newMusician.style.fontSize = '26px';

musicians.appendChild(newMusician)