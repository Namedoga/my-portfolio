const buttons = document.querySelectorAll('.show-details');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const details = this.nextElementSibling;  
        const isVisible = details.style.display === 'block';

  if (isVisible) {
    details.style.display = 'none';
    this.textContent = 'Show Details'; 
} else {
    details.style.display = 'block';
    this.textContent = 'Hide Details';  
}
});
}); 



// form valadtion 

//Form elemets 
function validateForm() {
   
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message").value;
   
    // name 
    const nameValidate= /^[a-zA-Z\s]+$/;
    if (!nameValidate.test(name)) {
        alert("Enter a valid name");
        return false;
    }

   // Email
    const emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValidate.test(email)) {
        alert("Enter a valid email address.");
        return false;
    }

    // password
    if (password.length < 8) {
        alert(" You need atleast 8 characters.");
        return false;
    }

    if (message.trim() === "") {
        alert("Please enter a message.");
        return false;
    }

    return true;
}




// Dark mode


    const darkModeToggleButton = document.getElementById('dark-mode-toggle');
    darkModeToggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
