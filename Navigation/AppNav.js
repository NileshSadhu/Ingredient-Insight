import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from '../components/Screens/GetStarted';
import SingIn from '../components/Screens/SingIn';

const Stack = createNativeStackNavigator();

const AppNav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={GetStarted}/>
                <Stack.Screen name='Home' component={SingIn}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNav

const styles = StyleSheet.create({})