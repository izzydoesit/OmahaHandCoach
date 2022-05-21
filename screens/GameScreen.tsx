import React from "react"
import { StyleSheet } from "react-native"
import { RootTabScreenProps } from "../types"
import { View } from "../components/Themed"
import Game from "../components/Game"
import { useFocusEffect } from "@react-navigation/native"

export default function GameScreen({
  navigation,
  route,
}: RootTabScreenProps<"Game">) {
  useFocusEffect(
    React.useCallback(() => {
      // clear last hand, last position, last
      // assign position
      // shuffle cards
      // deal 4 cards
    }, [navigation])
  )
  return (
    <View style={styles.container}>
      <Game navigation={navigation} route={route} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})
