import React, { FC, memo } from "react"
import { TouchableOpacity, Text } from "react-native"

interface IButtonProps {
	buttonStyle?: object
	textStyle?: object
	cb: any
	text: string
	height?: number
	width?: number
}

const Button: FC<IButtonProps> = ({ buttonStyle, textStyle, cb, text }) => {
	return (
		<TouchableOpacity onPress={cb} style={buttonStyle}>
			<Text style={textStyle}>{text}</Text>
		</TouchableOpacity>
	)
}

export default memo(Button)
