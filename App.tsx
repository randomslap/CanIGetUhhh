import React, { useEffect } from "react"
import { Platform, StatusBar } from "react-native"
import SplashScreen from "react-native-splash-screen"

import Navigation from "./src/navigation"

const App = () => {
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

export default App
