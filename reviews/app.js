// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

//  select variables
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const info = document.getElementById('author');
const job = document.getElementById('job');

//  selecting Buttons
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//  index for reviews
let currItem = 0;

//  initial load
window.addEventListener('DOMContentLoaded', function () {
  showPerson(currItem);
});

//  show next person
nextBtn.addEventListener('click', function () {
  currItem++;
  if (currItem > reviews.length - 1) {
    currItem = 0;
  }
  showPerson(currItem);
});
//  show prev person
prevBtn.addEventListener('click', function () {
  currItem--;
  if (currItem < 0) {
    currItem = reviews.length - 1;
  }
  showPerson(currItem);
});

//  random person
randomBtn.addEventListener('click', function () {
  showPerson(getRandomNumber());
});
//  show person
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  info.textContent = item.text;
  job.textContent = item.job;
}

//  random Number Generator

function getRandomNumber() {
  return Math.floor(Math.random() * reviews.length);
}
