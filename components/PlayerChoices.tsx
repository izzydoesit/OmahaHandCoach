import { View } from "./Themed"
import { Button } from "react-native"

export default function PlayerChoices({
  updatePlayerChoice,
}: {
  updatePlayerChoice: Function
}) {
  return (
    <View>
      <Button title="FOLD" onPress={updatePlayerChoice("FOLD")}></Button>
      <Button title="CALL" onPress={updatePlayerChoice("CALL")}></Button>
      <Button title="RAISE" onPress={updatePlayerChoice("RAISE")}></Button>
    </View>
  )
}
