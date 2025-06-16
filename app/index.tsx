import { Stack } from 'expo-router';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Omaha Hand Coach</Text>
      <Button title="Go to Trainer" onPress={() => router.push('/trainer')} />
    </View>
  );
};

export default HomeScreen;
