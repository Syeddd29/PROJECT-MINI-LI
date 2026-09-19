// DOM Elements
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Check saved theme from localStorage or default to dark
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

// Toggle Theme Event Listener
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    let theme = 'dark';
    if (document.body.classList.contains('light-mode')) {
        theme = 'light';
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }

    // Save selection to localStorage
    localStorage.setItem('theme', theme);
});

// Certificate Modal / Popup Controller
const modal = document.getElementById('cert-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const closeModalBtn = document.querySelector('.cert-modal-close');
const openModalBtns = document.querySelectorAll('.open-cert-btn');

// Open Modal on Button Click
openModalBtns.forEach(button => {
    button.addEventListener('click', () => {
        const certSrc = button.getAttribute('data-cert');
        const certTitle = button.getAttribute('data-title');

        modalImg.src = certSrc;
        modalTitle.textContent = certTitle;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Disable scroll behind modal
    });
});

// Close Modal Function
const closeModal = () => {
    modal.style.display = 'none';
    modalImg.src = '';
    document.body.style.overflow = 'auto'; // Re-enable scroll
};

// Event Listeners for Closing
closeModalBtn.addEventListener('click', closeModal);

// Close when clicking outside the modal content box
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close when pressing the 'Escape' key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        closeModal();
    }
});

// Active Link Highlight on Click
const navBtns = document.querySelectorAll('.nav-btn');

navBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove 'active' class from all navigation buttons
        navBtns.forEach(nav => nav.classList.remove('active'));
        
        // Add 'active' class to the clicked button
        this.classList.add('active');
    });
});

// Mobile Hamburger Menu & Slide Down Logic
const menuBtn = document.getElementById('mobile-menu-btn');
const navGroup = document.getElementById('nav-menu-group');
const navLinks = document.querySelectorAll('.nav-btn');

// Toggle menu on click
menuBtn.addEventListener('click', () => {
    navGroup.classList.toggle('active');
    
    // Change icon from 'bars' to 'X' when open
    if (navGroup.classList.contains('active')) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

// Close the menu automatically if the user clicks any of the links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navGroup.classList.contains('active')) {
            navGroup.classList.remove('active');
            menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    });
});
