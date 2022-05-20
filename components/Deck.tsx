import Card from "./Card"
import { SUITS, RANKS } from "../util/GAME_DATA"
import Hand from "./Hand"
import getRandomNumber from "../util/dealer_helpers"

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

  shuffleDeck(): void {
    // randomize the deck order
    let currentId: number = this.cards.length
    let randomId: number = getRandomNumber(this.cards.length)

    while (0 != currentId) {
      let temp = this.cards[currentId]
      this.cards[currentId] = this.cards[randomId]
      this.cards[randomId] = temp
      currentId -= 1
      randomId = getRandomNumber(currentId)
    }
  }

  dealHand(game: string = "OMAHA"): Hand {
    this.shuffleDeck()

    let numCards
    if (game.toLowerCase() === "omaha") {
      numCards = 4
    } else {
      numCards = 2
    }
    const playerCards = this.cards.slice(0, numCards)
    const newHand: Hand = new Hand(playerCards)
    return newHand
  }
}
