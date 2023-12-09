const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

//  selecting elements
const color = document.querySelector('.color');
const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
  // generate random number between 0 and 3
  let randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];

  //  first approach
  // color.innerHTML = ` <span class="color">${colors[randomNumber]}</span>`;

  // second approach
  color.textContent = colors[randomNumber];

  // second approach is best because its cleaner code
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
