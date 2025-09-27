document.addEventListener("DOMContentLoaded", () => {
    // --- Typed.js Animation for Hero Section ---
    if (document.querySelector("#typing-effect")) {
        new Typed('#typing-effect', {
            strings: ['Web Developer.', 'Java Programmer.'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1500,
            loop: true,
        });
    }

    // --- Active Navigation Link Highlighting ---
    const navLinks = document.querySelectorAll(".navbar-links a");
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });

    // --- Mobile Navigation (Hamburger Menu) ---
    const hamburger = document.querySelector(".hamburger-menu");
    const mobileNav = document.querySelector(".navbar-links");

    hamburger.addEventListener("click", () => {
        mobileNav.classList.toggle("active");
        const icon = hamburger.querySelector("i");
        if (icon.classList.contains("fa-bars")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });
    
    // --- Contact Form Submission ---
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const successMessage = document.createElement('p');
            successMessage.textContent = "Thanks! Your message has been received.";
            successMessage.style.color = 'green';
            successMessage.style.marginTop = '1rem';
            
            contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
            contactForm.reset();
            
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        });
    }
});
