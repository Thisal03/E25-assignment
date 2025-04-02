document.addEventListener('DOMContentLoaded', () => {
    const logos = document.querySelectorAll('.logo-item');
    
    // Add random floating animation to each logo
    logos.forEach(logo => {
        // Generate random duration between 3-6 seconds
        const duration = 3 + Math.random() * 3;
        // Generate random delay
        const delay = Math.random() * 2;
        
        // Apply animation
        logo.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
    });
});

// Add floating animation keyframes to the document
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0px);
        }
    }
`;
document.head.appendChild(style); 