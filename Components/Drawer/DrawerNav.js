import React from 'react'
import { StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawer from './CustomDrawer';
import HomeScreen from '../../HomeScreen';
import FoodLabels from './FoodLabels';
import RatingSystem from './RatingSystem';
import Icon from 'react-native-vector-icons/Ionicons';
import Setting from './Setting';
import Personalized from './Personalized';
import FandQs from './FandQs';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                drawerActiveTintColor: '#333',
                drawerActiveBackgroundColor: '#7df59c',
                drawerStyle: {
                    borderBottomRightRadius: 0,
                    shadowColor: 'transparent',
                    backgroundColor: '#fff',
                },
            }}
        >
            <Drawer.Screen name='Home' component={HomeScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Icon name='home' size={20} color={color} />
                    )
                }}
            />
            <Drawer.Screen name='Labels' component={FoodLabels}
                options={{
                    drawerIcon: ({ color }) => (
                        <Icon name='reader-outline' size={20} color={color} />
                    )
                }}
            />
            <Drawer.Screen name='Rating System' component={RatingSystem}
                options={{
                    drawerIcon: ({ color }) => (
                        <Icon name='podium-outline' size={20} color={color} />
                    )
                }}
            />
            <Drawer.Screen name='Personalized' component={Personalized}
                options={{
                    drawerIcon: ({ color }) => (
                        <Icon name='bag-add-outline' size={20} color={color} />
                    )
                }}
            />
            <Drawer.Screen name='F&Qs' component={FandQs}
                options={{
                    drawerIcon: ({ color }) => (
                        <Icon name='chatbubble-outline' size={20} color={color} />
                    )
                }}
            />
            <Drawer.Screen name='Setting' component={Setting}
                options={{
                    drawerIcon: ({ color }) => (
                        <Icon name='settings-outline' size={20} color={color} />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNav

const styles = StyleSheet.create({})
