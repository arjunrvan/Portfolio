var container1 = document.getElementById('container1');
var container2 = document.getElementById('container2');

var layerOne = document.getElementById("layerOne");
var layerTwo = document.getElementById("layerTwo");
var layerThree = document.getElementById("layerThree");
var layerFour = document.getElementById("layerFour");
var layerFive = document.getElementById("layerFive");
var layerSix = document.getElementById("layerSix");
var layerSeven = document.getElementById("layerSeven");
var layerEight = document.getElementById("layerEight");
var layerNine = document.getElementById("layerNine");
var layerTen = document.getElementById("layerTen");
var layerEleven = document.getElementById("layerEleven");

// var layerList = document.querySelectorAll('.layer');

var container1Pos = {w: 800, h: 600};
var container2Pos = {w: 800, h: 600};
var layerOnePos = {x: 0, y: 0, w:1000, h: 600};
var layerTwoPos = {x: 0, y: 0, w: 1000, h: 600};
var layerThreePos = {x: 0, y: 0, w: 1000, h: 600};
var layerFourPos = {x: 0, y: 0, w: 1000, h: 600};
var layerFivePos = {x: 0, y: 0, w: 1000, h: 1000};
var layerSixPos = {x: 0, y: 0, w:1000, h: 600};
var layerSevenPos = {x: 0, y: 0, w: 1000, h: 600};
var layerEightPos = {x: 0, y: 0, w: 1000, h: 600};
var layerNinePos = {x: 0, y: 0, w: 1000, h: 600};
var layerTenPos = {x: 0, y: 0, w: 1000, h: 600};
var layerElevenPos = {x: 0, y: 0, w: 1000, h: 600};
var mouse = {x: 0, y:0};

// Ensure bring page to top when refreshed
window.onbeforeunload = function() {
    window.scrollTo(0,0);
}

window.addEventListener("mousemove", onMouseMove);

function onMouseMove (evt) {
    mouse.x=  evt.pageX - container1.offsetLeft;
    mouse.y = evt.pageY - container1.offsetTop;

    layerOnePos.x = (-mouse.x* 0.1) + (container1Pos.w/2 - layerOnePos.w / 2) ;
    layerOne.style.left = layerOnePos.x + 'px';

    layerTwoPos.x = (-mouse.x* 0.05) + (container1Pos.w/2 - layerTwoPos.w / 2) ;
    layerTwo.style.left = layerTwoPos.x + 'px';

    layerThreePos.x = (-mouse.x* 0.025) + (container1Pos.w/2 - layerThreePos.w / 2) ;
    layerThree.style.left = layerThreePos.x + 'px';

    layerFourPos.x = (-mouse.x* 0.0125) + (container1Pos.w/2 - layerFourPos.w / 2) ;
    layerFour.style.left = layerFourPos.x + 'px';

    
    layerFivePos.x = (-mouse.x* 0.006) + (container1Pos.w/2 - layerFivePos.w / 2) ;
    layerFive.style.left = layerFivePos.x + 'px';

    // Container 2
    mouse.x=  evt.pageX - container2.offsetLeft;
    mouse.y = evt.pageY - container2.offsetTop;

    layerSixPos.x = (-mouse.x* 0.2);
    layerSix.style.left = layerSixPos.x + 'px';
    
    layerSevenPos.x = (-mouse.x* 0.15);
    layerSeven.style.left = layerSevenPos.x + 'px';

    layerEightPos.x = (-mouse.x* 0.12) ;
    layerEight.style.left = layerEightPos.x + 'px';

    layerNinePos.x = (-mouse.x* 0.1) ;
    layerNine.style.left = layerNinePos.x + 'px';

    layerTenPos.x = (-mouse.x* 0.08) ;
    layerTen.style.left = layerTenPos.x + 'px';

    layerElevenPos.x = (-mouse.x* 0.04) ;
    layerEleven.style.left = layerElevenPos.x + 'px';

    // layerOnePos.y = (-mouse.y*0.05) + (container1Pos.h / 2 - layerOnePos.h / 2)  ;
    // layerOne.style.top = layerOnePos.y + 'px';

    // layerTwoPos.y = (-mouse.y*0.05) + (container1Pos.h / 2 - layerTwoPos.h / 2)  ;
    // layerTwo.style.top = layerTwoPos.y + 'px';

    // layerThreePos.y = (-mouse.y*0.05) + (container1Pos.h / 2 - layerThreePos.h / 2)  ;
    // layerThree.style.top = layerThreePos.y + 'px';

    // layerFourPos.y = (-mouse.y*0.05) + (container1Pos.h / 2 - layerFourPos.h / 2)  ;
    // layerFour.style.top = layerFourPos.y + 'px';

    // layerFivePos.y = (-mouse.y*0.05) + (container1Pos.h / 2 - layerFivePos.h / 2)  ;
    // layerFive.style.top = layerFivePos.y + 'px';
}



window.addEventListener("scroll",onScroll);

function onScroll (evt) {
   

    // console.log(window.scrollY+350, container2.offsetTop);
    if (window.scrollY + 350 >= container2.offsetTop) {
        container2.classList.add('fadeIn');
        container2.classList.remove('fadeOut');
    } else {
        container2.classList.add('fadeOut');
        container2.classList.remove('fadeIn');
    }
     


}
