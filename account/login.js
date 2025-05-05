// Predetermined accounts
const accounts = [
    {
        email: 'jude@gmail.com',
        password: 'jude123',
        name: 'Jude Christian'
    },
    {
        email: 'francis@gmail.com',
        password: 'francis123',
        name: 'Francis'
    },
    {
        email: 'cecile@gmail.com',
        password: 'cecile123',
        name: 'Cecile'
    }
];

// Get the login form
const loginForm = document.querySelector('.login-form');

// Add submit event listener to the form
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get the input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Check if the credentials match any account
    const user = accounts.find(account => 
        account.email === email && account.password === password
    );
    
    if (user) {
        // Store user info in localStorage
        localStorage.setItem('currentUser', JSON.stringify({
            name: user.name,
            email: user.email
        }));
        
        // Redirect to home page
        window.location.href = '../index.html';
    } else {
        // Show error message by adding a new error div if it doesn't exist
        let errorDiv = document.querySelector('.error-message');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.style.color = '#dc3545';
            errorDiv.style.marginTop = '10px';
            errorDiv.style.textAlign = 'center';
            loginForm.appendChild(errorDiv);
        }
        errorDiv.textContent = 'Invalid email or password';
    }
}); 