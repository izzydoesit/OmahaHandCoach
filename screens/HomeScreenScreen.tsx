import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button"; // Import Button component
import Header from "../components/Header"; // Import Header component
import { styles } from "../styles/HomeScreenStyles"; // Import HomeScreen styles

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Header title="Omaha Hand Coach" /> {/* Use Header here */}
			<Text style={styles.title}>Welcome to Omaha Hand Coach!</Text>
			<Button
				title="Start Training"
				onPress={() => navigation.navigate("HandSelection")}
			/>
		</View>
	);
};

export default HomeScreen;
