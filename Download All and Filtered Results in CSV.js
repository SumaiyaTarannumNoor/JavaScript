<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>

    <style>
        body {
            font-family: 'Inter', sans-serif;
        }
        .active {
    background-color: white; /* Highlight background */
    color: #5a1baf; /* Customize text color */
}

    </style>
</head>

<body class="bg-gray-100">
    <div class="flex flex-col h-screen">
        <!-- Header with Hamburger Menu -->
        <header class="bg-gradient-to-r from-[#5a1baf] to-[#8a3ef5] p-4 flex justify-between items-center md:hidden">
            <h1 class="text-white text-xl font-bold">Admin Panel</h1>
            <button id="menu-toggle" class="text-white">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7">
                    </path>
                </svg>
            </button>
        </header>

        <div class="flex flex-1 overflow-hidden">
            <!-- Sidebar -->
            <div id="sidebar" class="w-64 bg-gradient-to-b from-[#5a1baf] to-[#8a3ef5] text-white hidden md:block absolute md:relative h-full z-10 transition-all duration-300 ease-in-out overflow-y-auto">
                <!-- <div id="sidebar" class="w-64 bg-gradient-to-b from-[#714674] to-[#ffffff] text-white hidden md:block absolute md:relative h-full z-10 transition-all duration-300 ease-in-out overflow-y-auto"> -->
                <div class="p-4">
                    <img class="bg-white mb-4 w-32 mx-auto mb-4 rounded-lg" src="{{ url_for('static', filename='assets/logo/logo.png') }}" alt="Logo">
    
                    <h2 class="text-2xl font-semibold mb-6 hidden md:block">Admin Panel</h2>
                    <nav>
                        <ul class="space-y-2 sidebar">
                            
                            <li><a href="/Users_list" class="block py-2 px-4 hover:bg-white/10 rounded">User List</a></li>
                            <li><a href="/Users_blogs" class="block py-2 px-4 hover:bg-white/10 rounded">Blogs</a></li>
                            <li><a href="/Admin_to_LandingPage_CarouselImage" class="block py-2 px-4 hover:bg-white/10 rounded">Landing Page Carousel Image</a></li>
                            <li><a href="/Admin_to_LandingPage_AboutUs" class="block py-2 px-4 hover:bg-white/10 rounded">Landing Page About Us</a></li>
                            <li><a href="/Admin_to_LandingPage_Latest" class="block py-2 px-4 hover:bg-white/10 rounded">Landing Page Latest Videos</a></li>
                            <li><a href="/Admin_to_LandingPage_Trending" class="block py-2 px-4 hover:bg-white/10 rounded">Landing Page Trending Videos</a></li>
                            <li><a href="/Admin_to_LandingPage_Seminer" class="block py-2 px-4 hover:bg-white/10 rounded">Landing Page Seminar Update</a></li>
                            <li><a href="/Admin_to_LandingPage_SuccessStories" class="block py-2 px-4 hover:bg-white/10 rounded">Landing Page Success Stories</a></li>
                            <li><a href="/Admin_to_LandingPage_AdminBlog" class="block py-2 px-4 hover:bg-white/10 rounded">Landing Page Admin Blog</a></li>
                            <li><a href="/Admin_Video_Course_Creation" class="block py-2 px-4 hover:bg-white/10 rounded">Video Courses</a></li>
                            <li><a href="#" class="block py-2 px-4 hover:bg-white/10 rounded">Courses</a></li>
                            <li><a href="#" class="block py-2 px-4 hover:bg-white/10 rounded">Products</a></li>
                            <li><a href="#" class="block py-2 px-4 hover:bg-white/10 rounded">Gallery and Partners</a></li>
                            <li><a href="#" class="block py-2 px-4 hover:bg-white/10 rounded">Settings</a></li>
                            <li>
                                <form action="{{ url_for('logout') }}" method="post" class="block py-2 px-4 hover:bg-white/10 rounded">
                                    <button type="submit" class="w-full text-left">Sign Out</button>
                                </form>
                            </li>
                        </ul>
                        
                        <script>
                            // Get the current path
                            const currentPath = window.location.pathname;
                        
                            // Get all anchor tags in the sidebar
                            const links = document.querySelectorAll('ul li a');
                        
                            // Loop through the anchor tags and check if href matches the current path
                            links.forEach(link => {
                                if (link.getAttribute('href') === currentPath) {
                                    // Add the active class to the matching link
                                    link.classList.add('active');
                        
                                    // Set focus on the active link for accessibility
                                    link.focus();
                        
                                    // Scroll the active element into view
                                    link.scrollIntoView({
                                        behavior: 'smooth', // Smooth scrolling animation
                                        block: 'center',    // Scroll so that the element is in the center
                                        inline: 'nearest'   // Scroll horizontally only if needed
                                    });
                                }
                            });
                        </script>
                        
                    </nav>
                </div>
            </div>

            <!-- Main Content -->
            <div class="flex-1 overflow-auto">
                <div class="p-8">
                    <div class="flex flex-col md:flex-row items-center gap-6 mb-6">
                        <h1 class="text-2xl md:text-3xl font-bold text-gray-800 border-b-4 border-purple-600 pb-2">
                            User List
                        </h1>
                        <div class="relative w-full max-w-md">
                            <input 
                                type="text" 
                                id="searchInput"
                                class="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9333ea] focus:border-transparent" 
                                placeholder="Search here..." 
                            />
                            <button class="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#9333ea] px-4 py-2 hover:text-[#5b33bc] focus:outline-none">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                    
                    <!-- Date filters -->
                    <div class="flex flex-wrap gap-4 mb-6">
                        <select id="yearFilter" class="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9333ea] focus:border-transparent">
                            <option value="">Select Year</option>
                        </select>
                        <select id="monthFilter" class="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9333ea] focus:border-transparent">
                            <option value="">Select Month</option>
                        </select>
                        <select id="dateFilter" class="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9333ea] focus:border-transparent">
                            <option value="">Select Date</option>
                        </select>
                        <!-- <button id="applyFilters" class="px-4 py-2 bg-[#9333ea] text-white rounded-md hover:bg-[#5b33bc] focus:outline-none focus:ring-2 focus:ring-[#9333ea] focus:ring-opacity-50">
                            Apply Filters
                        </button>
                        <button id="clearFilters" class="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
                            Clear Filters
                        </button> -->
                        <button id="applyFilterBtn" class="px-4 py-2 bg-[#9333ea] text-white rounded-md hover:bg-[#5b33bc] focus:outline-none focus:ring-2 focus:ring-[#9333ea] focus:ring-opacity-50">
                            Apply Filters
                        </button>
                        <button id="clearFilterBtn" class="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
                            Clear Filters
                        </button>
                        
                    </div>
                    <div id="rowCountWindow" class="px-6 py-4 bg-gradient-to-r from-[#5a1baf] to-[#8a3ef5] text-[#ffffff] rounded-md shadow-md text-lg">
                        Our Total Users: 0
                    </div>
                    
                    <button id="downloadExcel" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4">
                        Download in Excel
                    </button>
                    

            
            
                    
                      
                    <div class="bg-gray-100">
                        <div class="container mx-auto px-4 py-8">
                          <div class="bg-purple-300 pt-10 pb-10 pl-10 pr-10 overflow-x-auto">
                            <div class="bg-white shadow-lg rounded-lg overflow-x-auto border-4 border-white">
                                <table class="min-w-full divide-y divide-gray-200 border-collapse border border-gray-300">
                                    <thead class="bg-purple-700 text-white">
                                        <tr>
                                            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border border-gray-300">Full Name</th>
                                            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border border-gray-300">Email</th>
                                            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border border-gray-300">Phone</th>
                                            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border border-gray-300">Category</th>
                                            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border border-gray-300">Seminer Name</th>
                                            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border border-gray-300">Seminer Date</th>
                                            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border border-gray-300">Joined On</th>
                                            <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border border-gray-300">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody id="user-table" class="bg-white divide-y divide-gray-200">
                                        <!-- User Rows -->
                                    </tbody>
                                </table>
                                <div id="pagination" class="mt-4 mb-4 flex justify-center space-x-2">
                                    <!-- Pagination Controls -->
                                </div>
                            </div>
                          </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const menuToggle = document.getElementById('menu-toggle');
            const sidebar = document.getElementById('sidebar');

            menuToggle.addEventListener('click', function (e) {
                e.stopPropagation(); // Prevent event from bubbling up
                sidebar.classList.toggle('hidden');
            });

            // Close sidebar when clicking outside on smaller screens
            document.addEventListener('click', function (e) {
                if (window.innerWidth < 768 && !sidebar.contains(e.target) && e.target !== menuToggle) {
                    sidebar.classList.add('hidden');
                }
            });

            // Ensure sidebar is visible on larger screens
            function checkScreenSize() {
                if (window.innerWidth >= 768) {
                    sidebar.classList.remove('hidden');
                } else {
                    sidebar.classList.add('hidden');
                }
            }

            window.addEventListener('resize', checkScreenSize);
            checkScreenSize(); // Initial check
        }); // Initial check

//         let currentPage = 1;
// const rowsPerPage = 10;
// let users = [];

// // Function to fetch users with optional search query
// function fetchUsers(searchQuery = '') {
//     const url = `/fetch-users?query=${encodeURIComponent(searchQuery)}`;

//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             users = data;
//             currentPage = 1; // Reset to page 1 when searching
//             applyFilters(); // Apply filters to the fetched data
//         })
//         .catch(error => console.error('Error fetching user data:', error));
// }

// // Function to handle search and filter users
// function applyFilters() {
//     const searchInput = document.getElementById('searchInput').value.toLowerCase();
//     const yearFilter = document.getElementById('yearFilter').value;
//     const monthFilter = document.getElementById('monthFilter').value;
//     const dateFilter = document.getElementById('dateFilter').value;

//     // Filter users based on search and date filters
//     const filteredUsers = users.filter(user => {
//         const createdAt = new Date(user.created_at);

//         const matchesYear = yearFilter ? createdAt.getFullYear() === parseInt(yearFilter) : true;
//         const matchesMonth = monthFilter ? (createdAt.getMonth() + 1) === parseInt(monthFilter) : true; // Months are 0-based
//         const matchesDate = dateFilter ? createdAt.getDate() === parseInt(dateFilter) : true;

//         // Dynamic search to match across multiple fields
//         const matchesSearch = user.Full_name.toLowerCase().includes(searchInput) ||
//                               user.Email.toLowerCase().includes(searchInput) ||
//                               user.Phone_number.toString().toLowerCase().includes(searchInput) || // Convert phone number to string
//                               user.category.toLowerCase().includes(searchInput) ||
//                               user.seminer_date.toLowerCase().includes(searchInput) ||
//                               user.seminer_name.toLowerCase().includes(searchInput);

//         return matchesYear && matchesMonth && matchesDate && matchesSearch;
//     });

//     updateRowCount(filteredUsers.length); // Update the row count dynamically
//     displayTableData(filteredUsers);
// }

// // Function to update the row count
// function updateRowCount(count) {
//     const rowCountWindow = document.getElementById('rowCountWindow');
//     rowCountWindow.textContent = `Our Total Users: ${count}`;
// }

// // Function to display table data
// function displayTableData(filteredUsers = users) {
//     const tableBody = document.getElementById('user-table');
//     tableBody.innerHTML = '';

//     const start = (currentPage - 1) * rowsPerPage;
//     const end = start + rowsPerPage;
//     const paginatedUsers = filteredUsers.slice(start, end);

//     paginatedUsers.forEach(user => {
//         const row = document.createElement('tr');
//         row.classList.add('hover:bg-gray-50');
//         row.innerHTML = `
//             <td class="px-6 py-4 whitespace-nowrap border border-gray-300">${user.Full_name}</td>
//             <td class="px-6 py-4 whitespace-nowrap border border-gray-300">${user.Email}</td>
//             <td class="px-6 py-4 whitespace-nowrap border border-gray-300">${user.Phone_number}</td>
//             <td class="px-6 py-4 whitespace-nowrap border border-gray-300">${user.category}</td>
//             <td class="px-6 py-4 whitespace-nowrap border border-gray-300">${user.seminer_name}</td>
//             <td class="px-6 py-4 whitespace-nowrap border border-gray-300">${user.seminer_date}</td>
//             <td class="px-6 py-4 whitespace-nowrap border border-gray-300">${new Date(user.created_at).toLocaleDateString()}</td>
//             <td class="px-6 py-4 whitespace-nowrap text-sm font-medium border border-gray-300">
//                 <button class="text-white bg-[#5a1baf] hover:bg-blue-400 font-bold py-2 px-4 rounded transition mr-2 delete-button" data-email="${user.Email}">Delete</button>
//             </td>
//         `;
//         tableBody.appendChild(row);
//     });

//     updatePagination(filteredUsers);
//     addDeleteListeners();
// }

// // Function to add delete button listeners
// function addDeleteListeners() {
//     document.querySelectorAll('.delete-button').forEach(button => {
//         button.addEventListener('click', (event) => {
//             const email = event.target.getAttribute('data-email');
//             if (confirm('Are you sure you want to delete this user?')) {
//                 deleteUser(email);
//             }
//         });
//     });
// }

// // Function to delete a user
// function deleteUser(email) {
//     fetch(`/delete-user?email=${encodeURIComponent(email)}`, {
//         method: 'DELETE',
//     })
//     .then(response => response.json())
//     .then(result => {
//         if (result.message === "User deleted successfully") {
//             applyFilters(); // Reapply filters after deletion
//         } else {
//             alert(result.message);
//         }
//     })
//     .catch(error => console.error('Error deleting user:', error));
// }

// // Function to update pagination
// function updatePagination(filteredUsers) {
//     const pagination = document.getElementById('pagination');
//     pagination.innerHTML = '';

//     const pageCount = Math.ceil(filteredUsers.length / rowsPerPage);

//     // Add previous button
//     const prevButton = createPaginationButton('Previous', () => {
//         if (currentPage > 1) {
//             currentPage--;
//             displayTableData(filteredUsers);
//         }
//     });
//     pagination.appendChild(prevButton);

//     // Add page number buttons
//     for (let i = 1; i <= pageCount; i++) {
//         const btn = createPaginationButton(i, () => {
//             currentPage = i;
//             displayTableData(filteredUsers);
//         });
//         pagination.appendChild(btn);
//     }

//     // Add next button
//     const nextButton = createPaginationButton('Next', () => {
//         if (currentPage < pageCount) {
//             currentPage++;
//             displayTableData(filteredUsers);
//         }
//     });
//     pagination.appendChild(nextButton);
// }

// // Helper function to create pagination buttons
// function createPaginationButton(text, onClick) {
//     const button = document.createElement('button');
//     button.textContent = text;
//     button.classList.add('px-3', 'py-2', 'mx-1', 'bg-[#9333ea]', 'text-white', 'rounded-md', 'hover:bg-[#5b33bc]', 'focus:outline-none');
//     button.addEventListener('click', onClick);
//     return button;
// }

// // Function to populate the date dropdowns
// function populateDateDropdowns() {
//     const yearFilter = document.getElementById('yearFilter');
//     const monthFilter = document.getElementById('monthFilter');
//     const dateFilter = document.getElementById('dateFilter');

//     // Clear dropdowns
//     yearFilter.innerHTML = '<option value="">Select Year</option>';
//     monthFilter.innerHTML = '<option value="">Select Month</option>';
//     dateFilter.innerHTML = '<option value="">Select Date</option>';

//     // Populate years
//     const currentYear = new Date().getFullYear();
//     for (let year = 2020; year <= currentYear; year++) {
//         const option = document.createElement('option');
//         option.value = year;
//         option.textContent = year;
//         yearFilter.appendChild(option);
//     }

//     // Populate months
//     const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     months.forEach((month, index) => {
//         const option = document.createElement('option');
//         option.value = (index + 1).toString().padStart(2, '0'); // Format as "01", "02", etc.
//         option.textContent = month;
//         monthFilter.appendChild(option);
//     });

//     // Populate dates
//     for (let date = 1; date <= 31; date++) {
//         const option = document.createElement('option');
//         option.value = date.toString().padStart(2, '0'); // Format as "01", "02", etc.
//         option.textContent = date;
//         dateFilter.appendChild(option);
//     }
// }

// // Event listeners
// document.getElementById('applyFilters').addEventListener('click', applyFilters);
// document.getElementById('clearFilters').addEventListener('click', () => {
//     document.getElementById('yearFilter').value = '';
//     document.getElementById('monthFilter').value = '';
//     document.getElementById('dateFilter').value = '';
//     document.getElementById('searchInput').value = '';
//     fetchUsers(); // Reset and fetch all users
// });

// // Add event listener for dynamic search
// document.getElementById('searchInput').addEventListener('keyup', () => {
//     fetchUsers(document.getElementById('searchInput').value.trim());
// });

// // Populate date dropdowns on page load
// populateDateDropdowns();

// // Fetch initial user data on page load
// fetchUsers();


// let currentPage = 1;
// const rowsPerPage = 10;
// let users = [];

// // Function to fetch users with optional search query
// function fetchUsers(searchQuery = '') {
//     const url = `/fetch-users?query=${encodeURIComponent(searchQuery)}`;

//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             users = data;
//             currentPage = 1; // Reset to page 1 when searching
//             applyFilters(); // Apply filters to the fetched data
//         })
//         .catch(error => console.error('Error fetching user data:', error));
// }

// // Function to handle search and filter users
// function applyFilters() {
//     const searchInput = document.getElementById('searchInput').value.toLowerCase();
//     const yearFilter = document.getElementById('yearFilter').value;
//     const monthFilter = document.getElementById('monthFilter').value;
//     const dateFilter = document.getElementById('dateFilter').value;

//     // Filter users based on search and date filters
//     const filteredUsers = users.filter(user => {
//         const createdAt = new Date(user.created_at);

//         const matchesYear = yearFilter ? createdAt.getFullYear() === parseInt(yearFilter) : true;
//         const matchesMonth = monthFilter ? (createdAt.getMonth() + 1) === parseInt(monthFilter) : true; // Months are 0-based
//         const matchesDate = dateFilter ? createdAt.getDate() === parseInt(dateFilter) : true;

//         // Dynamic search to match across multiple fields
//         const matchesSearch = user.Full_name.toLowerCase().includes(searchInput) ||
//                               user.Email.toLowerCase().includes(searchInput) ||
//                               user.Phone_number.toString().toLowerCase().includes(searchInput) || // Convert phone number to string
//                               user.category.toLowerCase().includes(searchInput) ||
//                               user.seminer_date.toLowerCase().includes(searchInput) ||
//                               user.seminer_name.toLowerCase().includes(searchInput);

//         return matchesYear && matchesMonth && matchesDate && matchesSearch;
//     });

//     updateRowCount(filteredUsers.length); // Update the row count dynamically
//     displayTableData(filteredUsers);
// }

// // Function to update the row count
// function updateRowCount(count) {
//     const rowCountWindow = document.getElementById('rowCountWindow');
//     rowCountWindow.textContent = `Our Total Users: ${count}`;
// }

// // Function to display table data
// function displayTableData(filteredUsers = users) {
//     const tableBody = document.getElementById('user-table');
//     tableBody.innerHTML = '';

//     const start = (currentPage - 1) * rowsPerPage;
//     const end = start + rowsPerPage;
//     const paginatedUsers = filteredUsers.slice(start, end);

//     paginatedUsers.forEach(user => {
//         const row = document.createElement('tr');
//         row.classList.add('hover:bg-gray-50');
//         row.innerHTML = `
//             <td class="px-6 py-4 whitespace-nowrap border border-gray-300">${user.Full_name}</td>
//             <td class="px-6 py-4 whitespace-nowrap border border-gray-300">${user.Email}</td>
//             <td class="px-6 py-4 whitespace-nowrap border border-gray-300">${user.Phone_number}</td>
//             <td class="px-6 py-4 whitespace-nowrap border border-gray-300">${user.category}</td>
//             <td class="px-6 py-4 whitespace-nowrap border border-gray-300">${user.seminer_name}</td>
//             <td class="px-6 py-4 whitespace-nowrap border border-gray-300">${user.seminer_date}</td>
//             <td class="px-6 py-4 whitespace-nowrap border border-gray-300">${new Date(user.created_at).toLocaleDateString()}</td>
//             <td class="px-6 py-4 whitespace-nowrap text-sm font-medium border border-gray-300">
//                 <button class="text-white bg-[#5a1baf] hover:bg-blue-400 font-bold py-2 px-4 rounded transition mr-2 delete-button" data-email="${user.Email}">Delete</button>
//             </td>
//         `;
//         tableBody.appendChild(row);
//     });

//     updatePagination(filteredUsers);
//     addDeleteListeners();
// }

// // Function to add delete button listeners
// function addDeleteListeners() {
//     document.querySelectorAll('.delete-button').forEach(button => {
//         button.addEventListener('click', (event) => {
//             const email = event.target.getAttribute('data-email');
//             if (confirm('Are you sure you want to delete this user?')) {
//                 deleteUser(email);
//             }
//         });
//     });
// }

// // Function to delete a user
// function deleteUser(email) {
//     fetch(`/delete-user?email=${encodeURIComponent(email)}`, {
//         method: 'DELETE',
//     })
//     .then(response => response.json())
//     .then(result => {
//         if (result.message === "User deleted successfully") {
//             applyFilters(); // Reapply filters after deletion
//         } else {
//             alert(result.message);
//         }
//     })
//     .catch(error => console.error('Error deleting user:', error));
// }

// // Function to update pagination
// function updatePagination(filteredUsers) {
//     const pagination = document.getElementById('pagination');
//     pagination.innerHTML = '';

//     const pageCount = Math.ceil(filteredUsers.length / rowsPerPage);

//     // Add previous button
//     const prevButton = createPaginationButton('Previous', () => {
//         if (currentPage > 1) {
//             currentPage--;
//             displayTableData(filteredUsers);
//         }
//     });
//     pagination.appendChild(prevButton);

//     // Add page number buttons
//     for (let i = 1; i <= pageCount; i++) {
//         const btn = createPaginationButton(i, () => {
//             currentPage = i;
//             displayTableData(filteredUsers);
//         });
//         pagination.appendChild(btn);
//     }

//     // Add next button
//     const nextButton = createPaginationButton('Next', () => {
//         if (currentPage < pageCount) {
//             currentPage++;
//             displayTableData(filteredUsers);
//         }
//     });
//     pagination.appendChild(nextButton);
// }

// // Helper function to create pagination buttons
// function createPaginationButton(text, onClick) {
//     const button = document.createElement('button');
//     button.textContent = text;
//     button.classList.add('px-3', 'py-2', 'mx-1', 'bg-[#9333ea]', 'text-white', 'rounded-md', 'hover:bg-[#5b33bc]', 'focus:outline-none');
//     button.addEventListener('click', onClick);
//     return button;
// }

// // Function to populate the date dropdowns
// function populateDateDropdowns() {
//     const yearFilter = document.getElementById('yearFilter');
//     const monthFilter = document.getElementById('monthFilter');
//     const dateFilter = document.getElementById('dateFilter');

//     // Clear dropdowns
//     yearFilter.innerHTML = '<option value="">Select Year</option>';
//     monthFilter.innerHTML = '<option value="">Select Month</option>';
//     dateFilter.innerHTML = '<option value="">Select Date</option>';

//     // Populate years
//     const currentYear = new Date().getFullYear();
//     for (let year = 2020; year <= currentYear; year++) {
//         const option = document.createElement('option');
//         option.value = year;
//         option.textContent = year;
//         yearFilter.appendChild(option);
//     }

//     // Populate months
//     const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     months.forEach((month, index) => {
//         const option = document.createElement('option');
//         option.value = (index + 1).toString().padStart(2, '0'); // Format as "01", "02", etc.
//         option.textContent = month;
//         monthFilter.appendChild(option);
//     });

//     // Populate dates
//     for (let date = 1; date <= 31; date++) {
//         const option = document.createElement('option');
//         option.value = date.toString().padStart(2, '0'); // Format as "01", "02", etc.
//         option.textContent = date;
//         dateFilter.appendChild(option);
//     }
// }


// // Function to download filtered or unfiltered data as Excel
// function downloadExcel() {
//     // If there's a search or filter, apply the same logic to get filtered users
//     const searchInput = document.getElementById('searchInput').value.toLowerCase();
//     const yearFilter = document.getElementById('yearFilter').value;
//     const monthFilter = document.getElementById('monthFilter').value;
//     const dateFilter = document.getElementById('dateFilter').value;

//     // Filter the users based on the search and date filters (applies globally to all fetched users)
//     const filteredUsers = users.filter(user => {
//         const createdAt = new Date(user.created_at);

//         const matchesYear = yearFilter ? createdAt.getFullYear() === parseInt(yearFilter) : true;
//         const matchesMonth = monthFilter ? (createdAt.getMonth() + 1) === parseInt(monthFilter) : true; // Months are 0-based
//         const matchesDate = dateFilter ? createdAt.getDate() === parseInt(dateFilter) : true;

//         // Match the search query across multiple fields
//         const matchesSearch = user.Full_name.toLowerCase().includes(searchInput) ||
//                               user.Email.toLowerCase().includes(searchInput) ||
//                               user.Phone_number.toString().toLowerCase().includes(searchInput) || // Convert phone number to string
//                               user.category.toLowerCase().includes(searchInput) ||
//                               user.seminer_date.toLowerCase().includes(searchInput) ||
//                               user.seminer_name.toLowerCase().includes(searchInput);

//         return matchesYear && matchesMonth && matchesDate && matchesSearch;
//     });

//     // Use the filtered users or all users if no filter is applied
//     const dataToDownload = searchInput || yearFilter || monthFilter || dateFilter ? filteredUsers : users;

//     // Convert the data to a format suitable for XLSX
//     const wb = XLSX.utils.book_new();
//     const ws = XLSX.utils.json_to_sheet(dataToDownload);
//     XLSX.utils.book_append_sheet(wb, ws, "Users");
//     XLSX.writeFile(wb, "users.xlsx");
// }

// // Event listener for download button
// document.getElementById('downloadExcel').addEventListener('click', downloadExcel);


// // Event listener for search input
// document.getElementById('searchInput').addEventListener('input', applyFilters);

// // Event listeners for date filters
// document.getElementById('yearFilter').addEventListener('change', applyFilters);
// document.getElementById('monthFilter').addEventListener('change', applyFilters);
// document.getElementById('dateFilter').addEventListener('change', applyFilters);

// // Event listener for download button
// document.getElementById('downloadExcel').addEventListener('click', downloadExcel);

// // Initial population of date dropdowns
// populateDateDropdowns();

// // Initial fetch of users
// fetchUsers();

let currentPage = 1;
const rowsPerPage = 10;
let users = [];

// Function to fetch users with optional search query
function fetchUsers(searchQuery = '') {
    const url = `/fetch-users?query=${encodeURIComponent(searchQuery)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            users = data;
            currentPage = 1; // Reset to page 1 when searching
            applyFilters(); // Apply filters to the fetched data
        })
        .catch(error => console.error('Error fetching user data:', error));
}

// Function to handle search and filter users
function applyFilters() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const yearFilter = document.getElementById('yearFilter').value;
    const monthFilter = document.getElementById('monthFilter').value;
    const dateFilter = document.getElementById('dateFilter').value;

    // Filter users based on search and date filters
    const filteredUsers = users.filter(user => {
        const createdAt = new Date(user.created_at);

        const matchesYear = yearFilter ? createdAt.getFullYear() === parseInt(yearFilter) : true;
        const matchesMonth = monthFilter ? (createdAt.getMonth() + 1) === parseInt(monthFilter) : true;
        const matchesDate = dateFilter ? createdAt.getDate() === parseInt(dateFilter) : true;

        // Dynamic search to match across multiple fields
        const matchesSearch = Object.values(user).some(value => 
            String(value).toLowerCase().includes(searchInput)
        );

        return matchesYear && matchesMonth && matchesDate && matchesSearch;
    });

    updateRowCount(filteredUsers.length);
    displayTableData(filteredUsers);
}

// Function to clear all filters
function clearFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('yearFilter').value = '';
    document.getElementById('monthFilter').value = '';
    document.getElementById('dateFilter').value = '';
    applyFilters();
}

// Function to update the row count
function updateRowCount(count) {
    const rowCountWindow = document.getElementById('rowCountWindow');
    rowCountWindow.textContent = `Our Total Users: ${count}`;
}

// Function to display table data
function displayTableData(filteredUsers = users) {
    const tableBody = document.getElementById('user-table');
    tableBody.innerHTML = '';

    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedUsers = filteredUsers.slice(start, end);

    paginatedUsers.forEach(user => {
        const row = document.createElement('tr');
        row.classList.add('hover:bg-gray-50');
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap border border-gray-300">${user.Full_name}</td>
            <td class="px-6 py-4 whitespace-nowrap border border-gray-300">${user.Email}</td>
            <td class="px-6 py-4 whitespace-nowrap border border-gray-300">${user.Phone_number}</td>
            <td class="px-6 py-4 whitespace-nowrap border border-gray-300">${user.category}</td>
            <td class="px-6 py-4 whitespace-nowrap border border-gray-300">${user.seminer_name}</td>
            <td class="px-6 py-4 whitespace-nowrap border border-gray-300">${user.seminer_date}</td>
            <td class="px-6 py-4 whitespace-nowrap border border-gray-300">${new Date(user.created_at).toLocaleDateString()}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium border border-gray-300">
                <button class="text-white bg-[#5a1baf] hover:bg-blue-400 font-bold py-2 px-4 rounded transition mr-2 delete-button" data-email="${user.Email}">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });

    updatePagination(filteredUsers);
    addDeleteListeners();
}

// Function to add delete button listeners
function addDeleteListeners() {
    document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const email = event.target.getAttribute('data-email');
            if (confirm('Are you sure you want to delete this user?')) {
                deleteUser(email);
            }
        });
    });
}

// Function to delete a user
function deleteUser(email) {
    fetch(`/delete-user?email=${encodeURIComponent(email)}`, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(result => {
        if (result.message === "User deleted successfully") {
            applyFilters(); // Reapply filters after deletion
        } else {
            alert(result.message);
        }
    })
    .catch(error => console.error('Error deleting user:', error));
}

// Function to update pagination
function updatePagination(filteredUsers) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const pageCount = Math.ceil(filteredUsers.length / rowsPerPage);

    // Add previous button
    const prevButton = createPaginationButton('Previous', () => {
        if (currentPage > 1) {
            currentPage--;
            displayTableData(filteredUsers);
        }
    });
    pagination.appendChild(prevButton);

    // Add page number buttons
    for (let i = 1; i <= pageCount; i++) {
        const btn = createPaginationButton(i, () => {
            currentPage = i;
            displayTableData(filteredUsers);
        });
        pagination.appendChild(btn);
    }

    // Add next button
    const nextButton = createPaginationButton('Next', () => {
        if (currentPage < pageCount) {
            currentPage++;
            displayTableData(filteredUsers);
        }
    });
    pagination.appendChild(nextButton);
}

// Helper function to create pagination buttons
function createPaginationButton(text, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.classList.add('px-3', 'py-2', 'mx-1', 'bg-[#9333ea]', 'text-white', 'rounded-md', 'hover:bg-[#5b33bc]', 'focus:outline-none');
    button.addEventListener('click', onClick);
    return button;
}

// Function to populate the date dropdowns
function populateDateDropdowns() {
    const yearFilter = document.getElementById('yearFilter');
    const monthFilter = document.getElementById('monthFilter');
    const dateFilter = document.getElementById('dateFilter');

    // Clear dropdowns
    yearFilter.innerHTML = '<option value="">Select Year</option>';
    monthFilter.innerHTML = '<option value="">Select Month</option>';
    dateFilter.innerHTML = '<option value="">Select Date</option>';

    // Populate years
    const currentYear = new Date().getFullYear();
    for (let year = 2020; year <= currentYear; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    }

    // Populate months
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    months.forEach((month, index) => {
        const option = document.createElement('option');
        option.value = (index + 1).toString().padStart(2, '0');
        option.textContent = month;
        monthFilter.appendChild(option);
    });

    // Populate dates
    for (let date = 1; date <= 31; date++) {
        const option = document.createElement('option');
        option.value = date.toString().padStart(2, '0');
        option.textContent = date;
        dateFilter.appendChild(option);
    }
}

// Function to download filtered or unfiltered data as Excel
function downloadExcel() {
    const filteredUsers = applyFiltersAndGetUsers();
    const csvData = convertToCSV(filteredUsers);
    downloadCSV(csvData, 'users_data.csv');
}

// Helper function to apply filters and get filtered users
function applyFiltersAndGetUsers() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const yearFilter = document.getElementById('yearFilter').value;
    const monthFilter = document.getElementById('monthFilter').value;
    const dateFilter = document.getElementById('dateFilter').value;

    return users.filter(user => {
        const createdAt = new Date(user.created_at);

        const matchesYear = yearFilter ? createdAt.getFullYear() === parseInt(yearFilter) : true;
        const matchesMonth = monthFilter ? (createdAt.getMonth() + 1) === parseInt(monthFilter) : true;
        const matchesDate = dateFilter ? createdAt.getDate() === parseInt(dateFilter) : true;

        const matchesSearch = Object.values(user).some(value => 
            String(value).toLowerCase().includes(searchInput)
        );

        return matchesYear && matchesMonth && matchesDate && matchesSearch;
    });
}

// Helper function to convert JSON data to CSV format
function convertToCSV(usersData) {
    const headers = ['Full Name', 'Email', 'Phone Number', 'Category', 'Seminar Name', 'Seminar Date', 'Created At'];
    const csvRows = [headers.join(',')];

    usersData.forEach(user => {
        const row = [
            user.Full_name,
            user.Email,
            user.Phone_number,
            user.category,
            user.seminer_name,
            user.seminer_date,
            new Date(user.created_at).toLocaleDateString()
        ].map(value => `"${value}"`).join(',');
        csvRows.push(row);
    });

    return csvRows.join('\n');
}

// Helper function to trigger CSV file download
function downloadCSV(csvData, filename) {
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// Event listeners
document.getElementById('searchInput').addEventListener('input', applyFilters);
document.getElementById('yearFilter').addEventListener('change', applyFilters);
document.getElementById('monthFilter').addEventListener('change', applyFilters);
document.getElementById('dateFilter').addEventListener('change', applyFilters);
document.getElementById('downloadExcel').addEventListener('click', downloadExcel);
document.getElementById('applyFilterBtn').addEventListener('click', applyFilters);
document.getElementById('clearFilterBtn').addEventListener('click', clearFilters);

// Initialize
fetchUsers();
populateDateDropdowns();
    
    </script>
</body>

</html>
