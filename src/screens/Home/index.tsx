import React, { FC, useMemo } from "react"
import { View, Text } from "react-native"
import { useTheme } from "@react-navigation/native"

import createStyle from "./Home.style"
import Button from "../../components/Button"

interface HomeScreenProps {
	navigation: any
}

const Home: FC<HomeScreenProps> = ({ navigation }) => {
	const theme = useTheme()
	const styles = useMemo(() => createStyle(theme), [theme])

	const buttons = [
		{
			text: "Search",
			cb: () => navigation.navigate("SearchScreen"),
		},
		{
			text: "Random Drink",
			cb: () => navigation.navigate("Detail"),
		},
		{
			text: "Cocktail Drinks",
			cb: () => null,
		},
		{
			text: "Ordinary Drinks",
			cb: () => null,
		},
	]

	return (
		<View style={styles.container}>
			<Text style={styles.titleTextStyle}>Pick your poison</Text>
			{buttons.map((button, i) => (
				<Button
					text={button.text}
					cb={button.cb}
					buttonStyle={styles.buttonStyle}
					textStyle={styles.buttonTextStyle}
					key={i}
				/>
			))}
		</View>
	)
}

export default Home
