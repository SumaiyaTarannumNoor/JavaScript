  <div>
                            <label for="phone-number" class="block text-[#5a1baf] font-bold mb-1 text-sm">
                                Phone Number <span class="text-[#FF0000]">*</span>
                            </label>
                            <input type="tel" id="phone-number" name="phone-number" placeholder="Enter your phone number"
                                class="w-full px-10 py-2 text-sm border border-purple-300 rounded-lg focus:outline-none focus:border-[#9333EA] focus:ring focus:ring-[#9333EA]">
                        </div>
                        
                        
                        <script>
                            // Initialize intl-tel-input for the phone number input field
                            const phoneInputField = document.querySelector("#phone-number");
                            const iti = window.intlTelInput(phoneInputField, {
                                initialCountry: "", // Show all countries alphabetically
                                preferredCountries: [], // Do not prioritize any countries (e.g., US, UK)
                                separateDialCode: true, // Display the selected country code separately
                                utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js", // For additional validation and formatting
                            });
                        
                            // Handle form submission to include the full number with country code
                            document.querySelector('form').addEventListener('submit', function(event) {
                                // Get the full phone number with country code
                                const fullPhoneNumber = iti.getNumber();
                                
                                // Replace the input value with the full phone number
                                phoneInputField.value = fullPhoneNumber;
                        
                                console.log("Full phone number:", fullPhoneNumber); // Debugging output
                        
                                // Allow form to submit
                            });
                        </script>
                        
                        

                        <!-- <script>
                            // Initialize intl-tel-input for the phone number input field
                            const phoneInputField = document.querySelector("#phone-number");
                            const iti = window.intlTelInput(phoneInputField, {
                                // Optional configuration options
                                initialCountry: "auto",
                                geoIpLookup: function(callback) {
                                    fetch('https://ipinfo.io/json?token=YOUR_API_TOKEN') // Optional: For auto country detection by IP
                                        .then(resp => resp.json())
                                        .then(data => callback(data.country))
                                        .catch(() => callback("us"));  // Fallback to 'us' if there’s an error
                                },
                                separateDialCode: true, // Display the selected country code separately
                                utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js", // For additional validation and formatting
                            });
                        
                            // Handle form submission to include the full number with country code
                            document.querySelector('form').addEventListener('submit', function(event) {
                                // Get the full phone number with country code
                                const fullPhoneNumber = iti.getNumber();
                                
                                // Replace the input value with the full phone number
                                phoneInputField.value = fullPhoneNumber;
                        
                                console.log("Full phone number:", fullPhoneNumber); // Debugging output
                        
                                // Allow form to submit
                            });
                        </script> -->
