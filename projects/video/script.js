var video = document.getElementById('vid');
var vol = 1;

var isPlay = false;
var isMute = false;

var vidSelect = 1;

var pbSelect = 1;

var uBar = 10;

function updateVol (num) {
    vol += num;

    if (vol >= 1) {
        vol = 1;
    } else if (vol <= 0) {
        vol = 0;
    } 

    // console.log(vol);
    // update video element
    video.volume = vol;

    // document.getElementById('vol-left').style.width = (vol*500) + 'px';

    

    uBar += (num*10);

    if (uBar > 10) {
        uBar = 10;
    } else if (uBar < 1) {
        uBar = 1;
    }

    // document.getElementById('white-bar').style.backgroundColor = 'blue';

    if (num<0) {
        
        var i = uBar + 1;

        document.getElementById('bar'+i).style.opacity=0;

    } 

    if (num>=0) { 
        
        document.getElementById('bar'+uBar).style.opacity = 1;
    
    }

    
}

function playAlt () {

    if (isPlay == false) {
        video.play();
        isPlay = true;
        document.getElementById('switch-btn').innerHTML = "<i class='fas fa-pause'></i>";

    } else if (isPlay == true) {
        video.pause();
        isPlay = false;
        document.getElementById('switch-btn').innerHTML = "<i class='fas fa-play'></i>";
    }
}

function muteVol () {
    if (isMute == false) {
        video.muted = true;
        isMute = true;
        document.getElementById('mute-btn').innerHTML = "<i class='fas fa-volume-mute'></i>";

    } else if (isMute == true) {
        video.muted = false;
        isMute = false;
        document.getElementById('mute-btn').innerHTML = "<i class='fas fa-volume-down'></i>";
    }
}

function fsMode () {
    
    video.requestFullscreen();
    isFS = true;
    document.getElementById('fs-btn').innerHTML = "<i class='fas fa-expand'></i>";
}

function vidSwap (btnName) {

    // Check if Prev or next is pressed 
    if (btnName == 1) {
        vidSelect -= 1;
    } else if (btnName == 2) {
        vidSelect += 1;
    }     

    // Ensure videoSelect is between 1-3
    if (vidSelect > 3) {
        vidSelect = 1;
    } else if (vidSelect < 1) {
        vidSelect = 3;
    }

    // Assign video to number
    if (vidSelect == 1) {
        video.src = 'movie.mp4';
    } else if (vidSelect == 2) {
        video.src = 'movie2.mp4';
    } else if (vidSelect == 3) {
        video.src = 'movie3.mp4';
    }
}

function pbMode (btnName) {

    // Check if reduce or increase is pressed 
    if (btnName == 1) {
        pbSelect -= 0.25;
    } else if (btnName == 2) {
        pbSelect += 0.25;
    }   
    
    // Ensure pbSelect is between 0-3
    if (pbSelect > 3) {
        pbSelect = 3;
    } else if (pbSelect < 0) {
        pbSelect = 0;
    }

    video.playbackRate = pbSelect;
    document.getElementById('pbRate').innerHTML = pbSelect;
}