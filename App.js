import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import globalStyles from './components/globalStyle';
import Login from './components/Screens/Login';
import SignUp from './components/Screens/SignUp';

export default function App() {
  const [fontsLoaded] = useFonts({
    'RobotoSerif-Medium': require('./assets/Fonts/RobotoSerif-Medium.ttf'),
  });

  return (
    <SafeAreaView  style={styles.container}>
      {/* <Login /> */}
      <SignUp />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
