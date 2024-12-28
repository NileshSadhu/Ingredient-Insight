import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import CustomButton from './Components/Customs/CustomButton'
import { AuthContext } from './Context/AuthContext'
import CustomSearch from './Components/Customs/CustomSearch'
import CustomHeader from './Components/Customs/CustomHeader'
import CustomBlog from './Components/CustomBlog'

const HomeScreen = () => {
    const { logOut } = useContext(AuthContext);
    return (
        <View style={{ flex: 1, width: '100%', padding: 10 }}>
            <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />
            <CustomHeader />
            <CustomSearch />
            <CustomBlog />
            <CustomButton text={'Log Out'} onPress={logOut} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})