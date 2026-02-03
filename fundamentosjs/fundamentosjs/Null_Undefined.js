const a = {name: 'Olá'}
console.log(a)

const b = a
b.name = 'Opa'
console.log(b)
console.log(a)

let valor // não incializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined 
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)

// undefined é quando a variavel não tem nenhuma atribuição
// null é quando a variavel/const não aponta para nenhum valor