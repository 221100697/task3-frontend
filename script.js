let audio = document.getElementById('audio');
let playPauseButton = document.getElementById('play-pause-button');
let stopButton = document.getElementById('stop-button');
let songTitle = document.getElementById('song-title');
let artistName = document.getElementById('artist-name');

// Set song title and artist name (could be dynamically changed if needed)
songTitle.textContent = 'Your Song Title';
artistName.textContent = 'Your Artist Name';

// Play/Pause functionality
playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audio.pause();
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    }
});

// Stop functionality
stopButton.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0; // Reset audio to the start
    playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
});
