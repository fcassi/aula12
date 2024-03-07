
function clique() {
    let add = document.querySelector('input')
    let nome = add.value

    add.value=""

    let nomeUsu = document.createElement('p')
    nomeUsu.innerText = nome
    nomeUsu = document.body.appendChild(nomeUsu)

}