var interval;
var turn = 0;
var possibilities = 3;
var answer = new Array();
var numbers = new Array();
var sequence = new Array();
window.onload = function(){
    var div = document.getElementsByTagName("div")[0];
    var button = document.createElement("button");
    button.setAttribute("onclick","start()");
    button.setAttribute("id","start");
    button.appendChild(document.createTextNode("Start"));
    div.appendChild(button);
}
function start(){
    var div = document.getElementsByTagName("div")[0];
    var buttonStart = document.getElementsByTagName("button")[0];
    div.removeChild(buttonStart);
    again();
}
function again(){
    var div = document.getElementsByTagName("div")[0];
    createSequence();
    for(var i = 1; i <= possibilities; i++){
        var button = document.createElement("button");
        button.setAttribute("id",i);
        button.setAttribute("class","numbers");
        button.setAttribute("onclick","button("+i+")");
        button.appendChild(document.createTextNode(i));
        div.appendChild(button);
    }
    var h1 = document.createElement("h1");
    h1.setAttribute("id","h1");
    h1.appendChild(document.createTextNode("Ready?"));
    div.appendChild(h1);
    for(var i = 1; i <= possibilities; i++){
        document.getElementById(i).disabled = true;
    }
    interval = setInterval(showNumbers, 1000);
}
function createSequence(){
    for(var i = 1; i <= possibilities; i++){
        numbers.push(i);
    }
    for(var i = 1; i <= possibilities; i++){
        var random = Math.floor(Math.random()*numbers.length);
        sequence.push(numbers[random]);
        numbers.splice(random,1);
    }
}
function showNumbers(){
    var h1 = document.getElementById("h1");
    if(turn===possibilities){
        var div = document.getElementsByTagName("div")[0];
        div.removeChild(h1);
        clearInterval(interval);
        for(var i = 1; i <= possibilities; i++){
            document.getElementById(i).disabled = false;
        }
    }
    else{
        for(var i = 1; i <= possibilities; i++){
            document.getElementById(i).disabled = true;
        }
        h1.innerHTML = sequence[turn++];
    }
}
function button(i){
    answer.push(i);
    document.getElementById(i).disabled = true;
    if(answer.length==sequence.length)
        compare()
}
function compare(){
    var sequenceString = sequence.toString();
    var answerString = answer.toString();
    var div = document.getElementsByTagName("div")[0];
    if(sequenceString==answerString){
        for(var i = 0; i < possibilities; i++){
            div.removeChild(document.getElementsByTagName("button")[0]);
            sequence.splice(0,1);
            answer.splice(0,1);
        }
        turn = 0;
        possibilities++;
        again();
    }else{
        youlose();
    }
}
function youlose(){
    var div = document.getElementsByTagName("div")[0];
    for(var i = 0; i < possibilities; i++){
        div.removeChild(document.getElementsByTagName("button")[0]);
        sequence.splice(0,1);
        answer.splice(0,1);
    }
    turn = 0;
    possibilities = 3;
    var h1 = document.createElement("h1");
    h1.setAttribute("id","loseh1");
    h1.appendChild(document.createTextNode("You lose"));
    div.appendChild(h1);
    var button = document.createElement("button");
    button.setAttribute("id","restart");
    button.setAttribute("class","button");
    button.setAttribute("onclick","restart()");
    button.appendChild(document.createTextNode("Restart"));
    div.appendChild(button);
    var button = document.createElement("button");
    button.setAttribute("id","home");
    button.setAttribute("class","button");
    button.setAttribute("onclick","home()");
    button.appendChild(document.createTextNode("Home"));
    div.appendChild(button);
}
function restart(){
    var div = document.getElementsByTagName("div")[0];
    var h1 = document.getElementsByTagName("h1")[0];
    var button1 = document.getElementsByTagName("button")[0];
    var button2 = document.getElementsByTagName("button")[1];
    div.removeChild(h1);
    div.removeChild(button1);
    div.removeChild(button2);
    again();
}
function home(){
    location.reload();
}