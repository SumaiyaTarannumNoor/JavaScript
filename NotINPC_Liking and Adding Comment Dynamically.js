document.addEventListener('DOMContentLoaded', function () {
    const socket = io();  // Connect to Socket.IO server
    const postsContainer = document.getElementById('postsContainer');

    // Initial fetch on page load
    fetch('/fetch_user_blog_id')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.data.forEach(post => {
                addPost(post);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));

    // Listen for new posts from Socket.IO server
    socket.on('new_post', function (post) {
        addPost(post);
    });

    // Function to add a single post to the UI
    function addPost(post) {
        const postElement = document.createElement('div');
        postElement.className = 'bg-white border border-gray-300 rounded-lg p-4 mb-6';
        postElement.innerHTML = `
            <div class="flex items-start mb-4">
                <img src="${post.user_image || 'https://placehold.co/48x48'}" alt="Profile picture of ${post.user_name}" class="w-12 h-12 rounded-full">
                <div class="ml-4">
                    <div class="flex items-center">
                        <h2 class="text-sm font-semibold">${post.user_name}</h2>
                    </div>
                    <p class="text-sm text-gray-500">${post.years_of_experience || "Yet to gain Experience"}</p>
                    <p class="text-sm text-gray-500">${post.made_on} • <i class="fas fa-globe text-[#832aff]"></i></p>
                </div>
            </div>
            <div class="relative">
                <p id="post-text-${post.blog_id}" class="text-sm text-gray-700 mb-4 truncate-text">${post.emojiText}</p>
                <a id="toggle-link-${post.blog_id}" href="#" class="absolute bottom-0 right-0 text-blue-600 text-sm px-1 bg-white">...see more</a>
            </div>
            <div class="">
                ${post.imageFile ? `<img src="${post.imageFile}" alt="" class="bg-white border border-gray-300 rounded-lg">` : ''}
            </div>
            <div class="flex items-center mb-4">
                <div class="flex items-center mr-4">
                    <i class="fas fa-thumbs-up text-purple-600"></i>
                    <span id="like-count-${post.blog_id}" class="text-gray-500 ml-2">${post.like || 0}</span>
                </div>
                <p id="comment-count-${post.blog_id}" class="text-gray-500">• ${post.comment || 0} comments</p>
            </div>
            <div class="p-2 bg-white">
                <div class="flex flex-wrap items-center justify-between space-x-2">
                    <button class="like-button ${post.user_liked ? 'liked' : 'unliked'} flex items-center space-x-1 text-gray-700 hover:text-black text-sm sm:text-base" data-post-id="${post.blog_id}" data-liked="${post.user_liked}">
                        <i class="far fa-thumbs-up"></i>
                        <span>Like</span>
                    </button>
                    <button class="flex items-center space-x-1 text-gray-700 hover:text-black text-sm sm:text-base">
                        <i class="far fa-comment text-[#832aff]"></i>
                        <span>Comment</span>
                    </button>
                    <button class="flex items-center space-x-1 text-gray-700 hover:text-black text-sm sm:text-base">
                        <i class="fas fa-share text-[#832aff]"></i>
                        <span>Share</span>
                    </button>
                    <button class="flex items-center space-x-1 text-gray-700 hover:text-black text-sm sm:text-base">
                        <i class="far fa-bookmark text-[#832aff]"></i>
                        <span>Save</span>
                    </button>
                </div>
            </div>
            <div class="border-t border-gray-300 pt-4">
                <div class="flex items-start">
                    <img src="https://placehold.co/36x36" alt="Profile picture of commenter" class="w-9 h-9 rounded-full">
                    <div class="ml-4 mt-2 w-full">
                        <input type="text" placeholder="Add a comment..." class="comment-input w-full p-3 border border-[#832aff] rounded-full focus:outline-none focus:ring-2 focus:ring-[#832aff] transition duration-300 ease-in-out" data-post-id="${post.blog_id}">
                        <div class="flex justify-end mt-2">
                            <a href="#" class="comment-submit text-[#8a3ef5] hover:text-[#5a1baf]" title="Send" data-post-id="${post.blog_id}">
                                <i class="fas fa-paper-plane text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;

        postsContainer.insertBefore(postElement, postsContainer.firstChild);

        // Remove old posts if there are too many (optional)
        const maxPosts = 20;  // Adjust as needed
        while (postsContainer.children.length > maxPosts) {
            postsContainer.removeChild(postsContainer.lastChild);
        }

        const likeButton = postElement.querySelector(`.like-button[data-post-id="${post.blog_id}"]`);
        if (likeButton) {
            likeButton.addEventListener('click', function () {
                toggleLike(post.blog_id, likeButton);
            });
        }

        const toggleLink = document.getElementById(`toggle-link-${post.blog_id}`);
        const postText = document.getElementById(`post-text-${post.blog_id}`);

        toggleLink.addEventListener('click', function (event) {
            event.preventDefault();
            if (postText.classList.contains('truncate-text')) {
                postText.classList.remove('truncate-text');
                toggleLink.textContent = '...see less';
            } else {
                postText.classList.add('truncate-text');
                toggleLink.textContent = '...see more';
            }
        });

        const commentSubmitButton = postElement.querySelector(`.comment-submit[data-post-id="${post.blog_id}"]`);
        if (commentSubmitButton) {
            commentSubmitButton.addEventListener('click', function (event) {
                event.preventDefault();
                const commentInput = postElement.querySelector(`.comment-input[data-post-id="${post.blog_id}"]`);
                const comment = commentInput.value.trim();
                if (comment) {
                    submitComment(post.blog_id, comment, commentInput);
                }
            });
        }
    }

    // Function to submit a comment
    function submitComment(blogId, comment, commentInput) {
        fetch(`/add_comment/${blogId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',  // Include cookies in the request
            body: JSON.stringify({ comment: comment })
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === "Comment added successfully") {
                alert("Comment added!");

                // Update the comment count
                const commentCountSpan = document.getElementById(`comment-count-${blogId}`);
                if (commentCountSpan) {
                    commentCountSpan.textContent = `• ${data.comment_count || 0} comments`;
                }

                // Clear the comment input field after the comment is added
                commentInput.value = '';
            } else {
                console.error('Error adding comment:', data.message);
            }
        })
        .catch(error => console.error('Error:', error));
    }

    // Function to toggle like status
    function toggleLike(postId, likeButton) {
        fetch(`/toggle_like/${postId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'  // This is important for including cookies in the request
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === "Like toggled successfully") {
                const likeCountSpan = document.getElementById(`like-count-${postId}`);
                likeCountSpan.textContent = data.like_count;

                if (data.action === 'liked') {
                    likeButton.classList.remove('unliked');
                    likeButton.classList.add('liked');
                    likeButton.style.color = '#832aff';  // Apply purple color when liked
                } else {
                    likeButton.classList.remove('liked');
                    likeButton.classList.add('unliked');
                    likeButton.style.color = '';  // Reset to default color
                }
            } else {
                console.error('Error toggling like status:', data.message);
            }
        })
        .catch(error => console.error('Error:', error));
    }
});
