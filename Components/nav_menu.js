import React, {useContext} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Pressable} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContext} from "@react-navigation/native";

export default function Navegation_menu() {
    const navigation = useContext(NavigationContext);
  return (
    <View style={styles.container}>
        <Pressable onPress={()=>{navigation.navigate('Locations')}}>
            <Entypo name="location" size={24} color="white" />
        </Pressable>
        <Pressable onPress={()=>{navigation.navigate('Home')}}>
            <FontAwesome name='home' size={24} color="white" />
        </Pressable>
        
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: 100,
      backgroundColor: "black",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      bottom: 0,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
  });