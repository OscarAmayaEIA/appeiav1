import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from './Screens/Home';
import Locations from './Screens/Locations';
import Devices from './Screens/Devices';
import Music from './Screens/Music';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Locations" component={Locations} />
        <Stack.Screen name="Devices" component={Devices} />
        <Stack.Screen name="Music" component={Music} />
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
