import { StyleSheet } from "react-native"
import { View, Text } from "./Themed"
// import PlayerHand from "./PlayerHand"
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
    <View style={styles.container}>
      <View style={styles.table}>
        <View style={styles.actionLine}>
          <Text style={styles.result}>{result}</Text>
          <Text style={styles.insight}>{insight}</Text>
          {/* <PlayerHand /> */}
          <View style={styles.playerHand}>
            <View style={styles.card}></View>
            <View style={styles.card}></View>
            <View style={styles.card}></View>
            <View style={styles.card}></View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#58494",
  },
  table: {
    // position: "absolute",
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    backgroundColor: "#1a805a",
    borderRadius: 100,
    marginTop: 10,
    height: 220,
    transform: [{ scaleX: 1.2 }],
  },
  actionLine: {
    backgroundColor: "#00ff66",
    borderRadius: 100,
    margin: "5%",
    height: "85%",
    width: "80%",
    padding: "5%",
    borderColor: "#fff",
    borderWidth: 5,
    opacity: 0.5,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    transform: [{ scaleX: 1.2 }],
  },
  result: {
    fontSize: 30,
  },
  insight: {
    fontSize: 12,
  },
  playerHand: {
    zIndex: 0,
    position: "absolute",
    bottom: 0,
    left: 60,
    width: 60,
    height: 80,
    backgroundColor: "#999",
    flexDirection: "row",
  },
  card: {
    // position: "relative",
    width: "25%",
    height: "100%",
    backgroundColor: "#ff0000",
    borderColor: "#000",
    borderWidth: 1,
  },
})
