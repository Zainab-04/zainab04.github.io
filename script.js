// Typed-out intro line in the hero terminal
const line = "a software engineer who ships cloud-native apps and applied ML models.";
const target = document.getElementById('typed-out');

function typeText(el, text, speed = 28){
  if(!el) return;
  let i = 0;
  el.textContent = '';
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(prefersReduced){
    el.textContent = text;
    return;
  }
  const timer = setInterval(() => {
    el.textContent += text[i];
    i++;
    if(i >= text.length) clearInterval(timer);
  }, speed);
}

window.addEventListener('DOMContentLoaded', () => {
  typeText(target, line);
});

// Placeholder social links: fill these in with your real profile URLs
document.getElementById('github-link').href = 'https://github.com/yourusername';
document.getElementById('linkedin-link').href = 'https://linkedin.com/in/yourusername';
