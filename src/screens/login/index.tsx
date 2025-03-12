import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Logo } from '../../components/logo';
import { LoginForm } from './LoginForm';
import { styles } from './styles';

const background = require('../../../assets/imgs/image.png');

export function LoginScreen() {
    return (
        <ImageBackground source={background} style={styles.background} resizeMode="cover">
            <Logo size={150} />
            <LoginForm />
            <Text style={styles.newAccount}>Criar conta</Text>
        </ImageBackground>
    );
}
