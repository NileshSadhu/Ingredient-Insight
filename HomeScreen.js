import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import CustomButton from './Components/Customs/CustomButton'
import { AuthContext } from './Context/AuthContext'

const HomeScreen = () => {
    const { logOut } = useContext(AuthContext);
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>HomeScreen</Text>
            <CustomButton text={'Log Out'} onPress={logOut}/>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})