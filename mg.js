var alternativas = 3;
var correto = new Array();
var resposta = new Array();
//carregar button
$(document).ready(function(){
    $("#start").click(function(){
        comeca();
    })
});
//intervalo
var intervalo;
var time = 0;
function mostrarSequencia(){
    if(time<alternativas){
        $("#h1C").html(correto[time++]);
    }
    else{
        $("#h1C").html("");
        clearInterval(intervalo);
        time = 0;
        $(".botoes").prop('disabled', false);
    }
}
//criar sequencia correta
function criarSequencia(){
    var possibilidades = new Array();
    for(var i = 0; i < alternativas; i++){
        possibilidades[i] = i+1;
    }
    for(var i = 0; i < alternativas; i++){
        var random = Math.floor(Math.random()*possibilidades.length);
        correto.push(possibilidades[random]);
        possibilidades.splice(random,1);
    }
}
//cria os botoes para a escolha
function criarBotoes(){
    $("body").empty();
    var div = $("<div></div>").attr("id","divBotoes");
    $("body").prepend(div);
    for(var i = 0; i < alternativas; i++){
        var button = $("<button></button>").prop("disabled", true).attr("class","botoes").attr("value",i+1).html(i+1);
        $(div).append(button);
    }
    var h1 = $("<h1></h1>").attr("id","h1C").html("Ready?");
    $(div).append(h1);
    $(".botoes").click(cliqueBotoes);
}
//registra sua resposta EM TEMPO REAL
function cliqueBotoes(){
    var escolha = $(this).val();
    resposta.push(escolha);
    $(this).prop("disabled", true);
    if(resposta.length==alternativas)
        compara();
}
//compara os resultados
function compara(){
    var respostaString = resposta.toString();
    var corretoString = correto.toString();
    if(respostaString==corretoString){
        alternativas++;
        comeca();
    }else
        perdi();
}
//manipular functions
function comeca(){
    correto = [];
    resposta = [];
    criarSequencia();
    criarBotoes();
    intervalo = setInterval(mostrarSequencia, 1000);
}
//caso perca
function perdi(){
    alternativas = 3;
    $("#h1C").html("Você Perdeu!!!");
    var button = $("<button></button>").attr("id","restart").html("Restart");
    $("#divBotoes").append(button);
    $("#restart").click(comeca);
}