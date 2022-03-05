/* construi um jogo usando o 'addEventListener', 
onde temos a possibilidade de ganhar o jogo chegando ao iglu
ou de perder se chegar muito próximo a boca da foca

Os eventos de ganhar ou perder podem não acontecer como deviam conforme
a tela usada, a foca não é um objeto, é um backgroud da body
Tentei solucionar isso usando porcentagens, mas mesmo assim não ficou tão bom
A experiência do jogo foi feita em cima da minha tela 1920x1080

Mas foi um ótimo aprendizado, nunca havia mexido nesse tipo de intereção

Obrigado!!
*/

// músicas
const musicFinal = new Audio('./musicas/fim.mp3');
const musicMorte = new Audio('./musicas/morte.mp3');
const music = new Audio('./musicas/CasteloAnimado.mp3');
music.volume= 0.05
music.loop =true;
music.playbackRate = 4;

// função que é acionada após vencer ou perder no jogo
function ContarSegundos(){
    let segundos = 1;
    alert ('Clique aqui para jogar novamente')
    location.reload(true)
}

//objeto 'pinguim' que se movimenta na tela, fiz um teste de criar ele direto pelo js
const objeto = document.createElement('div')
document.body.appendChild(objeto)
objeto.id = 'objeto'

// variaveis que recebem movimentos
let movimento = document.getElementById('objeto').style
let movimentoVertical = 70;
let movimentoHorizontal = 70;

// função que opera a movimentação do objeto pinguim
let moveKey = (event) => {
    const keyName = event.key;
    console.log('keydown event\n\n' + 'key: ' + keyName);
    music.play();

    if (keyName == 'ArrowUp' && movimentoVertical > 5) { // botão para cima, com limite da tela
        movimentoVertical -= 3
        movimento.top = `${movimentoVertical}%`

    } 
    if (keyName == 'ArrowDown'&& movimentoVertical < 80) { //botao para baixo, com limite da tela
        movimentoVertical += 3
        movimento.top = `${movimentoVertical}%`
    } 
    if (keyName == 'ArrowRight' && movimentoHorizontal < 90) { // botão direita, com limite da tela
        movimentoHorizontal += 3
        movimento.left = `${movimentoHorizontal}%`

    } 
    if (keyName == 'ArrowLeft' && movimentoHorizontal > 5) { //botão esquerda, com limite da tela
        movimentoHorizontal -= 3
        movimento.left = `${movimentoHorizontal}%`

    } 
    // evento de perder o jogo
    if (movimentoVertical < 62 && movimentoVertical > 30 &&  movimentoHorizontal < 60 && movimentoHorizontal > 35) {
        music.pause()
        musicMorte.play()
        const elem = document.getElementById('titulo');
        elem.remove('titulo')
        const morte = document.getElementById('morte');
        morte.style.display = 'flex';
        setInterval(ContarSegundos, 3000);
        
    }
    //evento de ganhar o jogo
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
// chamada da função de movimentação do objeto
document.addEventListener('keydown', moveKey)