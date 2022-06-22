// const moveElement = (element, target, position = null) =>{

//     if(position != null){
//         target.insertAdjacentElement('afterbegin', element)
//     } else(
//         target.appendChild(element)
//     )    
// }
const btnMobile = document.getElementById('btn-menu')
const menuList = document.querySelector('.menu-mobile-content')

const classes = menuList.classList

// let stateMenu = false;
// let subMenu

btnMobile.addEventListener('click', () => {

        classes.toggle('active')

    // stateMenu = !stateMenu
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
        // subMenu.classList.remove('visible')

        if(largura <=1000){            
                titleMenu.appendChild(infos)            
        } else {
            headerInfo.appendChild(infos)
        }
});

const btnCloseMenus = document.querySelectorAll('.btn-close-menu')
const btnCloseMenu = document.querySelector('.btn-close-menu')

Array.from(btnCloseMenus).forEach(item => item.addEventListener('click', function(){
    // subMenu.classList.remove('visible')
    classes.remove('active')
    
}))



// const menuListItem = document.getElementsByClassName('row-2-list-item')

// Array.from(menuListItem).forEach(item => item.addEventListener('click', function(e){
//     e.stopPropagation()
//     console.log('menu clicado',this)
//     subMenu = document.g querySelector('.sublist-iten')
//     subMenu.classList.toggle('visible')
//     console.log(btnCloseMenu)  
// }));

