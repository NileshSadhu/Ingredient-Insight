import React, { useContext } from 'react';
import { View, ActivityIndicator, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNav from './Drawer/DrawerNav';

import HomeScreen from '../HomeScreen';
import GetStarted from './LoginScreens/GetStarted';
import SignIn from './LoginScreens/SignIn';
import SignUp from './LoginScreens/SignUp';
import ForgetPasswordS1 from './LoginScreens/ForgetPasswordS1';
import ForgetPasswordS2 from './LoginScreens/ForgetPasswordS2';
import { AuthContext } from '../Context/AuthContext';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="GetStarted" component={GetStarted} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="ForgetPasswordS1" component={ForgetPasswordS1} />
            <Stack.Screen name="ForgetPasswordS2" component={ForgetPasswordS2} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
        </Stack.Navigator>
    );
};

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="DrawerNav" component={DrawerNav} />
        </Stack.Navigator>
    );
};

const AppNav = () => {
    const { isLoading, userToken } = useContext(AuthContext);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' color="#0000ff" />
            </View>
        );
    }

    return (
        <NavigationContainer>
            <SafeAreaView style={{ flex: 1 }}>
                {userToken ? <MainStack /> : <AuthStack />}
            </SafeAreaView>
        </NavigationContainer>
    );
};

export default AppNav;
