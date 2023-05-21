
const titulo = document.querySelector('.digitando');
function ativaletra(elemento) {
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 75 * i);
    });
}


function menuMobile() {
    const activeMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria');


    activeMenu.addEventListener('click', () => {
        activeMenu.classList.toggle('fa-x');
        navMenu.classList.toggle('ativado');
    });

}
ativaletra(titulo);
menuMobile();




