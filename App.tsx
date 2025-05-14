import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreenScreen";
import HandSelectionScreen from "./screens/HandSelectionScreen";

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="HandSelection" component={HandSelectionScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
