import { ViewStyle, StyleSheet, TextStyle, ImageStyle } from "react-native"
import { ExtendedTheme } from "@react-navigation/native"

interface Style {
	container: ViewStyle
	row: ViewStyle
	titleTextStyle: TextStyle
	subtitleTextStyle: TextStyle
	buttonStyle: ViewStyle
	buttonTextStyle: TextStyle
	header: ViewStyle
	contentContainer: ViewStyle
	listContainer: ViewStyle
	drinkImageStyle: ImageStyle
	bodyTextStyle: TextStyle
}

export default (theme: ExtendedTheme) => {
	const { colors } = theme
	return StyleSheet.create<Style>({
		container: {
			flex: 1,
			alignItems: "center",
			backgroundColor: colors.background,
			justifyContent: "center",
			marginVertical: 50,
		},
		row: {
			flexDirection: "row",
			alignItems: "center",
			marginVertical: 5,
			width: "50%",
			maxWidth: "100%",
		},
		titleTextStyle: {
			color: colors.white,
			fontWeight: "700",
			fontSize: 32,
		},
		subtitleTextStyle: {
			color: colors.white,
			fontWeight: "700",
			fontSize: 18,
		},
		bodyTextStyle: {
			color: colors.white,
			fontWeight: "500",
			fontSize: 14,
		},
		buttonStyle: {
			height: "15%",
			width: "70%",
			marginTop: 32,
			borderRadius: 8,
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: colors.primary,
			color: "black",
		},
		buttonTextStyle: {
			color: colors.white,
			fontWeight: "700",
			fontSize: 24,
		},
		header: {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
		},
		contentContainer: {
			flex: 1,
			alignItems: "center",
			maxWidth: "90%",
		},
		listContainer: {
			marginTop: 8,
		},
		drinkImageStyle: {
			height: 240,
			width: 240,
			borderRadius: 10,
			marginVertical: 30,
		},
	})
}
