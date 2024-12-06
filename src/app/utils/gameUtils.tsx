import { SUITS, VALUES } from "../../constants/Game";


export const generateCard = () =>
  `${VALUES[Math.floor(Math.random() * VALUES.length)]}${
    SUITS[Math.floor(Math.random() * SUITS.length)]
  }`;

export const generateHand = () => Array.from({ length: 5 }, generateCard);

export const shuffleArray = (array: string[]) => array.sort(() => Math.random() - 0.5);
