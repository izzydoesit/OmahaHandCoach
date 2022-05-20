import Card from "./Card"
import { SUITS, RANKS } from "../util/card_data"
import Hand from "./Hand"

export default class Deck {
  cards: Array<Card>

  constructor() {
    this.cards = this.createDeck()
  }

  createDeck(): Array<Card> {
    const deck = new Array(52)
    SUITS.forEach((suit) => {
      RANKS.forEach((rank) => {
        deck.push(new Card(rank, suit))
      })
    })
    return deck
  }

  shuffleDeck(): void {}

  dealHand(): Hand {
    this.shuffleDeck()
    const newHand: Hand = new Hand()
    // pick 4 random cards from deck and add to Hand.cards
    return newHand
  }
}
