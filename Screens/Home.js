import React, {useContext, useEffect ,useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Pressable} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContext} from "@react-navigation/native";
import Navegation_menu from '../Components/nav_menu';
import Card from '../Components/Card';

const mqtt=require('@taoqf/react-native-mqtt')
var options = { protocolo: 'mqtts', 
                clientID: "frontend_1",
                username: 'ejemplo-control', 
                password: 'B69napsxhhC1pXlW'}



export default function Home() {
    const navigation = useContext(NavigationContext);
    const [temp, setTemp] = useState(0)

    useEffect(() => {

        var client = mqtt.connect('mqtts://ejemplo-control.cloud.shiftr.io', options);
        var cont = 0;
        
        client.subscribe("Edfico1/salon32B/Ventana1/lumens");
        client.on("message", function (topic, message) {
            cont++;
            const dot = {
            id: cont,
            value: parseFloat(message.toString())
            };
            // setData((data)=>[...data, dot]);
            setTemp(parseFloat(message.toString()));

        });

    }, []);
  return (
    <View style={styles.container}>
        <Navegation_menu/>
        <Card value={temp}/>
        
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
