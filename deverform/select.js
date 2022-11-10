function vazio() {
    
    //PAIS
    var paisEscolhido;
    let pais = document.querySelector('.input-mensagem-selecterro');
    paisEscolhido = document.getElementById("pais").value;
    if ((paisEscolhido == "")||(paisEscolhido == null)) {
        pais.style.display = 'block';
        return false;
    }else{
        pais.style.display = 'none';
    }
    
 }

 function niver() {
    var mesEscolhido;
    var diaEscolhido
    let error = document.querySelector('.niverErro');

    diaEscolhido = document.getElementById("dia").value;
    mesEscolhido = document.getElementById("mes").value;
    
    // if (diaEscolhido == null || mesEscolhido == null) {
    //     error.style.display = 'block';
    //     console.log('sem sorte')
    // }else{
    //     error.style.display = 'none';
    // }

    console.log(diaEscolhido);
 }

 let enviar = document.querySelector('#enviar')
 enviar.addEventListener('click', ()=> {
    console.log('cu')
 })

 function valnacionalidade() {
    
    //nacionalidade
    var paisEscolhido;
    let pais = document.querySelector('.input-mensagem-selecterror');
    paisEscolhido = document.getElementById("nacionalidade").value;
    if ((paisEscolhido == "")||(paisEscolhido == null)) {
        pais.style.display = 'block';
        return false;
    }else{
        pais.style.display = 'none';
    }
    
 }

 //mascara telefone

 function mascaraTel() {
    var tel = document.getElementById('tel')
    if (tel.value.length == 2) {
        tel.value+=" "
    }else if(tel.value.length == 8){
        tel.value+="-"
    }
 }

 
