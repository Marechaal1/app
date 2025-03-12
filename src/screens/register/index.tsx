import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Header } from '../../components/header';
import { Logo } from '../../components/logo';
import { RegisterForm } from './registerForm';
import { styles } from './styles';

const background = require('../../../assets/imgs/image.png');

export function RegisterScreen() {
    return (
        <View style={styles.container}>
            <Header title="Cadastro" />
            <ImageBackground source={background} style={styles.background} resizeMode="cover">
                <View style={styles.logoContainer}>
                    <Logo size={150} />
                </View>
                <RegisterForm />
            </ImageBackground>
        </View>
    );
}
