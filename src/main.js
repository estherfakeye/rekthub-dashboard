import './style.css' 
import "iconify-icon";

// Trending cards scroll functionality
const scrollLeft = document.getElementById('scroll-left');
const scrollRight = document.getElementById('scroll-right');
const trendingScroll = document.getElementById('trending-scroll');

scrollLeft.addEventListener('click', () => {
  trendingScroll.scrollBy({
    left: -350,
    behavior: 'smooth'
  });
});

scrollRight.addEventListener('click', () => {
  trendingScroll.scrollBy({
    left: 350,
    behavior: 'smooth'
  });
});


// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const sidebar = document.getElementById('sidebar');
const mobileOverlay = document.getElementById('mobile-overlay');

function toggleMobileMenu() {
  sidebar.classList.toggle('-translate-x-full');
  mobileOverlay.classList.toggle('hidden');
}

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', toggleMobileMenu);
}

if (mobileOverlay) {
  mobileOverlay.addEventListener('click', toggleMobileMenu);
}

// Close mobile menu when clicking sidebar links
const sidebarLinks = sidebar?.querySelectorAll('a');
sidebarLinks?.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 1024) {
      toggleMobileMenu();
    }
  });
});
