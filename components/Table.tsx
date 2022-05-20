// import getRandomNumber from "../util/dealer_helpers"
import { CORRECT_MOVES, HandClass, Option } from "../util/GAME_DATA"
import Deck from "./Deck"
import Hand from "./Hand"
import Player from "./Player"

export default class Table {
  result: string
  insight: string
  player: Player
  deck: Deck

  constructor(player: Player) {
    this.deck = new Deck()
    this.player = player
    this.result = ""
    this.insight = ""
  }

  checkPlaySelection(): void {
    const handClass: HandClass = this.player.hand.strength
    // TODO: add this.player.position.seat to comparison
    if (this.player.selection === CORRECT_MOVES[handClass]) {
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
    this.player.selection = Option.NOT_SELECTED
    this.player.hand = new Hand()
    this.player.position.clearPosition()

    setTimeout(() => {
      this.player.position.assignNewPosition()
      this.player.hand = this.deck.dealHand()
    }, 7000)
  }
}
