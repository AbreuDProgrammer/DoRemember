$(document).ready(function(){
    var nomes = new Array();
    var records = new Array();
    $.ajax({
        type: "GET",
        url: "./record/record.json",
        dataType: "json",
        success: function(res){
            $.each(res["records"],function(index, element){
                console.log(element.nome);
            });
        }
    });
});