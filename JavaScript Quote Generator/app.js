let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"CGPA Doesn't matter."`,
    person: `Someone Dear, 2020.`
},{
    quote: `"There is also, in spite of everything, a life for the future — plans, possibilities, prospects."`,
    person: `Franz Kafka, 1920.`
},{
    quote: `"Have a proper lunch ! And be calm !"`,
    person: `Franz Kafka, 1913.`
},{
    quote: `"No doubt it is good that we cling to each other."`,
    person: `Franz Kafka, 1916.`
},{
    quote: `"Don’t be sad, dearest !"`,
    person: `Franz Kafka, 1912.`
},{
    quote: `"Well, let me just send you good wishes and hold your dear hand in mine for a little while."`,
    person: `Franz Kafka, 1913.`
},{
    quote: `"I can bear everything with you in my heart. "`,
    person: `Franz Kafka, 1921.`
},{
    quote: `"Don’t work yourself to exhaustion! "`,
    person: `Franz Kafka, 1914.`
},{
    quote:`"Everything is definitely, quite definitely going to be better, and you need not worry. "`,
    person: `Franz Kafka, 1912.`
},{
    quote:`"Everything is definitely, quite definitely going to be better, and you need not worry. "`,
    person: `Franz Kafka, 1912.`
},{
    quote:`"The best plan would probably be in some clever way to raise a certain amount of money, and to go south with you forever to some island or lake."`,
    person: `Franz Kafka, 1913.`
}];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})