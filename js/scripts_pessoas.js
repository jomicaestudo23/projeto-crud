// import6ando arquivos
import { calcDesconto } from "./scripts_calculos.js"
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

    // limpando o formulario
    formPessoa.reset()

})
// criando a função adicionar pessoa
const addPessoa = (objPessoa) => {
    pessoas.push(objPessoa)

    listPessoas()
}
// função para listar pessoas no array
const listPessoas = () => {
    // limpando para listar pessoas no array
    divLista.innerHTML = ''

    
    ;
    // /percorrer o array pessoas com 0 foreach
    pessoas.forEach((elem, i) =>{
        
        const result = calcDesconto(elem)

        divLista.innerHTML += `${i + 1} - Nome: ${elem.nome}<br>
        Idade: ${elem.idade}<br>
        Renda: ${parseFloat(elem.renda).toFixed(2).replace('.',',')}<br>
        Desconto: ${calcDesconto(elem).toFixed(2).replace('.',',')}<br>
        Resultado final: ${(elem.renda - result).toFixed(2).replace('.',',')}
   `
    })
}

