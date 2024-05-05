// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
const button = document.querySelector("button");
// const inputForm = document.querySelector("textarea");
const inputTxt = document.getElementById("text-to-speak");
const voiceSelect = document.querySelector("select");
const faceImg = document.querySelector('img');
// const pitch = document.querySelector("#pitch");
// const pitchValue = document.querySelector(".pitch-value");
// const rate = document.querySelector("#rate");
// const rateValue = document.querySelector(".rate-value");

let voices = [];

function populateVoiceList() {
  voices = synth.getVoices().sort(function (a, b) {
    const aname = a.name.toUpperCase();
    const bname = b.name.toUpperCase();

    if (aname < bname) {
      return -1;
    } else if (aname == bname) {
      return 0;
    } else {
      return +1;
    }
  });
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
  // if (synth.speaking) {
  //   faceImg.src = 'assets/images/smiling-open.png';
  // }
  if (inputTxt.value !== "") {
    faceImg.src = 'assets/images/smiling-open.png';
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);

    utterThis.onend = function (event) {
      console.log("SpeechSynthesisUtterance.onend");
    };

    utterThis.onerror = function (event) {
      console.error("SpeechSynthesisUtterance.onerror");
    };

    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
        break;
      }
    }
    synth.speak(utterThis);
    // can not have source  twice in same function??
  }
  if (!synth.speaking){
    faceImg.src = 'assets/images/smiling.png';
  }
  
  }

button.addEventListener('click', (event) => {
  speak();
});

}