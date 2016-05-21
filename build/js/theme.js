		/* ------------------------------------------------------------------------ */
		/* Count Down Timer
		/* ------------------------------------------------------------------------ */
		$('.countdown-container').countDown({
			targetDate: {
				'day': 		9,
				'month': 	11,
				'year': 	2015,
				'hour': 	12,
				'min': 		30,
				'sec': 		0
			},
			omitWeeks: true
		});


		/* ------------------------------------------------------------------------ */
		/* AJAX SUBSCRIBE UPDATED
		/* ------------------------------------------------------------------------ */
		var formRegister;
		jQuery(function() {

			// Get the form.
			var form = jQuery('#subscribe_form');

			// Get the messages div.
			formRegister = jQuery('#form-subscriber');

			// Set up an event listener for the contact form.
			form.submit(function(e) {
				// Stop the browser from submitting the form.
				e.preventDefault();

				// Serialize the form data.
				var formData = form.serialize();

				// Submit the form using AJAX.
				jQuery.ajax({
					type: 'POST',
					url: form.attr('action'),
					data: formData
				})
				.done(function(response) {
					// Make sure that the formRegister div has the 'success' class.
					formRegister.removeClass('error');
					formRegister.addClass('success');

					// Set the message text.
					formRegister.text(response);

					form[0].reset();
					// remove the message.
					setTimeout(function() { formRegister.empty().removeClass('success'); },5000);


				})
				.fail(function(data) {
					// Make sure that the formRegister div has the 'error' class.
					formRegister.removeClass('success');
					formRegister.addClass('error');

					// Set the message text.
					if (data.responseText !== '') {
						formRegister.text(data.responseText);

					} else {
						formRegister.text('Oops! An error occured and your message could not be sent.');
					}
				});

			});

		});


		/* ------------------------------------------------------------------------ */
		/* PageLoader
		/* ------------------------------------------------------------------------ */
        // Wait for window load
		$(window).load(function() {
		    // Animate loader off screen
		    $(".page-loader").fadeOut("slow");
		});


		/* ------------------------------------------------------------------------ */
		/* Wow
		/* ------------------------------------------------------------------------ */
		new WOW().init();
