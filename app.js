function genRGB() {
 const r = Math.floor(Math.random() * 255);
 const g = Math.floor(Math.random() * 255);
 const b = Math.floor(Math.random() * 255);   
    return `rgb(${r},${g},${b})`;
    };

function returnGradient() {
    let deg =Math.floor(Math.random() * 360);
    return `linear-gradient(${deg}deg,${genRGB()},${genRGB()},${genRGB()})`;

  };

const button = document.querySelector('#main');
const copyButton = document.querySelector('#copy');
const cbIcon = document.querySelector('#cbIcon');
const histButton = document.querySelector('#history')
const histIcon = document.querySelector('#hIcon')
let history = [];
let histCount = 0

button.addEventListener('click', function (e) {
    const gradient = returnGradient();
    document.body.style.background = gradient;
    button.innerHTML = gradient;
    history.unshift(gradient);
    copyButton.classList.remove('hide');
    cbIcon.setAttribute('class', 'bi bi-clipboard');
    if (history.length > 1) {
      histButton.classList.remove('hide');
      hIcon.setAttribute('class', 'bi bi-arrow-left');
    }
    histCount =0
});

copyButton.addEventListener('click', function (e) {
  let buttonText = button.innerText;
  const cb = navigator.clipboard;
  cb.writeText(buttonText);
  cbIcon.setAttribute('class', 'bi bi-clipboard-check');
});

histButton.addEventListener('click', function (e) {
  histCount += 1
  document.body.style.background = history[histCount];


})

