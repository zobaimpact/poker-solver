import { SUITS, VALUES } from "../../constants/Game";


export const generateCard = () =>
  `${VALUES[Math.floor(Math.random() * VALUES.length)]}${
    SUITS[Math.floor(Math.random() * SUITS.length)]
  }`;

// export const generateHand = () => Array.from({ length: 5 }, generateCard);

export const shuffleArray = (array: string[]) => array.sort(() => Math.random() - 0.5);



// Helper to create a deck
const createDeck = () => {
  const deck = [];
  for (const suit of SUITS) {
    for (const value of VALUES) {
      deck.push(`${value}${suit}`);
    }
  }
  return deck;
};

// Function to generate a hand of 5 unique cards
export const generateHand = (): string[] => {
  const deck = createDeck();
  const hand: string[] = [];
  
  while (hand.length < 5) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    const card = deck.splice(randomIndex, 1)[0]; // Removes card from deck and adds to hand
    hand.push(card);
  }
  return hand;
};