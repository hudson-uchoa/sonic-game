const sonic = document.querySelector('.sonic');
const spike = document.querySelector('.spike');
const jump = () =>{
    sonic.classList.add('jump')
    setTimeout(()=> {
        sonic.classList.remove('jump')
    },700);
}

const loop = setInterval(()=>{
  console.log(loop);
    const spikePosition = spike.offsetLeft;
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');
    //o + converte o string para number
   
    if(spikePosition <= 93 && spikePosition > 0 && sonicPosition < 50 ){
        spike.style.animation = 'none';
        spike.style.left = `${spikePosition}px`;
        sonic.style.animation = 'none';
        sonic.style.bottom = `${sonicPosition}px`;

        sonic.src = "./assets/s-game-over.png"
        
        clearInterval(loop)
        //o clearInterval faz esse loop para quando eu perco
    
    }
},10)

document.addEventListener('keydown', jump)