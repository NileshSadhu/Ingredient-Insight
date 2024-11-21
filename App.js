import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import globalStyles from './components/globalStyle';
import { AuthProvider } from './Context/Authentication';
import AppNav from './Navigation/AppNav';

export default function App() {
  const [fontsLoaded] = useFonts({
    'RobotoSerif-Medium': require('./assets/Fonts/RobotoSerif-Medium.ttf'),
  });

  return (
    <AuthProvider styles={styles.container}>
      <AppNav />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
