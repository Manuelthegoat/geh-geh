export type Question = {
  id: number;
  text: string;
  options: {
    value: number;
    label: string;
    personalityTrait: string[]; // raw traits (synonyms allowed)
  }[];
};

// Personality type definitions - Naija Gen Z edition (canonical keys only)
export const PERSONALITY_TYPES = {
  energetic: {
    name: "The Party Plug",
    description:
      "You bring the energy everywhere you go — whether it’s an Faaji, beach party, Rave, or random Tuesday night groove.",
  },
  calm: {
    name: "The Chill Pill",
    description:
      "Nothing shakes you. You’re the playlist people play when they just want to vibe in peace.",
  },
  analytical: {
    name: "The Beat Professor",
    description:
      "You hear every snare, every bassline, every hidden harmony — music to you is science and art in one.",
  },
  emotional: {
    name: "The Feelz Merchant",
    description:
      "Every song is a whole movie in your head. You connect deeply with lyrics and melodies.",
  },
  social: {
    name: "The Vibe Connector",
    description:
      "You use music to bring people together — if you’re in the room, nobody’s feeling left out.",
  },
  introverted: {
    name: "The Lowkey Viber",
    description:
      "You enjoy your jams in private — your playlist is a treasure chest only a few people get access to.",
  },
  eclectic: {
    name: "The Genre Wanderer",
    description:
      "Afrobeats today, rock tomorrow, Fuji on Friday — your music taste is pure adventure.",
  },
  nostalgic: {
    name: "The Throwback Chief",
    description:
      "Old school bangers are your comfort zone — from Plantashun Boiz to Styl-Plus, you keep the classics alive.",
  },
  playful: {
    name: "The Groove Joker",
    description:
      "You’re all about fun beats, sing-alongs, and songs that make everyone laugh or dance silly.",
  },
  thoughtful: {
    name: "The Lyric Curator",
    description:
      "You pay attention to words — every song you love has meaning and depth.",
  },
  private: {
    name: "The Secret Playlist Holder",
    description:
      "Your music is personal. You don’t just share songs — you share pieces of your soul.",
  },
  creative: {
    name: "The Sound Innovator",
    description:
      "You love unique sounds and out-of-the-box beats — you’d make a mad producer.",
  },
  bold: {
    name: "The Main Character",
    description:
      "Your taste is loud, proud, and unapologetic — you play what you like, not what’s trending.",
  },
} as const;

export type CanonicalTrait = keyof typeof PERSONALITY_TYPES;

// Map raw option traits to canonical keys above
export const TRAIT_ALIASES: Record<string, CanonicalTrait> = {
  // energetic family
  energetic: "energetic",
  extroverted: "energetic",
  enthusiastic: "energetic",
  physical: "energetic",

  // calm / introversion family
  calm: "calm",
  introverted: "introverted",
  reserved: "calm",
  cool: "calm",

  // thinking / feels
  analytical: "analytical",
  critical: "analytical",
  thoughtful: "thoughtful",
  emotional: "emotional",
  sensitive: "emotional",
  romantic: "emotional",
  organized: "thoughtful",

  // social/sharing/connect
  social: "social",
  sharing: "social",
  connective: "social",
  streetwise: "social",

  // individuality/creativity/bold
  playful: "playful",
  funny: "playful",
  creative: "creative",
  unique: "creative",
  innovative: "creative",
  musical: "creative",
  bold: "bold",
  opinionated: "bold",
  trendy: "bold",
  independent: "bold",

  // variety / nostalgia
  eclectic: "eclectic",
  spontaneous: "eclectic",
  open: "eclectic",
  adaptive: "eclectic",
  nostalgic: "nostalgic",
  consistent: "nostalgic",

  // privacy / reflection
  private: "private",
  introspective: "private",
};

