function tratarErroElancar(erro) {
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.nome,
        msg: erro.menage,
        date: new Date
    }

}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!' )
    } catch (e) {
        tratarErroElancar(e)
    } finally {
            console.log('final')
        }
    }

const obj = { name: 'Roberto'}
imprimirNomeGritado(obj)