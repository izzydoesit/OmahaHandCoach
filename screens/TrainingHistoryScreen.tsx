import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { getStoredHandSelections } from "../utils/storage";

const TrainingHistoryScreen = () => {
	const [hands, setHands] = useState([]);

	useEffect(() => {
		const fetchHands = async () => {
			const storedHands = await getStoredHandSelections();
			setHands(storedHands);
		};

		fetchHands();
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Training History</Text>
			{hands.length === 0 ? (
				<Text style={styles.noData}>No hands selected yet!</Text>
			) : (
				<FlatList
					data={hands}
					keyExtractor={(item, index) => `${item.join("-")}-${index}`}
					renderItem={({ item }) => (
						<Text style={styles.handItem}>{item.join(" / ")}</Text>
					)}
				/>
			)}
		</View>
	);
};

export default TrainingHistoryScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#0e1117",
		padding: 20,
	},
	title: {
		fontSize: 22,
		color: "#fff",
		fontWeight: "bold",
		marginBottom: 20,
	},
	noData: {
		color: "#aaa",
		fontStyle: "italic",
	},
	handItem: {
		color: "#00ffc8",
		paddingVertical: 10,
		borderBottomColor: "#222",
		borderBottomWidth: 1,
	},
});
