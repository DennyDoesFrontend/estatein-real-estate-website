// navigation links selection
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const properties = document.querySelector('.properties');
const services = document.querySelector('.services')
const menuBtn = document.querySelector('.menu');
const mobile = document.querySelector('.mobile');

const links = [home, about, properties, services];

links.forEach(link => {
    link.addEventListener('click', ()=> {
        event.preventDefault();
        links.forEach( otherLink => {
            otherLink.classList.remove('selected');
        })
        link.classList.add('selected');
    })
});

// logo change responsiveness
const myLogo = document.querySelector('.logoimg');

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1080) {
        myLogo.src = './assets/logo-desktop.png';
    }
    
    else if (window.innerWidth <= 1080 && window.innerWidth >= 700) {
        myLogo.src = './assets/logo-laptop.png';
    }
    
    else if (window.innerWidth <= 700){
        myLogo.src = './assets/logo-mobile.png';
    }
})

// menu button configuration
menuBtn.addEventListener('click', () => {
    if(mobile.classList.contains('invisible')) {
        mobile.classList.remove('invisible');
        mobile.classList.add('visible');
    }
    else if (mobile.classList.contains('visible')) {
        mobile.classList.remove('visible');
        mobile.classList.add('invisible');
    }
});