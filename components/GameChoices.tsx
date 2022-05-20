import { Alert, Button, StyleSheet } from "react-native"
import { View } from "./Themed"

export default function GameChoices({ navigation }) {
  return (
    <View>
      <View
        style={{
          alignItems: "center",
          marginHorizontal: 50,
        }}
      >
        <Button title="Hold'em" disabled={true} onPress={dealHoldem} />
        <Button
          title="Omaha"
          style={styles.button}
          onPress={() => {
            navigation.navigate("Game")
            dealOmaha()
          }}
        ></Button>
      </View>
    </View>
  )
}

function dealHoldem() {
  Alert.alert("Coming soon...")
}

function dealOmaha(navigation) {
  navigation.navigate("Omaha")
  Alert.alert("START OMAHA GAME")
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ABE",
    color: "#FFF",
  },
})
