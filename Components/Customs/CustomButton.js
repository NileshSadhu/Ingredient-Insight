import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import globalStyle from '../../globalStyle';
import { RFValue } from 'react-native-responsive-fontsize';

const CustomButton = ({ text, type = 'Primary', onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.btn, styles[`container_${type}`]]}
            onPress={onPress}>
            <Text style={[globalStyle.text, styles[`text_${type}`]]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
    },
    container_Primary: {
        backgroundColor: '#3BE620',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
    },
    text_Primary: {},
    container_Secondary: {},
    text_Secondary: {
        color: 'gray',
        marginVertical: 3,
        fontSize: RFValue(12),
    }
})