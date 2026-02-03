function NotaDoAluno(nota) {
    if (nota >= 7)  { 
            console.log('Aluno foi aprovado, nota', nota)
    }
}

NotaDoAluno(9.2)
NotaDoAluno(8.4)
NotaDoAluno(6.4)

function SeForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade ... ' + valor)
    }
}

SeForVerdadeEuFalo()
SeForVerdadeEuFalo(null)
SeForVerdadeEuFalo(undefined)
SeForVerdadeEuFalo(NaN)
SeForVerdadeEuFalo('')
SeForVerdadeEuFalo(0)
SeForVerdadeEuFalo(-1)
SeForVerdadeEuFalo(' ')
SeForVerdadeEuFalo('?')
SeForVerdadeEuFalo([])
SeForVerdadeEuFalo([1, 2])
SeForVerdadeEuFalo({})


function MediaDaTurma(media) {
    if(media >= 7) {
        console.log("Turma aprovada com a media = " + media)
    }
}

MediaDaTurma(7)