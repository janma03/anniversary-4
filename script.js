// Add balloons dynamically for more animations
const balloonCount = 20; // You can increase the number for more balloons
const container = document.body;

for (let i = 0; i < balloonCount; i++) {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = `${Math.random() * 100}%`;
    container.appendChild(balloon);
}

// Play or pause background music on button click
const playButton = document.getElementById('play-button');
const music = document.getElementById('bg-music');

playButton.addEventListener('click', function () {
    if (music.paused) {
        music.play();
        playButton.textContent = 'Pause Music 🎵';
    } else {
        music.pause();
        playButton.textContent = 'Play Music 🎵';
    }
});
