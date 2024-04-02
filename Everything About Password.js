<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">

<div class="mb-3">
                                <label for="password">Password:</label>
                                <div class="password-field">
                                    <input type="password" id="password" name="password" required>
                                    <span class="toggle-password" onclick="togglePasswordVisibility('password')">
                                        <i class="fas fa-eye"></i>
                                    </span>
                                </div>
                                <label for="confirm_password">Confirm Password:</label>
                                <div class="password-field">
                                    <input type="password" id="confirm_password" name="confirm_password" required>
                                    <span class="toggle-password" onclick="togglePasswordVisibility('confirm_password')">
                                        <i class="fas fa-eye"></i>
                                    </span>
                                </div>
                            </div>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            event.preventDefault();

            // Get the values of password and confirm password fields
            var password = document.getElementById("password").value;
            var confirm_password = document.getElementById("confirm_password").value;

            // Check if passwords match
            if (password !== confirm_password) {
                alert("Passwords do not match");
                return false; // Prevent form submission
            }
            else{
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
            }
            
        });
    });
</script>


<script>
    function togglePasswordVisibility(inputId) {
        var input = document.getElementById(inputId);
        var icon = input.parentElement.querySelector('.toggle-password i');

        if (input.type === "password") {
            input.type = "text";
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
        } else {
            input.type = "password";
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
        }
    }
</script>