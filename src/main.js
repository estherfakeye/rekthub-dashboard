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
const mobileCloseBtn = document.getElementById('mobile-close-btn');
const sidebar = document.getElementById('sidebar');
const mobileOverlay = document.getElementById('mobile-overlay');

function openMobileMenu() {
  sidebar.classList.remove('-translate-x-full');
  mobileOverlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Prevent body scroll

  // Add blur effect to main content
  const mainContent = document.querySelector('main');
  if (mainContent) {
    mainContent.classList.add('blur-sm');
  }
}

function closeMobileMenu() {
  sidebar.classList.add('-translate-x-full');
  mobileOverlay.classList.add('hidden');
  document.body.style.overflow = ''; // Restore body scroll

  // Remove blur effect from main content
  const mainContent = document.querySelector('main');
  if (mainContent) {
    mainContent.classList.remove('blur-sm');
  }
}

function toggleMobileMenu() {
  if (sidebar.classList.contains('-translate-x-full')) {
    openMobileMenu();
  } else {
    closeMobileMenu();
  }
}

// Hamburger menu button
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', toggleMobileMenu);
}

// Close button (X) inside sidebar
if (mobileCloseBtn) {
  mobileCloseBtn.addEventListener('click', closeMobileMenu);
}

// Overlay click to close
if (mobileOverlay) {
  mobileOverlay.addEventListener('click', closeMobileMenu);
}

// Close mobile menu when clicking sidebar links
const sidebarLinks = sidebar?.querySelectorAll('a');
sidebarLinks?.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 1024) {
      closeMobileMenu();
    }
  });
});

// Auto-close sidebar when window is resized to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    closeMobileMenu();
  }
});
