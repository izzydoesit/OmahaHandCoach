import { View, Text } from "./Themed"
import PlayerHand from "./PlayerHand"
// import { useState } from "react"
// import getRandomNumber from "../util/dealer_helpers"
//
// import Deck from "./Deck"
// import Hand from "./Hand"
// import Player from "./Player"

export default function Table({
  result,
  insight,
}: {
  result: string
  insight: string
}) {
  return (
    <View>
      <Text>This is a TABLE</Text>
      <Text>{result}</Text>
      <Text>{insight}</Text>
      <PlayerHand />
    </View>
  )
}
