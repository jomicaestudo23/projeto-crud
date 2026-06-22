// pegando elementos do dom
const formPessoa = document.querySelector('#form-pessoa')
const divLista = document.querySelector('#div-lista-pessoas')

// criando o array pessoas
const pessoas = []

// capturar o evento submit do formulario
formPessoa.addEventListener('submit', (evt)=>{
    // interrompe o efeito padrão de submeter dados do formulario
    evt.preventDefault()

    // criar um objeto formulario
    const dadosFormPessoa = new FormData(formPessoa)

    // criar um objeto literal
    const pessoa = {
        nome: dadosFormPessoa.get('nome'),
        idade: dadosFormPessoa.get('idade'),
        renda: dadosFormPessoa.get('renda')
    }

    // chamando a função addPessoa
    addPessoa(pessoa)

})
// criando a função adicionar pessoa
const addPessoa = (objPessoa) => {
    pessoas.push(objPessoa)

    listPessoas()
}
// função para listar pessoas no array
const listPessoas = () => {

    // /percorrer o array pessoas com 0 foreach
    pessoas.forEach((elem, i) =>{
        divLista.innerHTML += `${i + 1} - ${elem.nome}, ${elem.idade},
         ${elem.renda}<br>`
    })
}

