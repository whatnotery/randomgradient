function genRGB() {
 const r = Math.floor(Math.random() * 255);
 const g = Math.floor(Math.random() * 255);
 const b = Math.floor(Math.random() * 255);   
    return `rgb(${r},${g},${b})`;
    };

function returnGradient() {
    let deg =Math.floor(Math.random() * 360);
    return `linear-gradient(${deg}deg,${genRGB()},${genRGB()},${genRGB()})`

  };

const body = document.querySelector('body');
const h1 = document.querySelector()
body.addEventListener('click', function () {
    const gradient = returnGradient();
    document.body.style.background = gradient;
    h1.innerText = gradient;
});
