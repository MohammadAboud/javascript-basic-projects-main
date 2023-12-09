//  selecting variables
const modalOverlay = document.querySelector('.modal-overlay');
const openModalBtn = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');

//  opening the modal
openModalBtn.addEventListener('click', function () {
  modalOverlay.classList.toggle('open-modal');
});

//  closing the modal
closeModal.addEventListener('click', function () {
  modalOverlay.classList.toggle('open-modal');
});
