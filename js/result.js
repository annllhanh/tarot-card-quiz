import { createSymbolSVG } from './symbols.js';

let currentCard = null;
let currentReversed = false;

export function initResult() {
  document.getElementById('btn-save-png').addEventListener('click', savePNG);
  document.getElementById('btn-share').addEventListener('click', shareResult);
}

export function showResult(card, isReversed) {
  currentCard = card;
  currentReversed = isReversed;

  window.location.hash = 'result';

  const dir = isReversed ? 'reversed' : 'upright';
  const data = isReversed ? card.reversed : card.upright;

  // Direction badge
  const dirEl = document.getElementById('card-direction');
  dirEl.textContent = isReversed ? '⟲ Reversed' : '⟳ Upright';
  dirEl.className = 'card-direction' + (isReversed ? ' reversed' : '');

  // Symbol
  const symbolEl = document.getElementById('card-symbol-large');
  symbolEl.innerHTML = '';
  const svg = createSymbolSVG(card);
  if (isReversed) svg.style.transform = 'rotate(180deg)';
  symbolEl.appendChild(svg);

  // Card info
  document.getElementById('card-name').textContent = card.name;

  const suitLabel = card.suit === 'major' ? 'Major Arcana' :
    card.suit.charAt(0).toUpperCase() + card.suit.slice(1) + ' · Minor Arcana';
  document.getElementById('card-suit').textContent = suitLabel;

  // Core essence for the export card (short summary)
  const essenceEl = document.getElementById('card-essence');
  essenceEl.textContent = data.brief;

  // Brief advice on card
  const adviceBriefEl = document.getElementById('card-advice-brief');
  adviceBriefEl.textContent = '✦ ' + (data.advice || '').split('.')[0] + '.';

  // Card accent color
  const resultCard = document.getElementById('result-card');
  resultCard.style.setProperty('--card-color', card.colors.primary);

  // Detailed reading sections
  // Keywords
  const keywordsEl = document.getElementById('detail-keywords');
  keywordsEl.innerHTML = '';
  card.keywords.forEach(kw => {
    const tag = document.createElement('span');
    tag.className = 'keyword-tag';
    tag.textContent = kw;
    keywordsEl.appendChild(tag);
  });

  // Flowing narrative (no headings) - deck position + suit meaning
  const positionParts = [];
  if (card.deckPosition) positionParts.push(card.deckPosition);
  if (card.suitMeaning) positionParts.push(card.suitMeaning);
  document.getElementById('detail-position').textContent = positionParts.join(' ') || '';

  // Numerology and Astrology
  const corrParts = [];
  if (card.numerology) corrParts.push(card.numerology);
  if (card.astrology) corrParts.push(card.astrology);
  document.getElementById('detail-correspondences').textContent = corrParts.join(' ') || '';

  // Fool's Journey
  document.getElementById('detail-journey').textContent = card.foolsJourney || '';

  // Self Perception
  document.getElementById('detail-self').textContent = card.selfPerception || '';

  // World Outlook
  document.getElementById('detail-outlook').textContent = card.worldOutlook || '';

  // Meaning (detailed)
  document.getElementById('detail-meaning').textContent = data.detail || '';

  // Conversational advice heading
  const adviceHeading = document.getElementById('advice-heading');
  const headings = [
    'So what does this mean for you?',
    'And where does this leave you?',
    'What is this card asking of you?',
    'Here is what the cards are whispering...',
    'Listen closely. This is for you.'
  ];
  adviceHeading.textContent = headings[Math.floor(Math.random() * headings.length)];

  // Advice (with challenges and cautions)
  document.getElementById('detail-advice').textContent = data.advice || '';
}

async function savePNG() {
  const el = document.getElementById('result-export-area');
  if (!el || typeof html2canvas === 'undefined') {
    alert('Unable to export. Please try again.');
    return;
  }
  try {
    const canvas = await html2canvas(el, {
      backgroundColor: '#070b1a',
      scale: 2,
      useCORS: true,
      logging: false
    });
    const link = document.createElement('a');
    link.download = `tarot-${currentCard.name.toLowerCase().replace(/\s+/g, '-')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch (e) {
    console.error('Export error:', e);
    alert('Export failed. Please try again.');
  }
}

async function shareResult() {
  const dir = currentReversed ? 'Reversed' : 'Upright';
  const brief = currentCard[currentReversed ? 'reversed' : 'upright'].brief;
  const text = `I got "${currentCard.name}" (${dir}) on the Tarot Quiz! ${brief}`;
  const url = window.location.href.split('#')[0] + '#library';

  if (navigator.share) {
    try {
      await navigator.share({ title: 'My Tarot Card Result', text, url });
    } catch (e) { /* user cancelled */ }
  } else {
    try {
      await navigator.clipboard.writeText(text + '\n' + url);
      const btn = document.getElementById('btn-share');
      const orig = btn.innerHTML;
      btn.innerHTML = '<span>✓ Copied!</span>';
      setTimeout(() => btn.innerHTML = orig, 2000);
    } catch (e) {
      alert(text);
    }
  }
}
