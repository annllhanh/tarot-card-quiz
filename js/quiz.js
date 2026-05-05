import { QUESTIONS } from '../content/questions.js';
import { ALL_CARDS } from '../content/cards.js';
import { showResult } from './result.js';

let currentQ = 0;
let answers = [];
let totalScores = { fire:0, water:0, air:0, earth:0, spirit:0, beginning:0, growth:0, mastery:0, completion:0, integration:0, shadow:0 };

export function initQuiz() {
  currentQ = 0;
  answers = [];
  totalScores = { fire:0, water:0, air:0, earth:0, spirit:0, beginning:0, growth:0, mastery:0, completion:0, integration:0, shadow:0 };
  renderQuestion();
}

function renderQuestion() {
  const q = QUESTIONS[currentQ];
  if (!q) return computeResult();

  const card = document.getElementById('quiz-card');
  const questionEl = document.getElementById('quiz-question');
  const answersEl = document.getElementById('quiz-answers');
  const progressFill = document.getElementById('progress-fill');
  const progressText = document.getElementById('progress-text');
  const startStar = document.querySelector('.progress-start');
  const endStar = document.getElementById('progress-end');

  // Light up start star
  if (startStar) startStar.classList.add('lit');

  // Animate transition
  card.classList.add('transitioning');
  setTimeout(() => {
    questionEl.textContent = q.text;
    answersEl.innerHTML = '';

    q.answers.forEach((a, i) => {
      const btn = document.createElement('button');
      btn.className = 'answer-btn';
      btn.textContent = a.text;
      btn.addEventListener('click', () => selectAnswer(i));
      answersEl.appendChild(btn);
    });

    const pct = (currentQ / QUESTIONS.length) * 100;
    progressFill.style.width = pct + '%';
    progressText.textContent = `${currentQ + 1} / ${QUESTIONS.length}`;

    // Light up end star when complete
    if (endStar && pct >= 100) endStar.classList.add('lit');

    card.classList.remove('transitioning');
  }, 300);
}

function selectAnswer(index) {
  const q = QUESTIONS[currentQ];
  const scores = q.answers[index].scores;

  for (const [key, val] of Object.entries(scores)) {
    totalScores[key] = (totalScores[key] || 0) + val;
  }
  answers.push(index);
  currentQ++;
  renderQuestion();
}

function computeResult() {
  const elements = {
    fire: totalScores.fire,
    water: totalScores.water,
    air: totalScores.air,
    earth: totalScores.earth,
    spirit: totalScores.spirit
  };

  const journey = {
    beginning: totalScores.beginning,
    growth: totalScores.growth,
    mastery: totalScores.mastery,
    completion: totalScores.completion,
    integration: totalScores.integration
  };

  // Score each card with a combined approach
  const scored = ALL_CARDS.map(card => {
    let score = 0;
    const cs = card.scores;

    // 1. Element alignment via min overlap (prevents inflation from one huge dimension)
    score += Math.min(elements.fire, cs.fire || 0) * 3;
    score += Math.min(elements.water, cs.water || 0) * 3;
    score += Math.min(elements.air, cs.air || 0) * 3;
    score += Math.min(elements.earth, cs.earth || 0) * 3;
    score += Math.min(elements.spirit, cs.spirit || 0) * 3;

    // 2. Journey stage overlap
    score += Math.min(journey.beginning, cs.beginning || 0) * 2;
    score += Math.min(journey.growth, cs.growth || 0) * 2;
    score += Math.min(journey.mastery, cs.mastery || 0) * 2;
    score += Math.min(journey.completion, cs.completion || 0) * 2;

    // 3. Cosine similarity for directional matching
    const userVec = [
      elements.fire, elements.water, elements.air, elements.earth, elements.spirit,
      journey.beginning, journey.growth, journey.mastery, journey.completion
    ];
    const cardVec = [
      cs.fire||0, cs.water||0, cs.air||0, cs.earth||0, cs.spirit||0,
      cs.beginning||0, cs.growth||0, cs.mastery||0, cs.completion||0
    ];

    const dot = userVec.reduce((sum, v, i) => sum + v * cardVec[i], 0);
    const magA = Math.sqrt(userVec.reduce((sum, v) => sum + v * v, 0));
    const magB = Math.sqrt(cardVec.reduce((sum, v) => sum + v * v, 0));
    const cosine = magA && magB ? dot / (magA * magB) : 0;

    score += cosine * 60;

    // 4. Slight bonus for integration dimension match (for cards with high integration potential)
    if (cs.integration) {
      score += Math.min(totalScores.integration, cs.integration) * 1.5;
    }

    return { card, score };
  });

  scored.sort((a, b) => b.score - a.score);
  const bestCard = scored[0].card;

  // Determine upright vs reversed using shadow score
  // Shadow ranges from 0 (very upright) to ~48 max (very reversed)
  // Mean expected shadow per question is about 1.0, so threshold at ~1.5 per question answered
  const shadowRatio = totalScores.shadow / QUESTIONS.length;
  const isReversed = shadowRatio > 1.5;

  showResult(bestCard, isReversed);
}
