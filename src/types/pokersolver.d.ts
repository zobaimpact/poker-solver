declare module "pokersolver" {
    export class Hand {
      static solve(cards: string[]): Hand;
      static winners(hands: Hand[]): Hand[];
  
      readonly cards: string[];
      readonly name: string;
      readonly rank: number;
  
      toString(): string;
    }
  }
  