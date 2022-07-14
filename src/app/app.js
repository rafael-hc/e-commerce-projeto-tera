
const btnMobile = document.getElementById('btn-menu')
const menuList = document.querySelector('.menu-mobile-content')
const classes = menuList.classList

btnMobile.addEventListener('click', () => {
        classes.toggle('active')
})

const titleMenu = document.querySelector('.title-menu-mobile')
const infos = document.querySelector('.header-info')

window.addEventListener('load', () =>{
    let largura = window.innerWidth;
    if(largura <=1000){            
        titleMenu.appendChild(infos)            
}
})

const headerInfo = document.querySelector('.header-info-1')
window.addEventListener('resize', () => {
    let largura = window.innerWidth;

    if (largura > 1000) 
        classes.remove('active')

        if(largura <=1000){            
                titleMenu.appendChild(infos)            
        } else {
            headerInfo.appendChild(infos)
        }
});

const btnCloseMenus = document.querySelectorAll('.btn-close-menu')

Array.from(btnCloseMenus).forEach(item => item.addEventListener('click', function(){    
    classes.remove('active')    
}))

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))