import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import CustomButton from './Components/Customs/CustomButton'
import { AuthContext } from './Context/AuthContext'
import CustomSearch from './Components/Customs/CustomSearch'
import CustomHeader from './Components/Customs/CustomHeader'
import Category from './Components/Category'
import DrinkList from './Components/CategoryData/DrinkList'

const HomeScreen = () => {
    const { logOut } = useContext(AuthContext);
    return (
        <View style={{ flex: 1, width: '100%', padding: 10, backgroundColor: '#ebf5eb' }}>
            <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />
            <CustomHeader />
            <CustomSearch />
            <Category />
            <DrinkList />
            {/* <CustomButton text={'Log Out'} onPress={logOut} /> */}
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})