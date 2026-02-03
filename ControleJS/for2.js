const notas = [6.7, 8.6, 5.8, 9.6]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 67
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`) 
}

const grupoDosCrias = {
    dudu: 'É gay',
    arthur: 'É nerd',
    bernardo: 'É gordo',
    gustavo: 'É tóxico'
}

for(let caracteristicas in grupoDosCrias) {
    console.log(`${caracteristicas} = ${grupoDosCrias[caracteristicas]}`)
}
