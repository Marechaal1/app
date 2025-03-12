import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LoginScreen } from './src/screens/login';
import { RegisterScreen } from './src/screens/register';
import { RecoveryScreen } from './src/screens/recover';
import { TokenScreen } from './src/screens/token';
import { ResetPasswordScreen } from './src/screens/reset';

export default function App() {
  return (<LoginScreen/>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



