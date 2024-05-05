// expose.js

window.addEventListener('DOMContentLoaded', init); // all content is loaded

function init() {
  //button
  let button = document.querySelector('button');
  //audio file
  let audio_file = new Audio(document.getElementsByClassName('hidden')[0]); // returns array, so need index
  // alert(audio_file);
  // console.log('audio_file.toString()');
  //no other index works
  const audio1 = new Audio("assets/audio/air-horn.mp3"); // works
  const audio2 = new Audio("assets/audio/car-horn.mp3");
  
  let picture = document.querySelector('[alt = "No image selected"]');
  // alert(picture);

  // DO NOT USE EVER - picture.load();

  const img = new Image(); // Create new img element
  // img.src = "assets/images/car-horn.svg"; // Set source path

  let type_horn = document.getElementById('horn-select');
  // alert(type_horn);
  // //true audio? 
  //images

  
  /**https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event */
  type_horn.addEventListener("input", (event) => { // runs when user selects from dropdown
    const selectedHorn = type_horn.value;
    // audio2.play();
    picture.src = `assets/images/${selectedHorn}.svg`; // change source of picture
    // IT was BACK TICK
  });

  button.addEventListener("click", (event) => {
    const selectedHorn = type_horn.value;
    let sound = new Audio(`assets/audio/${selectedHorn}.mp3`); 
    sound.play();
    

  });
}