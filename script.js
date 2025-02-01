function validateAndRedirect(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return false;
    }

    const phone = document.getElementById('phone').value;
    const phonePattern = /^[0-9]{10}$/; // Example: Exactly 10 digits
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return false;
    }

    // Collect form data and redirect
    const fullName = document.getElementById('fullName').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const gender = document.querySelector('input[name="Gender"]:checked').value;

    const url = `login_successful.html?fullName=${encodeURIComponent(fullName)}&username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&gender=${encodeURIComponent(gender)}`;
    window.location.href = url;

    return false;
}
