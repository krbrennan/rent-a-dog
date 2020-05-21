
const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
let nav = document.getElementById('navbar');

function darkenNav(){
    // at a certain viewHeight the navBar will darken and the text its contains will lighten for visibility
    console.log('dark')
    const nav = document.getElementById('navbar');
    const navLinks = document.getElementsByClassName('nav-links');
    nav.style.background = '#282c34';
    for (let index = 0; index < navLinks.length; index++) {
        navLinks[index].style.color = 'white'
        
    }
}
function lightenNav(){
    console.log('light')
    document.getElementById('navbar').style.background = 'transparent';
}

    window.addEventListener('scroll', function(event) {
        let height = event.path[1].scrollY
        if(height > (viewHeight - 500)){
            darkenNav();
        } else {
            lightenNav();
        }
    });


