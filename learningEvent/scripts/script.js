// 2nd way to create event
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// 3rd Way to create Event
const makeBlue = document.getElementById('make-blue-button');
makeBlue.onclick = makingEvent;
// here we did not called makingEvent function, we assigned the function value there. 

function makingEvent() {
    document.body.style.backgroundColor = 'blue';
}


// 3rd way another option
const makePurple = document.getElementById('make-purple-button');
makePurple.onclick = function makingPurple() {
    document.body.style.backgroundColor = 'purple';
}

// option 4 - will use this option
const makeViolet = document.getElementById('make-violet-button');
makeViolet.addEventListener('click', makingViolet)
function makingViolet(){
    document.body.style.backgroundColor = 'violet';
}

// option 4 - another way
const makeAsh = document.getElementById('make-ash-button');
makeAsh.addEventListener('click', function makingAsh(){
    document.body.style.backgroundColor = 'grey';
})

// option 4: final option
document.getElementById('make-orange-button').addEventListener('click',function(){
    document.body.style.backgroundColor = 'goldenrod';
})