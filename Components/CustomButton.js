import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import globalStyle from '../globalStyle'

export default function CustomButton({text, onPress}) {
    return (
        <TouchableOpacity style={globalStyle.btn} onPress={onPress}>
            <Text style={globalStyle.text}>{text}</Text>
        </TouchableOpacity>
    )
}
