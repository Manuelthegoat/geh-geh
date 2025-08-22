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

// === GehGeh University Questions (Relationship Economics & Financial Psychology) ===
export const QUESTIONS: Question[] = [
  // 1) “Training a woman in school” economics
  {
    id: 1,
    text: "According to Geh Geh, ‘training woman for school’ na wetin?",
    options: [
      { value: 1, label: "Long‑term investment with risky ROI", personalityTrait: ["finance"] },
      { value: 2, label: "Potential financial scam if expectation no align", personalityTrait: ["wisdom"] },
      { value: 3, label: "Act of love but do am with boundary & receipts", personalityTrait: ["opuehnology"] },
      { value: 4, label: "Do am only if e enter market terms (TOTO‑currency)", personalityTrait: ["toto"] },
    ],
  },

  // 2) “Buy keke for her papa” vs sponsoring her
  {
    id: 2,
    text: "Geh Geh talk say buy keke for her papa fit better pass:",
    options: [
      { value: 1, label: "Pay full university fees wey no get agreement", personalityTrait: ["finance"] },
      { value: 2, label: "Carry am abroad without plan/ROI", personalityTrait: ["wisdom"] },
      { value: 3, label: "Build house for babe wey una never define future", personalityTrait: ["wicked"] },
      { value: 4, label: "Start random business with am with no contract", personalityTrait: ["finance"] },
    ],
  },

  // 3) Relationship as Employment
  {
    id: 3,
    text: "‘Relationship as Employment’ best describe:",
    options: [
      { value: 1, label: "Dating mainly for financial support/salary vibes", personalityTrait: ["toto"] },
      { value: 2, label: "Couples dey share bills equally", personalityTrait: ["finance"] },
      { value: 3, label: "Love dey completely free of money talk", personalityTrait: ["wisdom"] },
      { value: 4, label: "Men refuse to spend at all", personalityTrait: ["wicked"] },
    ],
  },

  // 4) Marriage classification
  {
    id: 4,
    text: "For Geh Geh syllabus, marriage fit be:",
    options: [
      { value: 1, label: "Financial scam if terms no clear & pressure high", personalityTrait: ["wisdom"] },
      { value: 2, label: "Good investment if values & budgets align", personalityTrait: ["finance"] },
      { value: 3, label: "Religious duty — but still need receipts/boundary", personalityTrait: ["opuehnology"] },
      { value: 4, label: "Partnership of equals with role clarity", personalityTrait: ["wisdom"] },
    ],
  },

  // 5) Women in “our fathers’ time”
  {
    id: 5,
    text: "Women for ‘our fathers’ time’ according to Geh Geh:",
    options: [
      { value: 1, label: "Plenty provide/support household pass to‑day gist", personalityTrait: ["wisdom"] },
      { value: 2, label: "Fully depend on men by default", personalityTrait: ["finance"] },
      { value: 3, label: "Only marry rich men (selection bias)", personalityTrait: ["toto"] },
      { value: 4, label: "Avoid financial responsibility entirely", personalityTrait: ["wicked"] },
    ],
  },

  // 6) Bills strategy
  {
    id: 6,
    text: "Bill don land; wetin be relationship‑smart move?",
    options: [
      { value: 1, label: "Split coded — clear expectation, no entitlement", personalityTrait: ["finance"] },
      { value: 2, label: "Today on me; next meet on you (document am)", personalityTrait: ["opuehnology"] },
      { value: 3, label: "Set budget before you order anything, no drama", personalityTrait: ["wisdom"] },
      { value: 4, label: "Disappear because 'I NO DEY PRESS MONEY!'", personalityTrait: ["wicked"] },
    ],
  },

  // 7) Sponsoring school: risk analysis
  {
    id: 7,
    text: "If you wan sponsor babe education, first step:",
    options: [
      { value: 1, label: "Write terms: scope, amount, no‑guarantee of romance", personalityTrait: ["wisdom"] },
      { value: 2, label: "Budget am well well incase she run away", personalityTrait: ["finance"] },
      { value: 3, label: "Call am ‘investment in love’ only", personalityTrait: ["wicked"] },
      { value: 4, label: "Bundle am with ‘relationship employment’ package", personalityTrait: ["toto"] },
    ],
  },

  // 8) Transport ask before link
  {
    id: 8,
    text: "‘Send transport’ before first meet — your policy:",
    options: [
      { value: 1, label: "I go come meet you for your house", personalityTrait: ["opuehnology"] },
      { value: 2, label: "Send exact fare + you go send proof, no overbuy", personalityTrait: ["finance"] },
      { value: 3, label: "If una never sure, postpone — safety & consent first", personalityTrait: ["wisdom"] },
      { value: 4, label: "If she reach door, i go pay; if she no come, case close", personalityTrait: ["wicked"] },
    ],
  },

  // 9) TOTO‑currency tells
  {
    id: 9,
    text: "Which sign be clear TOTO‑currency indicator?",
    options: [
      { value: 1, label: "Price list + ‘no calls, only text’", personalityTrait: ["toto"] },
      { value: 2, label: "Every gist end with billing hint", personalityTrait: ["toto"] },
      { value: 3, label: "Budget talk with fairness & plan", personalityTrait: ["finance"] },
      { value: 4, label: "Consent checklist & boundaries", personalityTrait: ["wisdom"] },
    ],
  },

  // 10) Relationship KPI
  {
    id: 10,
    text: "Wetin go show say your relationship semester run smooth without wahala?",
    options: [
      { value: 1, label: "Quality links, zero scandal/receipt loss", personalityTrait: ["opuehnology"] },
      { value: 2, label: "Spend ≤ 25% income on dates", personalityTrait: ["finance"] },
      { value: 3, label: "All consent & safety frameworks passed", personalityTrait: ["wisdom"] },
      { value: 4, label: "Endurance & recovery metrics improve", personalityTrait: ["pounding"] },
    ],
  },

  // 11) Post‑link etiquette
  {
    id: 11,
    text: "After link‑up, wetin keep door open legitimately?",
    options: [
      { value: 1, label: "‘You reach house? Thanks for today’ + light banter", personalityTrait: ["opuehnology"] },
      { value: 2, label: "Note who paid; plan balanced next time", personalityTrait: ["finance"] },
      { value: 3, label: "Consent debrief: what she like/what to change", personalityTrait: ["wisdom"] },
      { value: 4, label: "Ask her 'When Next'", personalityTrait: ["pounding"] },
    ],
  },

  // 12) Relationship as contract
  {
    id: 12,
    text: "She dey too bill for relationship; Wetin you go do?",
    options: [
      { value: 1, label: "Value‑for‑value: time, care, vibe — not salary", personalityTrait: ["wisdom"] },
      { value: 2, label: "Experience‑based dates: low cost, high fun", personalityTrait: ["finance"] },
      { value: 3, label: "Any pay na Knacks", personalityTrait: ["toto"] },
      { value: 4, label: "Ignore all talks; operate ghost protocol", personalityTrait: ["wicked"] },
    ],
  },

  // 13) Jealousy hook
  {
    id: 13,
    text: "She wan use jealousy hold you; response?",
    options: [
      { value: 1, label: "Ignore & maintain frame", personalityTrait: ["wisdom"] },
      { value: 2, label: "Counter: ‘plan real link, no drama’", personalityTrait: ["opuehnology"] },
      { value: 3, label: "Budget cut — drama no get allocation", personalityTrait: ["finance"] },
      { value: 4, label: "Hype the imaginary rival to scatter script", personalityTrait: ["wicked"] },
    ],
  },

  // 14) Urgent 2k early
  {
    id: 14,
    text: "Day‑2 ‘urgent 2k’ drop — wetin be Geh Geh method?",
    options: [
      { value: 1, label: "Send data + joke; observe pattern", personalityTrait: ["wisdom"] },
      { value: 2, label: "Pay once; close tab if repeat", personalityTrait: ["finance"] },
      { value: 3, label: "Divert gist to plan within budget", personalityTrait: ["opuehnology"] },
      { value: 4, label: "Mute one week, energy mirror", personalityTrait: ["wicked"] },
    ],
  },

  // 15) Roles then vs now (teaches comparison mindset)
 {
  id: 15,
  text: "Compare women money-role now vs our papa time:",
  options: [
    { value: 1, label: "Now: man + woman dey hustle; Before: na man carry all", personalityTrait: ["wisdom"] },
    { value: 2, label: "Now: dem dey share bills coded; Before: no clear formula", personalityTrait: ["finance"] },
    { value: 3, label: "Now: consent & boundary talk dey loud; Before: e dey lowkey", personalityTrait: ["opuehnology"] },
    { value: 4, label: "Before: na only rich men fit marry pass; Now: filter still dey small", personalityTrait: ["toto"] },
  ],
},

  // 16) Safety/consent as curriculum
  {
    id: 16,
    text: "Consent & safety for Geh Geh curriculum mean:",
    options: [
      { value: 1, label: "Define boundaries & safe words early", personalityTrait: ["wisdom"] },
      { value: 2, label: "Read body language & timing coded", personalityTrait: ["opuehnology"] },
      { value: 3, label: "Budget for secure transport/home return", personalityTrait: ["finance"] },
      { value: 4, label: "Ignore; na cruise", personalityTrait: ["wicked"] },
    ],
  },

  // 17) Creative enjoyment policy (PG)
  {
    id: 17,
    text: "Creativity for enjoyment wey still respect pocket:",
    options: [
      { value: 1, label: "Experience dates > expensive gifts", personalityTrait: ["finance"] },
      { value: 2, label: "Setting psychology: light, music, comfort", personalityTrait: ["wisdom"] },
      { value: 3, label: "Angles/tempo talk (PG), no injury", personalityTrait: ["pounding"] },
      { value: 4, label: "Only when promo night dey 😅", personalityTrait: ["toto"] },
    ],
  },

  // 18) Gifts & ROI
  {
    id: 18,
    text: "Gift policy for non‑exclusive stage:",
    options: [
      { value: 1, label: "Small thoughtful, no big capex", personalityTrait: ["finance"] },
      { value: 2, label: "Document expectation — gift no be contract", personalityTrait: ["wisdom"] },
      { value: 3, label: "If gift = price list, categorize as TOTO‑currency", personalityTrait: ["toto"] },
      { value: 4, label: "Do large gifts to ‘secure spot’", personalityTrait: ["wicked"] },
    ],
  },

  // 19) Family economics (the keke logic generalized)
  {
    id: 19,
    text: "If you must help family, smarter cashflow move:",
    options: [
      { value: 1, label: "Asset that dey spin daily income (e.g., keke)", personalityTrait: ["finance"] },
      { value: 2, label: "One‑off cash dash without plan", personalityTrait: ["wicked"] },
      { value: 3, label: "Training with written terms/milestones", personalityTrait: ["wisdom"] },
      { value: 4, label: "Vibes & inshallah", personalityTrait: ["opuehnology"] },
    ],
  },

  // 20) Capstone pick
  {
    id: 20,
    text: "Graduating project for this course:",
    options: [
      { value: 1, label: "Handbook: Relationship as Employment — case studies", personalityTrait: ["toto"] },
      { value: 2, label: "Spreadsheet: Bill‑sharing models & stress test", personalityTrait: ["finance"] },
      { value: 3, label: "Consent & safety playbook (real‑life scripts)", personalityTrait: ["wisdom"] },
      { value: 4, label: "Coded communication & timing playbook", personalityTrait: ["opuehnology"] },
    ],
  },
];
