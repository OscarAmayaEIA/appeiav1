import React, {useContext} from 'react';
import { StyleSheet, Text, View , Pressable} from 'react-native';
import {NavigationContext} from "@react-navigation/native";
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Smart_buttom({text,setvaule,topic,value}) {
    const navigation = useContext(NavigationContext);
  return (
    <View style={styles.container}>
        <Text style={styles.text_title}>{text}</Text>
        <View style={styles.container_button}>
        <Pressable style={styles.button_press} onPress={()=>setvaule(value+1)}>
            <View style={styles.button}>
            
            </View>
            <MaterialCommunityIcons name="weather-sunny" size={60} color="black" />
            <Feather name="moon" size={40} color="black" />
        </Pressable>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 380,
    height: 100,
    borderWidth: 2,
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text_title: {
    fontSize: 70,
    color: "black",
    width: "40%",
    textAlign: "center",
  },
  container_button: {
    width: "60%",
    height: "100%",
    borderLeftWidth: 4,
    borderColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button_press: {
    height: 60,
    width: 150,
    borderRadius: 30,
    backgroundColor: "rgba(0, 0, 0,0.2)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button : {
    height: 60,
    width: 75,
    borderRadius: 30,
    backgroundColor: "black",
    position: "absolute",
    left: 0,
  },
});