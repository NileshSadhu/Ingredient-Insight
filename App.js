import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyle from './globalStyle'
import { useFonts } from 'expo-font'
import SignIn from './Components/LoginScreens/SignIn'
import GetStarted from './Components/LoginScreens/GetStarted'
import SignUp from './Components/LoginScreens/SignUp'

const App = () => {

  const [fontsLoaded] = useFonts({
    'RobotoSerif-Medium': require('./assets/Fonts/RobotoSerif-Medium.ttf'),
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={globalStyle.container}>
      {/* <SignIn /> */}
      {/* <GetStarted /> */}
      <SignUp />
    </View>
  )
}

export default App;