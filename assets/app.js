$(document).ready(function () {
    $('.modal').modal();
    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown();
     

    $('.materialboxed').materialbox();

    $('.repeat').click(function(){
        var classes =  $(this).parent().attr('class');
        $(this).parent().attr('class', 'animate');
        var indicator = $(this);
        setTimeout(function(){ 
            $(indicator).parent().addClass(classes);
        }, 20);
    });
});