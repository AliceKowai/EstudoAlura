function valida(input){
    const tipoDeInput = input.dataset.tipo


    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }
    


    if(input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
    } else {
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }
}

const validadores = {
    nome:input => validaNome(input),
    email:input => VerificaEmail(input),
    senha:input => VerificaSenha(input),
    telefone:input => validaTelefone(input),
}


const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo de nome não pode estar vazio.',
        customError: 'Por favor, coloque seu nome correto'
    },
    email: {
        valueMissing: 'O campo de email não pode estar vazio.',
        typeMismatch: 'O email digitado não é válido.',
        customError: 'Os emails não correspondem.'
    },
    senha: {
        valueMissing: 'O campo de senha não pode estar vazio.',
        patternMismatch: 'A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos.',
        customError: 'Senha não correspondem'
    },
    telefone: {
        valueMissing: 'O campo phone não pode estar vazio',
        customError:'Digite um telefone correto'
    },
    cidade: {
        valueMissing: 'O campo cidade não pode estar vazio'
    },
    genero: {
        valueMissing: 'Marque seu genero'
    },
    niver: {
        patternMismatch:'Ano invalido',
        valueMissing: 'Digite o ano que você nasceu',
        customError: 'cu, ta bom'
    },
    filhos:{
        valueMissing:'opa'
    }
}
function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = ''
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })
    
    return mensagem
}

// validações
//REPITA EMAIL

function VerificaEmail(input) {
    const input1 = document.querySelector('#email')
    const email1 = input1.value
    const input2 = document.querySelector('#repetiremail')
    const email2 = input2.value
    let mensagem = ''

    if (email1 !== email2 && email2 !== '') {
        mensagem='thsydxfdbg'
    }
    input.setCustomValidity(mensagem)
}

//REPITA SENHA

function VerificaSenha(input) {
    const input1 = document.querySelector('#senha')
    const senha1 = input1.value
    const input2 = document.querySelector('#repetirsenha')
    const senha2 = input2.value
    let mensagem = ''

    if (senha1 !== senha2 && senha2 !== '') {
        mensagem='Senhas não correspondem'
    }
    input.setCustomValidity(mensagem)
}


//NOME

function validaNome(input) {
    const nomeRecebido = input.value
    let mensagem = ''
    if (nomeRecebido.length < 5  ) {
        mensagem='Por favor coloque seu nome correto'
    }
    input.setCustomValidity(mensagem);
}

//TELEFONE
function validaTelefone(input) {
    const tele = document.querySelector('#tel')
    const telefone = tele.value
    var regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$')
    let mensagem = ''
    const telefoneValido = regex.test(telefone)
    console.log(telefoneValido)
    if (telefoneValido === true) {
        mensagem='Digite um telefone correto'   
    }
    input.setCustomValidity(mensagem);
}

//NIVER

function validaNiver(input) {
    const anoRecebido = input.value
    let mensagem = ''
    if (anoRecebido.length < 1) {
        mensagem='Por favor coloque seu nome correto'
    }
    input.setCustomValidity(mensagem);
}


const inputs = document.querySelectorAll('input')



inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})

