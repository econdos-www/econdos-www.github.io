$(document).ready(function(){

    $('#innovation a.active').tab('show');
	$("#benefits .painel a").on("click", function(){
		$(this).parent().find("a").removeClass("active");
		$(this).toggleClass("active");
	});
    
    $('.phone-menu-buttom').on('click', function(e){
		e.preventDefault();
     $('.bar-phone').fadeIn();
    });
    
    $('.bar-phone a').on('click', function(e){
		e.preventDefault();
     $('.bar-phone').fadeOut();
    });
    
    $(gmaps.init);
	
	$('#contact-form').ajaxForm({
	    	dataType:  'json',
	    	beforeSubmit: validate,
	    	success: show_success,
	    	clearForm: true, 
			resetForm: true
	});

	$('.scroll-link').on('click', function(e){
		e.preventDefault();

		var href = $(this).attr('href');
		scroll_menu(href);

		return false;
	});
	
	$('.ddd-mask').mask('99');
	$('.phone-mask').mask('99999999?9');

	menu_activation();

	var hash = window.location.hash;
	if(hash) scroll_menu(hash); return false;
});

function scroll_menu(location){
	if($('body').has(location)){
		var position = $(location).offset();
		var top = position.top - $('#header').height();
		var speed = ($('body').width() > 1024) ? 800 : 0;
		$('body').scrollTo(top, speed);
	}
}

function menu_activation(){
	$(window).scroll(function(){
		var position = $(window).scrollTop();
//        console.log(position);
		var name = "";
		if(position >= 509 && position < 1210) {
			menu_activation_action('quem-somos');
		} else if(position >= 1210 && position < 1980) {
			menu_activation_action('blue');
		} else if(position >= 1980) {
			menu_activation_action('yellow');
		} else {
			$('#header li').removeClass('active');		
		}
	})
}

function menu_activation_action(name){ 
	name = '.' + name;
	// if(!$('#header').find(name).parent().hasClass('active')){
		$('.bg-nav .nav li').removeClass('active');
		$('.bg-nav .nav li').find(name).parent().addClass('active');
	// }
}

function validate(formData, jqForm, options) {
	if ($("#contact-form").valid()) {
		return true;	
	} else {
		return false;
	}
}

function show_success(responseText, statusText, xhr, $form) {
	if (responseText.status == '000') {
		$("#contact_status_message").html("Enviado com sucesso!");
		$("#contact_status").addClass("alert-success").removeClass("alert-danger");;
	} else {
		$("#contact_status_message").html("Erro no envio da mensagem!");
		$("#contact_status").addClass("alert-danger").removeClass("alert-success");;
	}
	
	$("#contact_status").show();
}

