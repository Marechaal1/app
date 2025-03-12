import React from 'react';
import { View, Text, ImageBackground, ScrollView } from 'react-native';
import { Formulario } from './ResetForm'; 
import styles from './styles'; 

const background = require('../../../assets/imgs/image.png'); 

export function ResetPasswordScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground source={background} style={styles.background}>
                <ScrollView contentContainerStyle={styles.content}>
                    <Text style={styles.title}>Resdefinir Senha</Text>
                    <Formulario />
                </ScrollView>
            </ImageBackground>
        </View>
    );
}
