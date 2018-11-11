
var formbutton = document.getElementById('formbutton');
		var spinner = document.getElementById('spinner');

		$('#phone').mask('+7 (999) 999-99-99');

		$('#contactform').on('submit', function(event){

			event.preventDefault();

			formbutton.style.display = "none";
			spinner.style.display = "block";

			$.ajax({
				url: 'sendmail.php',
				type: 'post',
				data: $(this).serialize(),
				success: function(){
					formbutton.style.display = "block";
					spinner.style.display = "none";
				}
			});
		});
