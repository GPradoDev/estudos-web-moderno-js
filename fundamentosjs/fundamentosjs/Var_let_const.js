// aula sobre variaveis e constantes 
// var é uma variavel que pode ser redeclarado 
// let é uma variavel que não pode ser redeclarada
// const é uma constante que não pode ser redeclarada e nem reatribuida

var nome = "geovanna";
var nome = "geovanna sena";

let idade = 19;
// let idade = 20; // isso vai dar erro
idade = 20; // isso é permitido

const cidade = "são paulo";
// cidade = "rio de janeiro"; // isso vai dar erro
// const cidade = "rio de janeiro"; // isso também vai dar erro

console.log(nome, idade, cidade);
// boas práticas recomendam o uso de let e const ao invés de var