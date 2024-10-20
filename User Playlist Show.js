<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Navbar with Drawer</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <!-- Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap JS and dependencies (jQuery) -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>

    <style>
        .bg-brandPrimary {
            background-color: #832aff;
        }

        .text-brandSecondary {
            color: #2bafff;
        }

        .hover\:text-brandSecondary:hover {
            color: #2bafff;
        }

        .font-roboto {
            font-family: 'Roboto', sans-serif;
        }

        /* Sticky Navbar */
        .sticky-navbar {
            position: sticky;
            top: 0;
            background-color: #ffffff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        /* Navbar links styles */
        .nav-link {
            transition: color 0.3s ease;
        }

        /* Drawer styles */
        .drawer {
            transition: transform 0.3s ease-in-out;
            transform: translateX(100%);
        }

        .drawer.open {
            transform: translateX(0%);
        }
        .custom-padding {
    padding-left: 60px;  /* Adjust as needed */
    padding-right: 60px; /* Adjust as needed */
}
/* .glow-on-hover {
    width: 220px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
}

.glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.glow-on-hover:active {
    color: #000
}

.glow-on-hover:active:after {
    background: transparent;
}

.glow-on-hover:hover:before {
    opacity: 1;
}

.glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
} */


@import url(https://fonts.googleapis.com/css?family=Fira+Sans:400,300,700,500,400italic,500italic,700italic);
.combined-button {
            position: relative;
            width: 300px;
            height: 60px;
            border: none;
            outline: none;
            color: #fff;
            background: #111;
            cursor: pointer;
            z-index: 0;
            border-radius: 10px;
            font-family: 'Fira Sans', sans-serif;
            font-size: 16px;
            transition: all 0.3s;
        }

        .combined-button:before {
            content: '';
            background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
            position: absolute;
            top: -2px;
            left:-2px;
            background-size: 400%;
            z-index: -1;
            filter: blur(5px);
            width: calc(100% + 4px);
            height: calc(100% + 4px);
            animation: glowing 20s linear infinite;
            opacity: 0;
            transition: opacity .3s ease-in-out;
            border-radius: 10px;
        }

        .combined-button:hover:before,
        .combined-button.bounce:before {
            opacity: 1;
        }

        .combined-button:after {
            z-index: -1;
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: #111;
            left: 0;
            top: 0;
            border-radius: 10px;
        }

        .combined-button:hover,
        .combined-button.bounce {
            color: #c81bf3;
            background: white;
            box-shadow: 0px 17px 18px -14px rgba(0, 0, 0, 0.08);
        }

        .combined-button .button-spots {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
        }

        .combined-button .button-spots span {
            position: absolute;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background-color: #00C4FF;
            opacity: 0;
            transition: all 0.5s;
        }

        .combined-button:hover .button-spots span,
        .combined-button.bounce .button-spots span {
            opacity: 1;
            animation: fizz 0.8s linear infinite;
        }

        @keyframes glowing {
            0% { background-position: 0 0; }
            50% { background-position: 400% 0; }
            100% { background-position: 0 0; }
        }

        @keyframes fizz {
            0% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-10px) scale(1.2); }
            100% { transform: translateY(-20px) scale(0); }
        }

        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
            40% {transform: translateY(-10px);}
            60% {transform: translateY(-5px);}
        }

        .bounce {
            animation: bounce 0.8s ease;
        }
    </style>
</head>

