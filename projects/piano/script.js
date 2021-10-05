// Event Listeners to detect keydown and keyup

window.addEventListener("keydown", keyPressed);
window.addEventListener("keyup", keyRelease);

// Variables to access DOM
var keyHolder = document.getElementById('key-holder');

var container = document.getElementById('container');

// Storing required key info in object in array
var keyList = [
    {
        keyName: "A",
        src: new Howl({src:['audio/1.mp3']}),
        keyCode: 65,
        bgColor: 'linear-gradient(to right,red,yellow)'
    },
    {
        keyName: "S",
        src: new Howl({src:['audio/2.mp3']}),
        keyCode: 83,
        bgColor: 'linear-gradient(to right,yellow,green)'
    },
    {
        keyName: "D",
        src: new Howl({src:['audio/3.mp3']}),
        keyCode: 68,
        bgColor: 'linear-gradient(to right,green,violet)'
    },
    {
        keyName: "F",
        src: new Howl({src:['audio/4.mp3']}),
        keyCode: 70,
        bgColor: 'linear-gradient(to right,violet,pink)'
    },
    {
        keyName: "G",
        src: new Howl({src:['audio/5.mp3']}),
        keyCode: 71,
        bgColor: 'linear-gradient(to right,pink,orange)'
    },
    {
        keyName: "H",
        src: new Howl({src:['audio/6.mp3']}),
        keyCode: 72,
        bgColor: 'linear-gradient(to right,orange,green)'
    },
    {
        keyName: "J",
        src: new Howl({src:['audio/7.mp3']}),
        keyCode: 74,
        bgColor: 'linear-gradient(to right,green,magenta)'
    },
    {
        keyName: "K",
        src: new Howl({src:['audio/8.mp3']}),
        keyCode: 75,
        bgColor: 'linear-gradient(to right,magenta,red)'
    },
    {
        keyName: "L",
        src: new Howl({src:['audio/9.mp3']}),
        keyCode: 76,
        bgColor: 'linear-gradient(to right,red,black)'
    },
]

// Loop through keys to create required number of white tiles

for (i = 0; i < keyList.length; i++) {
    var whiteTile = document.createElement('span');

    var pianoKeyTitle = document.createElement('h2');
    pianoKeyTitle.innerHTML = keyList[i].keyName;

    whiteTile.classList.add('white-key');
    whiteTile.appendChild(pianoKeyTitle);

    keyHolder.appendChild(whiteTile);
   
}

// variable to access DOM for white tiles

var keyId = document.querySelectorAll('.white-key');

keyCheck = [];


// Function for what happens when key is pressed
function keyPressed (evt) {
    keyCheck[evt.keyCode] = true;

    // Loop through to check which key index matches pressed key, and play that audio file
    for (i = 0; i < keyList.length; i++) {
        if (keyList[i].keyCode == evt.keyCode) {
            keyList[i].src.play();
            
        }
    } 

    // Getting index of pressed key
    var pos = keyList.map(function(e) { return e.keyCode; }).indexOf(evt.keyCode);
            
    // Animating button press
    keyId[pos].classList.add("animate");
    keyId[pos].classList.remove("animateOut");

    // Changing bg color when button pressed and timeOut to release color
    keyId[pos].style.backgroundImage = keyList[pos].bgColor;
    setTimeout(function() {keyId[pos].style.backgroundImage = 'none';},1000);
}

// function for what happens when key is released
function keyRelease (evt) {
    delete keyCheck[evt.keyCode];

    var pos = keyList.map(function(e) { return e.keyCode; }).indexOf(evt.keyCode);

    // Animating button release
    keyId[pos].classList.add("animateOut");
    keyId[pos].classList.remove("animate");

    // keyId[pos].style.backgroundImage = 'none';
}   

