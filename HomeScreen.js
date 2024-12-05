import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import globalStyle from './globalStyle'
import CustomButton from './Components/CustomButton'
import { AuthContext } from './Context/AuthContext'

const HomeScreen = () => {
    const { logOut } = useContext(AuthContext);
    return (
        <View style={globalStyle.container}>
            <Text>HomeScreen</Text>
            <CustomButton text={'Log Out'} onPress={logOut} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})