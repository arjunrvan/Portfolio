var navBar = document.querySelector('nav');
var menuBtn = document.querySelector('.menu-btn');
var navBarMenu = document.querySelector('.menu');
var carousel = document.getElementById('carousel');
var children = carousel.children;

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

// toggle menu / navbar script 

function closeMenu () {
    if (navBarMenu.classList.contains('active')) {
        navBarMenu.classList.remove('active');
    }
}

function toggleMenu () {
    navBarMenu.classList.toggle('active');

    switch (openMenu) {
        case 1:
            menuBtn.innerHTML = "<i class='fas fa-times'></i>";
            var menuIcon = menuBtn.firstChild;
            menuIcon.onclick = toggleMenu;
            openMenu = 0;
            break;

        case 0:
            menuBtn.innerHTML = "<i class='fas fa-bars'></i>";
            var menuIcon = menuBtn.firstChild;
            menuIcon.onclick = toggleMenu;
            openMenu = 1;
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
        }

        children[posCar].style.display = 'none';
        children[posCar-1].style.display = 'block';
        posCar -=1 ;
    }
}

var widths = [550, 800];

window.addEventListener('resize',function () {
    // console.log('it works');
    console.log (window.innerWidth);
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
const newTextDelay = 1500;

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

window.addEventListener('DOMContentLoaded', function() {
    if (textArray.length) {setTimeout(typeWriter, newTextDelay)}; 
})




