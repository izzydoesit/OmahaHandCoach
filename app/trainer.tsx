import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';
import { trainerStyles } from '../styles/TrainerStyles';

const TrainerScreen = () => {
  const router = useRouter();
  return (
    <View style={trainerStyles.container}>
      <Text style={trainerStyles.title}>Trainer Screen</Text>
      <Button
        title="Go to Training History"
        onPress={() => router.push('/training-history')}
      />
    </View>
  );
};

export default TrainerScreen;
