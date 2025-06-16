import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getStoredHandSelections } from '../utils/storage';
import { styles } from '../styles/TrainingHistoryStyles';

const TrainingHistoryScreen = () => {
  const [hands, setHands] = useState([]);

  useEffect(() => {
    const fetchHands = async () => {
      const storedHands = await getStoredHandSelections();
      setHands(storedHands);
    };

    fetchHands();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Training History</Text>
      {hands.length === 0 ? (
        <Text style={styles.noData}>No hands selected yet!</Text>
      ) : (
        <FlatList
          data={hands}
          keyExtractor={(item, index) => `${item.join('-')}-${index}`}
          renderItem={({ item }) => (
            <Text style={styles.handItem}>{item.join(' / ')}</Text>
          )}
        />
      )}
    </View>
  );
};

export default TrainingHistoryScreen;
