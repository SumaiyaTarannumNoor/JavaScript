 .navbar-scrolled{
          background-image: linear-gradient(90deg, #6c5ffc, #ffffff);
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
        }
    
.btn-scrolled{
          background-color: #ffffff;
          color: #6c5ffc;
        }

const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 56) {
    navEl.classList.add('navbar-scrolled');
  } else {
    navEl.classList.remove('navbar-scrolled');
  }
});


const btnEl = document.querySelector('.btn.btn-primary');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 56) {
    btnEl.classList.add('btn-scrolled');
  } else {
    btnEl.classList.remove('btn-scrolled');
  }
});