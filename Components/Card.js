import React, {useContext} from 'react';
import { StyleSheet, Text, View , Pressable} from 'react-native';
import {NavigationContext} from "@react-navigation/native";
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Card({value}) {
    const navigation = useContext(NavigationContext);
  return (
    <View style={styles.container}>
       <FontAwesome6 name="temperature-half" size={60} color="black" />
       <Text style={styles.Text_dev}>{value}</Text>
       <MaterialCommunityIcons name="temperature-celsius" size={60} color="black" />
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
    fontSize: 50,
    color: 'black',
    marginLeft: 20,
    marginRight: 20,
  }
});

