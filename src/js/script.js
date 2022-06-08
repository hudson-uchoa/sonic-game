const sonic = document.querySelector(".sWalking");
const spike = document.querySelector("#spike");
const scoreHtml = document.querySelector("#score");
let score = 0;
scoreHtml.innerText = `Score: ${score}`;

const jump = () => {
  sonic.classList.add("jump");
  console.log(score);

  setTimeout(() => {
    sonic.classList.remove("jump");
  }, 560);
};

const loop = setInterval(() => {
  const spikePosition = +window.getComputedStyle(spike).left.replace("px", "");
  const sonicPosition = +window
    .getComputedStyle(sonic)
    .bottom.replace("px", "");

  if (spikePosition <= 125 && spikePosition > 0 && sonicPosition <= 39) {
    spike.style.animation = "none";
    spike.style.left = `${spikePosition}px`;

    sonic.classList.add("fail");
    sonic.style.bottom = `${sonicPosition}px`;

    sonic.src = "../../assets/s-game-over.png";
    sonic.style.width = "140px";
  } else if (spikePosition <= -60) {
    score += 100;
    scoreHtml.innerText = `Score: ${score}`;
  }
}, 10);

document.addEventListener("keydown", (event) => {
  if (event.key == "ArrowUp") {
    jump();
  }
});
