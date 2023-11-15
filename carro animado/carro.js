var fondo = document.querySelector('.fondo')
var carro = document.querySelector('.carro')
var llanta1 = document.querySelector('.rueda1')
var llanta2 = document.querySelector('.rueda2')
var sprite = document.querySelector('.sprite')

carro.addEventListener('click', mover)

function mover(){
    fondo.classList.add('fondo_mover')
    llanta1.classList.add('carro_mover')
    llanta2.classList.add('carro_mover')
    sprite.classList.remove('oculto')

}