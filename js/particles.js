/* ═══════════════════════════════════════════
   PARTICLES — Canvas star/particle background
   ═══════════════════════════════════════════ */

export function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let w, h;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function createParticles() {
    particles = [];
    const count = Math.floor((w * h) / 1200); // Much denser night sky
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.0 + 0.2, // Tiny stars
        dx: (Math.random() - 0.5) * 0.1,
        dy: (Math.random() - 0.5) * 0.05,
        opacity: Math.random() * 0.7 + 0.1,
        twinkleSpeed: Math.random() * 0.01 + 0.003,
        phase: Math.random() * Math.PI * 2,
        color: Math.random() > 0.85 ? 'rgba(255, 230, 180,' : 'rgba(235, 245, 255,'
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    const time = Date.now() * 0.001;
    for (const p of particles) {
      const twinkle = Math.sin(time * p.twinkleSpeed * 60 + p.phase) * 0.3 + 0.7;
      const alpha = p.opacity * twinkle;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + alpha.toFixed(2) + ')';
      ctx.fill();

      // subtle glow for larger particles
      if (p.r > 1.2) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
        ctx.fillStyle = p.color + (alpha * 0.1).toFixed(3) + ')';
        ctx.fill();
      }

      p.x += p.dx;
      p.y += p.dy;
      if (p.x < -5) p.x = w + 5;
      if (p.x > w + 5) p.x = -5;
      if (p.y < -5) p.y = h + 5;
      if (p.y > h + 5) p.y = -5;
    }
    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();
  window.addEventListener('resize', () => { resize(); createParticles(); });
}
