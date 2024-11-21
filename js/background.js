const backgroundContainer = document.querySelector(".backgroundContainer");
const snowFlakes = document.querySelectorAll(".snowflake");

snowFlakes.forEach((snow) => {
  let snowStyle = "";
  snowStyle += `left: ${Math.ceil(Math.random() * 100)}%;`;
  snowStyle += `animation-delay: ${Math.ceil(Math.random() * 7 * 10) / 10}s;`;

  snow.style = snowStyle;
});

let bgDeg = 0;
backgroundContainer.style = `--bg: ${bgDeg}deg`;
let bgInterval;

bgInterval = setInterval(() => {
  bgDeg = Math.floor(((bgDeg + 0.4) % 360) * 100) / 100;
  backgroundContainer.style = `--bg: ${bgDeg}deg`;
}, 500);
