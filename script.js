// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-In Animation on Scroll
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 });

fadeElements.forEach(el => observer.observe(el));

// Interactive Button Effect
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.05)';
        button.style.transition = 'transform 0.2s ease';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

// Dark Mode Toggle (Optional Feature)
const darkModeToggle = document.createElement('button');
darkModeToggle.innerText = "Toggle Dark Mode";
darkModeToggle.classList.add('dark-mode-toggle');
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Dark Mode Styles (Optional, Add in CSS)
const darkModeStyles = document.createElement('style');
darkModeStyles.innerHTML = `
    .dark-mode {
        background-color: #222;
        color: #ddd;
    }
    .dark-mode nav {
        background-color: #333;
    }
`;
document.head.appendChild(darkModeStyles);
