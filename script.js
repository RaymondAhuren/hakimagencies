const navbar = document.querySelector('.main-nav')
const nav = document.querySelector('.menu-icon')


nav.addEventListener('click', (e) =>{
    if(e.target.classList.contains('icon')){
      navbar.classList.remove('remove')
    } else {
       navbar.classList.add('remove')
        
    }
})