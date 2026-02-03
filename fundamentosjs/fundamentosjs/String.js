const escola = "Cod3r"
console.log(escola.charAt(4)) //retorna o caractere na posição 4
console.log(escola.charAt(7)) //retorna vazio, pois não existe caractere na posição 5
console.log(escola.charCodeAt(3)) //retorna o valor na tabela unicode do caractere na posição 3
console.log(escola.indexOf('3')) //retorna a posição do caractere '3'

console.log(escola.substring(1)) //retorna a string a partir da posição 1
console.log(escola.substring(0, 3)) //retorna a string da posição 0 até a posição 3 (sem incluir o caractere da posição 3)

console.log('Escola '.concat(escola).concat("!")) //concatena strings
//outra forma de concatenar 
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e')) //substitui o caractere 3 por e

console.log('Ana,Maria,Pedro'.split(',')) //divide a string em um array, usando o caractere passado como separador