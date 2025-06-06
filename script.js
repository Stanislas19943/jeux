// Variables to simulate users and posts
let postCount = 0;
let notificationCount = 0;

// Function to add a new post
function postUpdate() {
    const postContent = document.getElementById("newPost").value;
    
    if (postContent.trim() !== "") {
        postCount++;
        const post = document.createElement("div");
        post.classList.add("post");

        // Author and Date
        const postDate = new Date();
        const formattedDate = postDate.toLocaleString("fr-FR", {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        });

        post.innerHTML = `
            <div class="post-header">
                <span class="author">Stan</span>
                <span class="date">${formattedDate}</span>
            </div>
            <p class="post-content">${postContent}</p>
            <div class="post-actions">
                <button onclick="likePost(this)">J'aime</button>
                <button onclick="commentPost(this)">Commenter</button>
            </div>
            <div class="comments" style="display:none;">
                <textarea placeholder="Écrire un commentaire..."></textarea>
                <button onclick="submitComment(this)">Publier</button>
            </div>
        `;

        // Add the new post to the posts container
        document.getElementById("posts").prepend(post);

        // Clear the textarea
        document.getElementById("newPost").value = "";

        // Increment the notification count (simulate new activity)
        notificationCount++;
        document.getElementById("notificationCount").innerText = notificationCount;
    } else {
        alert("Veuillez entrer un texte pour publier !");
    }
}

// Function to "like" a post
function likePost(button) {
    const post = button.closest('.post');
    const likeButton = post.querySelector('button:first-of-type');
    likeButton.textContent = 'J\'aime (1)';
    likeButton.disabled = true;
}

// Function to show comment section
function commentPost(button) {
    const post = button.closest('.post');
    const commentSection = post.querySelector('.comments');
    commentSection.style.display = 'block';
}

// Function to submit a comment
function submitComment(button) {
    const commentSection = button.closest('.comments');
    const commentText = commentSection.querySelector('textarea').value;

    if (commentText.trim() !== "") {
        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");
        commentDiv.innerHTML = '<p>${commentText}</p><small>Juste maintenant</small>';

        const post = commentSection.closest('.post');
        post.querySelector('.comments').appendChild(commentDiv);
        commentSection.querySelector('textarea').value = "";
    } else {
        alert("Veuillez entrer un commentaire !");
    }
}