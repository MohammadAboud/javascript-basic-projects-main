const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

//  selecting variables
const color = document.querySelector('.color');
const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
  //  because every hex color starts with #
  let hexColor = '#';

  for (let index = 0; index < 6; index++) {
    const randomNumber = getRandomNumber();
    hexColor += hex[randomNumber];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
