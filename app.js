function genRGB() {
    for (let i = 0; i < 3; i++) {
 const r = Math.floor(Math.random() * 255);
 const g = Math.floor(Math.random() * 255);
 const b = Math.floor(Math.random() * 255);   
    return `rgb(${r},${g},${b})` ;
    }
};

function returnGradient() {
  for (j = 0; j < 3; j++) {
    let deg =Math.floor(Math.random() * 360);
    return `linear-gradient(${deg}deg,${genRGB()},${genRGB()},${genRGB()})`

  }
}

const h1 = document.querySelector('h1');

h1.addEventListener('click', function () {
    const gradient = returnGradient();
    document.body.style.background = gradient;
    h1.innerText = `Body{Background: ${gradient} }`;
});
