// /components/ui/PrimaryButton.tsx

import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
	title: string;
	onPress: () => void;
}

const PrimaryButton: React.FC<Props> = ({ title, onPress }) => {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
};

export default PrimaryButton;

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#00ffc8",
		paddingVertical: 14,
		paddingHorizontal: 20,
		borderRadius: 12,
		alignItems: "center",
		marginTop: 20,
	},
	text: {
		fontWeight: "600",
		fontSize: 16,
		color: "#121212",
	},
});
