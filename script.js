document.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.getElementById('sign-up-button');
    const signInButton = document.getElementById('sign-in-button');

    signUpButton?.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'sign-in.html';
    });

    signInButton?.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'mainpage.html';
    });
});