const form = document.querySelector('#form_pedido')
const fieldsForm1 = ["nome", "telefone", "endereco", "sabor_pizza", "tamanho_pizza"];
const checkboxes = document.querySelectorAll("#form_pedido input[type]")

form.addEventListener('submit', (e) => cadastrarPizza(e, fieldsForm1))

function cadastrarPizza(eventoDeSubmit, fields) {
    //prevenir o comportamento padrão do formulário de dar f5 na página
    eventoDeSubmit.preventDefault()
    let formOk = true

    fields.forEach(item => {
        const field = eventoDeSubmit.target[item].value

        if(!field) {
            formOk = false
        }
    })

    
    if(!formOk) {
        alert("Preencha todos os campos")
        return;
    }


    //logica de cadastro
}
