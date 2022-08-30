import React from "react"
import { useColorScheme } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { LightTheme, DarkTheme, palette } from "../shared/theme/themes"

import Home from "../screens/Home"
import Detail from "../screens/Detail"

const Stack = createNativeStackNavigator()

const Navigation = () => {
	const scheme = useColorScheme()
	const isDarkMode = scheme === "dark"

	return (
		<NavigationContainer theme={isDarkMode ? DarkTheme : LightTheme}>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Detail" component={Detail} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigation
