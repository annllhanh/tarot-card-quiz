// Unified card index
import { MAJOR_ARCANA } from './major.js';
import { WANDS } from './wands.js';
import { CUPS } from './cups.js';
import { SWORDS } from './swords.js';
import { PENTACLES } from './pentacles.js';

export const ALL_CARDS = [
  ...MAJOR_ARCANA,
  ...WANDS,
  ...CUPS,
  ...SWORDS,
  ...PENTACLES
];

export function getCardById(id) {
  return ALL_CARDS.find(c => c.id === id);
}

export function getCardsBySuit(suit) {
  if (suit === 'all') return ALL_CARDS;
  return ALL_CARDS.filter(c => c.suit === suit);
}

export { MAJOR_ARCANA, WANDS, CUPS, SWORDS, PENTACLES };
