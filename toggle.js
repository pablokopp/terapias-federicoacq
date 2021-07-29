const paneles = document.querySelectorAll('.panel');
const textos = document.querySelectorAll('.texto');
const textoActivo = document.querySelector('.texto-activo')


function toggleOpen(){
    let cosa = this
    if (this.classList.contains('open')) {
        this.classList.toggle('open')
    }
    else {
    if(document.querySelector('.open')!== null){
        document.querySelector('.open').classList.remove('open')
        document.querySelector('.botonActivo').classList.remove('botonActivo')
    }
    this.classList.toggle('open')
    }
    toggleBotonActivo(this)
}

function toggleBotonActivo(cosa){
    let boton = cosa.querySelector('.panel__boton')
    boton.classList.toggle('botonActivo')
}


// function toggleActive(e){
//     console.log(e);
//     if (e.propertyName.includes('flex')){

//         this.classList.toggle('open-active');
//     }
// }


paneles.forEach(panel => panel.addEventListener('click', toggleOpen));
// paneles.forEach(panel => panel.addEventListener('transitionend', toggleActive))
// paneles.forEach(panel => panel.addEventListener('click', mostrarTexto))



