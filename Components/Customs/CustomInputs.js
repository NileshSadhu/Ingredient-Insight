import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CustomInputs = ({placeholder, value, onChangeText, secureTextEntry, onBlur}) => {
    return (
        <TextInput 
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry = {secureTextEntry}
        onBlur={onBlur}
        />
    )
}

export default CustomInputs

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#CDF4C3',
        paddingHorizontal: 10,
        borderRadius: 5,
        marginVertical: 8,
    },
})