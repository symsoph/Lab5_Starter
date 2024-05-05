// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const talkButton = document.querySelector('button');
  const voiceSelect = document.querySelector("#voice-select");
  const faceImage = document.querySelector('img');
  const speechSyn = window.speechSynthesis;

  talkButton.addEventListener('click', speakText);
  speechSyn.addEventListener('voiceschanged', populateVoiceList);

  populateVoiceList();

  function populateVoiceList() {
    // get available voices
    const voices = speechSyn.getVoices();

    voiceSelect.innerHTML = '';

    // create voice select dropdown
    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.textContent = voice.name;
      option.setAttribute('value', index);
      voiceSelect.appendChild(option);
    });
  }

  function speakText() {
    // get the text from textarea
    const textToSpeak = document.getElementById('text-to-speak').value;

    // get selected voice index from dropdown
    const selectedVoiceIndex = voiceSelect.value;

    // get the selected voice from voices list
    const voices = speechSyn.getVoices();
    const selectedVoice = voices[selectedVoiceIndex];

    // create a SpeechSynthesisUtterance object
    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    // set the selected voice for the utterance
    utterance.voice = selectedVoice;

    // set event listener for when speech starts
    utterance.onstart = function () {
      // swap smiling to open
      faceImage.src = 'assets/images/smiling-open.png';
    };

    // set event listener for when speech ends
    utterance.onend = function () {
      // swap open to smiling
      faceImage.src = 'assets/images/smiling.png';
    };

    // speak the text
    speechSyn.speak(utterance);
  }
}