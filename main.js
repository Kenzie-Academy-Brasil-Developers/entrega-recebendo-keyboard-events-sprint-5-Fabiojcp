const music = new Audio('./musicas/CasteloAnimado.mp3');
music.volume= 0.05
music.loop =true;
music.playbackRate = 4;

const musicFinal = new Audio('./musicas/fim.mp3');
const musicMorte = new Audio('./musicas/morte.mp3');


function ContarSegundos(){
    let segundos = 1;
    alert ('Clique aqui para jogar novamente')
    location.reload(true)
}

const objeto = document.createElement('div')
document.body.appendChild(objeto)
objeto.id = 'objeto'
let movimento = document.getElementById('objeto').style
let movimentoVertical = 70;
let movimentoHorizontal = 70;

let moveKey = (event) => {
    const keyName = event.key;
    console.log('keydown event\n\n' + 'key: ' + keyName);
    music.play();

    if (keyName == 'ArrowUp' && movimentoVertical > 5) { // botão para cima
        movimentoVertical -= 3
        movimento.top = `${movimentoVertical}%`

    } 
    if (keyName == 'ArrowDown'&& movimentoVertical < 80) { //botao para baixo
        movimentoVertical += 3
        movimento.top = `${movimentoVertical}%`
    } 
    if (keyName == 'ArrowRight' && movimentoHorizontal < 90) { // botão direita
        movimentoHorizontal += 3
        movimento.left = `${movimentoHorizontal}%`

    } 
    if (keyName == 'ArrowLeft' && movimentoHorizontal > 5) { //botão esquerda
        movimentoHorizontal -= 3
        movimento.left = `${movimentoHorizontal}%`

    } 

    if (movimentoVertical < 62 && movimentoVertical > 30 &&  movimentoHorizontal < 60 && movimentoHorizontal > 35) {
        music.pause()
        musicMorte.play()
        const elem = document.getElementById('titulo');
        elem.remove('titulo')
        const morte = document.getElementById('morte');
        morte.style.display = 'flex';
        setInterval(ContarSegundos, 3000);
        
    }
    if (movimentoVertical < 25 &&  movimentoHorizontal < 20) {
        music.pause()
        musicFinal.play()
        const elem = document.getElementById('titulo');
        elem.remove('titulo')
        const fim = document.getElementById('final');
        fim.style.display = 'flex';
        setInterval(ContarSegundos, 3000);
    }


}

document.addEventListener('keydown', moveKey)