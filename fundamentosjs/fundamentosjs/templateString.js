 const nome = "rebeca";
 const concatenacao = "olá " + nome + "!";
 const template = `
    olá 
    ${nome}!`
console.log(concatenacao, template);

const sobrenome = "sena";
const concatenar = "Oi " + sobrenome + "?";
const template2 =`
    Oi 
    ${sobrenome}?`;

console.log(concatenar, template2);                                         

//expressoes
console.log(`2 + 2 = ${2+2}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up("cuidado")}!`);


const nomes = "Geovanna!";
const template3 = `olá ${nomes}`;

console.log(template3)

const ups = string => string.toUpperCase()

const amor = "Geovanna"  
const saudacao = "Ola " + amor + "!"
console.log(saudacao)

const nomer = "Geovanna!"
const template4 = `Ola ${nomer}`;

console.log(template4)