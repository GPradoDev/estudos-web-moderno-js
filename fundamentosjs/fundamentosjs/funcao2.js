// armazenando uma funcao numa variavel
const imprimirSoma = function (a, b){
    console.log(a + b)

}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implicito 
const subtracao = (a, b) => a - b
console.log(subtracao(10, 5))

const divisao = (a, b) => a / b
console.log(divisao(10, 2))

const multiplicacao = function (a, b){
    console.log(a * b)
}

multiplicacao(5, 1)

function soma2(a, b){
    return a + b
}

console.log(soma2(2, 3))