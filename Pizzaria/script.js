const form = document.querySelector('#form_pedido')
const fieldsForm1 = ["nome", "telefone", "endereco", "sabor_pizza", "tamanho_pizza"];

form.addEventListener('submit', (e) => cadastrarPizza(e, fieldsForm1))

function cadastrarPizza(eventoDeSubmit, fields) {
    //prevenir o comportamento padrão do formulário de dar f5 na página
    eventoDeSubmit.preventDefault()
    let formOk = true

    fields.forEach(item => {
        const field = eventoDeSubmit.target[item].value

        if (!field) {
            formOk = false
        }
    })

    if (!formOk) {
        alert("Preencha todos os campos")
        return;
    }

    table = document.querySelector("#tabela_pedidos")
    tr = table.insertRow()
    hora = tr.insertCell()
    hora.innerHTML = new Date(Date.now()).toLocaleString();
    pegaValores(eventoDeSubmit.target, function (prop, value) {
        const cell = tr.insertCell()
        cell.innerHTML = value
    })
}

function pegaValores(form, valueHandler) {
    for (let i = 0; i < form.length; i++) {
        let prop = form[i]
        switch (prop.type) {
            case 'text':
                valueHandler(prop.name, prop.value)
                break;
            case 'select-one':
                valueHandler(prop.name, prop.options[prop.selectedIndex].text)
                break;
            case 'radio':
            case 'checkbox':
                if (prop.checked) {
                    valueHandler(prop.name, prop.value)
                }
                break;
        }
    }
}
