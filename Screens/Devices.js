import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Navegation_menu from '../Components/nav_menu';
import Smart_buttom from '../Components/Smart_buttom';



export default function Devices() {
  return (
    <View style={styles.container}>
        <Navegation_menu/>
      <Text>Devices</Text>
      <Smart_buttom value="25"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
    paddingTop: 50,
  },
});
