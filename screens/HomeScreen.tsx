import { StyleSheet } from "react-native"
import { Text, View } from "../components/Themed"
import { RootTabScreenProps } from "../types"
import GameChoices from "../components/GameChoices"
import GameChoiceInfo from "../components/GameChoiceInfo"

export default function HomeScreen({
  navigation,
}: // route,
RootTabScreenProps<"Home">) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome to PLO Hand Blitz</Text>
      </View>
      <Text style={styles.prompt}>What game would you like to play?</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <GameChoiceInfo />
      <GameChoices navigation={navigation} route={undefined} />
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
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 40,
  },
  prompt: {
    fontSize: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
})
