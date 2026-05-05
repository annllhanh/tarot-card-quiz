// Quiz questions: 24 questions probing current state, core values, inner world, and shadow
// Each answer scores: fire, water, air, earth, spirit, beginning, growth, mastery, completion, integration, shadow

export const QUESTIONS = [
  // ─── CURRENT STATE (Q1-6): Where are you right now? ───
  { id:1, text:"Right now, what feels most true about your life?",
    answers:[
      {text:"I am standing at the edge of something new and uncertain.", scores:{fire:2,water:0,air:1,earth:0,spirit:3,beginning:5,growth:0,mastery:0,completion:0,integration:0,shadow:0}},
      {text:"I am in the middle of building something that demands all of me.", scores:{fire:3,water:0,air:1,earth:2,spirit:0,beginning:0,growth:5,mastery:1,completion:0,integration:0,shadow:0}},
      {text:"I am carrying something heavy that I have not fully processed.", scores:{fire:0,water:3,air:1,earth:0,spirit:1,beginning:0,growth:2,mastery:0,completion:2,integration:0,shadow:3}},
      {text:"I am settling into a rhythm, but questioning whether it is the right one.", scores:{fire:0,water:1,air:2,earth:2,spirit:1,beginning:0,growth:1,mastery:3,completion:1,integration:1,shadow:1}}
    ]},
  { id:2, text:"When you imagine tomorrow morning, what is the first feeling that surfaces?",
    answers:[
      {text:"Anticipation. There is something I want to move toward.", scores:{fire:3,water:0,air:1,earth:0,spirit:1,beginning:3,growth:2,mastery:0,completion:0,integration:0,shadow:0}},
      {text:"Heaviness. The weight of unfinished things presses on me.", scores:{fire:0,water:2,air:1,earth:1,spirit:0,beginning:0,growth:1,mastery:0,completion:2,integration:0,shadow:3}},
      {text:"Calm. I know what the day holds and I am ready for it.", scores:{fire:0,water:1,air:0,earth:3,spirit:1,beginning:0,growth:0,mastery:3,completion:1,integration:2,shadow:0}},
      {text:"Restlessness. Something inside me wants to break a pattern.", scores:{fire:2,water:0,air:3,earth:0,spirit:1,beginning:2,growth:2,mastery:0,completion:0,integration:0,shadow:2}}
    ]},
  { id:3, text:"If you could change one thing about your inner life right now, what would it be?",
    answers:[
      {text:"I would silence the doubt that holds me back from acting.", scores:{fire:3,water:0,air:2,earth:0,spirit:0,beginning:2,growth:2,mastery:0,completion:0,integration:0,shadow:2}},
      {text:"I would heal a wound I keep reopening.", scores:{fire:0,water:4,air:0,earth:0,spirit:2,beginning:0,growth:1,mastery:0,completion:2,integration:0,shadow:3}},
      {text:"I would find clarity about what I actually want.", scores:{fire:0,water:0,air:4,earth:0,spirit:1,beginning:1,growth:2,mastery:1,completion:0,integration:1,shadow:1}},
      {text:"I would stop sacrificing my needs for stability.", scores:{fire:1,water:1,air:0,earth:3,spirit:0,beginning:0,growth:1,mastery:2,completion:1,integration:0,shadow:2}}
    ]},
  { id:4, text:"What word describes the energy you are living in this week?",
    answers:[
      {text:"Momentum. Things are moving, maybe faster than I can steer.", scores:{fire:4,water:0,air:1,earth:0,spirit:0,beginning:1,growth:4,mastery:0,completion:0,integration:0,shadow:0}},
      {text:"Tenderness. I feel emotionally open, maybe more than I would like.", scores:{fire:0,water:4,air:0,earth:0,spirit:1,beginning:0,growth:2,mastery:0,completion:1,integration:1,shadow:1}},
      {text:"Tension. I am holding opposing truths at the same time.", scores:{fire:1,water:1,air:3,earth:0,spirit:0,beginning:0,growth:2,mastery:1,completion:0,integration:1,shadow:2}},
      {text:"Patience. I am waiting for something to ripen.", scores:{fire:0,water:0,air:0,earth:4,spirit:1,beginning:0,growth:1,mastery:2,completion:1,integration:1,shadow:0}}
    ]},
  { id:5, text:"What are you most afraid of losing right now?",
    answers:[
      {text:"My sense of direction. I need to know where I am heading.", scores:{fire:2,water:0,air:3,earth:0,spirit:1,beginning:2,growth:1,mastery:1,completion:0,integration:0,shadow:1}},
      {text:"A relationship or connection that defines part of me.", scores:{fire:0,water:4,air:0,earth:1,spirit:0,beginning:0,growth:2,mastery:0,completion:1,integration:1,shadow:2}},
      {text:"My autonomy. I refuse to be controlled by anyone or anything.", scores:{fire:3,water:0,air:2,earth:0,spirit:1,beginning:1,growth:2,mastery:1,completion:0,integration:0,shadow:1}},
      {text:"What I have built. The security I have worked hard to create.", scores:{fire:0,water:0,air:0,earth:4,spirit:0,beginning:0,growth:0,mastery:2,completion:3,integration:1,shadow:1}}
    ]},
  { id:6, text:"What is calling to you most strongly at this moment in your life?",
    answers:[
      {text:"Creation. I want to make something that did not exist before.", scores:{fire:3,water:1,air:1,earth:1,spirit:1,beginning:3,growth:2,mastery:0,completion:0,integration:0,shadow:0}},
      {text:"Understanding. I want to see beneath the surface of things.", scores:{fire:0,water:1,air:3,earth:0,spirit:2,beginning:1,growth:2,mastery:2,completion:0,integration:1,shadow:0}},
      {text:"Connection. I want to feel deeply known by someone.", scores:{fire:0,water:4,air:0,earth:0,spirit:1,beginning:0,growth:3,mastery:0,completion:1,integration:1,shadow:0}},
      {text:"Completion. I want to finish what I started and rest.", scores:{fire:0,water:0,air:0,earth:3,spirit:1,beginning:0,growth:0,mastery:1,completion:4,integration:1,shadow:0}}
    ]},
  // ─── CORE VALUES (Q7-12): What do you believe most deeply? ───
  { id:7, text:"What do you believe is the purpose of difficulty?",
    answers:[
      {text:"It burns away what is false and reveals who you really are.", scores:{fire:4,water:0,air:1,earth:0,spirit:1,beginning:0,growth:3,mastery:1,completion:0,integration:1,shadow:0}},
      {text:"It teaches compassion by breaking your heart open.", scores:{fire:0,water:4,air:0,earth:0,spirit:2,beginning:0,growth:2,mastery:1,completion:0,integration:1,shadow:0}},
      {text:"It sharpens the mind and forces you to evolve.", scores:{fire:0,water:0,air:4,earth:0,spirit:1,beginning:0,growth:2,mastery:2,completion:0,integration:1,shadow:0}},
      {text:"It tests your foundations and shows what is truly solid.", scores:{fire:0,water:0,air:0,earth:4,spirit:0,beginning:0,growth:1,mastery:2,completion:1,integration:2,shadow:0}}
    ]},
  { id:8, text:"What matters more to you: truth or kindness?",
    answers:[
      {text:"Truth. Even when it hurts, reality deserves honesty.", scores:{fire:2,water:0,air:4,earth:0,spirit:0,beginning:0,growth:1,mastery:3,completion:0,integration:0,shadow:1}},
      {text:"Kindness. Truth delivered without care is just cruelty.", scores:{fire:0,water:4,air:0,earth:0,spirit:1,beginning:0,growth:2,mastery:1,completion:0,integration:1,shadow:0}},
      {text:"They are the same thing. Real kindness requires truth.", scores:{fire:1,water:1,air:2,earth:0,spirit:2,beginning:0,growth:1,mastery:2,completion:0,integration:3,shadow:0}},
      {text:"It depends on the situation. Wisdom is knowing which one is needed.", scores:{fire:0,water:1,air:1,earth:2,spirit:1,beginning:0,growth:1,mastery:2,completion:0,integration:2,shadow:0}}
    ]},
  { id:9, text:"What gives your life the most meaning?",
    answers:[
      {text:"Pursuing something greater than myself, even if I never reach it.", scores:{fire:3,water:0,air:1,earth:0,spirit:3,beginning:2,growth:2,mastery:1,completion:0,integration:0,shadow:0}},
      {text:"The depth of my relationships. Love is the only thing that is real.", scores:{fire:0,water:4,air:0,earth:1,spirit:1,beginning:0,growth:2,mastery:0,completion:2,integration:1,shadow:0}},
      {text:"Knowledge and understanding. Making sense of existence.", scores:{fire:0,water:0,air:4,earth:0,spirit:2,beginning:1,growth:1,mastery:3,completion:0,integration:0,shadow:0}},
      {text:"Providing and building. Leaving something tangible behind.", scores:{fire:0,water:0,air:0,earth:4,spirit:0,beginning:0,growth:1,mastery:2,completion:3,integration:1,shadow:0}}
    ]},
  { id:10, text:"How do you relate to power?",
    answers:[
      {text:"I want to earn it and wield it responsibly.", scores:{fire:3,water:0,air:1,earth:2,spirit:0,beginning:0,growth:2,mastery:3,completion:0,integration:0,shadow:0}},
      {text:"I distrust it. Power usually corrupts the person who holds it.", scores:{fire:0,water:2,air:2,earth:0,spirit:1,beginning:0,growth:1,mastery:1,completion:0,integration:0,shadow:3}},
      {text:"I believe the deepest power is internal, not external.", scores:{fire:1,water:1,air:1,earth:0,spirit:4,beginning:0,growth:1,mastery:2,completion:0,integration:3,shadow:0}},
      {text:"I respect it. Structure and authority are necessary for order.", scores:{fire:0,water:0,air:1,earth:4,spirit:0,beginning:0,growth:0,mastery:3,completion:2,integration:1,shadow:0}}
    ]},
  { id:11, text:"What is your relationship with solitude?",
    answers:[
      {text:"I need it to recharge. Too much company drains me.", scores:{fire:0,water:2,air:2,earth:0,spirit:2,beginning:0,growth:1,mastery:2,completion:1,integration:1,shadow:0}},
      {text:"I seek it to think clearly, but I do not want to live there.", scores:{fire:0,water:0,air:3,earth:1,spirit:1,beginning:0,growth:2,mastery:2,completion:0,integration:1,shadow:0}},
      {text:"I avoid it. Being alone forces me to face things I would rather not.", scores:{fire:1,water:2,air:0,earth:0,spirit:0,beginning:0,growth:2,mastery:0,completion:0,integration:0,shadow:4}},
      {text:"I have made peace with it. I am good company for myself.", scores:{fire:0,water:1,air:0,earth:2,spirit:2,beginning:0,growth:0,mastery:3,completion:1,integration:3,shadow:0}}
    ]},
  { id:12, text:"When you witness injustice, your strongest impulse is to...",
    answers:[
      {text:"Act immediately. Injustice demands a response, not a debate.", scores:{fire:4,water:0,air:1,earth:0,spirit:1,beginning:1,growth:3,mastery:1,completion:0,integration:0,shadow:0}},
      {text:"Feel it deeply. Injustice is a wound in the collective heart.", scores:{fire:0,water:4,air:0,earth:0,spirit:2,beginning:0,growth:2,mastery:0,completion:0,integration:1,shadow:1}},
      {text:"Analyze the system that created it and work to change the structure.", scores:{fire:0,water:0,air:4,earth:1,spirit:0,beginning:0,growth:1,mastery:3,completion:0,integration:1,shadow:0}},
      {text:"Protect the people affected. Focus on practical support.", scores:{fire:0,water:1,air:0,earth:4,spirit:0,beginning:0,growth:1,mastery:2,completion:1,integration:1,shadow:0}}
    ]},
  // ─── INNER WORLD (Q13-18): How do you see yourself and reality? ───
  { id:13, text:"How would you describe your inner voice most of the time?",
    answers:[
      {text:"Bold and encouraging. It pushes me to take risks.", scores:{fire:4,water:0,air:0,earth:0,spirit:1,beginning:2,growth:2,mastery:1,completion:0,integration:0,shadow:0}},
      {text:"Gentle and questioning. It asks me to go deeper.", scores:{fire:0,water:3,air:1,earth:0,spirit:2,beginning:0,growth:2,mastery:1,completion:0,integration:1,shadow:0}},
      {text:"Analytical and restless. It picks everything apart.", scores:{fire:0,water:0,air:4,earth:0,spirit:0,beginning:0,growth:2,mastery:2,completion:0,integration:0,shadow:1}},
      {text:"Steady and practical. It reminds me what actually matters.", scores:{fire:0,water:0,air:0,earth:4,spirit:0,beginning:0,growth:0,mastery:3,completion:1,integration:2,shadow:0}}
    ]},
  { id:14, text:"When you look at the world around you, what do you see most clearly?",
    answers:[
      {text:"Possibility. The world is full of things waiting to be created.", scores:{fire:3,water:0,air:1,earth:1,spirit:1,beginning:3,growth:2,mastery:0,completion:0,integration:0,shadow:0}},
      {text:"Pain. People are struggling, and most of it goes unseen.", scores:{fire:0,water:3,air:1,earth:0,spirit:1,beginning:0,growth:1,mastery:0,completion:1,integration:0,shadow:2}},
      {text:"Patterns. Systems, cycles, and connections that others miss.", scores:{fire:0,water:0,air:4,earth:0,spirit:1,beginning:0,growth:1,mastery:3,completion:0,integration:1,shadow:0}},
      {text:"Beauty. Even in ordinary things, there is something sacred.", scores:{fire:0,water:2,air:0,earth:2,spirit:3,beginning:0,growth:1,mastery:1,completion:1,integration:2,shadow:0}}
    ]},
  { id:15, text:"What role does intuition play in your decisions?",
    answers:[
      {text:"It leads. I trust my instincts before I trust evidence.", scores:{fire:2,water:2,air:0,earth:0,spirit:3,beginning:2,growth:1,mastery:1,completion:0,integration:1,shadow:0}},
      {text:"It whispers, but I usually override it with logic.", scores:{fire:0,water:0,air:4,earth:1,spirit:0,beginning:0,growth:1,mastery:3,completion:0,integration:0,shadow:1}},
      {text:"It is strong but I struggle to trust it consistently.", scores:{fire:1,water:2,air:1,earth:0,spirit:1,beginning:1,growth:2,mastery:0,completion:0,integration:0,shadow:2}},
      {text:"It works alongside experience. Neither is enough alone.", scores:{fire:0,water:1,air:1,earth:2,spirit:1,beginning:0,growth:1,mastery:2,completion:1,integration:3,shadow:0}}
    ]},
  { id:16, text:"How do you experience your own emotions?",
    answers:[
      {text:"Intensely. My feelings are vivid and they drive my actions.", scores:{fire:3,water:2,air:0,earth:0,spirit:1,beginning:1,growth:3,mastery:0,completion:0,integration:0,shadow:0}},
      {text:"Deeply, but privately. I process alone before I share.", scores:{fire:0,water:3,air:1,earth:0,spirit:2,beginning:0,growth:1,mastery:2,completion:0,integration:1,shadow:0}},
      {text:"I observe them from a distance. I prefer not to be ruled by feelings.", scores:{fire:0,water:0,air:4,earth:1,spirit:0,beginning:0,growth:0,mastery:3,completion:0,integration:1,shadow:1}},
      {text:"Steadily. I feel things, but they do not shake my foundations.", scores:{fire:0,water:1,air:0,earth:3,spirit:0,beginning:0,growth:0,mastery:2,completion:2,integration:2,shadow:0}}
    ]},
  { id:17, text:"What do you believe about change?",
    answers:[
      {text:"It is necessary. Stagnation is a slow death.", scores:{fire:3,water:0,air:2,earth:0,spirit:1,beginning:3,growth:2,mastery:0,completion:0,integration:0,shadow:0}},
      {text:"It is painful but beautiful, like seasons turning.", scores:{fire:0,water:3,air:0,earth:1,spirit:2,beginning:1,growth:2,mastery:0,completion:1,integration:1,shadow:0}},
      {text:"It should be deliberate. Random change is just chaos.", scores:{fire:0,water:0,air:3,earth:2,spirit:0,beginning:0,growth:1,mastery:3,completion:0,integration:1,shadow:0}},
      {text:"It is inevitable. What matters is how you root yourself through it.", scores:{fire:0,water:0,air:0,earth:4,spirit:1,beginning:0,growth:0,mastery:2,completion:2,integration:2,shadow:0}}
    ]},
  { id:18, text:"Which statement resonates most with how you see yourself?",
    answers:[
      {text:"I am a force. When I commit, I transform what I touch.", scores:{fire:4,water:0,air:0,earth:1,spirit:1,beginning:0,growth:2,mastery:3,completion:0,integration:0,shadow:0}},
      {text:"I am a vessel. I receive, hold, and reflect what others cannot see in themselves.", scores:{fire:0,water:4,air:0,earth:0,spirit:2,beginning:0,growth:2,mastery:1,completion:0,integration:1,shadow:0}},
      {text:"I am a mind. I cut through confusion and find what is real.", scores:{fire:0,water:0,air:4,earth:0,spirit:1,beginning:0,growth:1,mastery:3,completion:0,integration:1,shadow:0}},
      {text:"I am a gardener. I nurture what is planted and trust the timing.", scores:{fire:0,water:1,air:0,earth:4,spirit:1,beginning:0,growth:1,mastery:1,completion:2,integration:2,shadow:0}}
    ]},
  // ─── SHADOW AND GROWTH (Q19-24): What is your edge? ───
  { id:19, text:"What pattern in yourself do you recognize but struggle to change?",
    answers:[
      {text:"Burning out. I give everything until there is nothing left.", scores:{fire:3,water:0,air:0,earth:1,spirit:0,beginning:0,growth:3,mastery:0,completion:1,integration:0,shadow:3}},
      {text:"Merging. I lose myself in other people's needs and feelings.", scores:{fire:0,water:3,air:0,earth:0,spirit:1,beginning:0,growth:2,mastery:0,completion:0,integration:0,shadow:4}},
      {text:"Overthinking. I analyze until the moment for action passes.", scores:{fire:0,water:0,air:3,earth:0,spirit:0,beginning:0,growth:1,mastery:2,completion:0,integration:0,shadow:4}},
      {text:"Rigidity. I hold on too tightly to what feels safe.", scores:{fire:0,water:0,air:0,earth:3,spirit:0,beginning:0,growth:0,mastery:2,completion:2,integration:0,shadow:4}}
    ]},
  { id:20, text:"When someone criticizes you, your honest first reaction is...",
    answers:[
      {text:"Defensiveness. I want to prove them wrong immediately.", scores:{fire:3,water:0,air:1,earth:0,spirit:0,beginning:1,growth:2,mastery:0,completion:0,integration:0,shadow:3}},
      {text:"Hurt. I absorb it and replay it in my mind for days.", scores:{fire:0,water:3,air:1,earth:0,spirit:0,beginning:0,growth:1,mastery:0,completion:0,integration:0,shadow:4}},
      {text:"Detachment. I evaluate whether the criticism has merit.", scores:{fire:0,water:0,air:3,earth:1,spirit:0,beginning:0,growth:1,mastery:3,completion:0,integration:0,shadow:1}},
      {text:"Silence. I pull back and assess whether this person is safe.", scores:{fire:0,water:1,air:0,earth:2,spirit:1,beginning:0,growth:0,mastery:2,completion:0,integration:1,shadow:2}}
    ]},
  { id:21, text:"What do you do with the parts of yourself you dislike?",
    answers:[
      {text:"I fight them. I try to overpower weakness with willpower.", scores:{fire:4,water:0,air:0,earth:0,spirit:0,beginning:0,growth:3,mastery:1,completion:0,integration:0,shadow:2}},
      {text:"I hide them. Some things are better kept beneath the surface.", scores:{fire:0,water:2,air:0,earth:1,spirit:0,beginning:0,growth:1,mastery:0,completion:0,integration:0,shadow:5}},
      {text:"I study them. Understanding a flaw is the first step to transcending it.", scores:{fire:0,water:0,air:3,earth:0,spirit:2,beginning:0,growth:2,mastery:2,completion:0,integration:1,shadow:1}},
      {text:"I accept them. They are part of the whole and that is enough.", scores:{fire:0,water:1,air:0,earth:1,spirit:2,beginning:0,growth:0,mastery:1,completion:1,integration:4,shadow:0}}
    ]},
  { id:22, text:"What is your relationship with control?",
    answers:[
      {text:"I need it. Without control, everything feels dangerous.", scores:{fire:2,water:0,air:1,earth:2,spirit:0,beginning:0,growth:1,mastery:2,completion:1,integration:0,shadow:3}},
      {text:"I surrender it. Trying to control life only increases suffering.", scores:{fire:0,water:2,air:0,earth:0,spirit:3,beginning:0,growth:0,mastery:1,completion:1,integration:2,shadow:1}},
      {text:"I am learning to hold it loosely. Control what you can, release the rest.", scores:{fire:1,water:1,air:1,earth:1,spirit:1,beginning:0,growth:2,mastery:1,completion:0,integration:3,shadow:0}},
      {text:"I resist being controlled, but I do not need to control others.", scores:{fire:2,water:0,air:2,earth:0,spirit:1,beginning:2,growth:2,mastery:0,completion:0,integration:1,shadow:1}}
    ]},
  { id:23, text:"What would it take for you to feel truly at peace?",
    answers:[
      {text:"Knowing I gave everything I had to what mattered most.", scores:{fire:3,water:0,air:0,earth:2,spirit:1,beginning:0,growth:1,mastery:2,completion:2,integration:1,shadow:0}},
      {text:"Feeling fully loved and fully seen by the people I love.", scores:{fire:0,water:4,air:0,earth:0,spirit:1,beginning:0,growth:1,mastery:0,completion:2,integration:2,shadow:0}},
      {text:"Understanding why I am here and what my life means.", scores:{fire:0,water:0,air:2,earth:0,spirit:4,beginning:1,growth:1,mastery:2,completion:0,integration:1,shadow:0}},
      {text:"Having built a life where I and my people are safe and provided for.", scores:{fire:0,water:0,air:0,earth:4,spirit:0,beginning:0,growth:0,mastery:2,completion:4,integration:1,shadow:0}}
    ]},
  { id:24, text:"If you could send a message to your past self, what would it say?",
    answers:[
      {text:"Stop waiting for permission. You already have what you need.", scores:{fire:3,water:0,air:1,earth:0,spirit:2,beginning:3,growth:2,mastery:0,completion:0,integration:1,shadow:0}},
      {text:"The pain was not wasted. Every wound taught you how to love.", scores:{fire:0,water:3,air:0,earth:0,spirit:3,beginning:0,growth:1,mastery:1,completion:2,integration:2,shadow:0}},
      {text:"Trust yourself more. You were right more often than you knew.", scores:{fire:1,water:1,air:2,earth:0,spirit:1,beginning:0,growth:2,mastery:2,completion:0,integration:2,shadow:0}},
      {text:"Keep building. The foundation you laid will hold more than you think.", scores:{fire:0,water:0,air:0,earth:3,spirit:1,beginning:0,growth:0,mastery:2,completion:3,integration:2,shadow:0}}
    ]}
];
