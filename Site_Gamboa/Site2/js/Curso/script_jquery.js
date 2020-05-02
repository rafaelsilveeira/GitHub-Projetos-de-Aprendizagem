//Sintaxe: $(seletor).ação();

/*Função completa para ver se o documento foi lido completo
$(document).ready(function(){
    $('button').click(function(){
        $('h1').hide();
    })
});
*/

//Função Slideshow
$(function(){
    $('#l2').click(function(){
        $('#i1').hide();
        $('#i2').show();
        $('#i3').hide();
        $('#i4').hide();
    });
    
    $('#l3').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').show();
        $('#i4').hide();
    });

    $('#l4').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').show();
    });

    $('#l1').click(function(){
        $('#i1').show();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').hide();
    });



//Função simplificada $(function()){}
    $('#azul').click(function(){
        $('p').css({backgroundColor:'orange', color:'blue'});


//        $('p').fadeOut();
//        $('p').delay(1000);
//        $('p').fadeIn('slow');
    });

    $('#vermelho').click(function(){
        //exemplo de encadeamento. Chama 1 vez só o seletor. Não usar ;
        $('p')
            .css("background-color", "red")
            .css("color", "white");
        $('#mensagem')
            .text("Cor alterada com sucesso")
            .css('color', 'red')
            .css('border', '1px solid red')
            .delay(3000)
            .fadeOut('fast')
            .addClass('green');
        $('button')
            .removeClass('red');

//sumir rápido          $('p').fadeOut('fast');
//aparecer em 5s        $('p').fadeIn(5000);
    });
});