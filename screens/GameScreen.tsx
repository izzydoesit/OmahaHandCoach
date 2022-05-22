import React from "react"
import { StyleSheet } from "react-native"
import { RootTabScreenProps } from "../types"
import { View, Text } from "../components/Themed"
import { useFocusEffect } from "@react-navigation/native"
import { HandClass, CORRECT_MOVES, POSITIONS, Option } from "../util/GAME_DATA"
import Table from "../components/Table"
import getRandomNumber from "../util/dealer_helpers"
import PlayerChoices from "../components/PlayerChoices"

export default function GameScreen({
  navigation,
  route,
}: RootTabScreenProps<"Game">) {
  const [playerHand, setPlayerHand] = React.useState(new Array(4))
  const [position, setPosition] = React.useState("")
  const [result, setResult] = React.useState("WIN")
  const [insight, setInsight] = React.useState("This hand is best played...")
  const [playerMove, setPlayerMove] = React.useState(Option.NOT_SELECTED)

  useFocusEffect(
    React.useCallback(() => {
      //     // clear last hand, last position, last
      //     // assign position
      //     // shuffle cards
      //     // deal 4 cards
      dealNewHand()
    }, [navigation])
  )

  const assignNewPosition = (): void => {
    const randomNum: number = getRandomNumber(POSITIONS.length)
    setPosition(POSITIONS[randomNum])
  }

  // const checkPlaySelection = (): void => {
  //   const handClass: HandClass = playerHand
  //   // TODO: add this.player.position.seat to comparison
  //   if (playerMove === CORRECT_MOVES[handClass]) {
  //     setResult("WIN")
  //   } else {
  //     setResult("LOSE")
  //   }
  // }

  const dealNewHand = (): void => {
    // setResult("")
    // setInsight("")
    // setPlayerMove(Option.NOT_SELECTED)
    // setPlayerHand([])
    // setPosition("")

    const timeoutId = setTimeout(() => {
      assignNewPosition()
      // setPlayerHand(["A", "A", "K", "K"])
    }, 7000)
    clearTimeout(timeoutId)
  }

  return (
    <View style={styles.container}>
      <Table result={result} insight={insight} />
      <View style={styles.position}>
        <Text style={styles.positionText}>TABLE POSITION: </Text>
      </View>
      <PlayerChoices updateChoice={setPlayerMove}></PlayerChoices>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#affaff",
  },
  position: {
    flexDirection: "row",
    width: "90%",
    marginVertical: 10,
    // marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#ff00ff",
  },
  positionText: {
    fontSize: 20,
  },
})
