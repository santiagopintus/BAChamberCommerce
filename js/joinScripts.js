document.addEventListener('DOMContentLoaded', () => { 
    listenForm();
});

function listenForm() {
    const form = document.querySelector('#joinForm');

    form.addEventListener('submit', (e) => { 
        e.preventDefault();
        
        window.location.href = '../pages/thank-you.html';
    });
}