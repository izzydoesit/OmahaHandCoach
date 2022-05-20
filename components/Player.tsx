import Hand from "./Hand"
import Position from "./Position"

export default class Player {
  hand: Hand
  position: Position
  selection: string

  constructor() {
    this.hand = new Hand()
    this.position = new Position()
    this.selection = ""
  }
}
