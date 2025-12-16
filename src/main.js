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