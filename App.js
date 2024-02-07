import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Navigation from './navigation/navigation'
import LoginScreen from "./navigation/screens/login_screen";
import ProfileScreen from "./navigation/screens/profile_screen";
import InformationScreen from "./navigation/screens/profile_information_screen";
import HelpScreen from "./navigation/screens/profile_help_screen";
import ConfidentialiteScreen from "./navigation/screens/profile_confidentialité_screen";
import ConditionScreen from "./navigation/screens/profile_condition_screen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown : false }} name="Login" component={LoginScreen} />
            <Stack.Screen options={{ headerShown : false }} name="Navigation" component={Navigation} />
            <Stack.Screen options={{ headerShown : false }} name="Profile" component={ProfileScreen} />
            <Stack.Screen options={{ headerShown : false }} name="Information" component={InformationScreen} />
            <Stack.Screen options={{ headerShown : false }} name="Help" component={HelpScreen} />
            <Stack.Screen options={{ headerShown : false }} name="Condition" component={ConditionScreen} />
            <Stack.Screen options={{ headerShown : false }} name="Confidentialite" component={ConfidentialiteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
