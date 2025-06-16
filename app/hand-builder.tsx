import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { router } from 'expo-router';
import { handBuilderStyles } from '../styles/HandBuilderStyles';

// Generate all 52 cards for easy selection
const suits = ['♠️', '♥️', '♣️', '♦️'];
const ranks = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];
const cards = suits.flatMap((suit) => ranks.map((rank) => `${rank}${suit}`));

const HandBuilderScreen = () => {
  const [selectedCards, setSelectedCards] = useState<string[]>([]);

  const toggleCard = (card: string) => {
    setSelectedCards(
      (prev) =>
        prev.includes(card)
          ? prev.filter((c) => c !== card)
          : prev.length < 4
            ? [...prev, card]
            : prev, // don't allow more than 4
    );
  };

  const handleCalculate = () => {
    if (selectedCards.length === 4) {
      // Pass cards as param to modal
      router.push({
        pathname: '/modal',
        params: { cards: selectedCards.join(',') },
      });
    }
  };

  return (
    <View style={handBuilderStyles.container}>
      <Text style={handBuilderStyles.title}>Build Your Omaha Hand</Text>
      <Text style={handBuilderStyles.subtitle}>Tap to select 4 cards</Text>
      <FlatList
        data={cards}
        numColumns={8}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              handBuilderStyles.card,
              selectedCards.includes(item) && handBuilderStyles.cardSelected,
            ]}
            onPress={() => toggleCard(item)}
          >
            <Text style={handBuilderStyles.cardText}>{item}</Text>
          </TouchableOpacity>
        )}
        scrollEnabled={false}
      />
      <View style={{ marginTop: 16 }}>
        <Button
          title="Calculate Strength"
          onPress={handleCalculate}
          disabled={selectedCards.length !== 4}
        />
      </View>
      <Text style={handBuilderStyles.selected}>
        Selected: {selectedCards.join(' ') || 'None'}
      </Text>
    </View>
  );
};

export default HandBuilderScreen;
