import React, { useContext } from 'react'
import { View, ActivityIndicator, Text } from 'react-native'
import GetStarted from '../Components/LoginScreens/GetStarted'
import SignUp from './LoginScreens/SignUp'
import SignIn from './LoginScreens/SignIn'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthContext } from '../Context/AuthContext'
import globalStyle from '../globalStyle'

const AppNav = ({ Navigator }) => {
    const Stack = createNativeStackNavigator()
    const { isLoading, userToken } = useContext(AuthContext)

    if (isLoading) {
        return (
            <View style={globalStyle.container}>
                <ActivityIndicator size={'large'} />
            </View>
        )
    }

    return (
        <NavigationContainer>
            {userToken !== null ? (
                <Home />
            ) : (
                <Stack.Navigator>
                    <Stack.Screen component={GetStarted} name='GetStarted' options={{ headerShown: false }} />
                    <Stack.Screen component={SignIn} name='SignIn' options={{ headerShown: false }} />
                    <Stack.Screen component={SignUp} name='SignUp' options={{ headerShown: false }} />
                </Stack.Navigator>
            )
            }
        </NavigationContainer>
    )
}

const Home = () => {
    return (
        <View style={globalStyle.container}>
            <Text>Home Screen</Text>
        </View>
    );
}

export default AppNav