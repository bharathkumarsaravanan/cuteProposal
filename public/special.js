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

    // Create flying hearts
    createFlyingHearts();
    
    // Update countdown
    updateCountdown();

    // Initialize the for-cutie section
    initializeCutieLetter();

    // Initialize animations for the cutie letter
    animateCutieLetter();

    // Initialize animations for the admiration letter
    animateAdmirationLetter();
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

// Create flying hearts
function createFlyingHearts() {
    const container = document.querySelector('.flying-hearts-container');
    if (!container) return;
    
    const heartColors = ['❤️', '💕', '💖', '💗', '💓', '💘'];
    
    // Create 15 flying hearts
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'flying-heart';
        heart.textContent = heartColors[Math.floor(Math.random() * heartColors.length)];
        
        // Random starting position
        const startX = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = 7 + Math.random() * 7;
        
        heart.style.left = `${startX}%`;
        heart.style.animationDuration = `${duration}s`;
        heart.style.animationDelay = `${delay}s`;
        
        container.appendChild(heart);
    }
}

// Set the meeting date - April 3, 9:40 AM
const meetingDate = new Date(2024, 3, 3, 9, 40, 0, 0); // Note: Month is 0-indexed, so 3 = April

// Update the countdown function to use the meeting date
function updateCountdown() {
    const now = new Date();
    const difference = meetingDate - now;
    
    // If the meeting time has passed
    if (difference < 0) {
        document.getElementById('countdown').innerHTML = "We're together now! ❤️";
        return;
    }
    
    // Calculate time units
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    // Update the countdown display
    document.getElementById('countdown').innerHTML = 
        `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds until I see you!`;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to display countdown immediately

// Function to initialize the cute letter
function initializeCutieLetter() {
    const forCutieDiv = document.getElementById('for-cutie');
    
    // Create the letter content
    forCutieDiv.innerHTML = `
        <div class="cutie-letter-container">
            <div class="cutie-letter">
                <div class="cutie-letter-header">
                    <div class="cutie-letter-decoration left">💕</div>
                    <h2>Just One Day Apart...</h2>
                    <div class="cutie-letter-decoration right">💕</div>
                </div>
                
                <div class="cutie-envelope-flap"></div>
                
                <div class="cutie-letter-content">
                    <p class="cutie-greeting">To My Cutie,</p>
                    
                    <p class="cutie-paragraph">It's just been one day since I saw you… and I already <span class="highlight-word">miss you</span> like crazy. Yesterday felt like magic—being with you, seeing you smile, hearing your voice right next to me instead of through the phone… <span class="highlight-word">uff</span>, my heart is still floating somewhere around cloud 999. <span class="floating-emoji">☁️</span></p>
                    
                    <p class="cutie-paragraph">You looked so cute, I couldn't take my eyes off you. Honestly, if staring was a crime, I'd be doing life in jail by now. <span class="floating-emoji">👀</span> That smile, that little shy expression you gave me when I looked at you like a pagal—it's stuck in my head like my favorite song. And trust me, it's on repeat. <span class="floating-emoji">🎵</span></p>
                    
                    <p class="cutie-paragraph">I didn't even realize how much I needed that time with you until I had it. You being around makes everything better. Even the silence feels perfect when it's with you. And now today… feels so quiet again. Like something's missing. Like you. <span class="floating-emoji">💭</span></p>
                    
                    <p class="cutie-paragraph">Stop being this cute, cutie. You're out here living in my head rent-free, blushing up my thoughts, and making me miss you even more. <span class="floating-emoji">🥰</span></p>
                    
                    <p class="cutie-paragraph">One day apart and I'm already counting down to the next time I get to hold your hand again. <span class="floating-emoji">⏱️</span></p>
                    
                    <div class="cutie-signature">
                        <p>Forever yours, always your pagal,</p>
                        <p>The one who's hopelessly in love with your face, smile, and everything you are <span class="beating-heart-large">💖</span></p>
                    </div>
                </div>
                
                <div class="cutie-decorations">
                    <span class="cutie-deco c-deco-1">🌸</span>
                    <span class="cutie-deco c-deco-2">✨</span>
                    <span class="cutie-deco c-deco-3">💖</span>
                    <span class="cutie-deco c-deco-4">🦋</span>
                    <span class="cutie-deco c-deco-5">🌈</span>
                    <span class="cutie-deco c-deco-6">🌷</span>
                    <span class="cutie-deco c-deco-7">💝</span>
                </div>
            </div>
        </div>
    `;
    
    // Add animation to the letter
    animateCutieLetter();
}

// Function to animate elements in the cutie letter
function animateCutieLetter() {
    // Animate the floating emojis
    const floatingEmojis = document.querySelectorAll('.floating-emoji');
    floatingEmojis.forEach(emoji => {
        setInterval(() => {
            emoji.classList.add('float-up');
            setTimeout(() => {
                emoji.classList.remove('float-up');
            }, 1000);
        }, 3000 + Math.random() * 2000);
    });
    
    // Animate the highlighted words
    const highlightedWords = document.querySelectorAll('.highlight-word');
    highlightedWords.forEach(word => {
        setInterval(() => {
            word.classList.add('pulse-highlight');
            setTimeout(() => {
                word.classList.remove('pulse-highlight');
            }, 1000);
        }, 4000 + Math.random() * 3000);
    });
    
    // Add click interaction to the letter
    const cutieLetter = document.querySelector('.cutie-letter');
    cutieLetter.addEventListener('click', function(e) {
        createHeartBurst(e.clientX, e.clientY);
    });
}

// Function to create a burst of hearts when clicking on the letter
function createHeartBurst(x, y) {
    const container = document.querySelector('.love-container');
    const heartEmojis = ['❤️', '💕', '💖', '💘', '💓', '💗', '💝', '💞'];
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.className = 'heart-burst';
        heart.style.position = 'fixed';
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        heart.style.transition = 'all 1s ease-out';
        heart.style.opacity = '1';
        
        container.appendChild(heart);
        
        // Random direction explosion
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 150 + 50;
        const xDestination = x + Math.cos(angle) * distance;
        const yDestination = y + Math.sin(angle) * distance;
        
        setTimeout(() => {
            heart.style.transform = `translate(${xDestination - x}px, ${yDestination - y}px) rotate(${Math.random() * 360}deg)`;
            heart.style.opacity = '0';
        }, 10);
        
        // Remove heart after animation completes
        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
}

// Function to animate elements in the admiration letter
function animateAdmirationLetter() {
    // Animate the floating sparkles
    const floatingSparkles = document.querySelectorAll('.floating-sparkle');
    floatingSparkles.forEach(sparkle => {
        setInterval(() => {
            sparkle.classList.add('float-up');
            setTimeout(() => {
                sparkle.classList.remove('float-up');
            }, 1000);
        }, 3000 + Math.random() * 2000);
    });
    
    // Animate the sparkle words
    const sparkleWords = document.querySelectorAll('.sparkle-word');
    sparkleWords.forEach(word => {
        setInterval(() => {
            word.classList.add('pulse-highlight');
            setTimeout(() => {
                word.classList.remove('pulse-highlight');
            }, 1000);
        }, 4000 + Math.random() * 3000);
    });
    
    // Add click interaction to the letter
    const admirationLetter = document.querySelector('.admiration-letter');
    if (admirationLetter) {
        admirationLetter.addEventListener('click', function(e) {
            createSparkleExplosion(e.clientX, e.clientY);
        });
    }
    
    // Add hover effect to mood bubbles
    const moodBubbles = document.querySelectorAll('.mood-bubble');
    moodBubbles.forEach(bubble => {
        bubble.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.3)';
            this.style.zIndex = '10';
        });
        
        bubble.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.zIndex = '0';
        });
    });
}

// Function to create a burst of sparkles when clicking on the letter
function createSparkleExplosion(x, y) {
    const container = document.querySelector('.love-container');
    const sparkleEmojis = ['✨', '💫', '⭐', '🌟', '💖', '💕', '💓'];
    
    for (let i = 0; i < 15; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];
        sparkle.className = 'sparkle-burst';
        sparkle.style.position = 'fixed';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.fontSize = (Math.random() * 20 + 10) + 'px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1000';
        sparkle.style.transition = 'all 1s ease-out';
        sparkle.style.opacity = '1';
        
        container.appendChild(sparkle);
        
        // Random direction explosion
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 150 + 50;
        const xDestination = x + Math.cos(angle) * distance;
        const yDestination = y + Math.sin(angle) * distance;
        
        setTimeout(() => {
            sparkle.style.transform = `translate(${xDestination - x}px, ${yDestination - y}px) rotate(${Math.random() * 360}deg)`;
            sparkle.style.opacity = '0';
        }, 10);
        
        // Remove sparkle after animation completes
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
} 