<body class="font-roboto">
    <!-- Top Bar -->
    <div class="bg-brandPrimary text-white py-2 px-4 flex flex-col md:flex-row md:justify-between items-center text-sm md:text-base">
        <div class="flex items-center mb-2 md:mb-0 space-x-2 md:space-x-4">
            <span class="hidden md:inline">Have any questions?</span>
            <i class="fas fa-phone-alt"></i>
            <a id="phoneLink" href="tel:+8801817547177" class="hover:underline">+88 01819250309</a>
            <i class="fas fa-envelope"></i>
            <a id="emailLink" href="mailto:info@TechKnowGram.com" class="hover:underline">info@TechKnowGram.com</a>
        </div>
        <div class="flex items-center space-x-2">
            <a id="facebookLink" href="https://www.facebook.com/TechKnowGramLTD" class="hover:text-brandSecondary"><i class="fab fa-facebook"></i></a>
            <a id="linkedinLink" href="https://www.linkedin.com/company/techknowgram/?trk=similar-pages&originalSubdomain=bd" class="hover:text-brandSecondary"><i class="fab fa-linkedin"></i></a>
        </div>
    </div>

    <!-- Navbar -->
    <div id="navbar" class="sticky-navbar top-0 bg-white shadow-lg py-2 px-4 md:px-16 z-50">
        <div class="flex items-center justify-between max-w-7xl mx-auto w-full">
            <div class="flex items-center text-2xl font-bold text-orange-600">
                <a href="{{ url_for('index') }}">
                    <img id="logo-img" src="{{ url_for('static', filename='assets/logo/logo.png') }}" alt="Freelanching Pathshala" class="logo-img w-20 h-auto md:w-28 md:h-auto">
                </a>
            </div>
            <nav class="hidden md:flex space-x-4 items-center">
                <a href="{{ url_for('index') }}" class="nav-link text-gray-700 hover:text-brandSecondary font-bold hover:underline">Home</a>
                <a href="{{ url_for('index') }}" class="nav-link text-gray-700 hover:text-brandSecondary font-bold hover:underline">About</a>
                <a href="{{ url_for('Video_Courses') }}" class="nav-link text-gray-700 hover:text-brandSecondary font-bold hover:underline">Video Courses</a>
                <a href="{{ url_for('Courses') }}" class="nav-link text-gray-700 hover:text-brandSecondary font-bold hover:underline">Courses</a>
                <a href="{{ url_for('All_Shows') }}" class="nav-link text-gray-700 hover:text-brandSecondary font-bold hover:underline">Our Show Episodes</a>
                <a href="{{ url_for('index') }}" class="nav-link text-gray-700 hover:text-brandSecondary font-bold hover:underline">Event</a>
                <a href="{{ url_for('index') }}" class="nav-link text-gray-700 hover:text-brandSecondary font-bold hover:underline">Contact</a>
                <button id="registerButton" class="text-white bg-[#5a1baf] hover:bg-blue-400 font-bold py-2 px-4 rounded transition">Register</button>
                <button id="loginButton" class="text-white bg-[#5a1baf] hover:bg-blue-400 font-bold py-2 px-4 rounded transition">Login</button>
            </nav>
            <button class="flex md:hidden text-gray-700 focus:outline-none" id="menu-btn">
                <i class="fas fa-bars text-2xl"></i>
            </button>
        </div>
    </div>

    <!-- Drawer -->
    <div id="drawer" class="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg drawer z-50 hidden">
        <div class="flex justify-between items-center p-4 border-b">
            <a href="{{ url_for('index') }}">
                <img src="{{ url_for('static', filename='assets/logo/logo.png') }}" alt="Freelanching Pathshala" class="w-32 md:w-44 h-16 md:h-10">
            </a>
            <button class="text-gray-700 focus:outline-none" id="close-btn">
                <i class="fas fa-times text-2xl"></i>
            </button>
        </div>
        <nav class="p-4 space-y-4">
            <a href="{{ url_for('index') }}" class="block py-2 text-gray-700 hover:text-brandSecondary font-bold nav-link">
                <i class="fas fa-home mr-2"></i>Home
            </a>
            <a href="{{ url_for('index') }}" class="block py-2 text-gray-700 hover:text-brandSecondary font-bold nav-link">
                <i class="fas fa-box mr-2"></i>About
            </a>
            <a href="{{ url_for('Video_Courses') }}" class="block py-2 text-gray-700 hover:text-brandSecondary font-bold nav-link">
                <i class="fas fa-images mr-2"></i>Video Courses
            </a>
            <a href="{{ url_for('Courses') }}" class="block py-2 text-gray-700 hover:text-brandSecondary font-bold nav-link">
                <i class="fas fa-images mr-2"></i>Courses
            </a>
            <a href="{{ url_for('All_Shows') }}" class="block py-2 text-gray-700 hover:text-brandSecondary font-bold nav-link">
                <i class="fas fa-images mr-2"></i>Our Show Episodes
            </a>
            <a href="{{ url_for('index') }}" class="block py-2 text-gray-700 hover:text-brandSecondary font-bold nav-link">
                <i class="fas fa-calendar-alt mr-2"></i>Event
            </a>
            <a href="{{ url_for('index') }}" class="block py-2 text-gray-700 hover:text-brandSecondary font-bold nav-link">
                <i class="fas fa-envelope mr-2"></i>Contact
            </a>
        </nav>
    </div>

    <div class="max-w-auto mx-auto px-8 py-8"> <!-- Increased px-4 to px-8 for more horizontal padding -->
        <div class="flex flex-col lg:flex-row gap-6">
            <!-- Main video player -->
            <div class="w-full lg:w-2/3">
                <div id="main-video" class="w-full h-[700px] mb-4">
                    <!-- Main video player will be inserted here -->
                </div>
                <h1 id="video-title" class="text-xl font-bold mb-2"></h1>
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center">
                        <img id="channel-icon" src="/api/placeholder/40/40" alt="Channel icon" class="w-10 h-10 rounded-full mr-3">
                        <div>
                            <p id="teachers-name" class="font-bold"></p>
                            <p id="subscribers" class="text-sm text-gray-500"></p>
                        </div>
                    </div>
                    <!-- <button class="glow-on-hover" type="button">HOVER ME, THEN CLICK ME!</button> -->
                    <button id="openPurchaseModal" class="combined-button">
                        Buy The Course & Unlock All of Your Lessons!
                        <div class="button-spots">
                            <span style="left: 10%; top: 50%;"></span>
                            <span style="left: 25%; top: 40%;"></span>
                            <span style="left: 40%; top: 60%;"></span>
                            <span style="left: 60%; top: 45%;"></span>
                            <span style="left: 75%; top: 55%;"></span>
                            <span style="left: 90%; top: 40%;"></span>
                        </div>
                    </button>
                    <script>
                        const button = document.querySelector('.combined-button');

                        function updateSpots(e) {
                            const rect = button.getBoundingClientRect();
                            const x = e ? e.clientX - rect.left : rect.width / 2;
                            const y = e ? e.clientY - rect.top : rect.height / 2;

                            const spots = button.querySelectorAll('.button-spots span');
                            spots.forEach((spot, index) => {
                                const spotX = (Math.sin((index / spots.length) * Math.PI * 2) * 30) + 50;
                                const spotY = (Math.cos((index / spots.length) * Math.PI * 2) * 30) + 50;
                                
                                spot.style.left = `${spotX}%`;
                                spot.style.top = `${spotY}%`;
                                spot.style.transform = `translate(${(x / rect.width) * 20 - 10}px, ${(y / rect.height) * 20 - 10}px)`;
                            });
                        }

                        button.addEventListener('mousemove', updateSpots);

                        function addBounceAnimation() {
                            button.classList.add('bounce');
                            updateSpots(); // Update spots without mouse event
                            button.addEventListener('animationend', () => {
                                button.classList.remove('bounce');
                            }, { once: true });
                        }

                        // Trigger bounce animation every 5 seconds
                        setInterval(addBounceAnimation, 5000);

                        // Also trigger bounce on click
                        button.addEventListener('click', addBounceAnimation);
                    </script>
                </div>
                <p id="teachers-about" class="text-sm text-gray-700 mb-4"></p>
                
                <!-- New Description Section -->
                <div class="mt-4">
                    <h2 class="text-lg font-semibold mb-1">Playlist Details</h2>
                    <p id="playlist-name" class="font-bold text-md mb-1"></p>
                    <p id="playlist-category" class="text-sm text-gray-500 mb-2"></p>
                    <p id="playlist-about" class="text-sm text-gray-700 mb-2"></p>
                    <h3 class="text-md font-semibold mb-1">About the Teacher</h3>
                    <p id="teachers-about" class="text-sm text-gray-700"></p>
                </div>
            </div>
            
    
            <!-- Video list -->
            <div class="w-full lg:w-1/3 ml-[100px]">
                <h2 id="playlist-name" class="text-lg font-bold mb-4"></h2>
                <div id="video-list" class="space-y-4">
                    <!-- Video list will be dynamically inserted here -->
                    <!-- Optional: Add margin to individual video items in JS when creating them -->
                    <!-- Example: videoCard.className = 'flex gap-4 cursor-pointer relative mx-2'; -->
                </div>
            </div>
        </div>
    </div>
    

    <script>
        // JavaScript for opening and closing the drawer
        const menuBtn = document.getElementById('menu-btn');
        const closeBtn = document.getElementById('close-btn');
        const drawer = document.getElementById('drawer');

        menuBtn.addEventListener('click', () => {
            drawer.classList.toggle('hidden');
            drawer.classList.toggle('open');
        });

        closeBtn.addEventListener('click', () => {
            drawer.classList.toggle('hidden');
            drawer.classList.toggle('open');
        });




        //         async function fetchPlaylistDetails() {
