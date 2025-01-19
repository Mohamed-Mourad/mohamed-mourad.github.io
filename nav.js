const navbar = document.getElementById('navbar');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const firstSection = document.getElementById('first-section');

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  let height = window.innerHeight;

  // Navbar transition to floating
  if (scrollTop > 0) {
    navbar.classList.add('floating');
  } else {
    navbar.classList.remove('floating');
  }

  // Hide navbar when scrolling down and the first section is not visible
  if (scrollTop > lastScrollTop && scrollTop > height) {
    navbar.classList.add('hidden');
  }

  // Show navbar when scrolling up
  if (scrollTop < lastScrollTop) {
    navbar.classList.remove('hidden');
  }

  // Reset navbar to its normal state when back at the top
  if (scrollTop === 0) {
    navbar.classList.remove('hidden');
    navbar.classList.remove('floating');
  }

  lastScrollTop = scrollTop;
});

menuIcon.addEventListener('click', () => {
  mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
});