$(document).ready(function(){

	
	$("#opener-register").click(function(){
		var email = $("#register-email").val();
        var password = $("#register-password").val();
        var ref = new Firebase("https://incandescent-inferno-8183.firebaseio.com/?page=Auth");

        ref.createUser({
        	email: email,
        	password: password
        }, function(error,userData) {
        	if (error) {
        		console.log("Error creating user:", error);

        	} else {
        		console.log("Successfully created user account :", userData.uid);
        	}

        });


		
		return false;

	});




	$("#opener-login").click(function(){
		var email = $("#login-email").val();
        var password = $("#login-password").val();
        var ref = new Firebase("https://incandescent-inferno-8183.firebaseio.com/?page=Auth");

        ref.authWithPassword({
        	email: email,
        	password: password
        }, function(error,authData) {
        	if (error) {
        		console.log("Error login user:", error);

        	} else {
        		console.log("Successfully created user account :", authData);
        		window.location.href="http://www.google.com";
        	}

        });

        
		
		return false;

	});




});