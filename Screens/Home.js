import React, {useContext} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Pressable} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContext} from "@react-navigation/native";
import Navegation_menu from '../Components/nav_menu';
import Card from '../Components/Card';

export default function Home() {
    const navigation = useContext(NavigationContext);
  return (
    <View style={styles.container}>
        <Navegation_menu/>
        <Card/>
        <Text>HOME</Text>
        
    </View>
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
