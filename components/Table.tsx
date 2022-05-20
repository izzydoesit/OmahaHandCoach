import { HAND_STRENGTH_CLASSIFICATIONS } from "../util/card_data"
import Deck from "./Deck"
import Hand from "./Hand"
import Player from "./Player"
import Position from "./Position"

export default class Table {
  result: string
  insight: string
  player: Player
  deck: Deck

  constructor(player: Player) {
    this.deck = new Deck()
    this.result = ""
    this.insight = ""
    this.player = player
  }

  checkPlaySelection(): void {
    if (this.player.hand.strength === HAND_STRENGTH_CLASSIFICATIONS) {
      this.result = "WIN"
    } else {
      this.result = "LOSE"
    }
  }

  displayResult(): void {
    if (this.result && this.result.length > 0) {
      console.log("RESULT: ", this.result)
    }
  }

  resetTable(): void {
    this.result = ""
    this.insight = ""
    this.player.position = new Position()
    this.player.hand = new Hand()
    // set timeout for 20 sec and deal new hand
  }
}
