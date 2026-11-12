const form = document.querySelector("#form")
const lista = document.querySelector("#lista")
const input = document.querySelector("#input")

form.addEventListener('submit', function(){
    let li = document.createElement("li")
    let valor = input.value

    li.innerText = valor

    lista.appendChild(li)
})