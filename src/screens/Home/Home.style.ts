import { ViewStyle, StyleSheet, TextStyle, ImageStyle } from "react-native"
import { ExtendedTheme } from "@react-navigation/native"

interface Style {
	container: ViewStyle
	titleTextStyle: TextStyle
	buttonStyle: ViewStyle
	buttonTextStyle: TextStyle
	header: ViewStyle
	contentContainer: ViewStyle
	listContainer: ViewStyle
	drinkImageStyle: ImageStyle
}

export default (theme: ExtendedTheme) => {
	const { colors } = theme
	return StyleSheet.create<Style>({
		container: {
			flex: 1,
			alignItems: "center",
			backgroundColor: colors.background,
			justifyContent: "center",
		},
		titleTextStyle: {
			color: colors.white,
			fontWeight: "700",
			fontSize: 32,
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
			marginTop: 16,
		},
		listContainer: {
			marginTop: 8,
		},
		drinkImageStyle: {
			height: 50,
			width: 50,
			borderRadius: 30,
		},
	})
}
