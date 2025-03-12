import React from 'react';
import { Text, ImageBackground, View } from 'react-native';
import { RecoveryForm } from './RecoveryForm';
import { styles } from './styles';

const background = require('../../../assets/imgs/image.png');

export function RecoveryScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground source={background} style={styles.background} resizeMode="cover">
                <Text style={styles.title}>Recuperação de Senha</Text>
                <RecoveryForm />
            </ImageBackground>
        </View>
    );
}
