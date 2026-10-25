const input = document.getElementById("tarefa");
const botao = document.getElementById("adicionar");

const lista = document.createElement("ul");

document.body.appendChild(lista);

const item = document.createElement("li");

botao.addEventListener("click", function() {
    const item = document.createElement("li");

    item.textContent = input.value;

    input.value = "";
    lista.appendChild(item);

});

