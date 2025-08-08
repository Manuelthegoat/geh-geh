export type Question = {
  id: number;
  text: string;
  options: {
    value: number;
    label: string;
    personalityTrait: string[]; // Traits this option contributes to
  }[];
};

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
    text: "You’re at an Party, and the DJ drops your song:",
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
];

// Personality types remain same as before or can be expanded with more Nigerian-flavored ones.

// Personality type definitions
// Personality type definitions - Naija Gen Z edition
export const PERSONALITY_TYPES: Record<string, { name: string; description: string }> = {
  energetic: {
    name: "The Party Plug",
    description: "You bring the energy everywhere you go — whether it’s an Faaji, beach party, Rave, or random Tuesday night groove."
  },
  calm: {
    name: "The Chill Pill",
    description: "Nothing shakes you. You’re the playlist people play when they just want to vibe in peace."
  },
  analytical: {
    name: "The Beat Professor",
    description: "You hear every snare, every bassline, every hidden harmony — music to you is science and art in one."
  },
  emotional: {
    name: "The Feelz Merchant",
    description: "Every song is a whole movie in your head. You connect deeply with lyrics and melodies."
  },
  social: {
    name: "The Vibe Connector",
    description: "You use music to bring people together — if you’re in the room, nobody’s feeling left out."
  },
  introverted: {
    name: "The Lowkey Viber",
    description: "You enjoy your jams in private — your playlist is a treasure chest only a few people get access to."
  },
  eclectic: {
    name: "The Genre Wanderer",
    description: "Afrobeats today, rock tomorrow, Fuji on Friday — your music taste is pure adventure."
  },
  nostalgic: {
    name: "The Throwback Chief",
    description: "Old school bangers are your comfort zone — from Plantashun Boiz to Styl-Plus, you keep the classics alive."
  },
  playful: {
    name: "The Groove Joker",
    description: "You’re all about fun beats, sing-alongs, and songs that make everyone laugh or dance silly."
  },
  thoughtful: {
    name: "The Lyric Curator",
    description: "You pay attention to words — every song you love has meaning and depth."
  },
  private: {
    name: "The Secret Playlist Holder",
    description: "Your music is personal. You don’t just share songs — you share pieces of your soul."
  },
  creative: {
    name: "The Sound Innovator",
    description: "You love unique sounds and out-of-the-box beats — you’d make a mad producer."
  },
  bold: {
    name: "The Main Character",
    description: "Your taste is loud, proud, and unapologetic — you play what you like, not what’s trending."
  }
};
