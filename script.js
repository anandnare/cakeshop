// --- Navigation Drawer Mobile Toggle ---
const menuBtn = document.getElementById('menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuBtn.querySelector('i').classList.toggle('fa-bars');
    menuBtn.querySelector('i').classList.toggle('fa-xmark');
});

// Close mobile menu when links are clicked
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuBtn.querySelector('i').classList.add('fa-bars');
        menuBtn.querySelector('i').classList.remove('fa-xmark');
    });
});

// --- Dark/Light Mode Theme Toggle ---
const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// --- Dynamic Filter for Menu Items ---
const filterButtons = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Change active button style
        document.querySelector('.filter-btn.active').classList.remove('active');
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        menuItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                setTimeout(() => { item.style.opacity = '1'; }, 10);
            } else {
                item.style.opacity = '0';
                setTimeout(() => { item.style.display = 'none'; }, 200);
            }
        });
    });
});

// --- FAQ Accordion Mechanism ---
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        
        // Close all instances before opening selected one
        faqItems.forEach(i => i.classList.remove('active'));
        
        if (!isOpen) {
            item.classList.add('active');
        }
    });
});

// --- Custom Inquiry Form Submission Handler ---
const orderForm = document.getElementById('orderForm');

orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const clientName = document.getElementById('name').value;
    const clientOption = document.getElementById('order-type').value;

    // Direct user alert acknowledging design & response simulation
    alert(`Thank you, ${clientName}! Your inquiry for a "${clientOption}" has been simulation-sent. Timu Baristas will get back to you shortly!`);
    
    orderForm.reset();
});
