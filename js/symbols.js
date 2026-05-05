// Sacred geometry symbol generator for tarot cards
const SVG_NS = 'http://www.w3.org/2000/svg';

function svgEl(tag, attrs = {}) {
  const el = document.createElementNS(SVG_NS, tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  return el;
}

function polarToXY(cx, cy, r, angleDeg) {
  const rad = (angleDeg - 90) * Math.PI / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function polygon(cx, cy, r, sides, rotation = 0) {
  const pts = [];
  for (let i = 0; i < sides; i++) {
    const p = polarToXY(cx, cy, r, (360 / sides) * i + rotation);
    pts.push(`${p.x},${p.y}`);
  }
  return pts.join(' ');
}

function star(cx, cy, outerR, innerR, points, rotation = 0) {
  const pts = [];
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outerR : innerR;
    const p = polarToXY(cx, cy, r, (360 / (points * 2)) * i + rotation);
    pts.push(`${p.x},${p.y}`);
  }
  return pts.join(' ');
}

// Base shape generators
const shapes = {
  circle: (svg, cx, cy, r, color) => {
    svg.appendChild(svgEl('circle', { cx, cy, r, fill: 'none', stroke: color, 'stroke-width': '1.5' }));
  },
  dottedCircle: (svg, cx, cy, r, color, dots = 12) => {
    for (let i = 0; i < dots; i++) {
      const p = polarToXY(cx, cy, r, (360 / dots) * i);
      svg.appendChild(svgEl('circle', { cx: p.x, cy: p.y, r: 2, fill: color, opacity: '0.7' }));
    }
  },
  polygon: (svg, cx, cy, r, sides, color, rotation = 0) => {
    svg.appendChild(svgEl('polygon', { points: polygon(cx, cy, r, sides, rotation), fill: 'none', stroke: color, 'stroke-width': '1.5' }));
  },
  star: (svg, cx, cy, outerR, innerR, points, color, rotation = 0) => {
    svg.appendChild(svgEl('polygon', { points: star(cx, cy, outerR, innerR, points, rotation), fill: 'none', stroke: color, 'stroke-width': '1.2' }));
  },
  rays: (svg, cx, cy, innerR, outerR, count, color) => {
    for (let i = 0; i < count; i++) {
      const a = (360 / count) * i;
      const p1 = polarToXY(cx, cy, innerR, a);
      const p2 = polarToXY(cx, cy, outerR, a);
      svg.appendChild(svgEl('line', { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y, stroke: color, 'stroke-width': '1', opacity: '0.5' }));
    }
  },
  crescent: (svg, cx, cy, r, color, side = 'right') => {
    const offset = side === 'right' ? r * 0.35 : -r * 0.35;
    const d = `M ${cx} ${cy - r} A ${r} ${r} 0 1 ${side === 'right' ? 1 : 0} ${cx} ${cy + r} A ${r * 0.75} ${r * 0.75} 0 1 ${side === 'right' ? 0 : 1} ${cx} ${cy - r}`;
    svg.appendChild(svgEl('path', { d, fill: 'none', stroke: color, 'stroke-width': '1.5' }));
  },
  diamond: (svg, cx, cy, w, h, color) => {
    const pts = `${cx},${cy - h} ${cx + w},${cy} ${cx},${cy + h} ${cx - w},${cy}`;
    svg.appendChild(svgEl('polygon', { points: pts, fill: 'none', stroke: color, 'stroke-width': '1.5' }));
  },
  cross: (svg, cx, cy, size, color) => {
    svg.appendChild(svgEl('line', { x1: cx, y1: cy - size, x2: cx, y2: cy + size, stroke: color, 'stroke-width': '1.5' }));
    svg.appendChild(svgEl('line', { x1: cx - size, y1: cy, x2: cx + size, y2: cy, stroke: color, 'stroke-width': '1.5' }));
  },
  spiral: (svg, cx, cy, maxR, turns, color) => {
    let d = `M ${cx} ${cy}`;
    const steps = turns * 40;
    for (let i = 1; i <= steps; i++) {
      const t = i / steps;
      const angle = t * turns * Math.PI * 2;
      const r = t * maxR;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      d += ` L ${x} ${y}`;
    }
    svg.appendChild(svgEl('path', { d, fill: 'none', stroke: color, 'stroke-width': '1.2' }));
  },
  dot: (svg, cx, cy, r, color) => {
    svg.appendChild(svgEl('circle', { cx, cy, r, fill: color }));
  },
  infinity: (svg, cx, cy, w, h, color) => {
    const d = `M ${cx} ${cy} C ${cx + w} ${cy - h}, ${cx + w} ${cy + h}, ${cx} ${cy} C ${cx - w} ${cy + h}, ${cx - w} ${cy - h}, ${cx} ${cy}`;
    svg.appendChild(svgEl('path', { d, fill: 'none', stroke: color, 'stroke-width': '1.5' }));
  },
  wave: (svg, cx, cy, w, amp, color) => {
    let d = `M ${cx - w} ${cy}`;
    for (let x = -w; x <= w; x += 2) {
      const y = cy + Math.sin((x / w) * Math.PI * 2) * amp;
      d += ` L ${cx + x} ${y}`;
    }
    svg.appendChild(svgEl('path', { d, fill: 'none', stroke: color, 'stroke-width': '1.2' }));
  }
};

// Build an SVG element from a card's symbol config
export function createSymbolSVG(card) {
  const svg = svgEl('svg', { viewBox: '0 0 100 100', xmlns: SVG_NS });
  const c = card.colors || { primary: '#c8a45c', secondary: '#e8e0d0', accent: '#4a2d7a' };
  const sym = card.symbol || {};
  const cx = 50, cy = 50;

  // Background glow
  const glow = svgEl('circle', { cx, cy, r: 42, fill: `url(#glow-${card.id})`, opacity: '0.15' });
  const defs = svgEl('defs');
  const grad = svgEl('radialGradient', { id: `glow-${card.id}` });
  const s1 = svgEl('stop', { offset: '0%', 'stop-color': c.primary });
  const s2 = svgEl('stop', { offset: '100%', 'stop-color': 'transparent' });
  grad.appendChild(s1); grad.appendChild(s2);
  defs.appendChild(grad); svg.appendChild(defs); svg.appendChild(glow);

  // Draw layers based on symbol type
  const layers = sym.layers || ['circle'];
  for (const layer of layers) {
    switch (layer) {
      case 'outerCircle': shapes.circle(svg, cx, cy, 40, c.secondary); break;
      case 'innerCircle': shapes.circle(svg, cx, cy, 25, c.primary); break;
      case 'tinyCircle': shapes.circle(svg, cx, cy, 12, c.primary); break;
      case 'dottedRing': shapes.dottedCircle(svg, cx, cy, 35, c.secondary, sym.dots || 12); break;
      case 'dottedInner': shapes.dottedCircle(svg, cx, cy, 20, c.accent || c.primary, 8); break;
      case 'hexagon': shapes.polygon(svg, cx, cy, 35, 6, c.primary, sym.rotation || 0); break;
      case 'hexInner': shapes.polygon(svg, cx, cy, 22, 6, c.secondary, 30); break;
      case 'triangle': shapes.polygon(svg, cx, cy, 30, 3, c.primary, sym.rotation || 0); break;
      case 'triDown': shapes.polygon(svg, cx, cy, 30, 3, c.primary, 180); break;
      case 'triSmall': shapes.polygon(svg, cx, cy, 18, 3, c.secondary, sym.rotation || 0); break;
      case 'square': shapes.polygon(svg, cx, cy, 25, 4, c.primary, 45); break;
      case 'pentagon': shapes.polygon(svg, cx, cy, 30, 5, c.primary, sym.rotation || 0); break;
      case 'octagon': shapes.polygon(svg, cx, cy, 35, 8, c.secondary, 22.5); break;
      case 'star5': shapes.star(svg, cx, cy, 35, 15, 5, c.primary, sym.rotation || 0); break;
      case 'star6': shapes.star(svg, cx, cy, 35, 18, 6, c.primary); break;
      case 'star8': shapes.star(svg, cx, cy, 38, 22, 8, c.primary); break;
      case 'starSmall': shapes.star(svg, cx, cy, 20, 10, 5, c.secondary); break;
      case 'rays': shapes.rays(svg, cx, cy, 28, 42, sym.rayCount || 12, c.primary); break;
      case 'raysShort': shapes.rays(svg, cx, cy, 15, 25, 8, c.secondary); break;
      case 'crescent': shapes.crescent(svg, cx, cy, 20, c.primary, sym.side || 'right'); break;
      case 'crescentLarge': shapes.crescent(svg, cx, cy, 30, c.secondary, sym.side || 'right'); break;
      case 'diamond': shapes.diamond(svg, cx, cy, 20, 30, c.primary); break;
      case 'diamondSmall': shapes.diamond(svg, cx, cy, 12, 18, c.secondary); break;
      case 'cross': shapes.cross(svg, cx, cy, 30, c.primary); break;
      case 'crossSmall': shapes.cross(svg, cx, cy, 18, c.secondary); break;
      case 'spiral': shapes.spiral(svg, cx, cy, 30, sym.turns || 3, c.primary); break;
      case 'dot': shapes.dot(svg, cx, cy, 4, c.primary); break;
      case 'dotLarge': shapes.dot(svg, cx, cy, 7, c.primary); break;
      case 'dots3': {
        shapes.dot(svg, cx - 12, cy, 3, c.secondary);
        shapes.dot(svg, cx, cy, 3, c.secondary);
        shapes.dot(svg, cx + 12, cy, 3, c.secondary);
        break;
      }
      case 'infinity': shapes.infinity(svg, cx, cy, 20, 12, c.primary); break;
      case 'wave': shapes.wave(svg, cx, cy + 15, 30, 6, c.secondary); break;
      case 'wave2': shapes.wave(svg, cx, cy + 20, 30, 4, c.accent || c.secondary); break;
      case 'vesica': {
        shapes.circle(svg, cx - 10, cy, 22, c.primary);
        shapes.circle(svg, cx + 10, cy, 22, c.primary);
        break;
      }
      case 'orbitalRing': {
        const ellipse = svgEl('ellipse', { cx, cy, rx: 38, ry: 14, fill: 'none', stroke: c.secondary, 'stroke-width': '1', transform: `rotate(${sym.orbAngle || 30} ${cx} ${cy})`, opacity: '0.5' });
        svg.appendChild(ellipse);
        break;
      }
      case 'orbitalRing2': {
        const ellipse2 = svgEl('ellipse', { cx, cy, rx: 38, ry: 14, fill: 'none', stroke: c.accent || c.secondary, 'stroke-width': '1', transform: `rotate(${sym.orbAngle2 || -30} ${cx} ${cy})`, opacity: '0.4' });
        svg.appendChild(ellipse2);
        break;
      }
      default: shapes.circle(svg, cx, cy, 30, c.primary);
    }
  }

  return svg;
}

// Render hero sacred geometry
export function renderHeroGeometry(container) {
  const svg = svgEl('svg', { viewBox: '0 0 200 200', xmlns: SVG_NS, width: '200', height: '200' });
  const cx = 100, cy = 100;
  const gold = '#c8a45c'; const white = 'rgba(232,224,208,0.6)'; const purple = 'rgba(74,45,122,0.4)';

  // Outer dotted ring
  shapes.dottedCircle(svg, cx, cy, 90, white, 24);
  // Outer circle
  shapes.circle(svg, cx, cy, 80, 'rgba(200,164,92,0.3)');
  // Hexagon
  shapes.polygon(svg, cx, cy, 70, 6, gold, 0);
  // Inner hexagon rotated
  shapes.polygon(svg, cx, cy, 55, 6, white, 30);
  // Star
  shapes.star(svg, cx, cy, 45, 22, 6, gold);
  // Inner circle
  shapes.circle(svg, cx, cy, 30, white);
  // Rays
  shapes.rays(svg, cx, cy, 32, 50, 12, 'rgba(200,164,92,0.2)');
  // Center sun dot
  shapes.dot(svg, cx, cy, 6, gold);
  // Small dots at vertices
  for (let i = 0; i < 6; i++) {
    const p = polarToXY(cx, cy, 70, 60 * i);
    shapes.dot(svg, p.x, p.y, 3, gold);
  }

  container.appendChild(svg);
}
