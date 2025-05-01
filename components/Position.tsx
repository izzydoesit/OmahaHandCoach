import { POSITIONS } from "../util/GAME_DATA"

export default class Position {
  current: string

  constructor() {
    this.current = ""
  }

  clearPosition(): void {
    this.current = ""
  }

  assignNewPosition(): void {
    const randomNum = Math.floor(Math.random() * POSITIONS.length)
    this.current = POSITIONS[randomNum]
  }
}
