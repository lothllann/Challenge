const dropdownMenu = document.querySelector('.menu_ham')
const menu = document.querySelector('.menu_MobileTablet')
const containerMenu = document.querySelector('.container_menu')

function ativarMenu(event) {
    event.preventDefault();
    menu.classList.toggle('active');
}

function cliqueFora(event) {
    if (event.target === this) {
        ativarMenu(event);
    }
}

dropdownMenu.addEventListener('click', ativarMenu)
menu.addEventListener('click', cliqueFora)






/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

const btnColor = document.querySelector('[data-open-chooseColor]')
const color = document.querySelector('[data-container-chooseColor]')
const chooserColor = document.querySelector('.choose_color')
const btnsair = document.querySelector('[data-sair]')




function ativarColor(event) {
    event.preventDefault();
    color.classList.toggle('active');
}

function cliqueForaa(event) {
    if (event.target === this) {
        ativarColor(event);
    }
}

btnColor.addEventListener('click', ativarColor)
color.addEventListener('click', cliqueForaa)






const btnBorderChange = document.querySelectorAll('[data-btn-chooseColor]')
const buttonsBellow = document.querySelector('.buttons_color')
const containerChooseColor = document.querySelector('.choose_color')
const btnAplicar = document.querySelector('[data-aplicar]')
const activeClass = 'active'


function mostrarSave() {
    buttonsBellow.classList.add(activeClass);
    containerChooseColor.classList.add('up');
    this.classList.toggle('activeted');

}

function fechar() {
    color.classList.remove(activeClass);
    buttonsBellow.classList.remove(activeClass);
    containerChooseColor.classList.remove('up');
    this.classList.remove(activeClass)
}

function aplicarCor(btns) {
    btns.forEach((itens) => {
        if (itens.style === 'rosaa') {
            console.log('deu certo')
        }
    })


}

btnBorderChange.forEach(buttons => {
    ['touchstart', 'click'].forEach(userEvent => {
        buttons.addEventListener(userEvent, mostrarSave);
    });
});


btnsair.addEventListener('click', fechar);
btnAplicar.addEventListener('click', aplicarCor)



/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */




/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */


const btnHL = document.querySelector('#highlight')
const areaDoCodigo = document.querySelector('.codigo')
const linguagem = document.querySelector('.linguagem')

function aplicaHighlight() {
    const codigo = areaDoCodigo.innerText
    areaDoCodigo.innerHTML = '<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="Editor"></code>'
    areaDoCodigo.querySelector('code').textContent = codigo
    hljs.highlightElement(areaDoCodigo.querySelector('code'))

}

btnHL.addEventListener('click', () => {
    aplicaHighlight()
})