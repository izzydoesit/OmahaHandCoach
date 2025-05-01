import { Option } from "../util/GAME_DATA"
import Hand from "./Hand"
import Position from "./Position"

export default class Player {
  hand: Hand
  position: Position
  selection: Option

  constructor() {
    this.hand = new Hand()
    this.position = new Position()
    this.selection = Option.NOT_SELECTED
  }

  playHand(selected: Option = Option.FOLD): void {
    this.selection = selected
  }
}
