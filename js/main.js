function tocaSom (seletor){
    const elemento = document.querySelector(seletor);

    if(elemento && elemento.localName === 'audio' ){
        elemento.play();
    }else{
        console.log("Elemento não encontrado ou seletor inválido");
    }
}

const teclas = document.querySelectorAll('.tecla');



for (let index = 0; index < teclas.length; index++) {
    const tecla = teclas[index];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.addEventListener("click", function () {
        tocaSom(idAudio)
    });

    tecla.addEventListener("keydown", function(evento){
        if (evento.code == 'Space' || evento.code == 'Enter') {
            tecla.classList.add('ativa');
        }
        
    })
    tecla.addEventListener("keyup", function(evento){
        if (evento.code == 'Space' || evento.code == 'Enter') {
            tecla.classList.remove('ativa');
        }        
    })

}