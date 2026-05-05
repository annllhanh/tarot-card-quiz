export const QUESTIONS = [
  { id:1, text:"Right now, what feels most true about your life?",
    answers:[
      {text:"I am standing at the edge of something new and uncertain.", scores:{ m0: 2, spirit: 2 }},
      {text:"I am in the middle of building something that demands all of me.", scores:{ fire: 3, n5: 3 }},
      {text:"I am carrying something heavy that I have not fully processed.", scores:{ water: 3, n2: 3, shadow: 3 }},
      {text:"I am settling into a rhythm, but questioning whether it is the right one.", scores:{ earth: 1, king: 1, shadow: 1 }}
    ]},
  { id:2, text:"When you imagine tomorrow morning, what is the first feeling that surfaces?",
    answers:[
      {text:"Anticipation. There is something I want to move toward.", scores:{ fire: 3, n1: 3 }},
      {text:"Heaviness. The weight of unfinished things presses on me.", scores:{ water: 2, n10: 2, shadow: 3 }},
      {text:"Calm. I know what the day holds and I am ready for it.", scores:{ earth: 1, queen: 1 }},
      {text:"Restlessness. Something inside me wants to break a pattern.", scores:{ air: 2, n4: 2, shadow: 2 }}
    ]},
  { id:3, text:"If you could change one thing about your inner life right now, what would it be?",
    answers:[
      {text:"I would silence the doubt that holds me back from acting.", scores:{ fire: 3, n4: 3, shadow: 2 }},
      {text:"I would heal a wound I keep reopening.", scores:{ water: 4, n4: 4, shadow: 3 }},
      {text:"I would find clarity about what I actually want.", scores:{ air: 4, n6: 4, shadow: 1 }},
      {text:"I would stop sacrificing my needs for stability.", scores:{ earth: 1, n9: 1, shadow: 2 }}
    ]},
  { id:4, text:"What word describes the energy you are living in this week?",
    answers:[
      {text:"Momentum. Things are moving, maybe faster than I can steer.", scores:{ fire: 4, knight: 4 }},
      {text:"Tenderness. I feel emotionally open, maybe more than I would like.", scores:{ water: 4, n3: 4, shadow: 1 }},
      {text:"Tension. I am holding opposing truths at the same time.", scores:{ air: 1, queen: 1, shadow: 2 }},
      {text:"Patience. I am waiting for something to ripen.", scores:{ earth: 4, n8: 4 }}
    ]},
  { id:5, text:"What are you most afraid of losing right now?",
    answers:[
      {text:"My sense of direction. I need to know where I am heading.", scores:{ air: 2, page: 2, shadow: 1 }},
      {text:"A relationship or connection that defines part of me.", scores:{ water: 4, n5: 4, shadow: 2 }},
      {text:"My autonomy. I refuse to be controlled by anyone or anything.", scores:{ fire: 3, n6: 3, shadow: 1 }},
      {text:"What I have built. The security I have worked hard to create.", scores:{ earth: 4, n10: 4, shadow: 1 }}
    ]},
  { id:6, text:"What is calling to you most strongly at this moment in your life?",
    answers:[
      {text:"Creation. I want to make something that did not exist before.", scores:{ fire: 3, page: 3 }},
      {text:"Understanding. I want to see beneath the surface of things.", scores:{ air: 1, king: 1 }},
      {text:"Connection. I want to feel deeply known by someone.", scores:{ water: 4, knight: 4 }},
      {text:"Completion. I want to finish what I started and rest.", scores:{ m20: 3, spirit: 3 }}
    ]},
  { id:7, text:"What do you believe is the purpose of difficulty?",
    answers:[
      {text:"It burns away what is false and reveals who you really are.", scores:{ fire: 4, n2: 4 }},
      {text:"It teaches compassion by breaking your heart open.", scores:{ water: 4, queen: 4 }},
      {text:"It sharpens the mind and forces you to evolve.", scores:{ air: 4, n5: 4 }},
      {text:"It tests your foundations and shows what is truly solid.", scores:{ earth: 4, n7: 4 }}
    ]},
  { id:8, text:"What matters more to you: truth or kindness?",
    answers:[
      {text:"Truth. Even when it hurts, reality deserves honesty.", scores:{ air: 2, n9: 2, shadow: 1 }},
      {text:"Kindness. Truth delivered without care is just cruelty.", scores:{ water: 4, king: 4 }},
      {text:"They are the same thing. Real kindness requires truth.", scores:{ m14: 1, spirit: 1 }},
      {text:"It depends on the situation. Wisdom is knowing which one is needed.", scores:{ fire: 1, queen: 1 }}
    ]},
  { id:9, text:"What gives your life the most meaning?",
    answers:[
      {text:"Pursuing something greater than myself, even if I never reach it.", scores:{ m2: 3, spirit: 3 }},
      {text:"The depth of my relationships. Love is the only thing that is real.", scores:{ water: 4, n6: 4 }},
      {text:"Knowledge and understanding. Making sense of existence.", scores:{ air: 4, n7: 4 }},
      {text:"Providing and building. Leaving something tangible behind.", scores:{ m21: 4, spirit: 4 }}
    ]},
  { id:10, text:"How do you relate to power?",
    answers:[
      {text:"I want to earn it and wield it responsibly.", scores:{ fire: 3, n8: 3 }},
      {text:"I distrust it. Power usually corrupts the person who holds it.", scores:{ water: 2, n7: 2, shadow: 3 }},
      {text:"I believe the deepest power is internal, not external.", scores:{ fire: 1, king: 1 }},
      {text:"I respect it. Structure and authority are necessary for order.", scores:{ air: 1, n8: 1 }}
    ]},
  { id:11, text:"What is your relationship with solitude?",
    answers:[
      {text:"I need it to recharge. Too much company drains me.", scores:{ m12: 2, spirit: 2 }},
      {text:"I seek it to think clearly, but I do not want to live there.", scores:{ air: 3, knight: 3 }},
      {text:"I avoid it. Being alone forces me to face things I would rather not.", scores:{ fire: 1, n3: 1, shadow: 4 }},
      {text:"I have made peace with it. I am good company for myself.", scores:{ m13: 1, spirit: 1 }}
    ]},
  { id:12, text:"When you witness injustice, your strongest impulse is to...",
    answers:[
      {text:"Act immediately. Injustice demands a response, not a debate.", scores:{ air: 4, n2: 4 }},
      {text:"Feel it deeply. Injustice is a wound in the collective heart.", scores:{ m4: 4, spirit: 4, shadow: 1 }},
      {text:"Analyze the system that created it and work to change the structure.", scores:{ air: 4, n3: 4 }},
      {text:"Protect the people affected. Focus on practical support.", scores:{ earth: 1, n4: 1 }}
    ]},
  { id:13, text:"How would you describe your inner voice most of the time?",
    answers:[
      {text:"Bold and encouraging. It pushes me to take risks.", scores:{ fire: 4, n7: 4 }},
      {text:"Gentle and questioning. It asks me to go deeper.", scores:{ m7: 3, spirit: 3 }},
      {text:"Analytical and restless. It picks everything apart.", scores:{ air: 4, n10: 4, shadow: 1 }},
      {text:"Steady and practical. It reminds me what actually matters.", scores:{ m9: 4, spirit: 4 }}
    ]},
  { id:14, text:"When you look at the world around you, what do you see most clearly?",
    answers:[
      {text:"Possibility. The world is full of things waiting to be created.", scores:{ earth: 3, n1: 3 }},
      {text:"Pain. People are struggling, and most of it goes unseen.", scores:{ water: 3, n1: 3, shadow: 2 }},
      {text:"Patterns. Systems, cycles, and connections that others miss.", scores:{ m8: 4, spirit: 4 }},
      {text:"Beauty. Even in ordinary things, there is something sacred.", scores:{ m18: 2, spirit: 2 }}
    ]},
  { id:15, text:"What role does intuition play in your decisions?",
    answers:[
      {text:"It leads. I trust my instincts before I trust evidence.", scores:{ m3: 2, spirit: 2 }},
      {text:"It whispers, but I usually override it with logic.", scores:{ water: 4, n8: 4, shadow: 1 }},
      {text:"It is strong but I struggle to trust it consistently.", scores:{ m6: 1, spirit: 1, shadow: 2 }},
      {text:"It works alongside experience. Neither is enough alone.", scores:{ m10: 1, spirit: 1 }}
    ]},
  { id:16, text:"How do you experience your own emotions?",
    answers:[
      {text:"Intensely. My feelings are vivid and they drive my actions.", scores:{ m5: 3, spirit: 3 }},
      {text:"Deeply, but privately. I process alone before I share.", scores:{ water: 3, n9: 3 }},
      {text:"I observe them from a distance. I prefer not to be ruled by feelings.", scores:{ m11: 4, spirit: 4, shadow: 1 }},
      {text:"Steadily. I feel things, but they do not shake my foundations.", scores:{ earth: 1, n5: 1 }}
    ]},
  { id:17, text:"What do you believe about change?",
    answers:[
      {text:"It is necessary. Stagnation is a slow death.", scores:{ air: 3, n1: 3 }},
      {text:"It is painful but beautiful, like seasons turning.", scores:{ water: 3, page: 3 }},
      {text:"It should be deliberate. Random change is just chaos.", scores:{ fire: 3, n9: 3 }},
      {text:"It is inevitable. What matters is how you root yourself through it.", scores:{ m17: 4, spirit: 4 }}
    ]},
  { id:18, text:"Which statement resonates most with how you see yourself?",
    answers:[
      {text:"I am a force. When I commit, I transform what I touch.", scores:{ earth: 4, n6: 4 }},
      {text:"I am a vessel. I receive, hold, and reflect what others cannot see in themselves.", scores:{ earth: 4, n2: 4 }},
      {text:"I am a mind. I cut through confusion and find what is real.", scores:{ earth: 4, knight: 4 }},
      {text:"I am a gardener. I nurture what is planted and trust the timing.", scores:{ earth: 1, n3: 1 }}
    ]},
  { id:19, text:"What pattern in yourself do you recognize but struggle to change?",
    answers:[
      {text:"Burning out. I give everything until there is nothing left.", scores:{ fire: 3, n10: 3, shadow: 3 }},
      {text:"Merging. I lose myself in other people's needs and feelings.", scores:{ m19: 3, spirit: 3, shadow: 4 }},
      {text:"Overthinking. I analyze until the moment for action passes.", scores:{ m1: 3, spirit: 3, shadow: 4 }},
      {text:"Rigidity. I hold on too tightly to what feels safe.", scores:{ m16: 3, spirit: 3, shadow: 4 }}
    ]},
  { id:20, text:"When someone criticizes you, your honest first reaction is...",
    answers:[
      {text:"Defensiveness. I want to prove them wrong immediately.", scores:{ earth: 3, page: 3, shadow: 3 }},
      {text:"Hurt. I absorb it and replay it in my mind for days.", scores:{ m15: 3, spirit: 3, shadow: 4 }},
      {text:"Detachment. I evaluate whether the criticism has merit.", scores:{ air: 3, n8: 3, shadow: 1 }},
      {text:"Silence. I pull back and assess whether this person is safe.", scores:{ earth: 1, queen: 1, shadow: 2 }}
    ]},
  { id:21, text:"What do you do with the parts of yourself you dislike?",
    answers:[
      {text:"I fight them. I try to overpower weakness with willpower.", scores:{ fire: 4, n2: 4, shadow: 2 }},
      {text:"I hide them. Some things are better kept beneath the surface.", scores:{ water: 2, n2: 2, shadow: 5 }},
      {text:"I study them. Understanding a flaw is the first step to transcending it.", scores:{ air: 3, king: 3, shadow: 1 }},
      {text:"I accept them. They are part of the whole and that is enough.", scores:{ m20: 1, spirit: 1 }}
    ]},
  { id:22, text:"What is your relationship with control?",
    answers:[
      {text:"I need it. Without control, everything feels dangerous.", scores:{ fire: 2, n9: 2, shadow: 3 }},
      {text:"I surrender it. Trying to control life only increases suffering.", scores:{ m21: 2, spirit: 2, shadow: 1 }},
      {text:"I am learning to hold it loosely. Control what you can, release the rest.", scores:{ fire: 1, king: 1 }},
      {text:"I resist being controlled, but I do not need to control others.", scores:{ fire: 2, n3: 2, shadow: 1 }}
    ]},
  { id:23, text:"What would it take for you to feel truly at peace?",
    answers:[
      {text:"Knowing I gave everything I had to what mattered most.", scores:{ fire: 3, queen: 3 }},
      {text:"Feeling fully loved and fully seen by the people I love.", scores:{ water: 4, king: 4 }},
      {text:"Understanding why I am here and what my life means.", scores:{ m14: 2, spirit: 2 }},
      {text:"Having built a life where I and my people are safe and provided for.", scores:{ earth: 4, n10: 4 }}
    ]},
  { id:24, text:"If you could send a message to your past self, what would it say?",
    answers:[
      {text:"Stop waiting for permission. You already have what you need.", scores:{ fire: 3, n1: 3 }},
      {text:"The pain was not wasted. Every wound taught you how to love.", scores:{ water: 3, queen: 3 }},
      {text:"Trust yourself more. You were right more often than you knew.", scores:{ air: 1, queen: 1 }},
      {text:"Keep building. The foundation you laid will hold more than you think.", scores:{ earth: 3, king: 3 }}
    ]}
];
