import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Input({value, setValue, placeholder, secureTextEntry}) {
    return (
        <View>
            <TextInput 
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            style={styles.inputBox}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputBox: {
        paddingHorizontal: 10,
        marginVertical: 10,
        backgroundColor: '#CDF4C3',

        borderWidth: 1,
        borderColor: '#e8e8e8',
        borderRadius: 5,
    }
})