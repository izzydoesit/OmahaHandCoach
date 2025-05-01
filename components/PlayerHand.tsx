import { Text, View } from "./Themed"
import { StyleSheet } from "react-native"

export default function PlayerHand() {
  return (
    <View style={styles.container}>
      <View style={styles.hand}>
        <View style={styles.card}>
          <Text style={styles.rank}>A</Text>
          <Text style={styles.suit}>h</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.rank}>A</Text>
          <Text style={styles.suit}>c</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.rank}>K</Text>
          <Text style={styles.suit}>s</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.rank}>K</Text>
          <Text style={styles.suit}>d</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 10,
    borderColor: "blue",
    backgroundColor: "#0000ff",
  },
  hand: {
    height: 30 * 2,
    width: 30,
    backgroundColor: "#999",
  },
  card: {
    height: 30,
    width: 25,
    backgroundColor: "#FF0000",
    borderStyle: "solid",
    borderColor: "#000",
  },
  rank: {
    fontSize: 10,
  },
  suit: {
    fontSize: 20,
  },
})
