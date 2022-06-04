const sonic = document.querySelector('.sonic');
const jump = () =>{
    sonic.classList.add('jump')
    setTimeout(()=> {
        sonic.classList.remove('jump')
    },700);
}

document.addEventListener('keydown', jump)