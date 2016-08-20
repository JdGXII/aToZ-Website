		$(document).ready(function () {
			$("input#submit").click(function(){
				$.ajax({
					type: "POST",
					url: "process.php", // 
					data: $('form.contact').serialize(),
					success: function(){
						alert("Message Sent");
					},
					error: function(){
						alert("Message could not be sent");
					}
				});
			});
		});