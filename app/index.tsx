import { Stack } from 'expo-router';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import Header from '../components/Header';
import Button from '@/components/Button';

const HomeScreen = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Header title="Omaha Hand Coach" />
      <Text>Omaha Hand Coach Home Screen</Text>
      <Button title="Start Training" onPress={() => router.push('/trainer')} />
    </View>
  );
};

export default HomeScreen;
