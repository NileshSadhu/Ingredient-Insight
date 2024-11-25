import React from 'react'
import { useFonts } from 'expo-font'
import { AuthProvider } from './Context/AuthContext'
import AppNav from './Components/AppNav'

const App = ({ Navigator }) => {
  const [fontsLoaded] = useFonts({
    'RobotoSerif-Medium': require('./assets/Fonts/RobotoSerif-Medium.ttf'),
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  )
}

export default App;