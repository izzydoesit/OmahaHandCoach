import { Button, Text, View } from 'react-native';
import { profileStyles } from '../styles/ProfileStyles';
import { useRouter } from 'expo-router';

const ProfileScreen = () => {
  const router = useRouter();
  return (
    <View style={profileStyles.container}>
      <Text style={profileStyles.title}>Profile Screen</Text>
      <Button title="Go to Trainer" onPress={() => router.push('/trainer')} />
    </View>
  );
};

export default ProfileScreen;
