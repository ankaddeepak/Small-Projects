/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When a nav__link is clicked, remove the show-menu class
    navMenu.classList.remove('show');
}

navLinks.forEach(link => link.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58; // Adjusting for the header if necessary
        const sectionId = current.getAttribute('id');
        const sectionLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionLink.classList.add('active-link');
        } else {
            sectionLink.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // Uncomment if you want to reset the animation every time the section enters the viewport
    // reset: true 
});




// Select the button and the mobile number div
const contactButton = document.getElementById('contactButton');
const mobileNumber = document.getElementById('mobileNumber');

// Add an event listener to the button to toggle visibility of the mobile number
contactButton.addEventListener('click', () => {
    if (mobileNumber.style.display === 'none') {
        mobileNumber.style.display = 'block'; // Show the mobile number
    } else {
        mobileNumber.style.display = 'none'; // Hide the mobile number
    }
});


sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 }); 
sr.reveal('.home__social-icon', { interval: 200 }); 
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });
