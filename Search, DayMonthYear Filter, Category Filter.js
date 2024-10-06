
document.addEventListener('DOMContentLoaded', () => {
    let currentPage = 1;
    const rowsPerPage = 12;
    let courses = [];
    let filteredCourses = [];
    let selectedCategory = '';

    async function fetchCourses(searchQuery = '') {
        try {
            const response = await fetch(`/fetch_course_videos?query=${encodeURIComponent(searchQuery)}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            courses = await response.json();
            currentPage = 1;
            applyFilters();
        } catch (error) {
            console.error('Error fetching course data:', error);
        }
    }

    async function fetchCourseCategories() {
        try {
            const response = await fetch('/fetch_course_categories');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const categories = await response.json();

            const categoriesList = document.getElementById('categories-list');
            categoriesList.innerHTML = '';

            // Create a Set to store unique categories
            const uniqueCategories = new Set();

            categories.forEach(category => {
                const categoryArray = category.course_category.split(',').map(cat => cat.trim());
                categoryArray.forEach(cat => uniqueCategories.add(cat));
            });

            // Convert the Set back to an array and sort it alphabetically
            const sortedUniqueCategories = Array.from(uniqueCategories).sort((a, b) => a.localeCompare(b));

            sortedUniqueCategories.forEach(cat => {
                const button = document.createElement('button');
                button.textContent = cat;
                button.className = 'w-full text-left bg-purple-100 text-purple-900 px-4 py-2 rounded-lg hover:bg-purple-200 transition-colors duration-200';
                
                button.addEventListener('click', () => {
                    if (selectedCategory === cat.toLowerCase()) {
                        selectedCategory = '';
                        button.classList.remove('bg-purple-500', 'text-white');
                    } else {
                        const previouslySelected = categoriesList.querySelector('.bg-purple-500');
                        if (previouslySelected) {
                            previouslySelected.classList.remove('bg-purple-500', 'text-white');
                        }
                        selectedCategory = cat.toLowerCase();
                        button.classList.add('bg-purple-500', 'text-white');
                    }
                    console.log(`Selected category: ${selectedCategory}`);
                    applyFilters();
                });
                
                categoriesList.appendChild(button);
            });
        } catch (error) {
            console.error('Error fetching course categories:', error);
        }
    }

    function applyFilters() {
        const searchInput = document.getElementById('searchInput').value.toLowerCase();
        const yearFilter = document.getElementById('yearFilter').value;
        const monthFilter = document.getElementById('monthFilter').value;
        const dateFilter = document.getElementById('dateFilter').value;

        filteredCourses = courses.filter(course => {
            const createdAt = new Date(course.created_at);

            const matchesYear = yearFilter ? createdAt.getFullYear() === parseInt(yearFilter) : true;
            const matchesMonth = monthFilter ? (createdAt.getMonth() + 1) === parseInt(monthFilter) : true;
            const matchesDate = dateFilter ? createdAt.getDate() === parseInt(dateFilter) : true;

            const matchesSearch = course.course_title.toLowerCase().includes(searchInput) ||
                      course.course_link.toLowerCase().includes(searchInput) ||
                      course.course_category.toLowerCase().includes(searchInput) ||
                      course.course_details.toLowerCase().includes(searchInput) ||
                      course.created_at.toLowerCase().includes(searchInput);

            const matchesCategory = !selectedCategory || 
                                    course.course_category.split(',').map(cat => cat.trim().toLowerCase()).includes(selectedCategory);

            return matchesYear && matchesMonth && matchesDate && matchesSearch && matchesCategory;
        });

        displayTableData();
        updatePaginationControls();
    }
    // Function to display paginated data
    function displayTableData() {
        const trendingContainer = document.getElementById('trending-cards');
        trendingContainer.innerHTML = ''; // Clear existing videos

        const start = (currentPage - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const paginatedCourses = filteredCourses.slice(start, end);

        paginatedCourses.forEach(course => {
            const videoDiv = document.createElement('div');
            videoDiv.className = 'bg-white p-6 rounded-lg shadow-lg';

            videoDiv.innerHTML = `
                <div class="video-container cursor-pointer">
                    <iframe width="280" height="200" src="${course.course_link}" frameborder="0" allowfullscreen class="w-full h-[200px] rounded-md"></iframe>
                </div>
                <div class="video-details mt-4 cursor-pointer">
                    <h2 class="text-black font-semibold">${course.course_category}</h2>
                    <h1 class="text-black font-semibold">${course.course_title}</h1>
                    <p class="text-gray-300 font-semibold course-details line-clamp-4 overflow-hidden">${course.course_details}</p>
                    <button class="read-more-btn text-purple-500 underline mt-2">Read More</button>
                    <h2 class="text-black mt-1">Added on ${new Date(course.created_at).toLocaleDateString()}</h2>
                </div>
            `;

            const readMoreBtn = videoDiv.querySelector('.read-more-btn');
            const courseDetails = videoDiv.querySelector('.course-details');

            readMoreBtn.addEventListener('click', () => {
                if (courseDetails.classList.contains('line-clamp-4')) {
                    courseDetails.classList.remove('line-clamp-4', 'overflow-hidden');
                    readMoreBtn.textContent = 'Read Less';
                } else {
                    courseDetails.classList.add('line-clamp-4', 'overflow-hidden');
                    readMoreBtn.textContent = 'Read More';
                }
            });

            trendingContainer.appendChild(videoDiv);
        });
    }

    // Function to update pagination controls
    function updatePaginationControls() {
        const totalPages = Math.ceil(filteredCourses.length / rowsPerPage);
        document.getElementById('page-info').textContent = `Page ${currentPage} of ${totalPages}`;

        document.getElementById('prev-btn').disabled = currentPage === 1;
        document.getElementById('next-btn').disabled = currentPage === totalPages || totalPages === 0;
    }

    // Pagination button event listeners
    document.getElementById('prev-btn').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayTableData();
            updatePaginationControls();
        }
    });

    document.getElementById('next-btn').addEventListener('click', () => {
        const totalPages = Math.ceil(filteredCourses.length / rowsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            displayTableData();
            updatePaginationControls();
        }
    });

    // Event listeners for search and filter buttons
    document.getElementById('applyFilters').addEventListener('click', applyFilters);
    document.getElementById('clearFilters').addEventListener('click', () => {
        document.getElementById('yearFilter').value = '';
        document.getElementById('monthFilter').value = '';
        document.getElementById('dateFilter').value = '';
        document.getElementById('searchInput').value = '';
        selectedCategory = ''; // Clear selected category
        // Remove highlight from selected category button
        const selectedButton = document.querySelector('#categories-list .bg-purple-500');
        if (selectedButton) {
            selectedButton.classList.remove('bg-purple-500', 'text-white');
        }
        fetchCourses();
    });

    // Populate the year, month, and date filters
    function populateDateDropdowns() {
        const yearFilter = document.getElementById('yearFilter');
        const monthFilter = document.getElementById('monthFilter');
        const dateFilter = document.getElementById('dateFilter');

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

    populateDateDropdowns();
    fetchCourses();
    fetchCourseCategories();


  // Event listener for search input
    document.getElementById('searchInput').addEventListener('keyup', () => {
        fetchCourses(document.getElementById('searchInput').value.trim());
    });

    const drawerToggle = document.getElementById('course_drawer-toggle');
    const courseSidebar = document.getElementById('course_sidebar');

    // Sidebar toggle functionality
    drawerToggle.addEventListener('click', () => {
        courseSidebar.classList.toggle('open');
    });
});
