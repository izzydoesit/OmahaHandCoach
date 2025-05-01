import { Alert, Pressable, StyleSheet } from "react-native"
import { RootTabScreenProps } from "../types"
import { View, Text } from "./Themed"
// import { withNavigationFocus } from "@react-navigation/elements"

function GameChoices({ navigation }: RootTabScreenProps<"Game">) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Pressable
          style={{ ...styles.button, backgroundColor: "#ff5533" }}
          // disabled={true}
          onPress={(): void => dealHoldem()}
        >
          <Text style={styles.title}>Hold'em</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={(): void => {
            navigation.navigate("Game")
            dealOmaha()
          }}
        >
          <Text style={styles.title}>Omaha</Text>
        </Pressable>
      </View>
    </View>
  )
}

function dealHoldem(): void {
  Alert.alert("Coming soon...")
}

function dealOmaha(): void {
  Alert.alert("Let's Play some PLO!")
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-around",
    margin: 30,
  },
  button: {
    backgroundColor: "#00ff00",
    borderRadius: 50,
    margin: 10,
    padding: 20,
  },
  title: {
    color: "#eee",
    fontSize: 30,
  },
})

export default GameChoices
