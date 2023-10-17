const header = document.querySelector('#headerFixed')

document.onscroll = () => {
    if(window.scrollY > 100){
        header.classList.add('sticky')
    }if(window.scrollY <= 0){
        header.classList.remove('sticky')
        header.classList.remove('unopacity')
    }

    if(window.scrollY >= 50){
        header.classList.add('opacity')
    }if(window.scrollY <= 50){
        header.classList.remove('opacity')
    }
}

// mobile menu

const openMenu = document.querySelectorAll('.mobileMenu')
const mobileMenu = document.querySelector('.mobileMenuShow')
const closeMenu = document.querySelector('.closeMenu')

openMenu.forEach(e => {
    e.onclick = () => {
        mobileMenu.classList.add('show')
    }
})

closeMenu.onclick = () => {
    mobileMenu.classList.remove('show')
}