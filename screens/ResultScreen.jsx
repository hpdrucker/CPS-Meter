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



const ResultScreen = () => {
  const [cps, setCps] = useState("");
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@key')
      if(value !== null) {
        // value previously stored
        //console.log(value)
        setCps(value)
      }
    } catch(e) {
      // error reading value
      console.log("Could not load data")
    }
  }
  getData();
  return (
    <Text>{cps}</Text>
  )
}

export default ResultScreen