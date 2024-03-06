<script>
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        fetch('/registration', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                // Show registration successful alert
                alert('Registration successful!');
                // Reload the page after a short delay (adjust the delay as needed)
                setTimeout(() => {
                    window.location.reload();
                }, 2000); // Refresh after 2 seconds (adjust as needed)
            }
            else {
                throw new Error('Network response was not ok.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Registration failed! Please try again.');
        });
    });
</script>