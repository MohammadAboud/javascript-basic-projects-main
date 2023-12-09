//using selectors inside the element
// traversing the dom

//  first Approach
// const questionBtn = document.querySelectorAll('.question-btn');

// questionBtn.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     const currentTar = e.currentTarget.parentNode.parentNode;
//     if (currentTar.classList.contains('show-text')) {
//       currentTar.classList.remove('show-text');
//     } else {
//     }
//     currentTar.classList.add('show-text');
//   });
// });

//  selecting the parent container
const questions = document.querySelectorAll('.question');

//  looping all questions
questions.forEach(function (question) {
  //  checking what we got
  console.log(question);

  //  target the btn for the question
  const btn = question.querySelector('.question-btn');

  btn.addEventListener('click', function () {
    questions.forEach(function (item) {
      console.log(item);
      if (item !== question) {
        question.classList.remove('show-text');
      }
    });
    question.classList.toggle('show-text');
  });
});
