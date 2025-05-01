import { View, Text } from "./Themed"
import { Button, StyleSheet, TouchableOpacity } from "react-native"

export default function PlayerChoices({
  updateChoice,
}: {
  updateChoice: Function
}) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          // title="FOLD"
          style={{ ...styles.button, backgroundColor: "#ff0000" }}
          onPress={updateChoice("FOLD")}
        >
          <Text style={{ ...styles.buttonText, color: "#fff" }}>FOLD</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // title="CALL"
          style={{ ...styles.button, backgroundColor: "#3300dd" }}
          onPress={updateChoice("CALL")}
        >
          <Text style={{ ...styles.buttonText, color: "#fff" }}>CALL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // title="RAISE"
          style={{ ...styles.button, backgroundColor: "#00ff00" }}
          onPress={updateChoice("RAISE")}
        >
          <Text style={{ ...styles.buttonText }}>RAISE</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 20,
  },
  row: {
    flexDirection: "row",
    // width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    borderStyle: "solid",
    borderColor: "black",
    color: "red",
    padding: 20,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 20,
  },
})
