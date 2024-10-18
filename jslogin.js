document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');


    if (username === '' || password === '') {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
    } else {
        errorMessage.textContent = '';

        alert('Login realizado com sucesso!');
    }
});

window.location.href = 'texto.html';