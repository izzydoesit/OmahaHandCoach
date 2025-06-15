import { create } from 'zustand';
import { Card, drawRandomHand, generateDeck } from '../screens/deck';

type Action = 'fold' | 'call' | 'raise';

interface TrainerState {
  hand: Card[];
  history: { hand: Card[]; action: Action }[];
  recordAction: (action: Action) => void;
  nextHand: () => void;
}

export const useTrainerStore = create<TrainerState>((set, get) => ({
  hand: drawRandomHand(generateDeck()),
  history: [],
  recordAction: (action) => {
    const current = get();
    set({
      history: [...current.history, { hand: current.hand, action }],
    });
    current.nextHand();
  },
  nextHand: () => {
    set({ hand: drawRandomHand(generateDeck()) });
  },
}));
