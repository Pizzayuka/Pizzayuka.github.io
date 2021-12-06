$(document).ready(function() {

    alert("[move with cursor]"); 

    $(".circle").hover(function(){
    $(this).hide();

    if($('.sixsences').children(':visible').length == 0) {location.href = 'page4.html'}

});   

})
    