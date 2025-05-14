import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Text>Welcome to Omaha Hand Coach!</Text>
			<Button
				title="Start Training"
				onPress={() => navigation.navigate("HandSelection")}
			/>
		</View>
	);
};

export default HomeScreen;
