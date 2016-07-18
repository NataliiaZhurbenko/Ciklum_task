$(document).ready(function(){
 // activate modal
	$('#login').click(function(){
		$('#modal').modal();
	});
	
 //toggle dropdown
	$('.dropdown-submenu a.navbar_submenu').on('click', function(e){
		$(this).next('ul').toggle();
		e.stopPropagation();
		e.preventDefault();
	});
	

 //hide and show labels
	$('p input').focus(function() {
		 $(this).prevAll('label').css( 'opacity', '0' );
	});
	$('p input').blur(function(){
		if (!$(this).val()) {
			$(this).prevAll('label').css('opacity', '1');
		}
	});
});

//define a function reset for reset form

jQuery.fn.reset = function () {
	$(this).each (function() { this.reset(); });
}

$(document).ready(function(){
	$('p input').each(function(){
		$(this).val() == '';
	});
							  
	$('.btn_submit').click(function() {
		$('#signup_form').reset();
		$('#signup_form p label:first-child').css('opacity', '1');
		return false;
	});
});
	
//Form validation  -- not fully completed yet
/*
(function( $ ){

	$(function() {
		$('.signup_form').each(function(){
		// var declaration
		var form = $(this),
		btn = form.find('.btn_submit');

		// added class 'error' for all input fields
		form.find('.form-control').addClass('error');

		//checking inputs
		function checkInput(){
			form.find('.form-control').each(function(){
				if($(this).val() != ''){
				// if field is not empty remove class error
					$(this).removeClass('error');
				} else {
					$(this).addClass('error');
				}
			});
		}

		function lightEmpty(){
			form.find('.error').css({'border-color':'red'});
			setTimeout(function(){
				form.find('.error').removeAttr('style');
			}, 500);
		}


		setInterval(function(){
			checkInput();
			var sizeEmpty = form.find('.error').size();
				if(sizeEmpty > 0){
					if(btn.hasClass('disabled')){
						return false
					} else {
						btn.addClass('disabled')
					}
				} else {
					btn.removeClass('disabled')
				}
			}, 200);

		btn.click(function(){
			if($(this).hasClass('disabled')){
			lightEmpty();
				alert('no good')
			return false
			} else {
				// it's ok
				alert('ok')
				form.submit();
				
			}
		});
	});
});

})( jQuery );
*/