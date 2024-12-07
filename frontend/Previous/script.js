const wrapper = document.querySelector('.wrapper');
const loginBtn = document.querySelector('.btnLogin-popup');
const signupLink = document.querySelector('.btnSignup-popup')
const closeBtn = document.querySelector('.icon-close');


loginBtn.addEventListener('click', () => {
    wrapper.style.display = 'block'; 
});


closeBtn.addEventListener('click', () => {
    wrapper.style.display = 'none'; 
});

signupLink.addEventListener('click', () => {
    wrapper.style.display = 'block';
    document.querySelector('.signup').style.display = 'block';
    document.querySelector('.login').style.display = 'none';
});


closeIcon.addEventListener('click', () => {
    wrapper.style.display = 'none';
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
document.querySelector('.nav-link[href="#reviews"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#reviews').scrollIntoView({
        behavior: 'smooth'
    });
});

function openLoginForm() {
    // Display the login form
    document.querySelector('.login-form').style.display = 'block';
}

function closeForm() {
    // Hide the login form
    document.querySelector('.login-form').style.display = 'none';
}


