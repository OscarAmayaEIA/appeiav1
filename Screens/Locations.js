import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Navegation_menu from '../Components/nav_menu';
import React, { useState,useEffect } from 'react';
import MapView,{Marker} from 'react-native-maps';




export default function Locations() {
  const [Region, setRegion] = useState({
    latitude:   6.1766784,
    longitude:  -75.5858882,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [marker, setmarker] = useState({
    latitude:   6.1766784,
    longitude:  -75.5858882,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [Mapready, setMapready] = useState(false);
  var options = { protocolo: 'mqtts', 
                clientID: "frontend_1",
                username: 'ejemplo-control', 
                password: 'B69napsxhhC1pXlW'}

  useEffect(() => {

    var client = mqtt.connect('mqtts://ejemplo-control.cloud.shiftr.io', options);
    var cont = 0;
    
    client.subscribe("/position");
    var lat;
    var lon;
    client.on("message", function (topic, message) {
        message = message.toString();
        lat = message.split(":")[0];
        lon = message.split(":")[1];
        setmarker({
          latitude:   parseFloat(lat),
          longitude:  parseFloat(lon),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
    });

}, []);


  return (
    <View style={styles.container}>
      <Navegation_menu/>
        <Text>Locations</Text>

      <MapView  style={styles.map} region={Region} onMapReady={() => setMapready(true)} >
        <Marker coordinate={marker} title={"EIA"}  />
      </MapView>
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
  map: {
    width: '100%',
    height: '100%',
    position : "absolute",
    zIndex : -1,
  }
});
