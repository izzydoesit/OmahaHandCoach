import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../components/ui/PrimaryButton";

type Hand = string[];

const HandSelectionScreen = () => {
	const [selectedHands, setSelectedHands] = useState<Hand[]>([]);
	const navigation = useNavigation();

	useEffect(() => {
		const loadHistory = async () => {
			try {
				const history = await AsyncStorage.getItem("trainingHistory");
				if (history) {
					setSelectedHands(JSON.parse(history));
				}
			} catch (error) {
				console.error("Failed to load training history", error);
			}
		};

		loadHistory();
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>🃏 Omaha Hand Trainer</Text>

			<FlatList
				data={selectedHands}
				keyExtractor={(_, index) => index.toString()}
				renderItem={({ item }) => (
					<Text style={styles.handItem}>{item.join(" ")}</Text>
				)}
				ListEmptyComponent={
					<Text style={styles.emptyText}>No hands selected yet.</Text>
				}
			/>

			<PrimaryButton
				title="📜 View Training History"
				onPress={() => navigation.navigate("TrainingHistory")}
			/>
		</View>
	);
};

export default HandSelectionScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: "#121212",
	},
	title: {
		fontSize: 28,
		fontWeight: "bold",
		color: "#fff",
		marginBottom: 20,
	},
	handItem: {
		fontSize: 18,
		color: "#00ffc8",
		marginBottom: 10,
	},
	emptyText: {
		color: "#777",
		fontStyle: "italic",
	},
});
