import React, {useContext} from 'react';
import { StyleSheet, Text, View , Pressable} from 'react-native';
import {NavigationContext} from "@react-navigation/native";
import { FontAwesome6 } from '@expo/vector-icons';

export default function Card() {
    const navigation = useContext(NavigationContext);
  return (
    <View style={styles.container}>
       <FontAwesome6 name="temperature-half" size={40} color="black" />
       <Text style={styles.Text_dev}>Temperature </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Text_dev:{
    fontSize: 40,
    color: 'black',
  }
});
