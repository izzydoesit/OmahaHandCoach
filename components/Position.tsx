import { POSITIONS } from "../util/card_data"

export default class Position {
  seat: string

  constructor() {
    this.seat = ""
  }

  assignSeat() {
    const randomNum = Math.floor(Math.random() * POSITIONS.length)
    this.seat = POSITIONS[randomNum]
  }
}
