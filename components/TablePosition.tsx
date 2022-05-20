import { Text, View } from "./Themed"

export default function TablePosition({ position }: { position: string }) {
  return (
    <View>
      <Text>{`TABLE POSITION: ${position}`}</Text>
    </View>
  )
}
