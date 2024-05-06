// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const button = document.querySelector("button");
  const inputTxt = document.getElementById("text-to-speak");
  const voiceSelect = document.querySelector("select");
  const faceImg = document.querySelector('img');

button.addEventListener('click', speak);
synth.addEventListener('voiceschanged', populateVoiceList);

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

  const selectedIndex =
    voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
  voiceSelect.innerHTML = "";

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " -- DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
  voiceSelect.selectedIndex = selectedIndex;
}

populateVoiceList();

if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

function speak() {
  // when text is inputted
  if (inputTxt.value !== "") {
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
   
// set event listener for when speech starts
 utterThis.onstart = function () {
// swap smiling to open
      faceImg.src = 'assets/images/smiling-open.png';
    };

    // when done speaking
    utterThis.onend = function () {
      faceImg.src = 'assets/images/smiling.png';
      console.log("SpeechSynthesisUtterance.onend");
    };
    
    utterThis.onerror = function () {
      console.error("SpeechSynthesisUtterance.onerror");
    };
    // selected voice
    const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute("data-name");
    
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
        break;
      }
  }
  synth.speak(utterThis);
}
}

}