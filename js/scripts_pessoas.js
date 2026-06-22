// pegando elementos do dom
const formPessoa = document.querySelector('#form-pessoa')
const divLista = document.querySelector('#div-liosta-pessoa')

// criando o array pessoas
const pessoas = []

// capturar o evento submit do formulario
formPessoa.addEventListener('submit', (evt)=>{
    // interrompe o efeito padrão de submeter dados do formulario
    evt.preventDefault()

    // criar um objeto formulario
    const dadosForm = new FormData(formPessoa)

    // criar um ibjeto literal
    const pessoa = {
        nome: dadosFormPessoa.get('nome'),
        idade: dadosFormPessoa.get('idade'),
        renda: dadosFormPessoa.get('renda')
    }

})

