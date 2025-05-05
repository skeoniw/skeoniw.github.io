function moonPhase() {
    let today = new Date();
    let newMoonDate = new Date ('2025-04-27'); // this was the last new moon  
    let daysPassed = (today - newMoonDate) / (1000 * 3600 * 24); 
    let moonCycle = 29.5;
    let moonPhase = daysPassed % moonCycle;
    if (moonPhase < 1) {
        return 'new-moon';
    } else if (moonPhase < 7.4) {
        return 'waxing-crescent';
    } else if (moonPhase < 14.8){
        return 'first-quarter';
    } else if (moonPhase < 22.1){
        return 'waxing-gibbous';
    } else if (moonPhase <23.4) {
        return 'full-moon';
    } else if (moonPhase<29.5) {
        return 'waning-gibbous';
    } else {
        return 'waning-crescent';
    }
} // each phase lasts around 7.4 days 

function moonAppearance(){
    let moon = document.getElementsByClassName('moon')[0];
    let phase = moonPhase();
    moon.className = 'moon ' + phase; // lol this confused me for so long because i didn't realize i needed a space after moon
} 
setInterval(moonAppearance, 1000);
document.addEventListener('DOMContentLoaded', moonAppearance); 