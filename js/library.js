import { ALL_CARDS, getCardsBySuit } from '../content/cards.js';
import { createSymbolSVG } from './symbols.js';

let initialized = false;
let currentFilter = 'all';

export function initLibrary() {
  if (!initialized) {
    document.getElementById('library-filters').addEventListener('click', (e) => {
      if (!e.target.classList.contains('filter-btn')) return;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter = e.target.dataset.filter;
      renderGrid();
    });

    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('card-modal').addEventListener('click', (e) => {
      if (e.target === e.currentTarget) closeModal();
    });

    initialized = true;
  }
  renderGrid();
}

function renderGrid() {
  const grid = document.getElementById('library-grid');
  grid.innerHTML = '';

  const cards = getCardsBySuit(currentFilter);
  cards.forEach((card, i) => {
    const el = document.createElement('div');
    el.className = 'library-card';
    el.style.animationDelay = `${Math.min(i * 0.03, 0.6)}s`;

    const symbolDiv = document.createElement('div');
    symbolDiv.className = 'card-symbol';
    symbolDiv.appendChild(createSymbolSVG(card));

    const nameDiv = document.createElement('div');
    nameDiv.className = 'library-card-name';
    nameDiv.textContent = card.name;

    const suitDiv = document.createElement('div');
    suitDiv.className = 'library-card-suit';
    suitDiv.textContent = card.suit === 'major' ? 'Major Arcana' : card.suit;

    el.appendChild(symbolDiv);
    el.appendChild(nameDiv);
    el.appendChild(suitDiv);
    el.addEventListener('click', () => openModal(card));
    grid.appendChild(el);
  });
}

function openModal(card) {
  // Symbol
  const symbolEl = document.getElementById('modal-symbol');
  symbolEl.innerHTML = '';
  symbolEl.appendChild(createSymbolSVG(card));

  // Name and suit
  document.getElementById('modal-card-name').textContent = card.name;
  const suitLabel = card.suit === 'major' ? 'Major Arcana' :
    card.suit.charAt(0).toUpperCase() + card.suit.slice(1) + ' · Minor Arcana';
  document.getElementById('modal-card-suit').textContent = suitLabel;

  // Meta line (numerology + astrology short)
  const metaEl = document.getElementById('modal-meta');
  const metaParts = [];
  if (card.numerology) metaParts.push(card.numerology.split('.')[0]);
  if (card.astrology) metaParts.push(card.astrology.split('.')[0]);
  metaEl.textContent = metaParts.join(' · ') || '';

  // Keywords
  const keywordsEl = document.getElementById('modal-keywords');
  keywordsEl.innerHTML = '';
  card.keywords.forEach(kw => {
    const tag = document.createElement('span');
    tag.className = 'keyword-tag';
    tag.textContent = kw;
    keywordsEl.appendChild(tag);
  });

  // Flowing narrative (no headings)
  const narrativeEl = document.getElementById('modal-narrative');
  narrativeEl.innerHTML = '';

  const narrativeParts = [];
  if (card.deckPosition) narrativeParts.push(card.deckPosition);
  if (card.suitMeaning) narrativeParts.push(card.suitMeaning);
  if (card.numerology) narrativeParts.push(card.numerology);
  if (card.astrology) narrativeParts.push(card.astrology);
  if (card.foolsJourney) narrativeParts.push(card.foolsJourney);
  if (card.selfPerception) narrativeParts.push(card.selfPerception);
  if (card.worldOutlook) narrativeParts.push(card.worldOutlook);

  narrativeParts.forEach(text => {
    const p = document.createElement('p');
    p.className = 'narrative-para';
    p.textContent = text;
    narrativeEl.appendChild(p);
  });

  // Upright and reversed (detail only, no advice)
  document.getElementById('modal-upright').textContent = card.upright.detail || '';
  document.getElementById('modal-reversed').textContent = card.reversed.detail || '';

  document.getElementById('card-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('card-modal').classList.remove('open');
  document.body.style.overflow = '';
}
