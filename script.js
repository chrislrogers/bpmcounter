const bpmHTML = document.getElementById("bpm");
const instHTML = document.getElementById("instructions");

let counter = 0; // number of times user has tapped.
let startTime  = 0; // time user started tapping.

document.addEventListener("click", function(){
    let date = new Date();
    let time = date.getTime(); // gets time in milliseconds
    
    if (counter === -1) {
        counter = 0;
    } else if (counter === 0) {
        instHTML.innerHTML = "Tap again.";
        startTime = time;
        counter = 1;
    } else {
        bpmHTML.innerHTML = Math.round(60000 * counter / (time - startTime));
        counter++;
    }
});

function reset() {
    counter = -1;
    startTime  = 0;
    instHTML.innerHTML = "Tap or click to begin.";
}
