          <div class="hidden md:flex lg:flex items-center space-x-2">
                    <button id="registerButton" style="display: block;"
                    class="text-white bg-[#9D50BB] hover:bg-blue-400 font-bold py-2 px-4 rounded transition">
                    Register
                </button>
                <button id="loginButton" style="display: block;"
                    class="text-white bg-[#9D50BB] hover:bg-blue-400 font-bold py-2 px-4 rounded transition">
                    Login
                </button>
                <a href="/Profile_blog" id="profileButton" style="display: none;"
                class="text-white bg-[#9D50BB] hover:bg-blue-400 font-bold py-2 px-4 rounded transition">
                    Profile
                </a>
                    <script>
                      // Add this at the start of your JavaScript file or script tag
document.addEventListener('DOMContentLoaded', () => {
    const registerButton = document.getElementById('registerButton');
    const loginButton = document.getElementById('loginButton');
    const profileButton = document.querySelector('a[href="/Profile_blog"]');

    // Debug function to log element states
    const logElementStates = () => {
        console.log('Register button:', registerButton ? registerButton.style.display : 'not found');
        console.log('Login button:', loginButton ? loginButton.style.display : 'not found');
        console.log('Profile button:', profileButton ? profileButton.style.display : 'not found');
    };

    // Function to check session and update button visibility
    const checkSessionAndUpdateButtons = async () => {
        try {
            console.log('Checking session...');
            const response = await fetch('/check_session');
            const data = await response.json();
            console.log('Session response:', data);  // Debug log
            
            if (data.loggedIn) {
                console.log('User is logged in, updating buttons...');
                // User is logged in - show only profile button
                if (registerButton) {
                    registerButton.style.display = 'none';
                    console.log('Hidden register button');
                }
                if (loginButton) {
                    loginButton.style.display = 'none';
                    console.log('Hidden login button');
                }
                if (profileButton) {
                    profileButton.style.display = 'inline-block';  // or 'block' depending on your layout
                    console.log('Shown profile button');
                }
            } else {
                console.log('User is not logged in, updating buttons...');
                // User is not logged in - show register and login buttons
                if (registerButton) {
                    registerButton.style.display = 'inline-block';  // or 'block'
                    console.log('Shown register button');
                }
                if (loginButton) {
                    loginButton.style.display = 'inline-block';  // or 'block'
                    console.log('Shown login button');
                }
                if (profileButton) {
                    profileButton.style.display = 'none';
                    console.log('Hidden profile button');
                }
            }
            
            // Log final state
            logElementStates();
            
        } catch (error) {
            console.error('Error checking session:', error);
        }
    };

    // Call the function when page loads
    console.log('Page loaded, initializing session check...');
    checkSessionAndUpdateButtons();
});
                    </script>

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////  DRAWER  //////////////////////////////

 <button id="registerButtonDrawer"
                class="w-full text-white bg-[#c0466f] hover:text-brandSecondary font-bold py-2 rounded-full transition">Register</button>
            <button id="loginButtonDrawer"
                class="w-full text-white bg-[#c0466f] hover:text-brandSecondary font-bold py-2 rounded-full transition">Login</button>
                <a href="/Profile_blog" id="profileButtonDrawer" style="display: none;"
                class="text-white bg-[#9D50BB] hover:bg-blue-400 font-bold py-2 px-4 rounded transition">
                    Profile
                </a>
                    <script>
                      // Add this at the start of your JavaScript file or script tag
document.addEventListener('DOMContentLoaded', () => {
    const registerButtonD = document.getElementById('registerButtonDrawer');
    const loginButtonD = document.getElementById('loginButtonDrawer');
    const profileButtonD = document.querySelector('a[href="/Profile_blog"]');

    // Debug function to log element states
    const logElementStates = () => {
        console.log('Register button:', registerButtonDrawer ? registerButtonDrawer.style.display : 'not found');
        console.log('Login button:', loginButtonDrawer ? loginButtonDrawer.style.display : 'not found');
        console.log('Profile button:', profileButtonDrawer ? profileButtonDrawer.style.display : 'not found');
    };

    // Function to check session and update button visibility
    const checkSessionAndUpdateButtonsDrawer = async () => {
        try {
            console.log('Checking session...');
            const response = await fetch('/check_session');
            const data = await response.json();
            console.log('Session response:', data);  // Debug log
            
            if (data.loggedIn) {
                console.log('User is logged in, updating buttons...');
                // User is logged in - show only profile button
                if (registerButtonDrawer) {
                    registerButtonDrawer.style.display = 'none';
                    console.log('Hidden register button');
                }
                if (loginButtonDrawer) {
                    loginButtonDrawer.style.display = 'none';
                    console.log('Hidden login button');
                }
                if (profileButtonDrawer) {
                    profileButtonDrawer.style.display = 'inline-block';  // or 'block' depending on your layout
                    console.log('Shown profile button');
                }
            } else {
                console.log('User is not logged in, updating buttons...');
                // User is not logged in - show register and login buttons
                if (registerButtonDrawer) {
                    registerButtonDrawer.style.display = 'inline-block';  // or 'block'
                    console.log('Shown register button');
                }
                if (loginButtonDrawer) {
                    loginButtonDrawer.style.display = 'inline-block';  // or 'block'
                    console.log('Shown login button');
                }
                if (profileButtonDrawer) {
                    profileButtonDrawer.style.display = 'none';
                    console.log('Hidden profile button');
                }
            }
            
            // Log final state
            logElementStates();
            
        } catch (error) {
            console.error('Error checking session:', error);
        }
    };

    // Call the function when page loads
    console.log('Page loaded, initializing session check...');
    checkSessionAndUpdateButtonsDrawer();
});
