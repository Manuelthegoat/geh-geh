// src/lib/constants.ts
export type Question = {
  id: number;
  text: string;
  options: {
    value: number;
    label: string;
    personalityTrait: string[]; // raw traits -> mapped to canonical course keys
  }[];
};

// === GehGeh University Courses ===
export const COURSES = {
  opuehnology: {
    name: "Dept. of Opuehnology",
    description:
      "Na you sabi road for knack matters — code words, timing, consent, logistics. Street Sexology 401.",
  },
  finance: {
    name: "Dept. of Financial Ambiness & Stingyness",
    description:
      "You sabi budget like soldier. Bill no fit trap you; every spend dey audit.",
  },
  wisdom: {
    name: "Dept. of Wisdom Science",
    description:
      "Strategy, boundaries, receipts — you dey use sense pass emotions. Long game master.",
  },
  pounding: {
    name: "Dept. of Pounding & Bending",
    description:
      "Energy and stamina department. Practical courses full everywhere.",
  },
  wicked: {
    name: "Dept. of Mental Wickednedd & Manipulation",
    description:
      "Reverse psychology & ghost protocol. You sabi dodge nonsense with mind games.",
  },
  doggy: {
    name: "Dept. of Creative Doggy & Philosophy",
    description:
      "Innovation + angles + metaphysics of enjoyment. You dey think outside the mattress.",
  },
  toto: {
    name: "Dept. of TOTO‑currency",
    description:
      "You understand ‘market forces’ — negotiation, rates, incentives. Macro‑opueh economics.",
  },
} as const;

export type CanonicalTrait = keyof typeof COURSES;

// Map raw option labels to canonical course keys
export const TRAIT_ALIASES: Record<string, CanonicalTrait> = {
  // direct names
  opuehnology: "opuehnology",
  finance: "finance",
  wisdom: "wisdom",
  pounding: "pounding",
  wicked: "wicked",
  doggy: "doggy",
  toto: "toto",

  // synonyms / hints
  stingy: "finance",
  woke: "wisdom",
  sex: "pounding",
  manipulation: "wicked",
  creative: "doggy",
  vagina: "toto",
};

