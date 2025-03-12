import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export interface LogoProps {
  size?: number; 
}

export function Logo({ size = 100 }: LogoProps) {
  return (
    <View style={styles.container}>
      <Image
        source={require('./../../../assets/imgs/logo.png')} 
        style={[styles.logo, { width: size, height: size }]} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, // Espaçamento opcional
  },
  logo: {
    resizeMode: 'contain', // Mantém a proporção da imagem
  },
});
