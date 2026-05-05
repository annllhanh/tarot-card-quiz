import { QUESTIONS } from '../content/questions.js';
import { ALL_CARDS } from '../content/cards.js';
import { showResult } from './result.js';

let currentQ = 0;
let answers = [];
let totalScores = { shadow: 0 };

export function initQuiz() {
  currentQ = 0;
  answers = [];
  totalScores = { shadow: 0 };
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
  const shadowScore = totalScores.shadow || 0;
  const userKeys = Object.keys(totalScores).filter(k => k !== 'shadow');

  // Score each card using pure Cosine Similarity across all dynamic dimensions
  const scored = ALL_CARDS.map(card => {
    const cs = card.scores;
    const allKeys = new Set([...userKeys, ...Object.keys(cs)]);
    allKeys.delete('shadow');

    let dot = 0;
    let magUserSq = 0;
    let magCardSq = 0;

    for (const key of allKeys) {
      const uVal = totalScores[key] || 0;
      const cVal = cs[key] || 0;
      
      dot += uVal * cVal;
      magUserSq += uVal * uVal;
      magCardSq += cVal * cVal;
    }

    const magA = Math.sqrt(magUserSq);
    const magB = Math.sqrt(magCardSq);
    const cosine = (magA && magB) ? dot / (magA * magB) : 0;

    return { card, score: cosine };
  });

  scored.sort((a, b) => b.score - a.score);
  const bestCard = scored[0].card;

  // Determine upright vs reversed using shadow score
  const shadowRatio = shadowScore / QUESTIONS.length;
  const isReversed = shadowRatio > 1.5;

  showResult(bestCard, isReversed);
}
