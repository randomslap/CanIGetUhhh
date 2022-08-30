import React, {
	FC,
	useMemo,
	useEffect,
	useState,
	useReducer,
	useCallback,
} from "react"
import { ScrollView, View, Text, Image, Alert } from "react-native"
import { useTheme } from "@react-navigation/native"

import createStyle from "./Detail.style"

interface IDetailScreenProps {
	navigation: any
	route: any
}

const initState = {
	strDrink: "",
	strCategory: "",
}

const reducer = (state: any, action: any) => {
	switch (action.type) {
		case "COMPLETE":
			return action.payload
		case "INCOMPLETE":
			return null
		default:
			return state
	}
}

const Detail: FC<IDetailScreenProps> = ({ navigation, route }) => {
	const [loading, setLoading] = useState(true)
	const [state, dispatch] = useReducer(reducer, initState)

	const theme = useTheme()
	const styles = useMemo(() => createStyle(theme), [theme])
	const arr = useMemo(() => {
		let temp = []
		for (let i = 1; i <= 15; i++) {
			if (
				state[`strIngredient${i + 1}`] !== null &&
				state[`strMeasure${i + 1}`]
			) {
				temp.push({
					ingredient: state[`strIngredient${i + 1}`],
					measure: state[`strMeasure${i + 1}`],
				})
			}
		}
		return temp
	}, [state])

	const getData = async () => {
		try {
			const id = route.params?.id
			const result = await fetch(
				id
					? ""
					: "https://www.thecocktaildb.com/api/json/v1/1/random.php"
			)
			const data = await result.json()
			dispatch({ type: "COMPLETE", payload: data.drinks[0] })
			setLoading(false)
		} catch (err: any) {
			console.warn(err)
			if (err) return Alert.alert(err)
		}
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<ScrollView>
			<View style={styles.container}>
				{!loading ? (
					<View style={styles.contentContainer}>
						<Text
							adjustsFontSizeToFit
							style={styles.titleTextStyle}
						>
							{state.strDrink}
						</Text>
						<Image
							style={styles.drinkImageStyle}
							source={{ uri: state.strDrinkThumb }}
						/>
						<View style={styles.row}>
							<Text style={styles.bodyTextStyle}>Type: </Text>
							<Text style={styles.subtitleTextStyle}>
								{state.strCategory}
							</Text>
						</View>
						<View style={styles.row}>
							<Text style={styles.bodyTextStyle}>Glass: </Text>
							<Text style={styles.subtitleTextStyle}>
								{state.strGlass}
							</Text>
						</View>
						<View
							style={{
								...styles.contentContainer,
								marginTop: 10,
							}}
						>
							<Text style={styles.subtitleTextStyle}>
								Instructions:{" "}
							</Text>
							<Text
								numberOfLines={5}
								style={{
									...styles.bodyTextStyle,
									marginTop: 5,
								}}
							>
								{state.strInstructions}
							</Text>
						</View>
						<View
							style={{
								...styles.contentContainer,
								marginTop: 10,
							}}
						>
							<Text style={styles.subtitleTextStyle}>
								Ingredients:{" "}
							</Text>
						</View>
						{arr.map((item, i) => {
							return (
								<View style={styles.row} key={i}>
									<Text style={styles.bodyTextStyle}>
										{item.ingredient}:{" "}
									</Text>
									<Text style={styles.bodyTextStyle}>
										{item.measure}
									</Text>
								</View>
							)
						})}
					</View>
				) : (
					<Text style={styles.titleTextStyle}>Loading</Text>
				)}
			</View>
		</ScrollView>
	)
}

export default Detail
