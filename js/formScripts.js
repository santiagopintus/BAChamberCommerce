document.addEventListener('DOMContentLoaded', () => { 
    listenForm();
});

function listenForm() {
    const form = document.querySelector('#contactForm');

    form.addEventListener('submit', (e) => { 
        e.preventDefault();
        
        window.location.href = '../pages/thank-you.html';
    });
}