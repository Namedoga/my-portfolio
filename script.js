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



