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
import { useEffect } from 'react';


function GameScreen({ navigation }) {


    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('@key', value)
        } catch (e) {
            // saving error
            console.log("Could not save Data to AsyncStorage")
        }
    }
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@sKey')
            if (value !== null) {
                // value previously stored
                //console.log(value)
                setTimex(parseInt(value))
                console.log(timex)
        
            }
        } catch (e) {
            // error reading value
            console.log("Could not load data")
        } 

    }
    const [timex, setTimex] = useState(0);
    /* const decrementTime = () => {
        setTime(time - 1);
    } */
    const [count, setCount] = useState(0);
    const [cd, setCD] = useState(false);
    const increment = () => setCount(count + 1);
    const startCountdown = () => setCD(true);
    const startGame = () => {
        //interval(),
        increment(),
            startCountdown()

    }


    useEffect(()=>{

        console.log("im mount "+timex)
        getData();

        return (()=> {
            console.log("beim unmount")


        })
    }, [timex])



    const finish = () => {
        navigation.navigate('Result')
    }
    
    const result = (count / timex);
    const resultData = Math.round(result * 100) / 100
    storeData(resultData + "cps");

    return (
        <View style={{ flex: 1, }}>
            <Pressable onPressIn={startGame} style={styles.game}>
                <Text>Timer should be: {timex}</Text>
                {console.log("vorem CountDown"+timex)}
                <CountDown
                    running={cd}
                    until={10}
                    timeToShow={['S']}
                    timeLabels={{ s: "seconds" }}
                    digitStyle={{ backgroundColor: '#FFF' }}
                    onFinish={() => finish()}
                    size={20}
                />
                <Text>Starts with first click</Text>
                <Text>{count} Clicks</Text>
                <Text>{resultData}cps</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    game: {
        flex: 1,
        resizeMode: 'stretch',
        backgroundColor: 'lightblue',
        alignItems: "center",
        justifyContent: "center"
    },
});


export default GameScreen