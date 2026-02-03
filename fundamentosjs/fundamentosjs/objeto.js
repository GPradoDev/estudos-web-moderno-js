const prod1 = {}
prod1.nome = 'celular ultra mega'
prod1.preco = 4500.60
prod1['desconto legal'] = 0.59 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
    
}
//chaves são o corpo do objeto 
//um objeto é um conjunto de pares, chave, valor. voce pode associar um numero, uma string ou ate uma funçao

console.log(prod2)

const prod3 = {
    nomeDoCliente: 'JULIO',
    cpfDoCliente:'099932133',
    idadeDoCliente:'18'
    }

console.log(prod3)

const prod4 = {}
prod4.categoria = 'nomeDoCliente = Julio'

console.log(prod4)

const prod5 = {
    categoria: 'CaracteristicasDoCliente',
    tipos:
        {
            idade:'18',
            nome:'Joao',
            cpf:'3428184421'
        }
}

console.log(prod5)