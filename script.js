let number = 0

const counter = setInterval(() => {
    number += 1
    console.log(number)
    if(number === 5) {
        clearInterval(counter)
    }
},1000)

const box = document.querySelector(".box")
const title = document.querySelector(".title")

setInterval(() => {
    box.style.backgroundColor = "green"
    title.style.fontSize = '100px'
    title.style.paddingLeft = '100px'
},5000)

const btn = document.querySelector("#btn")
const score = document.querySelector("#score")
const text = document.querySelector("#text")
const timer = document.querySelector("#timer")

let userScore = 0
let time = 10


btn.addEventListener("click", () => {
    userScore += 1

    score.textContent = userScore
})

const count = setInterval(() => {
    timer.textContent = time
    time -= 1

    if (time < 0) {
        clearInterval(count)
        btn.disabled = true
        timer.textContent = 0
    }
}, 1000)

const input = document.querySelector(".input")

const button = document.querySelector("#button")

button.addEventListener("click", () => {
    if(!input.value) {
        return
    }

    const userNumber = Number(input.value) * 1000

    const userTimeOut = setTimeout(() => {
        alert("Час вийшов")
    }, userNumber)
})