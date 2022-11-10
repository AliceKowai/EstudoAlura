'use strict'
$(document).ready(function(){
    //esconde todos os passos e exibe o primeiro que carregar
    $('.step').hide();
    $('.step').first().show();
    var mostrarpasso = function(){
        var index = parseInt($(".step:visible").index());
        //Se for o primeiro passo desabilita o botão voltar
        if(index == 0){
            $("#prev").prop('disabled', true);
            //Se for o ultimo passo desabilita o botão avançar
        }else if(index == (parseInt($(".step").length)-1)){
            $("#next").prop('disabled', true);
        }else{
            //Qualquer outra ocasião ambos estarão habilitados
            $("#next").prop('disabled', false);
            $("#prev").prop('disabled', false);
        }
    };
    //Executa a função ao carregar a pag
    mostrarpasso();
    //avançar
    $("#next").click(function(){
        $(".step:visible").hide().next().show();
        mostrarpasso();
    });
    //voltar
    $("#prev").click(function(){
        $(".step:visible").hide().prev().show();
        mostrarpasso();
    });
});