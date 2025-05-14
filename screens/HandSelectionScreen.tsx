import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { storeHandSelection } from "../utils/storage";
import Button from "../components/Button"; // Import Button component
import { omahaHands } from "../data/omahaHands"; // Import omaha hands data

const HandSelectionScreen = () => {
	const [selectedHand, setSelectedHand] = useState(null);

	const handleSelectHand = (hand) => {
		setSelectedHand(hand);
		storeHandSelection(hand); // 👈 store the selection
		evaluateHand(hand);
	};

	const evaluateHand = (hand) => {
		// Placeholder for evaluating the hand (e.g., hand strength, odds, etc.)
		console.log(`Evaluating hand: ${hand.name}`);
		// You can expand this with actual logic for hand evaluation, e.g., strength or odds
	};

	const renderItem = ({ item }) => {
		return (
			<View style={styles.handItem}>
				<Button title={item.name} onPress={() => handleSelectHand(item)} />
				{selectedHand && selectedHand.id === item.id && (
					<Text style={styles.selectedText}>Selected!</Text>
				)}
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Select Your Starting Hand</Text>
			<FlatList
				data={omahaHands}
				keyExtractor={(item) => item.id.toString()}
				renderItem={renderItem}
			/>
			{selectedHand && (
				<Text style={styles.selectedHandText}>
					You selected: {selectedHand.name} ({selectedHand.description})
				</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		justifyContent: "center",
	},
	text: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 20,
	},
	handItem: {
		marginBottom: 10,
	},
	selectedText: {
		color: "green",
		fontSize: 14,
		marginTop: 5,
	},
	selectedHandText: {
		marginTop: 20,
		fontSize: 16,
		fontWeight: "bold",
		color: "#4CAF50",
	},
});

export default HandSelectionScreen;
