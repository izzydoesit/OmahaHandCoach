import React from "react";
import { View, Text, Button } from "react-native";

const HandSelectionScreen = () => {
	return (
		<View>
			<Text>Select Your Starting Hand</Text>
			<Button title="Hand 1" onPress={() => {}} />
			<Button title="Hand 2" onPress={() => {}} />
			{/* Add more buttons or components as needed */}
		</View>
	);
};

export default HandSelectionScreen;
