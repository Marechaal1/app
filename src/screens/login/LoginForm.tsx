import React from 'react';
import { View, Text } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Formik } from 'formik';
import { validationSchema } from './validation';
import { styles } from './styles';

export function LoginForm() {
    const handleLogin = async (dados: { email: string; senha: string }) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (dados.email.trim() === 'teste@teste.com' && dados.senha.trim() === '123456') {
            console.log('logado');
        } else {
            console.log('falhou', dados);
        }
    };

    return (
        <Formik
            initialValues={{ email: '', senha: '' }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}>
            {({ handleChange, handleBlur, handleSubmit, values, isSubmitting, errors, touched }) => (
                <View style={styles.container}>
                    <Input
                        placeholder="Digite seu e-mail"
                        value={values.email}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        leftIcon={<Icon name="user" color="white" />}
                    />
                    {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

                    <Input
                        placeholder="Digite sua senha"
                        secureTextEntry
                        value={values.senha}
                        onChangeText={handleChange('senha')}
                        onBlur={handleBlur('senha')}
                        leftIcon={<Icon name="lock" color="white" />}
                    />
                    {touched.senha && errors.senha && <Text style={styles.errorText}>{errors.senha}</Text>}

                    <Button
                        title="Entrar"
                        containerStyle={{ borderRadius: 30 }}
                        raised
                        onPress={handleSubmit}
                        disabled={isSubmitting}
                    />
                </View>
            )}
        </Formik>
    );
}
