import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import AppNav from './Components/AppNav';
import { AuthProvider } from './Context/AuthContext';
import HomeScreen from './HomeScreen';
import DrawerNav from './Components/Drawer/DrawerNav';

const App = () => {
  const [fontsLoaded] = useFonts({
    'RobotoSerif-Medium': require('./assets/Fonts/RobotoSerif-Medium.ttf'),
  });

  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  )
}

export default App