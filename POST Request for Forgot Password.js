document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const forgotPasswordForm = document.getElementById('forgot-password-form');

 
    forgotPasswordForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        // Send a POST request to the server
        fetch('/forgot_password', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response data from the server
            console.log(data); // Log the response data
            // Perform actions based on the response (e.g., display success message)
            if (data.success) {
                setTimeout(() => {
                    window.location.href = '/trainee_login';
                        }, 2000); // Refresh after 2 seconds (adjust as needed)
                    } // Display success message
            else {
                alert(data.error); // Display error message
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle errors that occurred during the fetch request
            alert('An error occurred. Please try again.'); // Display generic error message
        });
    });
});

