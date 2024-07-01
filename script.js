
async function signup() {
    const signupUsername = document.getElementById('signupUsername').value;
    const signupEmail = document.getElementById('signupEmail').value;
    const signupPassword = document.getElementById('signupPassword').value;

    const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: signupUsername,
            email: signupEmail,
            password: signupPassword
        }),
    });

    const data = await response.json();
    document.getElementById('signupMessage').innerText = data.message;
}

// Function to handle user login
async function login() {
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: loginEmail,
            password: loginPassword
        }),
    });

    const data = await response.json();
    document.getElementById('loginMessage').innerText = 'Login successful!';
    localStorage.setItem('token', data.token);
    showUserProfile();
}

// Function to show user profile information
async function showUserProfile() {
    const token = localStorage.getItem('token');

    if (!token) {
        return;
    }

    const response = await fetch('http://localhost:5000/api/profile', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    const data = await response.json();
    document.getElementById('profileUsername').innerText = data.username;
    document.getElementById('profileEmail').innerText = data.email;
    document.getElementById('profileInfo').style.display = 'block';
}
