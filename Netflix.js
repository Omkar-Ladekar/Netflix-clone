function playVideo(videoId) {
    const videoPlayer = document.getElementById('main-video');
    videoPlayer.src = `https://www.youtube.com/embed/${videoId}`;
}

function changeProfile(event) {
    const profile = event.target.value;
    const movieList = document.getElementById('movie-list');
    
    // Clear the movie list
    movieList.innerHTML = '';

    if (profile === 'kids') {
        // Add kid-friendly content
        movieList.innerHTML = `
            <div class="movie" onclick="playVideo('IKhxRdN2UkQ')">
                <img src="C:\Users\deept\OneDrive\Pictures\Screenshots 1\Screenshot (51).png" alt="Kids Movie 1">
                <p>Kids Movie 1</p>
            </div>
            <div class="movie" onclick="playVideo('IKhxRdN2UkQ')">
                <img src="C:\Users\deept\OneDrive\Pictures\Screenshots 1\Screenshot (55).png" alt="Kids Movie 2">
                <p>Kids Movie 2</p>
            </div>
            <div class="movie" onclick="playVideo('IKhxRdN2UkQ')">
                <img src="C:\Users\deept\OneDrive\Pictures\Screenshots 1\Screenshot (56).png" alt="Kids Movie 3">
                <p>Kids Movie 3</p>
            </div>
        `;
    } else if (profile === 'other') {
        // Add other profile content
        movieList.innerHTML = `
            <div class="movie" onclick="playVideo('IKhxRdN2UkQ')">
                <img src="C:\Users\deept\OneDrive\Pictures\Screenshots 1\Screenshot (51).png" alt="Other Movie 1">
                <p>Other Movie 1</p>
            </div>
            <div class="movie" onclick="playVideo('IKhxRdN2UkQ')">
                <img src="C:\Users\deept\OneDrive\Pictures\Screenshots 1\Screenshot (55).png" alt="Other Movie 2">
                <p>Other Movie 2</p>
            </div>
            <div class="movie" onclick="playVideo('IKhxRdN2UkQ')">
                <img src="C:\Users\deept\OneDrive\Pictures\Screenshots 1\Screenshot (56).png" alt="Other Movie 3">
                <p>Other Movie 3</p>
            </div>
        `;
    } else {
        // Default content
        movieList.innerHTML = `
            <div class="movie" onclick="playVideo('IKhxRdN2UkQ')">
                <img src="C:\Users\deept\OneDrive\Pictures\Screenshots 1\Screenshot (51).png" alt="Movie 1">
                <p>Movie 1</p>
            </div>
            <div class="movie" onclick="playVideo('IKhxRdN2UkQ')">
                <img src="C:\Users\deept\OneDrive\Pictures\Screenshots 1\Screenshot (55).png" alt="Movie 2">
                <p>Movie 2</p>
            </div>
            <div class="movie" onclick="playVideo('IKhxRdN2UkQ')">
                <img src="C:\Users\deept\OneDrive\Pictures\Screenshots 1\Screenshot (56).png" alt="Movie 3">
                <p>Movie 3</p>
            </div>
        `;
    }
}