//             const urlParams = new URLSearchParams(window.location.search);
//             const playlistId = urlParams.get('id');

//             if (!playlistId) {
//                 console.error('No playlist ID provided');
//                 return;
//             }

//             try {
//                 const response = await fetch(`/fetch_playlist/${playlistId}`);
//                 if (!response.ok) throw new Error('Failed to fetch playlist details');
//                 const playlistData = await response.json();
//                 renderPlaylistDetails(playlistData);
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         }

//         function renderPlaylistDetails(playlistData) {
//             document.getElementById('playlist-name').textContent = playlistData.playlist_name;
//             document.getElementById('teachers-name').textContent = playlistData.teachers_name;
//             document.getElementById('teachers-about').textContent = playlistData.teachers_about;
//             document.getElementById('subscribers').textContent = '100K subscribers';

//             const mainVideo = document.getElementById('main-video');
//             const videoList = document.getElementById('video-list');

//             // Set the first video in the playlist as the main video
//             if (playlistData.videos.length > 0) {
//                 const firstVideo = playlistData.videos[0];
//                 setMainVideo(firstVideo);

//                 playlistData.videos.forEach((video, index) => {
//                     const videoCard = document.createElement('div');
//                     videoCard.className = 'flex gap-4 cursor-pointer';
//                     videoCard.innerHTML = `
//                         <div class="flex-shrink-0 w-40 h-24 bg-gray-300 relative">
//                             <iframe src="${video.course_link}" frameborder="0" allow="encrypted-media" class="w-full h-full absolute inset-0"></iframe>
//                         </div>
//                         <div class="flex-grow">
//                             <h3 class="font-bold text-sm mb-1">${video.course_title}</h3>
//                             <p class="text-xs text-gray-500">${video.teachers_name}</p>
//                             <p class="text-xs text-gray-500">${video.course_category}</p>
//                         </div>
//                     `;
                    
