// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
    // select elements
    const hornSelect = document.querySelector('#horn-select');
    const volumeSlider = document.querySelector('#volume');
    const soundButton = document.querySelector('button');
    const hornImage = document.querySelector('img');
    const hornSound = document.querySelector('audio');
    const volumeIcon = document.querySelector('#volume-controls img');
    const jsConfetti = new JSConfetti();
 
    // add event listeners
    hornSelect.addEventListener('change', updateHorn);
    volumeSlider.addEventListener('input', updateVolume);
    soundButton.addEventListener('click', playSound);


    function updateHorn() {
        // get selected horn
        const selectedHorn = hornSelect.value;
        // update horn image
        hornImage.src = `assets/images/${selectedHorn}.svg`;
        // update horn audio
        hornSound.src = `assets/audio/${selectedHorn}.mp3`;
    }

    function updateVolume() {
        // get current volume level
        const volumeLevel = volumeSlider.value;
        // update the volume icon
        if (volumeLevel == 0) {
            volumeIcon.src = 'assets/icons/volume-level-0.svg';
        } else if (volumeLevel < 33) {
            volumeIcon.src = 'assets/icons/volume-level-1.svg';
        } else if (volumeLevel < 67) {
            volumeIcon.src = 'assets/icons/volume-level-2.svg';
        } else {
            volumeIcon.src = 'assets/icons/volume-level-3.svg';
        }

        hornSound.volume = volumeLevel / 100;
    }

    function playSound() {
        // get horn
        const selectedHorn = hornSelect.value;

        hornSound.play();

        // play confetti if party horn selected
        if (selectedHorn === 'party-horn') {
            jsConfetti.addConfetti()
        }
    }
}