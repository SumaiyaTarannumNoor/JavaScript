
// // const div = document.querySelector("div")

// // console.log(div.textContent)
// // console.log(div.innerText)

// const body = document.body
// const div = document.createElement("div")
// //div.innerText = "Hello"
// div.innerHTML = "<strong>Hi</strong>"

// //or

// const strong = document.createElement("strong")
// strong.innerText = " Hello"
// div.append(strong)

// body.append(div)

const body = document.body
const div = document.querySelector('div')
const spanHi = document.querySelector('#Hi')
const spanBye = document.querySelector('#Bye')

// spanBye.remove()
// div.append(spanBye)

// div.removeChild(spanHi)

// console.log(spanHi.getAttribute("id"))

// console.log(spanHi.title)

console.log(spanHi.setAttribute("id", "hehe"))
console.log(spanHi.setAttribute("title", "hehe"))

spanHi.id = "haha"

spanHi.removeAttribute("title")

// console.log(spanHi.dataset)
// console.log(spanHi.dataset)
// console.log(spanHi.dataset.longerName)

spanHi.dataset.newName = "hi"

spanHi.classList.add("new-class")

spanHi.classList.remove("hi2")

spanHi.classList.toggle("hi3", false)
spanHi.classList.toggle("hi3", true)

spanHi.style.color = "pink"
spanHi.style.backgroundColor = "blue"