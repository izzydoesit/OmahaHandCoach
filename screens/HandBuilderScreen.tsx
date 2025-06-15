import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PrimaryButton from '../components/ui/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

const RANKS = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];
const SUITS = ['♠', '♥', '♦', '♣'];
const DECK = RANKS.flatMap(rank => SUITS.map(suit => `${rank}${suit}`));

const HandBuilderScreen = () => {
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const navigation = useNavigation();

  const toggleCard = (card: string) => {
    if (selectedCards.includes(card)) {
      setSelectedCards(prev => prev.filter(c => c !== card));
    } else if (selectedCards.length < 4) {
      setSelectedCards(prev => [...prev, card]);
    } else {
      Alert.alert('Limit reached', 'Omaha hands must have exactly 4 cards.');
    }
  };

  const saveHand = async () => {
    if (selectedCards.length !== 4) {
      Alert.alert('Invalid hand', 'You must select exactly 4 cards.');
      return;
    }

    try {
      const history = await AsyncStorage.getItem('trainingHistory');
      const parsedHistory = history ? JSON.parse(history) : [];
      const newHistory = [...parsedHistory, selectedCards];
      await AsyncStorage.setItem('trainingHistory', JSON.stringify(newHistory));
      setSelectedCards([]);
      navigation.goBack();
    } catch (err) {
      console.error('Error saving hand:', err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧠 Build Your Starting Hand</Text>

      <FlatList
        data={DECK}
        keyExtractor={(item) => item}
        numColumns={6}
        contentContainerStyle={styles.deckContainer}
        renderItem={({ item }) => {
          const isSelected = selectedCards.includes(item);
          return (
            <TouchableOpacity
              style={[styles.card, isSelected && styles.cardSelected]}
              onPress={() => toggleCard(item)}
            >
              <Text style={styles.cardText}>{item}</Text>
            </TouchableOpacity>
          );
        }}
      />

      <PrimaryButton title="✅ Save Hand" onPress={saveHand} />
    </View>
  );
};

export default HandBuilderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  deckContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#222',
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 8,
    padding: 12,
    margin: 4,
    width: 50,
    alignItems: 'center',
  },
  cardSelected: {
    backgroundColor: '#00ffc8',
  },
  cardText: {
    color: '#fff',
    fontWeight: '600',
  },
});
