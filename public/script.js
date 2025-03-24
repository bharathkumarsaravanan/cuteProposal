// Wait for the document to load
document.addEventListener('DOMContentLoaded', function() {
    // Add a subtle entrance animation
    const letter = document.querySelector('.letter');
    letter.style.opacity = 0;
    
    setTimeout(() => {
        letter.style.transition = 'opacity 1.5s ease-in-out';
        letter.style.opacity = 1;
    }, 500);
    
    // You can add more interactive elements here if desired
}); 