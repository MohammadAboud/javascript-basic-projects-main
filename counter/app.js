'use strict';

let counter = 0;
const countValue = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

//  looping the btns
btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    //  checking which btn we clicked
    const styles = e.currentTarget.classList;

    //  change the count value depending on the class
    if (styles.contains('decrease')) {
      counter--;
      countValue.textContent = counter;
    } else if (styles.contains('increase')) {
      counter++;
    } else {
      counter = 0;
    }

    //  changing the count color depending on the count status
    if (counter > 0) {
      countValue.style.color = 'green';
    }
    if (counter < 0) {
      countValue.style.color = 'red';
    }
    if (counter === 0) {
      countValue.style.color = '#222';
    }
    countValue.textContent = counter;
  });
});
