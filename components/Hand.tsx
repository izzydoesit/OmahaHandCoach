import { HandClass, SUITEDNESS } from "../util/GAME_DATA"
import Card from "./Card"

export default class Hand {
  cards: Array<Card>
  strength: HandClass
  suited: SUITEDNESS

  constructor(cards: Array<Card> = new Array(4)) {
    this.cards = cards
    this.strength = this.calculateHandStrength(cards)
    this.suited = this.calculateSuitedness(cards)
  }

  calculateHandStrength(cards: Array<Card>): HandClass {
    if (this.cards && this.cards.length === 4) {
      console.log("CALCULATING HAND STRENGTH...", cards)
      return HandClass.PREMIUM
    } else {
      console.log("ERROR IN CALCULATE_HAND_STRENGTH()")
      return HandClass.TRASH
    }
  }

  calculateSuitedness(cards: Array<Card>): SUITEDNESS {
    console.log("CALCULATING SUITEDNESS...", cards)
    return SUITEDNESS.DOUBLE
  }
}
