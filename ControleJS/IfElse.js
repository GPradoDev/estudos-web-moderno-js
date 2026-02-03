const ImprimirResultado = function(nota) {
    if(nota >=7){
        console.log('Aprovado!!')
    } else {
        console.log('Reprovado!!')
    }
}

ImprimirResultado(10)
ImprimirResultado(6)
ImprimirResultado('AAA') // cuidado!!!

const Adimplencia = function(media)  {
    if(media >=79) {
        console.log('Bateu a adimplencia, a media foi de: ' + media)
    } else {
        console.log('Nao bateu a adimplencia, a media de foi de: ' + media)
    }

}

Adimplencia(80)
Adimplencia(74)

