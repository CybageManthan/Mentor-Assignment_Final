(function(global){ 

var formObject = {}; /*Create an object which will only will be public.*/


function validateData() {

	var username;
	var email;
	var Password;
	var C_password;
	var lastname;
	var firstname;
	var location;
	var about;
	var acc_level;
	

	/* document.querySelctor("submit_form").addEventListner("click",function() { }); */

									/* 	OR 	*/

    jQuery("#submit_form").click(function() {
	
		/*-- Fetching the values */
		username = jQuery("#Username").val();
		email = jQuery("#Email").val();
		Password = jQuery("#Password").val();
		C_password = jQuery("#Confirm").val();
		firstname = jQuery("#FirstName").val();
		empid = jQuery("#EmployeeID").val();
		lastname =jQuery("#LastName").val();
        location = jQuery("#Location").val();
        about = jQuery("#About").val();
        acc_level = jQuery('input[name="a_level"]:checked').val();

		
		if(Perform_validation()) {

				/* If all inputs validates submit the form ---- */
				var html = "<p><span>UserName: "+username+"</span></p>"+
						"<p><span>EmailID: "+email+"</span></p>"+
						"<p><span>Password: "+Password+"</span></p>"+
						"<p><span>Access Level: "+acc_level+"</span></p>"+
						"<p><span>EmployeeID: "+empid+"</span></p>"+
						"<p><span>FirstName: "+firstname+"</span></p>"+
						"<p><span>LastName: "+lastname+"</span></p>"+
						"<p><span>Location: "+location+"</span></p>"+
						"<p><span>About: "+about+"</span></p>"+
						"<button id='exit'>Close" ;

	                    /* displaying dialog */
					    var dialog = document.getElementById('Form_output'); 
					    jQuery("#Form_output").html(html);
	                    jQuery("#Form_output").attr("style"," ");
	                    jQuery("#Form_output").css("visibility","visible");
					    document.getElementById('exit').onclick = function() {   
	                    jQuery("#Form_output").css("visibility","hidden");
					    
				    }; 

				//jQuery(".user_form").submit();
		}
		else
		{
			
           
		}

		/*-- Function to perform validation --*/

		function Perform_validation() {
		
		var IsUserNameValid = validate_username(username);
		var IsEmailValid = validate_email(email);
		var IsPasswordValid = validate_password(Password,C_password);
		var IsPassCnPassSame = false;
		var IsFirstNameValid = validate_firstname(firstname);
		var IsEmployeeidValid = validate_employeeid(empid);
		
        
        if(IsPasswordValid.first && IsPasswordValid.second ) {

			if(Password === C_password) {

				IsPassCnPassSame = true; // if both password matches then procceed

				jQuery("#confirm_message").css("visibility","hidden");
			} else {

				jQuery("#confirm_message").css("visibility","visible");
			}
		}


		return IsUserNameValid && IsEmailValid && IsPassCnPassSame && IsEmployeeidValid && IsFirstNameValid;

		}

		/* function to validate username */

		function validate_username(username) {

			
			if(username === undefined || username === "") {

			 jQuery("#Username").addClass("red_alert");
			 jQuery("#Username").attr("placeholder","Username can not be empty").val("");
			
			 return false;
			}
			else {

				var Re_username = /^[a-zA-Z0-9_-]{6,10}$/;
				
				if(Re_username.test(username)) {

					return true;
				} else {

					jQuery("#Username").addClass("red_alert");
			 		jQuery("#Username").attr("placeholder","Allowed: a-z,A-Z,0-9, (_-) & len(6,10)").val("");
					return false;}

				}
				
			}

			/* Function to validate email id */
			function validate_email(email) {

				if(email === undefined || email === "") {

				jQuery("#Email").addClass("red_alert");
			    jQuery("#Email").attr("placeholder","Email can not be empty").val("");
			    return false;

			} else {

				var Re_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([\w]{2,6}(?:\.[\w]{2})?)$/i;

				if(Re_email.test(email)) {

					return true;
				} else {

					jQuery("#Email").addClass("red_alert");
			    	jQuery("#Email").attr("placeholder","Invalid Email Address").val("");
			    	return false;
				}
			}
		}
		
		/* function to validate password */

		function validate_password(Password,C_password) {

			var b_array = {};

			if(Password === undefined || Password === "") {

				jQuery("#Password").addClass("red_alert");
			    jQuery("#Password").attr("placeholder","Password can not be empty").val("");
			    b_array.first = false;

			} else {

				var Re_password = /^[A-Za-z0-9!@#$%^&*()_]{8,20}$/;

				if(Re_password.test(Password)) {

					b_array.first = true;
				} else {

					jQuery("#Password").addClass("red_alert");
			    	jQuery("#Password").attr("placeholder","Allowed: a-z,A-Z ,0-9, (!@#$%^&*()) ").val("");
			    	b_array.first = false;
				}

		}

		if(C_password === undefined || C_password === "") {

				jQuery("#Confirm").addClass("red_alert");
			    jQuery("#Confirm").attr("placeholder","Password can not be empty").val("");
			    b_array.second = false;

			} else {

				
				var Re_password1 = /^[A-Za-z0-9!@#$%^&*()_]{8,20}$/;

				if(Re_password1.test(C_password)) {

					b_array.second = true;
				} else {

					jQuery("#Confirm").addClass("red_alert");
			    	jQuery("#Confirm").attr("placeholder","Allowed: a-z,A-Z,0-9, (!@#$%^&*())").val("");
			    	b_array.second = false;
				}

		}

		
		return b_array;

	}


	/* Verifying FirstName and Employee id */

		function validate_firstname(firstname) {

			if(firstname === undefined || firstname === "") {
				
				return true;
				} else {

				var Re_firstname = /^[A-Za-z]{3,8}$/;

				if(Re_firstname.test(firstname)) { return true; } else {
                
                jQuery("#FirstName").addClass("red_alert");    
				jQuery("#FirstName").attr("placeholder","FirstName should be >3 & <8").val("");
				return false;
				}
			}
		}


		function validate_employeeid(empid) {

			if(empid === undefined || empid === "") {

				jQuery("#EmployeeID").addClass("red_alert");
			    jQuery("#EmployeeID").attr("placeholder","EmployeeID can not be empty").val("");

			} else {

				var Re_empid = /^[0-9]{5}$/;

				if(Re_empid.test(empid)) { 

					return true;
				
				} else {

					jQuery("#EmployeeID").addClass("red_alert");
			    	jQuery("#EmployeeID").attr("placeholder","Allowed: 0-9 & len=5").val("");
			    	return false;
				}

		}

		}
        
      
/*----------------------------- End of submit event --------------------- */

	});

	var file_profile = document.getElementById("file-upload");
	file_profile.onchange = function() {
	    document.getElementById('file-picture').value = file_profile.value.replace("C:\\fakepath\\","");
	};

     var file_greeting = document.getElementById("file-upload_greet");
	file_greeting.onchange = function() {
	    document.getElementById('file-greetings').value = file_greeting.value.replace("C:\\fakepath\\","");
	}; 
	
    
    /*--- Reset the Form Values -------------------------------------------------- */
    
    jQuery("#reset_form").click(function() { 
    
        jQuery("#Username").val("");
        jQuery("#Username").removeClass("red_alert");
        jQuery("#Username").attr("placeholder","Username");
        jQuery("#Email").val("");
        jQuery("#Email").removeClass("red_alert");
        jQuery("#Email").attr("placeholder","Email");
        jQuery("#Password").val("");
        jQuery("#Password").removeClass("red_alert");
        jQuery("#Password").attr("placeholder","Password");
        jQuery("#Confirm").val("");
        jQuery("#Confirm").removeClass("red_alert");
        jQuery("#Confirm").attr("placeholder","Confirm Password");
        jQuery("#FirstName").val("");
        jQuery("#FirstName").removeClass("red_alert");  
        jQuery("#FirstName").attr("placeholder","FirstName");
        jQuery("#LastName").val("");
        jQuery("#LastName").attr("placeholder","LastName");
        jQuery("#EmployeeID").val("");
        jQuery("#EmployeeID").removeClass("red_alert");
        jQuery("#EmployeeID").attr("placeholder","EmployeeID");
        jQuery("#Location").val("");
        jQuery("#Location").attr("placeholder","Location");
        jQuery("#About").val("");
        jQuery("#About").attr("placeholder","About");
        jQuery('input[name="a_level"]').prop('checked', false);
        jQuery("#confirm_message").css("visibility","hidden");
        jQuery("#file-picture").val("");
        jQuery("#file-greetings").val("");
    
    });
    
    /* -------------- End of Reset Form button function ------------------*/

};


function validateForm() {

	/* Doing everything after Document is ready() i.e Everything is loaded */

	jQuery(document).ready(validateData);

};
    
formObject.validateFormData = validateForm; /*Attaching a property to the formObject*/

global.$formObject = formObject; /*exposing the object*/

})(window);


/*Calling the function to perform validation of the form data. */
$formObject.validateFormData();
