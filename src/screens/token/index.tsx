import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { styles } from './styles'; 
import { startCountdown } from './countdown'; 

const background = require('../../../assets/imgs/image.png');

export function TokenScreen() {
    const [counter, setCounter] = useState(0);

    
    const handleStartCountdown = () => {
        startCountdown(setCounter);
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={background} style={styles.background}>
                <ScrollView contentContainerStyle={styles.content}>
                    <Text style={styles.title}>Digite o Token</Text>
                    <TextInput keyboardType='numeric' placeholder="Insira o token" style={styles.input} />
                    <Button title="Confirmar" onPress={() => {}} />
                    <TouchableOpacity onPress={handleStartCountdown} disabled={counter > 0}>
                        <Text style={[styles.resendText, counter > 0 && styles.disabled]}>
                            {counter > 0 ? `Reenviar em ${counter}s` : 'Reenviar Token'}
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </ImageBackground>
        </View>
    );
}
