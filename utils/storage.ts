import AsyncStorage from '@react-native-async-storage/async-storage';
import { Hand } from '../types/handTypes';

const SELECTED_HANDS_KEY = 'selectedHands';

export const storeHandSelection = async (hand: Hand) => {
  try {
    const stored = await AsyncStorage.getItem(SELECTED_HANDS_KEY);
    const parsed = stored ? JSON.parse(stored) : [];
    parsed.push(hand);
    await AsyncStorage.setItem(SELECTED_HANDS_KEY, JSON.stringify(parsed));
  } catch (e) {
    console.error('Failed to store hand selection:', e);
  }
};

export const getStoredHandSelections = async () => {
  try {
    const stored = await AsyncStorage.getItem(SELECTED_HANDS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error('Failed to retrieve stored hands:', e);
    return [];
  }
};

export const clearStoredHandSelections = async () => {
  try {
    await AsyncStorage.removeItem(SELECTED_HANDS_KEY);
  } catch (e) {
    console.error('Failed to clear stored hands:', e);
  }
};
