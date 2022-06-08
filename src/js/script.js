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
  console.log(spikePosition);
  if (spikePosition <= 125 && spikePosition > 0 && sonicPosition <= 66) {
    spike.style.animation = "none";
    spike.style.left = `${spikePosition}px`;
    sonic.style.bottom = `${sonicPosition}px`;
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
