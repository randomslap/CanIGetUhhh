import React, { type PropsWithChildren, useEffect } from "react"
import { Platform, StatusBar, StyleSheet, useColorScheme } from "react-native"
import SplashScreen from "react-native-splash-screen"

import { Colors } from "react-native/Libraries/NewAppScreen"

import Navigation from "./src/navigation"

const App = () => {
	const isDarkMode = useColorScheme() === "dark"

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	}

	useEffect(() => {
		if (Platform.OS === "android") {
			StatusBar.setBackgroundColor("rgba(0,0,0,0)")
			StatusBar.setTranslucent(true)
		}
		setTimeout(() => {
			SplashScreen.hide()
		}, 1000)
	}, [])

	return (
		<>
			<Navigation />
		</>
	)
}

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: "600",
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: "400",
	},
	highlight: {
		fontWeight: "700",
	},
})

export default App
