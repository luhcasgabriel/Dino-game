const dino = document.querySelector('.dino');
let isJump = false;
const background = document.querySelector('.background');
//position inicial dino
let position = 0;

//evento de clique de botão
function handleKeyup(event){
    if(event.keyCode === 32){
        //chama método para posição
        if(!isJump){
            jump();        
        }
    }
}

function jump(){

    isJump = true;

    //função que seta intervalos de execução a cada milisegundos especificados
    let upInterval = setInterval(() => {
        //tudo que estivedr dentro dessa função será executada a cada 20 milisegundos
        
        if(position >= 150){
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if(position <= 0){
                    clearInterval(downInterval);
                    isJump = false;
                }
                else{
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            });
        }
        else{
            position += 20;
            dino.style.bottom = position + 'px';
        }

    }, 20);

}


function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randowTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {

        if(cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }
        else if (cactusPosition > 0 && cactusPosition < 60 && position < 60 ) {
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Game Over</h1>';
        }
        else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';    
        }
    },20);

    setTimeout(createCactus, randowTime);

}

createCactus();
document.addEventListener('keyup',handleKeyup);