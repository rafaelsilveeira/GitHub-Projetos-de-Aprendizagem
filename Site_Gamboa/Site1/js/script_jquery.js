//Sintaxe: $(seletor).ação();

$(function(){
    $('#slide img:eq(0)')
        .addClass('ativo')
        .show();
    
    var texto = $(".ativo").attr("alt");
    
    $("#slide")
        .prepend("<p>"+texto+"</p>");

    setInterval(slide,3000);
    function slide(){
        //aqui vai o código do nosso slide
        if($(".ativo").next().size()){
            //se houver, irá fazer algo
            $(".ativo").fadeOut().removeClass("ativo").next().fadeIn().addClass("ativo");
            }else {
                //se não, irá retornar ao estado inicial do slide
                $(".ativo").fadeOut().removeClass("ativo");
                $("#slide img:eq(0)").fadeIn().addClass("ativo");
        }

        var texto = $(".ativo").attr("alt");
	
        $("#slide p").hide().html(texto).delay(500).fadeIn();

    }


})




