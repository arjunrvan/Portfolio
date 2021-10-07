var navBar = document.querySelector('nav');
var menuBtn = document.querySelector('.menu-btn');
var navBarMenu = document.querySelector('.menu');
var carousel = document.getElementById('carousel');
var children = carousel.children;
var skillCont = document.querySelector('.skills');

var openMenu = 1;
var posCar = 0;

var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

window.addEventListener('scroll', function () {
    // console.log(this.scrollY);
    if (this.scrollY > 20) {
        navBar.classList.add('sticky');
    } else {
        navBar.classList.remove('sticky');
    }
},false)

// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/7.15.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGs7pXpGkNbummJOc1oKD_yBqvDj2k7BE",
  authDomain: "portfolio-8ec7a.firebaseapp.com",
  databaseURL: "https://portfolio-8ec7a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-8ec7a",
  storageBucket: "portfolio-8ec7a.appspot.com",
  messagingSenderId: "537574027328",
  appId: "1:537574027328:web:f45e0a232d64f02aa7afa5"
};

// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

function sendData () {
    alert('Submitted!');
    var nameText = document.querySelectorAll('input')[0];
    var emailText = document.querySelectorAll('input')[1];
    var subjectText = document.querySelectorAll('input')[2];
    var msgText = document.querySelector('textarea');

    firebase.database().ref('users/' + nameText.value).set({
        name: nameText.value,
        email: emailText.value,
        subject: subjectText.value,
        msg: msgText.value
    })

    document.querySelector('form').reset();
}
  
// toggle menu / navbar script 

function closeMenu () {
    if (navBarMenu.classList.contains('active')) {
        navBarMenu.classList.remove('active');
    }

    menuBtn.innerHTML = "<i class='fas fa-bars'></i>";
    var menuIcon = menuBtn.firstChild;
    menuIcon.onclick = toggleMenu;
    openMenu = 1;
    window.onscroll = function () {};
}

function toggleMenu () {
    navBarMenu.classList.toggle('active');

    switch (openMenu) {
        case 1:
            menuBtn.innerHTML = "<i class='fas fa-times'></i>";
            var menuIcon = menuBtn.firstChild;
            menuIcon.onclick = toggleMenu;
            openMenu = 0;
            window.scrollTo(0, 0);
            window.onscroll = function () { window.scrollTo(0, 0);};
            break;

        case 0:
            menuBtn.innerHTML = "<i class='fas fa-bars'></i>";
            var menuIcon = menuBtn.firstChild;
            menuIcon.onclick = toggleMenu;
            openMenu = 1;
            window.onscroll = function () {};
            break;

        default:
            break;
    }
}

// For width larger than 820px
function carouselMove (num) {
   
    if (num > 0) {

        if (posCar > 2) {
            posCar = 2;
        } 

        if (posCar == 2) {
            nextBtn.style.opacity = '0.5';
            prevBtn.style.opacity = '1';
        } else {
            nextBtn.style.opacity = '1';
            prevBtn.style.opacity = '1';
        }

        children[posCar].style.display = 'none';
        children[posCar+3].style.display = 'block';
        posCar +=1 ;
    } 
    
    if (num < 0) {

        if (posCar < 1) {
            posCar = 1;
        }

        if (posCar == 1) {
            prevBtn.style.opacity = '0.5';
            nextBtn.style.opacity = '1';
        } else {
            prevBtn.style.opacity = '1';
            nextBtn.style.opacity = '1';
        }

        children[posCar+2].style.display = 'none';
        children[posCar-1].style.display = 'block';
        posCar -=1 ;
    }
}

// For width between 500px and 820px
function carouselMoveMed (num) {
   
    if (num > 0) {

        if (posCar > 3) {
            posCar = 3;
        } 

        if (posCar == 3) {
            nextBtn.style.opacity = '0.5';
            prevBtn.style.opacity = '1';
        } else {
            nextBtn.style.opacity = '1';
            prevBtn.style.opacity = '1';
        }

        children[posCar].style.display = 'none';
        children[posCar+2].style.display = 'block';
        posCar +=1 ;
    } 
    
    if (num < 0) {

        if (posCar < 1) {
            posCar = 1;
        }

        if (posCar == 1) {
            prevBtn.style.opacity = '0.5';
            nextBtn.style.opacity = '1';
        } else {
            prevBtn.style.opacity = '1';
            nextBtn.style.opacity = '1';
        }

        children[posCar+1].style.display = 'none';
        children[posCar-1].style.display = 'block';
        posCar -=1 ;
    }
}

// For width less than 500px
function carouselMoveSmall (num) {
   
    if (num > 0) {

        if (posCar > 4) {
            posCar = 4;
        } 

        if (posCar == 4) {
            nextBtn.style.opacity = '0.5';
            prevBtn.style.opacity = '1';
        } else {
            nextBtn.style.opacity = '1';
            prevBtn.style.opacity = '1';
        }

        children[posCar].style.display = 'none';
        children[posCar+1].style.display = 'block';
        posCar +=1 ;
    } 
    
    if (num < 0) {

        if (posCar < 1) {
            posCar = 1;
        }

        if (posCar == 1) {
            prevBtn.style.opacity = '0.5';
            nextBtn.style.opacity = '1';
        } else {
            prevBtn.style.opacity = '1';
            nextBtn.style.opacity = '1';
        }

        children[posCar].style.display = 'none';
        children[posCar-1].style.display = 'block';
        posCar -=1 ;
    }
}

var widths = [550, 800];

