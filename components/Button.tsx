// components/Button.tsx
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/GlobalStyles"; // Import global styles

interface ButtonProps {
	title: string;
	onPress: () => void;
}

const Button = ({ title, onPress }: ButtonProps) => {
	return (
		<TouchableOpacity
			style={[globalStyles.button, styles.button]}
			onPress={onPress}
		>
			<Text style={styles.buttonText}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		paddingHorizontal: 20,
		paddingVertical: 12,
		borderRadius: 8,
	},
	buttonText: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "bold",
	},
});

export default Button;
