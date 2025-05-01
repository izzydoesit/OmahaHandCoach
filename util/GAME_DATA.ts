export const SUITS: Array<string> = ["SPADES", "DIAMONDS", "CLUBS", "HEARTS"]

export enum SUITEDNESS {
  "DOUBLE",
  "SINGLE",
  "NONE",
}

export const RANKS: Array<string> = [
  "A",
  "K",
  "Q",
  "J",
  "10",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
]

export const OPTIONS: Array<string> = ["FOLD", "CHECK", "RAISE"]

export const POSITIONS: Array<string> = ["SB", "BB", "Under The Gun", "Button"]

export const RESULTS: Array<string> = ["WIN", "LOSE"]

export const INSIGHTS: Array<string> = [
  "This hand has an excellent chance of hitting the flop. You want to be aggressive with this one!",
  "This hand has a decent chance of flopping well in a multi-way pot. Best to just call for now though...",
  "This hand is iffy and should only be played from late position for a minimum bet",
  "This hand is absolute TRASH! Throw it back from whence it came, fisherman!",
]

export enum HandClass {
  "PREMIUM",
  "SPECULATIVE",
  "MARGINAL",
  "TRASH",
}

export const HAND_STRENGTH_CLASSIFICATIONS = {
  [HandClass.PREMIUM]: [
    ["A", "A", "K", "K"],
    ["A", "A", "J", "10"],
  ],
  [HandClass.SPECULATIVE]: [["Q", "J", "10", "9"]],
  [HandClass.MARGINAL]: [["A", "J", "2", "3"]],
  [HandClass.TRASH]: [],
}

export enum Option {
  "NOT_SELECTED",
  "FOLD",
  "CALL",
  "RAISE",
}

export const CORRECT_MOVES = {
  [HandClass.TRASH]: Option.FOLD,
  [HandClass.MARGINAL]: Option.FOLD,
  [HandClass.SPECULATIVE]: Option.CALL,
  [HandClass.PREMIUM]: Option.RAISE,
}
