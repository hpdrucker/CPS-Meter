import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Button, NativeBaseProvider } from 'native-base';
import { useState } from 'react';
import CountDown from 'react-native-countdown-component';


function GameScreen({ navigation }) {
    const [count, setCount] = useState(0);
    const [cd, setCD] = useState(false);
    const increment = () => setCount(count + 1);
    const startCountdown = () => setCD(true);
    const startGame = () => {
        increment(),
            startCountdown()
    }
    const finish = () => {
        navigation.navigate('Result')
        

    }
    const result = (count / 5);

    //http://apimeme.com/meme?meme=Computer-Horse&top=&bottom=hey

    return (
        <View style={{ flex: 1, }}>

            <Pressable onPressIn={startGame} style={styles.game}>
                <CountDown
                    running={cd}
                    until={5}
                    timeToShow={['S']}
                    timeLabels={{ s: "seconds" }}
                    digitStyle={{ backgroundColor: '#FFF' }}
                    onFinish={() => finish()}
                    size={20}
                />
                <Text>Starts with first click</Text>
                <Text></Text>
                <Text>{count} Clicks</Text>
                <Text>{result}cps</Text>
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