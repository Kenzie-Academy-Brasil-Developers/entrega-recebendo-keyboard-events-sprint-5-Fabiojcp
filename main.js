const music = new Audio('./musicas/CasteloAnimado.mp3');
music.volume= 0.05
music.loop =true;
music.playbackRate = 2;


const objeto = document.createElement('div')
document.body.appendChild(objeto)
objeto.id = 'objeto'
let movimento = document.getElementById('objeto').style
let movimentoVertical = 70;
let movimentoHorizontal = 70;

/*function test_keys(){
    let keylist = [ ];
    for(let i = 0; i < keylist.length; i++)
        if(!test_key(keylist[i]))
            return false;

    return true;
}
*/

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
        alert ('Você morreu!!! Recomece!')
        location.reload(true)
        
    }
    if (movimentoVertical < 25 &&  movimentoHorizontal < 20) {
        alert ('Você está a salvo, parabéns!!!')
        location.reload(true)
        
    }


}

document.addEventListener('keydown', moveKey)