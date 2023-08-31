var second = 0;

function showTime(){
    var cue;
    
    let phase = Math.floor(second/4);
    let phaseOffset = second - 4*phase;
  
    switch(Math.floor(second/4)) {
        case 0: cue = "INHALE";
            break;
        case 1: cue = "HOLD";
            break;
        case 2: cue = "EXHALE";
            break;
        case 3: cue = "HOLD";
            break;
    }
    cue += " " + (phaseOffset + 1) + "/4";
    
    second = (second + 1) % 16;
    
    document.getElementById("MyClockDisplay").innerText = cue;
    document.getElementById("MyClockDisplay").textContent = cue;
    
    setTimeout(showTime, 1000);  
}

showTime();