// === 20 GehGeh University Questions (Pidgin, billing-dodge + affairs-with-sense) ===
export const QUESTIONS: Question[] = [
  // Admissions / Entry Logic
  {
    id: 1,
    text: "First link‑up plan wey no go finish your pocket?",
    options: [
      { value: 1, label: "Movie night for my crib — lights low", personalityTrait: ["opuehnology"] },
      { value: 2, label: "Walk + suya budget, no wahala", personalityTrait: ["finance"] },
      { value: 3, label: "Public spot for safety, talk first", personalityTrait: ["wisdom"] },
      { value: 4, label: "Gym together — test stamina first", personalityTrait: ["pounding"] },
    ],
  },
  {
    id: 2,
    text: "She yarn “I no too like outside; come over with small tins.”",
    options: [
      { value: 1, label: "Pull up with snacks + vibes, keep logistics tight", personalityTrait: ["opuehnology"] },
      { value: 2, label: "Ask wetin exactly she need — no overbuy", personalityTrait: ["finance"] },
      { value: 3, label: "Confirm consent + boundaries clearly", personalityTrait: ["wisdom"] },
      { value: 4, label: "Carry speaker + playlist for cardio", personalityTrait: ["pounding"] },
    ],
  },

  // Relationship / Billing Traps
  {
    id: 3,
    text: "Babe: “If you love me, do something.” Your SOP?",
    options: [
      { value: 1, label: "Plan coded chill — love language + timing", personalityTrait: ["opuehnology"] },
      { value: 2, label: "Do within budget or nothing", personalityTrait: ["finance"] },
      { value: 3, label: "Ask wetin ‘something’ mean — define am", personalityTrait: ["wisdom"] },
      { value: 4, label: "Shift am with cruise till topic die", personalityTrait: ["wicked"] },
    ],
  },
  {
    id: 4,
    text: "She say “Transport me first” before link.",
    options: [
      { value: 1, label: "Book ride one‑way, meet halfway", personalityTrait: ["opuehnology"] },
      { value: 2, label: "Send exact fare, screenshot remain", personalityTrait: ["finance"] },
      { value: 3, label: "Suggest midpoint date: café + bus stop", personalityTrait: ["wisdom"] },
      { value: 4, label: "Tell am ‘collect on arrival’ — if she no come, case close", personalityTrait: ["wicked"] },
    ],
  },

  // GehGeh Signals
  {
    id: 5,
    text: "Green flag wey dey show say gist fit enter practical?",
    options: [
      { value: 1, label: "She match your flirting energy coded", personalityTrait: ["opuehnology"] },
      { value: 2, label: "She respect budget talk, no entitlement", personalityTrait: ["finance"] },
      { value: 3, label: "She dey clear about consent & safety", personalityTrait: ["wisdom"] },
      { value: 4, label: "She dey ask about stamina like joke", personalityTrait: ["pounding"] },
    ],
  },
  {
    id: 6,
    text: "Red flag wey fit be TOTO‑currency alert:",
    options: [
      { value: 1, label: "Every chat end with bill hint", personalityTrait: ["toto"] },
      { value: 2, label: "Urgent 2k before first meet", personalityTrait: ["finance"] },
      { value: 3, label: "‘No calls, only text’ + price talk", personalityTrait: ["toto"] },
      { value: 4, label: "Emotional blackmail as budget tool", personalityTrait: ["wicked"] },
    ],
  },

  // Money Sense
  {
    id: 7,
    text: "Urgent 2k drop on day 2 of chatting:",
    options: [
      { value: 1, label: "Send small data + joke, watch response", personalityTrait: ["wisdom"] },
      { value: 2, label: "Transfer exact 2k once — case closed", personalityTrait: ["finance"] },
      { value: 3, label: "Divert gist to link plan with low spend", personalityTrait: ["opuehnology"] },
      { value: 4, label: "Pray emoji + mute 1 week", personalityTrait: ["wicked"] },
    ],
  },
  {
    id: 8,
    text: "Bill land for table, your default?",
    options: [
      { value: 1, label: "Suggest split coded — equality narrative", personalityTrait: ["finance"] },
      { value: 2, label: "Pay for drinks, she handle dessert", personalityTrait: ["wisdom"] },
      { value: 3, label: "I cover today, you plan next link", personalityTrait: ["opuehnology"] },
      { value: 4, label: "‘POS no dey read’ — relocate quickly", personalityTrait: ["wicked"] },
    ],
  },

  // Practical Ops (sex logistics)
  {
    id: 9,
    text: "Night text: “Pull up now.” How you package?",
    options: [
      { value: 1, label: "Condoms + mint + wipes + alibi — coded ops", personalityTrait: ["opuehnology"] },
      { value: 2, label: "Ask tomorrow better — 9‑to‑5 no gree", personalityTrait: ["wisdom"] },
      { value: 3, label: "Bike go — no surge, no long talk", personalityTrait: ["finance"] },
      { value: 4, label: "Warm‑up playlist + pre‑stretch", personalityTrait: ["pounding"] },
    ],
  },
  {
    id: 10,
    text: "Preferred course outline (bedroom theory):",
    options: [
      { value: 1, label: "Reading body language + timing", personalityTrait: ["opuehnology"] },
      { value: 2, label: "Cost–benefit of dates vs results", personalityTrait: ["finance"] },
      { value: 3, label: "Consent frameworks & safe words", personalityTrait: ["wisdom"] },
      { value: 4, label: "Angles, rhythm, endurance", personalityTrait: ["pounding"] },
    ],
  },

  // Creativity Faculty
  {
    id: 11,
    text: "Innovation you go bring come practicals:",
    options: [
      { value: 1, label: "New positions with cushioning logic", personalityTrait: ["doggy"] },
      { value: 2, label: "Roleplay with budget props", personalityTrait: ["finance"] },
      { value: 3, label: "Set & setting psychology", personalityTrait: ["wisdom"] },
      { value: 4, label: "Coded playlist for tempo control", personalityTrait: ["opuehnology"] },
    ],
  },
  {
    id: 12,
    text: "If ‘doggy’ enter syllabus, how you defend thesis?",
    options: [
      { value: 1, label: "Talk biomechanics + safety", personalityTrait: ["doggy"] },
      { value: 2, label: "Demonstrate pacing (PG rated) 😅", personalityTrait: ["pounding"] },
      { value: 3, label: "Compare options, choose low‑injury angle", personalityTrait: ["wisdom"] },
      { value: 4, label: "Only on promo nights — budget first", personalityTrait: ["finance"] },
    ],
  },

  // Wicked & Manipulation Dept
  {
    id: 13,
    text: "She dey ghost small small but billing strong:",
    options: [
      { value: 1, label: "Mirror energy — reply next day", personalityTrait: ["wicked"] },
      { value: 2, label: "Close tab; no ROI there", personalityTrait: ["finance"] },
      { value: 3, label: "Ask direct: ‘Are we aligning?’", personalityTrait: ["wisdom"] },
      { value: 4, label: "Re‑spark with playful dare", personalityTrait: ["opuehnology"] },
    ],
  },
  {
    id: 14,
    text: "She wan use jealousy hook you:",
    options: [
      { value: 1, label: "Flip script: hype her imaginary rival", personalityTrait: ["wicked"] },
      { value: 2, label: "Ignore, maintain frame", personalityTrait: ["wisdom"] },
      { value: 3, label: "Counter‑offer: ‘plan real link, no drama’", personalityTrait: ["opuehnology"] },
      { value: 4, label: "Budget cut — drama no get allocation", personalityTrait: ["finance"] },
    ],
  },

  // TOTO‑currency / market talks
  {
    id: 15,
    text: "She dey talk price & gifts steady:",
    options: [
      { value: 1, label: "Define boundaries, no transactional romance", personalityTrait: ["wisdom"] },
      { value: 2, label: "Negotiate experience‑based dates, low spend", personalityTrait: ["finance"] },
      { value: 3, label: "If e clear & consenting, run coded ops", personalityTrait: ["toto"] },
      { value: 4, label: "Exit market — risk too high", personalityTrait: ["wicked"] },
    ],
  },
  {
    id: 16,
    text: "You discover she dey measure you by ‘what you provide’:",
    options: [
      { value: 1, label: "Reframe: value for value — time, care, vibe", personalityTrait: ["wisdom"] },
      { value: 2, label: "Low‑cost high‑fun dates only", personalityTrait: ["finance"] },
      { value: 3, label: "Turn to strictly‑fun buddy arrangement", personalityTrait: ["opuehnology"] },
      { value: 4, label: "Cut supply: scarcity strategy", personalityTrait: ["wicked"] },
    ],
  },

  // Exams / Final Defense
  {
    id: 17,
    text: "Post‑link etiquette wey keep door open:",
    options: [
      { value: 1, label: "Safe ride check + banter recap", personalityTrait: ["opuehnology"] },
      { value: 2, label: "‘Had fun, next time on me (budgeted)’", personalityTrait: ["finance"] },
      { value: 3, label: "Consent debrief + what she prefer", personalityTrait: ["wisdom"] },
      { value: 4, label: "Gym emoji + stopwatch — improve stats", personalityTrait: ["pounding"] },
    ],
  },
  {
    id: 18,
    text: "If her friend shoot shot at you:",
    options: [
      { value: 1, label: "Coded decline — maintain access", personalityTrait: ["opuehnology"] },
      { value: 2, label: "No mix friend group — policy", personalityTrait: ["wisdom"] },
      { value: 3, label: "Only if budget & drama = 0", personalityTrait: ["finance"] },
      { value: 4, label: "Turn triangle to thesis defense 😅", personalityTrait: ["doggy"] },
    ],
  },
  {
    id: 19,
    text: "Best KPI for your gehgeh semester:",
    options: [
      { value: 1, label: "Quality links, zero scandals", personalityTrait: ["opuehnology"] },
      { value: 2, label: "Spend < 25% income on dates", personalityTrait: ["finance"] },
      { value: 3, label: "All consent‑checklists passed", personalityTrait: ["wisdom"] },
      { value: 4, label: "PB on rounds & recovery", personalityTrait: ["pounding"] },
    ],
  },
  {
    id: 20,
    text: "Choose your graduating project:",
    options: [
      { value: 1, label: "Playbook of coded texts & timing", personalityTrait: ["opuehnology"] },
      { value: 2, label: "Spreadsheet for low‑cost high‑fun dates", personalityTrait: ["finance"] },
      { value: 3, label: "Consent, safety & boundary handbook", personalityTrait: ["wisdom"] },
      { value: 4, label: "Creative doggy anthology (PG write‑up)", personalityTrait: ["doggy"] },
    ],
  },
];
