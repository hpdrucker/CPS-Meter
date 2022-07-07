import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Button, NativeBaseProvider } from 'native-base';
import { useState } from 'react';
import CountDown from 'react-native-countdown-component';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import ResultScreen from './screens/ResultScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen}
            options={{ title: "Random Pictures" }}
          />
          <Stack.Screen name="Game" component={GameScreen} />
          <Stack.Screen name="Result" component={ResultScreen} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  game: {
    flex: 1,
    resizeMode: 'stretch',
    backgroundColor: 'lightblue',
    alignItems: "center",
    justifyContent: "center"
  },
});
