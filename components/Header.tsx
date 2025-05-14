// components/Header.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface HeaderProps {
	title: string;
}

const Header = ({ title }: HeaderProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 16,
		backgroundColor: "#4CAF50",
		width: "100%",
		alignItems: "center",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#fff",
	},
});

export default Header;
