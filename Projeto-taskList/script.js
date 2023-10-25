//document.querySelectorAll("#form-pedido input[type=checkbox]")
const cadastroBtn = document.querySelector(".cadastro-tarefa")
const containerTarefas = document.querySelector(".tarefas")

cadastroBtn.addEventListener("click", cadastrarTarefa)

const removerTarefa = (tarefa) => {
    containerTarefas.removeChild(tarefa)
}

function cadastrarTarefa() {
    const tarefa = document.getElementById("tarefa").value

    const div = document.createElement("div")
    div.classList.add("tarefa")

    const input = document.createElement("input")
    input.type = "checkbox"
    input.addEventListener("input", (e) => {
        if(e.target.checked) {
            e.target.nextElementSibling.style
        }
    })

    const p = document.createElement("p")
    p.textContent = tarefa

    const button = document.createElement('button')
    button.textContent = "Apagar"
    button.addEventListener('click', () => removerTarefa(div))

    div.append(input, p, button)

    containerTarefas.appendChild(div)
}