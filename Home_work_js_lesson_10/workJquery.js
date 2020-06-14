$(document).ready(
		function() {
			$('#userAge').blur(
					function() {
						if ((isNaN(this.value)) || (this.value > 100)
								|| (this.value < 1)) {
							this.classList.add('error');
							this.value = 'error';
							userAge.focus();
						} else {
							this.classList.remove('error');
						}
					})

			$('#ajaxPost').bind('click', function() {
				$.ajax({
					type : "POST",
					data : JSON.stringify({
						userSurname : $('#userSurname').val(),
						userName : $('#userName').val(),
						userAge : $('#userAge').val(),
						userAddress : $('#userAddress').val()
					}),
					contentType : "application/json",
					url : "http://localhost:3000/userPost",
					success : function(data) {
						console.log('success');
						console.log(JSON.stringify(data));
					}
				});
			});

			$('#ajaxGet').bind(
					'click',
					function() {
						$.ajax({
							type : "GET",
							contentType : "application/json",
							url : "http://localhost:3000/userGet?userSurname="
									+ $('#userSurname').val() + "&userName="
									+ $('#userName').val() + "&userAge="
									+ $('#userAge').val() + "&userAddress="
									+ $('#userAddress').val(),
							success : function(data) {
								console.log('success');
								console.log(JSON.stringify(data));
							}
						});
					})
		});