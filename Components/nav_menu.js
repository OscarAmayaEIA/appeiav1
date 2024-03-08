import React, {useContext} from 'react';
import { StyleSheet, Text, View , Pressable} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
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
        <Pressable onPress={()=>{navigation.navigate('Devices')}}>
            <MaterialCommunityIcons name="motion-sensor" size={24} color="white" />
        </Pressable>
        <Pressable onPress={()=>{navigation.navigate('Music')}}>
            <MaterialIcons name="library-music" size={24} color="white" />
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