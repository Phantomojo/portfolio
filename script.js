// Terminal Portfolio JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Typing animation for header
    const headerText = document.getElementById('header-text');
    const texts = [
        "Hi, I'm Michael Irungu Muriithi (PhantoMojo)",
        "Software Developer | Cybersecurity Pro | AI Tools Specialist",
        "Remote-Ready | Creative Technologist | Evolving Architect of Meaning"
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeWriter() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            headerText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            headerText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000; // Wait at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500; // Wait before next text
        }
        
        setTimeout(typeWriter, typeSpeed);
    }
    
    // Start typing animation
    setTimeout(typeWriter, 1000);
    
    // Navigation functionality
    const navItems = document.querySelectorAll('.nav-item');
    const contentSections = document.querySelectorAll('.content-section');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            
            // Remove active class from all nav items and sections
            navItems.forEach(nav => nav.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked nav item and target section
            this.classList.add('active');
            document.getElementById(targetSection).classList.add('active');
            
            // Add terminal effect to section transition
            const targetElement = document.getElementById(targetSection);
            targetElement.style.opacity = '0';
            targetElement.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                targetElement.style.transition = 'all 0.5s ease';
                targetElement.style.opacity = '1';
                targetElement.style.transform = 'translateY(0)';
            }, 100);
        });
    });
    
    // Terminal window effects
    const terminalWindows = document.querySelectorAll('.terminal-window');
    
    terminalWindows.forEach(window => {
        // Add hover effect
        window.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 30px rgba(0, 255, 0, 0.5)';
        });
        
        window.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 0 20px rgba(0, 255, 0, 0.3)';
        });
        
        // Add click effect for terminal buttons
        const buttons = window.querySelectorAll('.terminal-buttons span');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                this.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 100);
            });
        });
    });
    
    // Project card animations
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Skill tag animations
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Contact item animations
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add typing sound effect (optional)
    function addTypingSound() {
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
        audio.volume = 0.1;
        audio.play().catch(() => {}); // Ignore errors if audio fails
    }
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        const activeNav = document.querySelector('.nav-item.active');
        const currentIndex = Array.from(navItems).indexOf(activeNav);
        
        switch(e.key) {
            case 'ArrowRight':
            case 'ArrowDown':
                e.preventDefault();
                const nextIndex = (currentIndex + 1) % navItems.length;
                navItems[nextIndex].click();
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
                e.preventDefault();
                const prevIndex = currentIndex === 0 ? navItems.length - 1 : currentIndex - 1;
                navItems[prevIndex].click();
                break;
            case '1':
                navItems[0].click();
                break;
            case '2':
                navItems[1].click();
                break;
            case '3':
                navItems[2].click();
                break;
            case '4':
                navItems[3].click();
                break;
        }
    });
    
    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all terminal windows for scroll animations
    terminalWindows.forEach(window => {
        window.style.opacity = '0';
        window.style.transform = 'translateY(30px)';
        window.style.transition = 'all 0.6s ease';
        observer.observe(window);
    });
    
    // Add terminal cursor blink effect
    function addCursorBlink() {
        const cursor = document.createElement('span');
        cursor.textContent = '|';
        cursor.style.animation = 'blink 1s infinite';
        cursor.style.color = '#00ff00';
        
        // Add cursor to command lines
        const commandLines = document.querySelectorAll('.command-line');
        commandLines.forEach(line => {
            const command = line.querySelector('.command');
            if (command) {
                command.appendChild(cursor.cloneNode(true));
            }
        });
    }
    
    // Initialize cursor effect
    setTimeout(addCursorBlink, 2000);
    
    // Add loading animation
    function showLoadingAnimation() {
        const loadingText = document.createElement('div');
        loadingText.textContent = 'Initializing system...';
        loadingText.style.textAlign = 'center';
        loadingText.style.color = '#00ff00';
        loadingText.style.fontSize = '14px';
        loadingText.style.marginTop = '20px';
        
        document.body.appendChild(loadingText);
        
        setTimeout(() => {
            loadingText.remove();
        }, 2000);
    }
    
    // Show loading animation on page load
    showLoadingAnimation();
    
    // Add terminal window drag effect (optional)
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;
    
    function dragStart(e) {
        if (e.type === "touchstart") {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
        } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }
        
        if (e.target === e.currentTarget) {
            isDragging = true;
        }
    }
    
    function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;
        isDragging = false;
    }
    
    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            
            if (e.type === "touchmove") {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }
            
            xOffset = currentX;
            yOffset = currentY;
            
            setTranslate(currentX, currentY, e.currentTarget);
        }
    }
    
    function setTranslate(xPos, yPos, el) {
        el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    }
    
    // Add drag functionality to terminal headers
    const terminalHeaders = document.querySelectorAll('.terminal-header');
    terminalHeaders.forEach(header => {
        header.addEventListener("touchstart", dragStart, false);
        header.addEventListener("touchend", dragEnd, false);
        header.addEventListener("touchmove", drag, false);
        header.addEventListener("mousedown", dragStart, false);
        header.addEventListener("mouseup", dragEnd, false);
        header.addEventListener("mouseleave", dragEnd, false);
        header.addEventListener("mousemove", drag, false);
    });
    
    // Add terminal window focus effect
    terminalWindows.forEach(window => {
        window.addEventListener('click', function() {
            // Remove focus from all windows
            terminalWindows.forEach(w => w.style.borderColor = '#00ff00');
            // Add focus to clicked window
            this.style.borderColor = '#ffff00';
        });
    });
    
    // Add command line typing effect
    function simulateTyping() {
        const commands = document.querySelectorAll('.command');
        commands.forEach(command => {
            const originalText = command.textContent;
            command.textContent = '';
            
            let i = 0;
            const typeInterval = setInterval(() => {
                if (i < originalText.length) {
                    command.textContent += originalText.charAt(i);
                    i++;
                } else {
                    clearInterval(typeInterval);
                }
            }, 50);
        });
    }
    
    // Simulate typing effect on page load
    setTimeout(simulateTyping, 3000);
});
