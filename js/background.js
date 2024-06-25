const backgroundContainer = document.querySelector(".backgroundContainer");
const starCount = 35;

const getRandomColor = () => {
  const color = Math.ceil(Math.random() * 360);
  return `hsl(${color}, 100%, 50%)`;
};

const createMovingBackground = (i) => {
  const star = document.createElement("div");

  const randomColor = getRandomColor();
  star.classList.add("falingStar");
  star.classList.add("fa-solid");
  star.classList.add("fa-star");
  star.classList.add(`star-${i}`);
  const startX = Math.ceil(Math.random() * 100);
  const endX = Math.ceil(Math.random() * 100);
  const startY = Math.ceil(Math.random() * 50);
  const endY = 110 + Math.ceil(Math.random() * 100);
  star.style = `top: ${-startY}vh; left: ${startX}vw; --color: ${randomColor}`;
  backgroundContainer.appendChild(star);
  const randomTimeout = 100 + Math.ceil(Math.random() * 300);
  setTimeout(() => {
    const moveTimeout = 5000 + Math.ceil(Math.random() * 2000);
    star.style = `top: ${endY}vh; left: ${endX}vw; transition: ${
      moveTimeout / 1000
    }s; --color: ${randomColor}`;
    setTimeout(() => {
      backgroundContainer.removeChild(star);
      createMovingBackground(i);
    }, moveTimeout);
  }, randomTimeout);
};

for (let i = 0; i < starCount; i++) {
  const randomTimeout = Math.ceil(Math.random() * 400);
  setTimeout(() => {
    createMovingBackground(i);
  }, i * randomTimeout);
}

let bgDeg = 0;
backgroundContainer.style = `--bg: ${bgDeg}deg`;
let bgInterval;

const toggleEffects = (state = true) => {
  const sections = document.querySelectorAll(".pageSection");
  if (state) {
    sections.forEach((section) => {
      section.classList.add("blurActive");
    });
    bgInterval = setInterval(() => {
      bgDeg = (bgDeg + 1.5) % 360;
      backgroundContainer.style = `--bg: ${bgDeg}deg`;
    }, 100);
  } else {
    sections.forEach((section) => {
      section.classList.remove("blurActive");
    });
    clearInterval(bgInterval);
  }
};

if (navigator.gpu) {
  navigator.gpu.requestAdapter().then((res) => {
    toggleEffects(!!res);
  });
} else {
  toggleEffects(true);
}
