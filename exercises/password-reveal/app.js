// 🤖: create 2 constants with references to the password input and the reveal button from the DOM


// 🤖: Create an Event Listener on the password reveal button
// 🤖: The event listener should toggle the password field attribute between `password` and `text` to change the visibility of the password field content.


// Provided for you - prevent form submit
debugger;
const form = document.querySelector("form");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
form.addEventListener('submit',function(e){
	e.preventDefault();
});
togglePassword.addEventListener('click', function(e) {
	if(password.getAttribute("type") == "password") {
		password.setAttribute("type","text");
	} else {
		password.setAttribute("type","password");
	}
	//password
});