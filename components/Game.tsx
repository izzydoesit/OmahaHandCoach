import React, { useState } from "react"
import { View } from "./Themed"
import { Button } from "react-native"
import Table from "./Table"
import PlayerChoices from "./PlayerChoices"
import { HandClass, CORRECT_MOVES, Option, POSITIONS } from "../util/GAME_DATA"
import getRandomNumber from "../util/dealer_helpers"

export default function Game() {
  const [position, setPosition] = useState("")
  const [playerChoice, setPlayerChoice] = useState(Option.NOT_SELECTED)
  const [result, setResult] = useState("")
  const [insight, setInsight] = useState("")
  const [playerHand, setPlayerHand] = useState([])

  const assignNewPosition = (): void => {
    const randomNum: number = getRandomNumber(POSITIONS.length)
    setPosition(POSITIONS[randomNum])
  }

  const checkPlaySelection = (): void => {
    const handClass: HandClass = playerHand
    // TODO: add this.player.position.seat to comparison
    if (playerChoice === CORRECT_MOVES[handClass]) {
      setResult("WIN")
    } else {
      setResult("LOSE")
    }
  }

  const dealNewHand = (): void => {
    setResult("")
    setInsight("")
    setPlayerChoice(Option.NOT_SELECTED)
    setPlayerHand([])
    setPosition("")

    setTimeout(() => {
      assignNewPosition()
      setPlayerHand(deck.dealHand())
    }, 7000)
  }

  return (
    <View>
      <Button title="Exit" />
      <Table result={result} insight={insight}></Table>
      <PlayerChoices></PlayerChoices>
    </View>
  )
}
