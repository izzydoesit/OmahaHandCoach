// App.tsx
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HandSelectionScreen from "./screens/HandSelectionScreen";
import TrainingHistoryScreen from "./screens/TrainingHistoryScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="HandSelection">
				<Stack.Screen
					name="HandSelection"
					component={HandSelectionScreen}
					options={{ title: "Train a Hand" }}
				/>
				<Stack.Screen
					name="TrainingHistory"
					component={TrainingHistoryScreen}
					options={{ title: "History" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
