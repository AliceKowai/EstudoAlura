function jogar (){
    if(document.getElementById("pedra").checked == false && document.getElementById("papel").checked == false){
        alert("Selecione uma opção");

    }else {
        let sorteio = math.floor (Math.random()*3);
        switch (sorteio){
            case 0: 
                document.getElementById("pc").src="pcpedra.png";
                break;
            case 1: 
                document.getElementById("pc").src="pcpapel.png";
                break;
            case 2: 
                document.getElementById("pc").src="pctesoura.png";
                break;
        }
        if ((document.getElementById("pedra").checked ==true && sorteio ==0) || 
            (document.getElementById("papel").checked ==true && sorteio ==1) || 
            (document.getElementById("tesoura").checked ==true && sorteio ==2)) {
                document.getElementById("placar").innerHTML="Empate";
        }else if ((document.getElementById("pedra").checked ==true && sorteio ==2) || 
            (document.getElementById("papel").checked ==true && sorteio ==0) || 
            (document.getElementById("tesoura").checked ==true && sorteio ==1)){
             document.getElementById("placar").innerHTML="jogador Venceu";
            }else {
                document.getElementById("placar").innerHTML="Computador Venceu";
            } 
    }
}


function resetar(){
document.getElementById("pc").src="pc.png";
document.getElementById("placar").innerHTML="";
}