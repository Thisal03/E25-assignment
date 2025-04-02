
document.addEventListener('DOMContentLoaded', () => {
    const logos = document.querySelectorAll('.logo-item');
    
    // Random floating animation to each logo
    logos.forEach(logo => {
        const duration = 3 + Math.random() * 3;
        const delay = Math.random() * 2;
        logo.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
    });

    // Add Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const section = entry.target;
            
            // Handle section2 animations
            if (section.tagName.toLowerCase() === 'section2') {
                const tablet = section.querySelector('.tablet');
                const phone = section.querySelector('.phone');
                
                if (entry.isIntersecting) {
                    if (tablet) setTimeout(() => tablet.classList.add('animate'), 200);
                    if (phone) setTimeout(() => phone.classList.add('animate'), 600);
                } else {
                    if (tablet) tablet.classList.remove('animate');
                    if (phone) phone.classList.remove('animate');
                }
            }
            
            // Handle section3 animations
            if (section.tagName.toLowerCase() === 'section3') {
                const reviewCard = section.querySelector('.review-card');
                const reviewText = section.querySelector('.review-text');
                
                if (entry.isIntersecting) {
                    if (reviewCard) setTimeout(() => reviewCard.classList.add('animate'), 200);
                    if (reviewText) setTimeout(() => reviewText.classList.add('animate'), 600);
                } else {
                    if (reviewCard) reviewCard.classList.remove('animate');
                    if (reviewText) reviewText.classList.remove('animate');
                }
            }

            // Handle section4 animations
            if (section.tagName.toLowerCase() === 'section4') {
                const journeyContent = section.querySelector('.journey-content');
                const grid1 = section.querySelector('.section4-grid1');
                const grid2 = section.querySelector('.section4-grid2');
                
                if (entry.isIntersecting) {
                    if (journeyContent) setTimeout(() => journeyContent.classList.add('animate'), 200);
                    if (grid1) setTimeout(() => grid1.classList.add('animate'), 400);
                    if (grid2) setTimeout(() => grid2.classList.add('animate'), 600);
                } else {
                    if (journeyContent) journeyContent.classList.remove('animate');
                    if (grid1) grid1.classList.remove('animate');
                    if (grid2) grid2.classList.remove('animate');
                }
            }
        });
    }, observerOptions);

    // Observe sections
    const sections = document.querySelectorAll('section2, section3, section4');
    sections.forEach(section => observer.observe(section));
});

// Adding floating animation keyframes to the document
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