import { StyleSheet, Text, View } from 'react-native';
import { Card } from '../screens/deck';

const suitColors: Record<string, string> = {
  '♠': '#000',
  '♣': '#000',
  '♥': '#e63946',
  '♦': '#e63946',
};

export const CardView = ({ card }: { card: Card }) => {
  return (
    <View style={styles.card}>
      <Text style={[styles.text, { color: suitColors[card.suit] }]}>
        {card.rank}
        {card.suit}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 50,
    height: 70,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
