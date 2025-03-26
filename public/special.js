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

    // Add a special effect for the good morning card
    const sunIcon = document.querySelector('.sun-icon');
    const goodMorningCard = document.querySelector('.good-morning-card');

    // Add a subtle glow effect that changes intensity
    let glowIntensity = 0;
    let increasing = true;

    setInterval(() => {
        if (increasing) {
            glowIntensity += 0.5;
            if (glowIntensity >= 20) increasing = false;
        } else {
            glowIntensity -= 0.5;
            if (glowIntensity <= 5) increasing = true;
        }
        
        goodMorningCard.style.boxShadow = `0 10px 25px rgba(255, 182, 193, 0.4), 0 0 ${glowIntensity}px rgba(255, 107, 107, 0.6)`;
    }, 100);

    // Make the good morning card appear with a special animation
    setTimeout(() => {
        const goodMorningContainer = document.querySelector('.good-morning-container');
        goodMorningContainer.classList.add('animate__animated', 'animate__bounceInDown');
    }, 500);

    // Create animated particles when clicking on the good morning card
    goodMorningCard.addEventListener('click', function(e) {
        createParticles(e.clientX, e.clientY);
    });

    // Add a gentle hover effect to the good morning card
    goodMorningCard.addEventListener('mousemove', function(e) {
        if (window.innerWidth > 768) { // Only on desktop
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (x - centerX) / 30;
            const angleY = (y - centerY) / 30;
            
            this.style.transform = `perspective(1000px) rotateX(${-angleY}deg) rotateY(${angleX}deg)`;
        }
    });

    goodMorningCard.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        this.style.transition = 'transform 0.5s ease';
    });

    // Add a subtle pulse effect to the emojis
    const emojis = document.querySelectorAll('.emoji-decoration');
    emojis.forEach(emoji => {
        setInterval(() => {
            emoji.style.transform = 'scale(1.2)';
            setTimeout(() => {
                emoji.style.transform = 'scale(1)';
            }, 300);
        }, 3000 + Math.random() * 2000);
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

function createParticles(x, y) {
    const container = document.querySelector('.love-container');
    const emojis = ['❤️', '💕', '💖', '💘', '💓', '💗', '💝'];
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        particle.className = 'particle';
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.fontSize = (Math.random() * 20 + 10) + 'px';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1000';
        particle.style.transition = 'all 1s ease-out';
        particle.style.opacity = '1';
        
        container.appendChild(particle);
        
        // Random direction explosion
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 100 + 50;
        const xDestination = x + Math.cos(angle) * distance;
        const yDestination = y + Math.sin(angle) * distance;
        
        setTimeout(() => {
            particle.style.transform = `translate(${xDestination - x}px, ${yDestination - y}px) rotate(${Math.random() * 360}deg)`;
            particle.style.opacity = '0';
        }, 10);
        
        // Remove particle after animation completes
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
} 