//                     // Add click event to change the main video when clicked
//                     videoCard.addEventListener('click', () => setMainVideo(video));
                    
//                     videoList.appendChild(videoCard);
//                 });
//             }
//         }

//         function setMainVideo(video) {
//     const videoId = extractVideoId(video.course_link);
//     const mainVideo = document.getElementById('main-video');
//     mainVideo.innerHTML = `
//       <div class="flex-shrink-0 w-full h-[600px] bg-gray-300 relative">
//         <iframe src="${video.course_link}" frameborder="0" allow="encrypted-media" class="w-full h-[600px] absolute inset-0"></iframe>
//       </div>  
//     `;
//     document.getElementById('video-title').textContent = video.course_title;
// }

// function extractVideoId(url) {
//     const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)|youtu\.be\/([^?&]+)/;
//     const matches = url.match(regex);
//     return matches ? matches[1] || matches[2] : null;
// }


//         fetchPlaylistDetails();
// async function fetchPlaylistDetails() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const playlistId = urlParams.get('id');

//     if (!playlistId) {
//         console.error('No playlist ID provided');
//         return;
//     }

//     try {
//         const response = await fetch(`/fetch_playlist/${playlistId}`);
//         if (!response.ok) throw new Error('Failed to fetch playlist details');
//         const playlistData = await response.json();
//         renderPlaylistDetails(playlistData);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// function renderPlaylistDetails(playlistData) {
//     document.getElementById('playlist-name').textContent = playlistData.playlist_name;
//     document.getElementById('teachers-name').textContent = playlistData.teachers_name;
//     document.getElementById('teachers-about').textContent = playlistData.teachers_about;
//     document.getElementById('subscribers').textContent = '100K subscribers';

//     const videoList = document.getElementById('video-list');
//     videoList.innerHTML = ''; // Clear existing video list

//     // Set the first video in the playlist as the main video and auto-play it
//     if (playlistData.videos.length > 0) {
//         const firstVideo = playlistData.videos[0];
//         setMainVideo(firstVideo, true); // Pass true to enable auto-play

//         playlistData.videos.forEach((video, index) => {
//             const videoCard = document.createElement('div');
//             videoCard.className = 'flex gap-4 cursor-pointer';

