console.log(typeof Object)

class Produto {}
console.log(typeof Produto)

//função é um bloco de código que agrupa varias sentenças de código que vc pode nomear e reutilizar quando quiser usando apenas uma palavra
// uma funçao pode retornar algo e tbm pode retornar nada

//funcao sem retorno 
function imprimirSoma(a,b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8)
imprimirSoma()


// Funcao com retorno

function soma(a, b = 7){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))