window.addEventListener('resize',function () {
    // console.log('it works');
    // console.log (window.innerWidth);
    for(var i=0; i<children.length; i++) {
        children[i].style.display = 'none';
    }
    if (window.innerWidth<=widths[0])  {
        children[posCar].style.display = 'block';
        // console.log('it works 1');
        prevBtn.onclick = carouselMoveSmall.bind(this, -1);
        nextBtn.onclick = carouselMoveSmall.bind(this, 1);
    } else if (window.innerWidth>=widths[0] && window.innerWidth<widths[1]) {
        // children.style.display = 'none';
        children[posCar].style.display = 'block';
        children[posCar + 1].style.display = 'block';
        // console.log('it works 2');
        prevBtn.onclick = carouselMoveMed.bind(this, -1);
        nextBtn.onclick = carouselMoveMed.bind(this, 1);
    } else {
        // console.log('it works 3');
        children[posCar].style.display = 'block';
        children[posCar + 1].style.display = 'block';
        children[posCar + 2].style.display = 'block';
        prevBtn.onclick = carouselMove.bind(this, -1);
        nextBtn.onclick = carouselMove.bind(this, 1);
    }
},false);


// TypeWriter Method

const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = ['Developer','Engineer','Designer'];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;

var textArrayIndex = 0;
var charIndex = 0;

function typeWriter () {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains('typing')) {cursorSpan.classList.add('typing');};
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex ++;
        setTimeout(typeWriter, typingDelay);

    } else {
        cursorSpan.classList.remove('typing');
        setTimeout(eraseFun, newTextDelay);
    }
}

function eraseFun () {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains('typing')) {cursorSpan.classList.add('typing');};
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex --;
        setTimeout(eraseFun, erasingDelay);

    } else {
        textArrayIndex ++ ;
        cursorSpan.classList.remove('typing');
        if (textArrayIndex >= textArray.length) {textArrayIndex=0;}
        setTimeout(typeWriter, typingDelay + 1000);
    }
}

// window.addEventListener('DOMContentLoaded', function() {
//     if (textArray.length) {setTimeout(typeWriter, newTextDelay)}; 
// });


// Set skills animation

var redlineH = document.getElementById('redlineH');
var redlineC = document.getElementById('redlineC');
var redlineJ = document.getElementById('redlineJ');
var redlineP = document.getElementById('redlineP');
var redlineS = document.getElementById('redlineS');

function setAni () {
    redlineH.classList.add('redlineH');
    redlineC.classList.add('redlineC');
    redlineJ.classList.add('redlineJ');
    redlineP.classList.add('redlineP');
    redlineS.classList.add('redlineS');

    setTimeout(() => {
        redlineH.classList.remove('redlineH');
        redlineC.classList.remove('redlineC');
        redlineJ.classList.remove('redlineJ');
        redlineP.classList.remove('redlineP');
        redlineS.classList.remove('redlineS');
    }, 3000);
}


// Function to enter the site
var startingPage = document.querySelector('.starting-page');
var container = document.getElementById('container');
var enterBtn = document.querySelector('button');
var progressCont = document.getElementById('progress-cont');
var progressBar = document.getElementById('progress-bar'); 
var progressText = document.getElementById('progress-text');
var widthBar = 0;

function enterSite () {
    enterBtn.disabled = 'true';
    enterBtn.style.cursor = 'auto';
    enterBtn.style.opacity= '0';
    progressText.style.opacity = '1';
    progressCont.style.opacity = '1';

    var barInt = setInterval(function () {
        widthBar ++;
        progressBar.style.width = widthBar + '%';
        if (widthBar >= 100) {
            clearInterval(barInt);
            startingPage.classList.add('fadeOut');
            startingPage.style.display = 'none';
            container.style.display = 'block';
            if (textArray.length) {setTimeout(typeWriter, newTextDelay)};
        }
    },50);

}

// Mouse move function

// var flyJet = document.getElementById('fly');

// document.addEventListener("mousemove", getMouse);

// var flypos = {x:0, y:0};

// setInterval(followMouse, 50);

// var mouse = {x:0, y:0}; //mouse.x, mouse.y

// var dirX = "right";
// var dirY = "down";

// function getMouse(e){
//     mouse.x = e.pageX;
//     mouse.y = e.pageY;

// //Checking directional change
//     if(mouse.x > flypos.x){
//         dirX = "right";
//     } else {
//         dirX = "left";
//     }

//     if(mouse.y > flypos.y){
//         dirY = "down";
//     } else {
//         dirY = "up";
//     }
// }

// function followMouse(){
//     //1. find distance X , distance Y
//     var distX = mouse.x - flypos.x;
//     var distY = mouse.y - flypos.y;
//     //Easing motion
//     //Progressive reduction of distance 
//     flypos.x += distX/5;
//     flypos.y += distY/2;
    
//     flyJet.style.left = flypos.x + "px";
//     flyJet.style.top = flypos.y + "px";

//     // console.log('follow',dirX,dirY);
//     //Apply css class 
//     if (dirX == "right"){
//         // console.log('right')
//         if (flyJet.classList.contains('fly-left')) {flyJet.classList.remove('fly-left'); }
//         flyJet.classList.add('fly-right');
//     } else {
//         // console.log('left')
//         if (flyJet.classList.contains('fly-right')) {flyJet.classList.remove('fly-right'); }
//         flyJet.classList.add('fly-left');        
//     }

//     if (dirY == "down"){
//         if (flyJet.classList.contains('fly-up')) {flyJet.classList.remove('fly-up'); }
//         flyJet.classList.add('fly-down');
//     } else {
//         if (flyJet.classList.contains('fly-down')) {flyJet.classList.remove('fly-down'); }
//         flyJet.classList.add('fly-up');      
//     }     
    
// }