//             videoCard.innerHTML = `
//                 <div class="flex-shrink-0 w-60 h-40 bg-gray-300 relative">
//                     <img src="${playlistData.playlist_thumbnail}" class="w-full h-full absolute inset-0" alt="${video.course_title}" />
//                 </div>
//                 <div class="flex-grow">
//                     <h3 class="font-bold text-sm mb-1">${video.course_title}</h3>
//                     <p class="text-xs text-gray-500">${video.teachers_name}</p>
//                     <p class="text-xs text-gray-500">${video.course_category}</p>
//                 </div>
//             `;
            
//             // Add click event to change the main video when clicked
//             videoCard.addEventListener('click', () => setMainVideo(video));
            
//             videoList.appendChild(videoCard);
//         });
//     }
// }

// function setMainVideo(video, autoplay = false) {
//     const autoplayParam = autoplay ? '?autoplay=1' : '';
//     const mainVideo = document.getElementById('main-video');
//     mainVideo.innerHTML = `
//         <div class="flex-shrink-0 w-full h-[700px] bg-gray-300 relative rounded-lg overflow-hidden">
//             <iframe src="${video.course_link}${autoplayParam}" frameborder="0" allow="autoplay; encrypted-media" class="w-full h-[700px] absolute inset-0"></iframe>
//         </div>
//     `;
//     document.getElementById('video-title').textContent = video.course_title;
// }

// fetchPlaylistDetails();

//////////////// autoplay /////////////
// async function fetchPlaylistDetails() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const playlistId = urlParams.get('id');
    
//     if (!playlistId) {
//         console.error('No playlist ID provided');
//         return;
//     }
    
//     try {
//         const response = await fetch(`/fetch_playlist/${playlistId}`);
//         if (!response.ok) throw new Error('Failed to fetch playlist details');
//         const playlistData = await response.json();
//         renderPlaylistDetails(playlistData);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// function renderPlaylistDetails(playlistData) {
//     document.getElementById('playlist-name').textContent = playlistData.playlist_name;
//     document.getElementById('teachers-name').textContent = playlistData.teachers_name;
//     document.getElementById('teachers-about').textContent = playlistData.teachers_about;
//     document.getElementById('subscribers').textContent = '100K subscribers';
    
//     const videoList = document.getElementById('video-list');
//     videoList.innerHTML = ''; // Clear existing video list
    
//     // Set the first video in the playlist as the main video and auto-play it
//     if (playlistData.videos.length > 0) {
//         const firstVideo = playlistData.videos[0];
//         setMainVideo(firstVideo); // Always autoplay, so we don't need to pass a second argument
        
//         playlistData.videos.forEach((video, index) => {
//             const videoCard = document.createElement('div');
//             videoCard.className = 'flex gap-4 cursor-pointer';
            
//             videoCard.innerHTML = `
//                 <div class="flex-shrink-0 w-60 h-40 bg-gray-300 relative">
//                     <img src="${playlistData.playlist_thumbnail}" class="w-full h-full absolute inset-0" alt="${video.course_title}" />
//                 </div>
//                 <div class="flex-grow">
//                     <h3 class="font-bold text-sm mb-1">${video.course_title}</h3>
//                     <p class="text-xs text-gray-500">${video.teachers_name}</p>
//                     <p class="text-xs text-gray-500">${video.course_category}</p>
//                 </div>
//             `;
            
//             // Add click event to change the main video when clicked
//             videoCard.addEventListener('click', () => setMainVideo(video));
            
//             videoList.appendChild(videoCard);
//         });
//     }
// }

// function setMainVideo(video) {
//     const mainVideo = document.getElementById('main-video');
//     mainVideo.innerHTML = `
//         <div class="flex-shrink-0 w-full h-[700px] bg-gray-300 relative rounded-lg overflow-hidden">
//             <iframe 
//                 src="${video.course_link}?autoplay=1&mute=1" 
//                 frameborder="0" 
//                 allow="autoplay; encrypted-media" 
//                 allowfullscreen
//                 class="w-full h-[700px] absolute inset-0">
//             </iframe>
//         </div>
//     `;
//     document.getElementById('video-title').textContent = video.course_title;
// }

