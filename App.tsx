import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

const App = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Omaha Hand Coach</Text>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
	},
});

export default App;
