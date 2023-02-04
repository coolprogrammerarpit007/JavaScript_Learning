'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');

// Function to show and Hide model

// Show-Modal

const showModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Close- Modal Function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// *****************************************
// *****************************************

// Click Event Handler

btnsOpenModel.forEach(btn => {
  btn.addEventListener('click', showModal);
});

btnCloseModel.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// Keypress event
// Adding event listener to the document will trigger the element elsewhere the event is triggered on the document
document.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
