function abrirMenu() {
    let menu = document.querySelector('.menu-area');

    if(menu.classList.contains('menu-aberto') == true) {
        menu.classList.remove('menu-aberto');
    } else {
        menu.classList.add('menu-aberto')
    }    
}

