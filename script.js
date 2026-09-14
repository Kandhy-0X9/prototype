const signUpButton = document.getElementById('sign-up-button');
signUpButton.addEventListener('click', () => {
    console.log('Sign-up button was clicked.');
    window.location.href = 'sign-in.html';
});

const signInButton = document.getElementById('sign-in-button');
signInButton.addEventListener('click', () => {
    console.log('Sign-in button was clicked.');
    window.location.href = 'mainpage.html';
});
