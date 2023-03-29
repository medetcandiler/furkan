const hamburgerContainer = document.querySelector('.hamburger');
const openIcon = document.querySelector('#open');
const closeIcon = document.querySelector('#close');


hamburgerContainer.addEventListener('click', () =>{
  openIcon.classList.toggle('d-none');
  closeIcon.classList.toggle('d-none')
})