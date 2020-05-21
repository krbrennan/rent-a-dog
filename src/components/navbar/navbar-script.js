
const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
let nav = document.getElementById('navbar');

function darkenNav(){
    // at a certain viewHeight the navBar will darken and the text its contains will lighten for visibility
    const nav = document.getElementById('navbar');
    const navLinks = document.getElementsByClassName('nav-links');
    nav.style.background = 'rgba(40, 44, 52, 0.85)';
    nav.style.background.opacity = '0.2';
    for (let index = 0; index < navLinks.length; index++) {
        navLinks[index].style.color = 'white'
    }
}
function lightenNav(){
    const nav = document.getElementById('navbar');
    const navLinks = document.getElementsByClassName('nav-links');
    document.getElementById('navbar').style.background = 'transparent';

    for (let index = 0; index < navLinks.length; index++) {
        navLinks[index].style.color = 'black';
    }
}

window.addEventListener('scroll', function(event) {
    let height = event.path[1].scrollY
    let adjustmentHeight = (viewHeight * 0.05);
    if(height > (adjustmentHeight)){
        darkenNav();
    } else {
        lightenNav();
    }
});


