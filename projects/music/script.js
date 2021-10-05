// Song Objects

var song1 = {
    src: 'audio/30sec',
    title: 'Happy Birthday',
    artist: 'Justin B',
    image: 'url(images/kl.jpg)'
}

var song2 = {
    src: 'audio/bgmusic.mp3',
    title: 'Louder',
    artist: 'Martin Kelly',
    image: 'url(images/ny.jpg)'
}

var song3 = {
    src: 'audio/bloop.mp3',
    title: 'Rock Anthem',
    artist: 'David Prost',
    image: 'url(images/paris.jpg)'
}

var song4 = {
    src: 'audio/click.mp3',
    title: 'Click Click Click',
    artist: 'George Sunderland',
    image: 'url(images/sydney.jpg)'
}

var song5 = {
    src: 'audio/littlebit.mp3',
    title: 'Little Bit',
    artist: "Let's Go",
    image: 'url(images/london.jpg)'
}

var songsList = [song1,song2,song3,song4,song5];

var songInd = 0;
var songMax = songsList.length - 1;


var audio = document.getElementById('aud');
var vol = 1;

var isPlay = false;
var isMute = false;

var vidSelect = 1;

var uBar = 10;

function updateVol (num) {
    vol += num;

    if (vol >= 1) {
        vol = 1;
    } else if (vol <= 0) {
        vol = 0;
    } 

  
    audio.volume = vol;    
    uBar += (num*10);

    if (uBar > 10) {
        uBar = 10;
    } else if (uBar < 1) {
        uBar = 1;
    }
 

    if (num<0) {
        
        var i = uBar + 1;

        document.getElementById('bar'+i).style.opacity = 0 ;
    } 

    if (num>=0) { 
        
        document.getElementById('bar'+uBar).style.opacity = 1;
    }

    
}

function playAlt () {

    if (isPlay == false) {
        audio.play();
        isPlay = true;
        document.getElementById('switch-btn').innerHTML = "<i class='fas fa-pause'></i>";

    } else if (isPlay == true) {
        audio.pause();
        isPlay = false;
        document.getElementById('switch-btn').innerHTML = "<i class='fas fa-play'></i>";
    }
}

function muteVol () {
    if (isMute == false) {
        audio.muted = true;
        isMute = true;
        document.getElementById('mute-btn').innerHTML = "<i class='fas fa-volume-mute'></i>";

    } else if (isMute == true) {
        audio.muted = false;
        isMute = false;
        document.getElementById('mute-btn').innerHTML = "<i class='fas fa-volume-down'></i>";
    }
}

function audSwap (btnName) {



    // Check if Prev or Next is pressed 
    if (btnName == 1) {
        songInd -= 1;
    } else if (btnName == 2) {
        songInd += 1;
    }     

    // Ensure songInd is between 0-songMax
    if (songInd > songMax) {
        songInd = 0;
    } else if (songInd < 0) {
        songInd = songMax;
    }

    // Change audio file 
    audio.src = songsList[songInd].src;

    // Change container BG image
    console.log(songsList[songInd].image);
    document.body.style.backgroundImage = songsList[songInd].image;

    // Change song title
    document.getElementById('song-title').innerHTML = songsList[songInd].title;

    // Change artist name
    document.getElementById('artist').innerHTML = songsList[songInd].artist;
    
}

var sng = document.getElementById('aud');
var timeBar = document.getElementById('timeBar');

setInterval(checkTime, 1000) ;
console.log (sng.duration);


function checkTime () {
    
    // console.log(sng.currentTime);

    var songDuration = (sng.duration);
    var timebarWidth = (sng.currentTime/songDuration) * 100;

    timeBar.style.width = timebarWidth + '%';

   
    document.getElementById('over').innerHTML = Math.round(timebarWidth) + ' %';
    

    // widthPx = (sng.currentTime/songDuration) * 500;

    // console.log(widthPx);

    // if (widthPx >= 100) {
    //     document.getElementById('icon1').style.opacity = 1;
    // } else {
    //     document.getElementById('icon1').style.opacity = 0;
    // }

    // if (widthPx >= 200) {
    //     document.getElementById('icon2').style.opacity = 1;
    // } else {
    //     document.getElementById('icon2').style.opacity = 0;
    // }
  

    // if (widthPx >= 300) {
    //     document.getElementById('icon3').style.opacity = 1;
    // } else {
    //     document.getElementById('icon3').style.opacity = 0;
    // }
  

    // if (widthPx >= 400) {
    //     document.getElementById('icon4').style.opacity = 1;
    // } else {
    //     document.getElementById('icon4').style.opacity = 0;
    // }
  
  
}

