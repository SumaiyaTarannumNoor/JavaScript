$(document).ready(function(){
    $.get("http://numbersapi.com/1/30/date?json", function(data){
        var info = '';
        $.each(data, function(key,value){
             
            info += '<td>'+ value +'</td>';
        
        });
        $('#info_table').append(info);
    });
});