// === Your questions (unchanged) ===
export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Friday night just hit — what’s your move?",
    options: [
      { value: 1, label: "Clubbing till sunrise (Faaji levels)", personalityTrait: ["extroverted", "energetic"] },
      { value: 2, label: "Netflix & chill, no stress", personalityTrait: ["introverted", "calm"] },
      { value: 3, label: "Link up with close friends for gist", personalityTrait: ["social", "connective"] },
      { value: 4, label: "Solo music session with my headphones", personalityTrait: ["private", "introspective"] },
    ],
  },
  {
    id: 2,
    text: "Pick your GOAT: Wizkid or Davido?",
    options: [
      { value: 1, label: "Wizkid — smooth & chill vibes", personalityTrait: ["calm", "cool"] },
      { value: 2, label: "Davido — energy & bangers!", personalityTrait: ["energetic", "enthusiastic"] },
      { value: 3, label: "I can’t choose, both are kings", personalityTrait: ["open", "adaptive"] },
      { value: 4, label: "Neither, I’m into underground gems", personalityTrait: ["independent", "unique"] },
    ],
  },
  {
    id: 3,
    text: "Your playlist looks like:",
    options: [
      { value: 1, label: "Afrobeats + Street jams", personalityTrait: ["energetic", "social"] },
      { value: 2, label: "Lo-fi, R&B, soft sounds", personalityTrait: ["calm", "thoughtful"] },
      { value: 3, label: "A random mix — anything goes", personalityTrait: ["spontaneous", "eclectic"] },
      { value: 4, label: "Mostly throwbacks", personalityTrait: ["nostalgic", "consistent"] },
    ],
  },
  {
    id: 4,
    text: "At a Burna Boy concert, you’re:",
    options: [
      { value: 1, label: "Front row shouting every lyric", personalityTrait: ["extroverted", "energetic"] },
      { value: 2, label: "Recording on my phone for IG", personalityTrait: ["social", "sharing"] },
      { value: 3, label: "Analyzing the live band’s skills", personalityTrait: ["analytical", "critical"] },
      { value: 4, label: "Swaying quietly & soaking it in", personalityTrait: ["introverted", "sensitive"] },
    ],
  },
  {
    id: 5,
    text: "When you discover a new jam:",
    options: [
      { value: 1, label: "Blast it on full volume immediately", personalityTrait: ["enthusiastic", "energetic"] },
      { value: 2, label: "Add it to my special playlist", personalityTrait: ["organized", "thoughtful"] },
      { value: 3, label: "Post it on WhatsApp status or IG", personalityTrait: ["sharing", "social"] },
      { value: 4, label: "Keep it to myself, my little secret", personalityTrait: ["private", "introspective"] },
    ],
  },
  {
    id: 6,
    text: "Pick your hype anthem:",
    options: [
      { value: 1, label: "Asake – ‘Joha’", personalityTrait: ["playful", "energetic"] },
      { value: 2, label: "Tems – ‘Higher’", personalityTrait: ["calm", "emotional"] },
      { value: 3, label: "Olamide – ‘Wo’", personalityTrait: ["streetwise", "social"] },
      { value: 4, label: "Falz – ‘Bop Daddy’", personalityTrait: ["funny", "creative"] },
    ],
  },
  {
    id: 7,
    text: "Your friends would describe you as:",
    options: [
      { value: 1, label: "The life of the party", personalityTrait: ["extroverted", "energetic"] },
      { value: 2, label: "Chill and low-key", personalityTrait: ["introverted", "calm"] },
      { value: 3, label: "Always with hot takes", personalityTrait: ["opinionated", "bold"] },
      { value: 4, label: "The deep thinker", personalityTrait: ["thoughtful", "analytical"] },
    ],
  },
  {
    id: 8,
    text: "You’re at a party, and the DJ drops your song:",
    options: [
      { value: 1, label: "Run to the dance floor immediately", personalityTrait: ["energetic", "playful"] },
      { value: 2, label: "Smile & nod along", personalityTrait: ["calm", "reserved"] },
      { value: 3, label: "Pull your crew to vibe together", personalityTrait: ["social", "connective"] },
      { value: 4, label: "Analyze the beat", personalityTrait: ["analytical", "musical"] },
    ],
  },
  {
    id: 9,
    text: "If you could collab with one Nigerian artist:",
    options: [
      { value: 1, label: "Rema – futuristic vibes", personalityTrait: ["innovative", "trendy"] },
      { value: 2, label: "Ayra Starr – sability queen", personalityTrait: ["playful", "bold"] },
      { value: 3, label: "Omah Lay – smooth & emotional", personalityTrait: ["sensitive", "romantic"] },
      { value: 4, label: "BNXN – lyrical storyteller", personalityTrait: ["thoughtful", "creative"] },
    ],
  },
  {
    id: 10,
    text: "Choose your music listening spot:",
    options: [
      { value: 1, label: "Loud car cruise with the squad", personalityTrait: ["social", "energetic"] },
      { value: 2, label: "Alone in my room, lights off", personalityTrait: ["introspective", "emotional"] },
      { value: 3, label: "At the gym — pumping energy", personalityTrait: ["energetic", "physical"] },
      { value: 4, label: "Cafe or park, peaceful vibes", personalityTrait: ["calm", "thoughtful"] },
    ],
  },
  {
    id: 11,
    text: "Your dream music job is:",
    options: [
      { value: 1, label: "Concert hype MC", personalityTrait: ["energetic", "bold"] },
      { value: 2, label: "Sound engineer", personalityTrait: ["analytical", "creative"] },
      { value: 3, label: "Radio host", personalityTrait: ["social", "playful"] },
      { value: 4, label: "Songwriter", personalityTrait: ["thoughtful", "emotional"] },
    ],
  },
  {
    id: 12,
    text: "Pick a fashion style for a concert:",
    options: [
      { value: 1, label: "Flashy streetwear", personalityTrait: ["bold", "innovative"] },
      { value: 2, label: "Simple but classy", personalityTrait: ["calm", "nostalgic"] },
      { value: 3, label: "Experimental and unique", personalityTrait: ["creative", "eclectic"] },
      { value: 4, label: "Whatever’s comfy", personalityTrait: ["introverted", "thoughtful"] },
    ],
  },
  {
    id: 13,
    text: "You’re making a playlist for a road trip:",
    options: [
      { value: 1, label: "Bangers only — no skips", personalityTrait: ["energetic", "playful"] },
      { value: 2, label: "Smooth and calm vibes", personalityTrait: ["calm", "emotional"] },
      { value: 3, label: "Mix of old and new", personalityTrait: ["nostalgic", "eclectic"] },
      { value: 4, label: "Lyrics that tell a story", personalityTrait: ["thoughtful", "analytical"] },
    ],
  },
  {
    id: 14,
    text: "Your ideal hangout spot:",
    options: [
      { value: 1, label: "Beach party", personalityTrait: ["energetic", "social"] },
      { value: 2, label: "Chill café", personalityTrait: ["calm", "thoughtful"] },
      { value: 3, label: "Music studio", personalityTrait: ["creative", "innovative"] },
      { value: 4, label: "Home with my headphones", personalityTrait: ["introverted", "private"] },
    ],
  },
  {
    id: 15,
    text: "If you could headline an event, it would be:",
    options: [
      { value: 1, label: "Massive stadium concert", personalityTrait: ["bold", "energetic"] },
      { value: 2, label: "Exclusive intimate show", personalityTrait: ["calm", "private"] },
      { value: 3, label: "Experimental art music fest", personalityTrait: ["creative", "eclectic"] },
      { value: 4, label: "Classic throwback night", personalityTrait: ["nostalgic", "thoughtful"] },
    ],
  },
];

