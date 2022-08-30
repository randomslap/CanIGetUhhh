import React, { FC, memo } from "react"
import { TouchableOpacity, Text } from "react-native"

interface ICardProps {
	buttonStyle?: object
	textStyle?: object
	cb: any
	text: string
	height?: number
	width?: number
}

const Card: FC<ICardProps> = ({ cardStyle, textStyle, cb, text }) => {
	return (
		<TouchableOpacity onPress={cb} style={cardStyle}>
			<Text style={textStyle}>{text}</Text>
		</TouchableOpacity>
	)
}

export default memo(Card)
