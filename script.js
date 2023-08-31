var soundEnabled = 0;
var second = 0;

const sounds = {
  2: document.getElementById('audio-two'),
  3: document.getElementById('audio-three'),
  4: document.getElementById('audio-four'),
  "inhale": document.getElementById('audio-inhale'),
  "exhale": document.getElementById('audio-exhale'),
  "hold": document.getElementById('audio-hold')
};

const phases = {
  0: "inhale",
  1: "hold",
  2: "exhale",
  3: "hold"
};

function showTime(){
  var cue;

  let phase = Math.floor(second/4);
  let offset = second - 4*phase;
  let phaseName = phases[phase];

  cue = `${phaseName} ${offset + 1}/4`;

  if(soundEnabled) {
    if(offset == 0) {
      sounds[phaseName].play();
    } else {
      sounds[offset + 1].play();
    }      
  }

  second = (second + 1) % 16;

  document.getElementById("MyClockDisplay").innerText = cue;
  document.getElementById("MyClockDisplay").textContent = cue;

  setTimeout(showTime, 1000);  
}

showTime();

const enableAudioButton = document.getElementById("enableAudioButton");

enableAudioButton.addEventListener('click', function(){
  soundEnabled = 1;

  sounds[2].play(); 
  sounds[3].play(); 
  sounds[4].play(); 
  sounds['inhale'].play(); 
  sounds['exhale'].play(); 
  sounds['hold'].play(); 
  window.setTimeout(function(){
    sounds[2].pause();
    sounds[3].pause();
    sounds[4].pause();
    sounds['inhale'].pause();
    sounds['exhale'].pause();
    sounds['hold'].pause();
  },1);
});

const disableAudioButton = document.getElementById("disableAudioButton");

disableAudioButton.addEventListener('click', function(){
  soundEnabled = 0;
  
  sounds[2].pause();
  sounds[3].pause();
  sounds[4].pause();
  sounds['inhale'].pause();
  sounds['exhale'].pause();
  sounds['hold'].pause();
})