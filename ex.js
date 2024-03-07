function clicou() {
    document.querySelector('.square').innerHTML="Clicou Aqui"
    document.querySelector('.square').style.backgroundImage="linear-gradient(green, greenyellow)"
    document.querySelector('.square').style.fontFamily="Roboto", sans-serif;
    document.querySelector('.square').style.fontWeight="700"
}

function entrou() {
    document.querySelector('.square').innerHTML="Entrou Aqui"
    document.querySelector('.square').style.cursor="pointer"
}

function fora() {
    document.querySelector('.square').innerHTML="Saiu Fora"
    document.querySelector('.square').style.backgroundImage="linear-gradient(green, green)"

}