import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import globalStyle from './globalStyle'

const HomeScreen = () => {
    return (
        <View style={globalStyle.container}>
            <Text>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})