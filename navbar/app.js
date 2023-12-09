//  selecting variables
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

// toggle the navbar
navToggle.addEventListener('click', function () {
  // first approach
  // if (links.classList.contains('show-links')) {
  //   links.classList.remove('show-links');
  // } else {
  //   links.classList.add('show-links');
  // }
  // second approach
  links.classList.toggle('show-links');
});