// // Load YouTube API
// if (!window.YT) {
//     const tag = document.createElement('script');
//     tag.src = "https://www.youtube.com/iframe_api";
//     const firstScriptTag = document.getElementsByTagName('script')[0];
//     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// }

// fetchPlaylistDetails();


let isCoursePurchased = false; // Track if the course is purchased
let currentPlaylistData = null; // Holds current playlist data

async function fetchPlaylistDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const playlistId = urlParams.get('id');
    
    if (!playlistId) {
        console.error('No playlist ID provided');
        return;
    }
    
    try {
        const response = await fetch(`/fetch_playlist/${playlistId}`);
        if (!response.ok) throw new Error('Failed to fetch playlist details');
        currentPlaylistData = await response.json();
        renderPlaylistDetails(currentPlaylistData);
    } catch (error) {
        console.error('Error:', error);
    }
}

function renderPlaylistDetails(playlistData) {
    document.getElementById('playlist-name').textContent = playlistData.playlist_name;
    document.getElementById('playlist-category').textContent = playlistData.playlist_category; 
    document.getElementById('teachers-name').textContent = playlistData.teachers_name;
    document.getElementById('teachers-about').textContent = playlistData.teachers_about;
    document.getElementById('subscribers').textContent = '100K subscribers';
    document.getElementById('playlist-about').textContent = playlistData.playlist_about; 

    const videoList = document.getElementById('video-list');
    videoList.innerHTML = ''; // Clear existing video list

    if (playlistData.videos.length > 0) {
        const firstVideo = playlistData.videos[0];
        setMainVideo(firstVideo);

        playlistData.videos.forEach((video, index) => {
            const videoCard = document.createElement('div');
            videoCard.className = 'flex gap-4 cursor-pointer relative';

            videoCard.innerHTML = `
                <div class="flex-shrink-0 w-60 h-40 bg-gray-300 relative">
                    <img src="${playlistData.playlist_thumbnail}" class="w-full h-full absolute inset-0" alt="${video.course_title}" />
                    ${!isCoursePurchased && index >= 3 ? getLockIcon() : ''}
                </div>
                <div class="flex-grow">
                    <h3 class="font-bold text-sm mb-1">${video.course_title}</h3>
                    <p class="text-xs text-gray-500">${video.teachers_name}</p>
                    <p class="text-xs text-gray-500">${video.course_category}</p>
                </div>
            `;

            videoCard.addEventListener('click', () => {
                if (isCoursePurchased || index < 3) {
                    setMainVideo(video);
                } else {
                    showPurchaseModal(); // Show purchase modal if course is not purchased
                }
            });

            videoList.appendChild(videoCard);
        });
    }
}

function setMainVideo(video) {
    const mainVideo = document.getElementById('main-video');
    mainVideo.innerHTML = `
        <div class="flex-shrink-0 w-full h-[700px] bg-gray-300 relative rounded-lg overflow-hidden">
            <iframe 
                src="${video.course_link}?autoplay=1&mute=1" 
                frameborder="0" 
                allow="autoplay; encrypted-media" 
                allowfullscreen
                class="w-full h-[700px] absolute inset-0">
            </iframe>
        </div>
    `;
    document.getElementById('video-title').textContent = video.course_title;
}

function getLockIcon() {
    return `
        <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        </div>
    `;
}

function showPurchaseModal() {
    // Create modal if it doesn't exist
    const existingModal = document.querySelector('.modal-container');
    if (existingModal) {
        existingModal.remove(); // Remove existing modal to prevent duplicates
    }

    const modal = document.createElement('div');
    modal.className = 'modal-container fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="bg-white p-8 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold mb-4">Buy the Course</h2>
            <p class="mb-4">Unlock all videos by purchasing the course!</p>
            <button id="buyCourseButton" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Buy the Course</button>
        </div>
    `;
    document.body.appendChild(modal);

    // Handle button click
    document.getElementById('buyCourseButton').addEventListener('click', () => {
        isCoursePurchased = true; // Mark course as purchased
        document.body.removeChild(modal); // Remove the modal
        renderPlaylistDetails(currentPlaylistData); // Update playlist details to show unlocked videos
    });
}

// Load YouTube API
if (!window.YT) {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Event listener for the button to open purchase modal
document.getElementById('openPurchaseModal').addEventListener('click', showPurchaseModal);

// Load the playlist details
fetchPlaylistDetails();

    </script>
</body>

</html>
