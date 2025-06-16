import { useLocalSearchParams, router } from 'expo-router';
import { View, Text, Button, StyleSheet } from 'react-native';

function mockHandStrength(cards: string) {
  // Replace with real math or backend call!
  if (!cards) return 0;
  // Just a silly deterministic “random” based on first char
  return (cards.charCodeAt(0) * 7) % 100;
}

const ModalScreen = () => {
  const { cards } = useLocalSearchParams<{ cards?: string }>();
  const strength = mockHandStrength(cards ?? '');

  return (
    <View style={styles.modal}>
      <Text style={styles.label}>Your Omaha Hand:</Text>
      <Text style={styles.cards}>{cards || 'None selected'}</Text>
      <Text style={styles.strength}>
        Estimated Win %: <Text style={{ fontWeight: 'bold' }}>{strength}%</Text>
      </Text>
      <Button title="Close" onPress={() => router.back()} />
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111',
    padding: 32,
  },
  label: { color: '#fff', fontSize: 20, marginBottom: 8 },
  cards: { fontSize: 32, color: '#0fa', marginBottom: 12 },
  strength: { color: '#fff', fontSize: 18, marginBottom: 24 },
});
