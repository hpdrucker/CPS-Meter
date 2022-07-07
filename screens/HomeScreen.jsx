import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Button, NativeBaseProvider } from 'native-base';
import { useState } from 'react';
import CountDown from 'react-native-countdown-component';




function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Welcome to CPS Meter</Text>
        <Pressable onPress={() => navigation.push('Home')}>
          <Text>Go To Home again</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Game')}>
          <Text>Go To Game</Text>
        </Pressable>
      </View>
    );
  }

export default HomeScreen