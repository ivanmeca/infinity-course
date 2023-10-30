//document.querySelectorAll("#form-pedido input[type=checkbox]")
const cadastroBtn = document.querySelector(".cadastro-tarefa")
const containerTarefas = document.querySelector(".tarefas")

cadastroBtn.addEventListener("click", cadastrarTarefa)

let tarefas = JSON.parse(localStorage.getItem("tarefas"))
/* [
    {id: 1, nome: "Estudar", completa: false, descricao: "HTML, Js, Ts, CSS"},
    {id: 2, nome: "Lavar a louça", completa: false, descricao: "Para a mãe não bater"},
] */

let contador = 3;

const removerTarefa = (tarefaParaApagar) => {
    tarefas = tarefas.filter(tarefa => tarefa.id !== tarefaParaApagar.id)

    mostrarTarefa(tarefas)
}

const editarTarefa = (tarefaParaEditar) => {
    let novaTarefa = prompt("Digite o novo nome da tarefa")
    let novaDescricao = prompt("Digite a nova descriçao da tarefa")

    /* tarefas.forEach(tarefa => {
        if(tarefa.id === tarefaParaEditar.id) {
            tarefa.nome = novaTarefa ? novaTarefa : tarefa.nome
            tarefa.descricao = novaDescricao ? novaDescricao : tarefa.descricao
        }
    }) */

    tarefas = tarefas.map(tarefa => {
        if(tarefa.id === tarefaParaEditar.id) {
            /* tarefa.nome = novaTarefa ? novaTarefa : tarefa.nome
            tarefa.descricao = novaDescricao ? novaDescricao : tarefa.descricao */

            return {
                ...tarefa, /* rest, pega todas as outras propriedades e valores de
                tarefa e adiciona os mesmos neste novo objeto */
                nome: novaTarefa ? novaTarefa : tarefa.nome,
                descricao: tarefa.descricao = novaDescricao ? novaDescricao : tarefa.descricao
            }
        }

        return tarefa;
    })


    mostrarTarefa(tarefas)
}


/* Teria que ter uma nova função e um outro botão de edição
 esta função tem que receber o id como parametro, e também os
 valores novos de tarefa e descriçao
 Função map, forEach

*/

function cadastrarTarefa() {
    const tarefa = document.getElementById("tarefa").value
    const descricao = document.getElementById("descricao").value

    if(!tarefa) {
        alert("Preencha a tarefa")
        return;
    }

    const novaTarefa = {
        id: contador,
        completa: false,
        nome: tarefa,
        descricao /* descricao: descricao */
    }

    contador++

    tarefas.push(novaTarefa)
    mostrarTarefa(tarefas)
}

function mostrarTarefa(arrayDeTarefas) {
    containerTarefas.innerHTML = ""

    localStorage.setItem("tarefas", JSON.stringify(tarefas))

    arrayDeTarefas.forEach(tarefa => {
        const div = document.createElement("div")
        div.classList.add("tarefa")

        const input = document.createElement("input")
        input.type = "checkbox"
        /* input.addEventListener("input", (e) => {
            para captar o p irmão e mudar a estilização de acordo com o check do usuario

            if(e.target.checked) {
                e.target.nextElementSibling.style.color = "gray"
                e.target.nextElementSibling.style.textDecoration = "line-through"
            } else {
                e.target.nextElementSibling.style.color = "black"
                e.target.nextElementSibling.style.textDecoration = "none"
            }
        }) */

        const p = document.createElement("p")
        p.textContent = tarefa.nome

        const descricao = document.createElement("p")
        descricao.textContent = tarefa.descricao

        const buttonApagar = document.createElement('button')
        buttonApagar.textContent = "Apagar"
        buttonApagar.addEventListener('click', () => removerTarefa(tarefa))

        const buttonEditar = document.createElement('button')
        buttonEditar.textContent = "Editar"
        buttonEditar.addEventListener('click', () => editarTarefa(tarefa))

        div.append(input, p, descricao, buttonEditar, buttonApagar)

        containerTarefas.appendChild(div)
    })

}