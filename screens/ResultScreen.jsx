import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Button, NativeBaseProvider } from 'native-base';
import { useState } from 'react';
import CountDown from 'react-native-countdown-component';
import AsyncStorage from '@react-native-async-storage/async-storage';




//http://apimeme.com/meme?meme=Computer-Horse&top=&bottom=hey

const ResultScreen = () => {
  const [cps, setCps] = useState("");
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@key')
      if (value !== null) {
        // value previously stored
        //console.log(value)
        setCps(value)
      }
    } catch (e) {
      // error reading value
      console.log("Could not load data")
    }
  }
  getData();

  const urlString = 'http://apimeme.com/meme?meme=Computer-Horse&top=&bottom=' + cps
  return (
    <View style={styles.container}>
      <Text style={styles.result}>Result</Text>
      <Image
        style={styles.logo}
        source={{
          uri: urlString,
        }}
      ></Image>
    </View>
  )
}


const styles = StyleSheet.create({
  result: {
    fontSize: 50,
  },
  container: {
    flex: 1,
    resizeMode: 'stretch',
    backgroundColor: 'lightblue',
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 300,
    height: 300,
  },
});

export default ResultScreen