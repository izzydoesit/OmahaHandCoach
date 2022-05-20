import Card from "./Card"

export default class Hand {
  cards: Array<Card>
  strength: string
  suited: string

  constructor(cards: Array<Card> = new Array(4)) {
    this.cards = cards
    this.strength = this.calculateHandStrength(cards)
    this.suited = this.calculateSuitedness(cards)
  }

  calculateHandStrength(cards: Array<Card>): string {
    if (this.cards && this.cards.length === 4) {
      console.log("CALCULATING HAND STRENGTH...", cards)
      return "PREMIUM OR SPECULATIVE OR MARGINAL OR TRASH"
    } else {
      console.log("ERROR IN CALCULATE_HAND_STRENGTH()")
      return "ERROR"
    }
  }

  calculateSuitedness(cards: Array<Card>): string {
    console.log("CALCULATING SUITEDNESS...", cards)
    return "ONE OF DOUBLE, SINGLE OR NONE"
  }
}
