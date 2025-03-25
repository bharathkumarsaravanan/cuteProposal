document.addEventListener('DOMContentLoaded', function() {
    // Page transition effect
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = 1;
    }, 100);
    
    // Navigation transitions
    const links = document.querySelectorAll('.nav-button');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            document.body.style.opacity = 0;
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });
    
    // Create floating hearts
    createFloatingHearts();
    
    // 3D tilt effect on letter card
    const card = document.querySelector('.letter-card');
    document.addEventListener('mousemove', function(e) {
        if (window.innerWidth > 768) { // Only on desktop
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            card.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        }
    });
    
    // Reset transform when mouse leaves
    document.addEventListener('mouseleave', function() {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    const heartColors = ['#ff69b4', '#ff1493', '#ffb6c1', '#ffc0cb'];
    
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.className = 'floating-heart';
        heart.style.position = 'absolute';
        heart.style.fontSize = `${Math.random() * 20 + 10}px`;
        heart.style.color = heartColors[Math.floor(Math.random() * heartColors.length)];
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.opacity = Math.random() * 0.7 + 0.3;
        heart.style.animation = `float ${Math.random() * 6 + 4}s ease-in-out infinite`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        heart.style.zIndex = '-1';
        heart.style.pointerEvents = 'none';
        
        container.appendChild(heart);
    }
} 