import { StyleSheet } from "react-native"

import { Text, View } from "../components/Themed"
import { RootTabScreenProps } from "../types"
import GameChoices from "../components/GameChoices"
import GameChoiceInfo from "../components/GameChoiceInfo"

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What game would you like to play?</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <GameChoiceInfo />
      <GameChoices />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
})
