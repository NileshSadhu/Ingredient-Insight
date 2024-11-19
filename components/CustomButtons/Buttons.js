import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Buttons({ text, type = 'PRIMARY' }) {
    return (
        <View style={styles.btnContainer}>
            <TouchableOpacity style={[styles.btn, styles[`container_${type}`]]}>
                <Text style={[styles.btnText, styles[`text_${type}`]]}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        marginTop: 8,
    },

    btn: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },

    btnText: {
        color: '#000000',
        padding: 10,
        fontSize: 16,
        fontWeight: '400',
    },

    container_PRIMARY: {
        backgroundColor: '#3EB620',
    },
    container_TERTIARY: {},
    text_TERTIARY: {
        fontSize: 14,
        color: 'gray',
    },
})