import React from 'react';
import { TextInput, Button, Text } from 'react-native';
import { Formik } from 'formik';
import { validationSchema } from './validation';  /
import styles from './styles';

export function Formulario() {
    return (
        <Formik
            initialValues={{ password: '', confirmPassword: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                alert('Senha redefinida com sucesso!');
            }}>
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <>
                    <TextInput
                        placeholder="Nova senha"
                        secureTextEntry
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        style={styles.input}
                        placeholderTextColor="#999"
                    />
                    {errors.password && touched.password && <Text style={styles.errorText}>{errors.password}</Text>}

                    <TextInput
                        placeholder="Confirmar nova senha"
                        secureTextEntry
                        onChangeText={handleChange('confirmPassword')}
                        onBlur={handleBlur('confirmPassword')}
                        value={values.confirmPassword}
                        style={styles.input}
                        placeholderTextColor="#999"
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                        <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                    )}

                    <Button title="Redefinir Senha" onPress={handleSubmit} />
                </>
            )}
        </Formik>
    );
}
