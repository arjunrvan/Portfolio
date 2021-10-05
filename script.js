var navBar = document.querySelector('nav');
var menuBtn = document.querySelector('.menu-btn');
var navBarMenu = document.querySelector('.menu');

var openMenu = 1;


window.onbeforeunload = function () {
    window.scrollTo(0, 0);

}

window.addEventListener('scroll', function () {
    console.log(this.scrollY);
    if (this.scrollY > 20) {
        navBar.classList.add('sticky');
    } else {
        navBar.classList.remove('sticky');
    }
},false)

// toggle menu / navbar script 

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

    // if (openMenu == 1) {
        
    //     // menuBtnIcon.classList.remove('fas fa-bars');
    //     // menuBtnIcon.classList.add("fas fa-times");
    //     menuBtn.innerHTML = "<i class='fas fa-times'></i>";
    // } 
    // if (openMenu == 0){

    //     // menuBtnIcon.classList.add('fas fa-bars');
    //     // menuBtnIcon.classList.remove("fas fa-times");
    //     menuBtn.innerHTML = "<i class='fas fa-bars'></i>";
    // }

    // openMenu = 0;
}



