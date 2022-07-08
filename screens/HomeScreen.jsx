import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, Vibration } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Button, NativeBaseProvider } from 'native-base';
import { useState } from 'react';
import CountDown from 'react-native-countdown-component';
import AsyncStorage from '@react-native-async-storage/async-storage';




function HomeScreen({ navigation }) {
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@sKey', value)
    } catch (e) {
      // saving error
      console.log("Could not save Data to AsyncStorage")
    }
  }
  const startGame = (props) => {
    Vibration.vibrate(100),
    storeData(props),
    navigation.navigate('Game')
  }
    return (
      <View style={ styles.container }>
        <Text>Welcome to CPS Meter</Text>
        {/* <Pressable onPress={() => navigation.push('Home')}>
          <Text>Go To Home again</Text>
        </Pressable> */}
        <Pressable onPress={() => startGame("10")} style={styles.button}>
          <Text>10s</Text>
        </Pressable>
        <Pressable onPress={() => startGame("5")} style={styles.button}>
          <Text>5s</Text>
        </Pressable>
        <Pressable onPress={() => startGame("3")} style={styles.button}>
          <Text>3s</Text>
        </Pressable>
        <Pressable onPress={() => startGame("1")} style={styles.button}>
          <Text>1s</Text>
        </Pressable>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'stretch',
        backgroundColor: 'lightblue',
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
      marginTop: 15,
      alignSelf: "center",
      backgroundColor: "white",
      height: 30,
      width: 80,
      justifyContent: "center",
      alignItems: "center",
    },
});

export default HomeScreen