// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the Email Me and Message buttons from the "actions" group
    // Assuming the first button is Email and the second is Message, and both have .btn class

    const actions = document.querySelector('.actions');
    if (actions) {
        const buttons = actions.querySelectorAll('.btn');
        // "Email Me" button
        const emailBtn = buttons[0];
        if (emailBtn) {
            emailBtn.addEventListener('click', function (e) {
                e.preventDefault();
                window.location.href = 'mailto:samueljacob637@gmail.com';
            });
        }
        // "Message" button
        const messageBtn = buttons[1];
        const contactForm = document.querySelector('.form');
        if (messageBtn && contactForm) {
            messageBtn.addEventListener('click', function (e) {
                e.preventDefault();
                contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
                const firstInput = contactForm.querySelector('input, textarea');
                if (firstInput) {
                    firstInput.focus();
                }
            });
        }
    }
});
