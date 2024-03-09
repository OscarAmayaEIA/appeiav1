import React, {useContext, useEffect ,useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Pressable} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContext} from "@react-navigation/native";
import Navegation_menu from '../Components/nav_menu';
import Card from '../Components/Card';
import { LineChart } from 'react-native-chart-kit';



const mqtt=require('@taoqf/react-native-mqtt')
var options = { protocolo: 'mqtts', 
                clientID: "frontend_1",
                username: 'ejemplo-control', 
                password: 'B69napsxhhC1pXlW'}



export default function Home() {
    const navigation = useContext(NavigationContext);
    const [temp, setTemp] = useState(0)
    const [datax, setDatax] = useState([0]);
    const [datay, setDatay] = useState([0]);

    useEffect(() => {

        var client = mqtt.connect('mqtts://ejemplo-control.cloud.shiftr.io', options);
        var cont = 0;
        
        client.subscribe("Edfico1/salon32B/Ventana1/lumens");
        client.on("message", function (topic, message) {
            cont++;
            setDatax((datax)=>[...datax, cont]);
            setDatay((datay)=>[...datay, parseFloat(message.toString())]);
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
        <LineChart
    data={{
      labels: datax.slice(-20),
      datasets: [
        { data: datay.slice(-20)},
                ],
          }}
    width={300} // from react-native
    height={220}
    // yAxisLabel="$"
    // yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "clay",
      backgroundGradientFrom: "white",
      backgroundGradientTo: "gray",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => 'black',
      labelColor: (opacity = 1) => 'black',
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16,
      padding : 20
    }}
  />
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
