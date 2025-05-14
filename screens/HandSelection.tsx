import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../styles/HandSelectionScreenStyles"; // Import styles

const HandSelectionScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Select Your Starting Hand</Text>
			<Button title="Hand 1" onPress={() => {}} style={styles.button} />
			<Button title="Hand 2" onPress={() => {}} style={styles.button} />
			{/* Add more buttons or components as needed */}
		</View>
	);
};

export default HandSelectionScreen;
