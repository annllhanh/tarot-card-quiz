import { initParticles } from './particles.js';
import { renderHeroGeometry } from './symbols.js';
import { initQuiz } from './quiz.js';
import { initResult } from './result.js';
import { initLibrary } from './library.js';

// SPA Router
const views = ['home', 'quiz', 'result', 'library'];

function navigate(hash) {
  const view = hash.replace('#', '') || 'home';
  if (!views.includes(view)) return navigate('#home');

  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const target = document.getElementById(`view-${view}`);
  if (target) {
    target.classList.add('active');
    target.classList.add('view-enter');
    setTimeout(() => target.classList.remove('view-enter'), 600);
  }

  // Update nav
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.view === view);
  });

  // Scroll to top
  window.scrollTo(0, 0);

  // View-specific init
  if (view === 'quiz') initQuiz();
  if (view === 'library') initLibrary();
}

window.addEventListener('hashchange', () => navigate(location.hash));

// Init
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  renderHeroGeometry(document.getElementById('hero-geometry'));
  initResult();
  navigate(location.hash || '#home');
});
