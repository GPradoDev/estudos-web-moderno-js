const valores = [7.7, 8.9 , 9.2, 6.4]
console.log(valores[0], valores[3]) // array é uma variavel ou constante com varios elementos
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3},false, null, 'teste') //é possível misturar tipos de valores num array, no entanto não é uma boa prática
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)

