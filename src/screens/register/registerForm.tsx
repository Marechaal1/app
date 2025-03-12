import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { Ionicons } from '@expo/vector-icons';
import { validationSchema } from './validation';
import { styles } from './styles';

export function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <ScrollView contentContainerStyle={styles.content}>
            <Formik
                initialValues={{ fullName: '', email: '', password: '', confirmPassword: '', birthDate: '' }}
                validationSchema={validationSchema}
                onSubmit={(values) => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View style={styles.formContainer}>
                        {/* Nome Completo */}
                        <TextInput
                            placeholder="Nome Completo"
                            onChangeText={handleChange('fullName')}
                            onBlur={handleBlur('fullName')}
                            value={values.fullName}
                            style={styles.input}
                            placeholderTextColor="#999"
                        />
                        {touched.fullName && errors.fullName && <Text style={styles.errorText}>{errors.fullName}</Text>}

                        {/* Email */}
                        <TextInput
                            placeholder="Email"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            style={styles.input}
                            placeholderTextColor="#999"
                        />
                        {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

                        {/* Data de Nascimento */}
                        <TextInput
                            placeholder="Data de Nascimento"
                            onChangeText={handleChange('birthDate')}
                            onBlur={handleBlur('birthDate')}
                            value={values.birthDate}
                            style={styles.input}
                            placeholderTextColor="#999"
                        />
                        {touched.birthDate && errors.birthDate && <Text style={styles.errorText}>{errors.birthDate}</Text>}

                        {/* Senha */}
                        <View style={styles.passwordContainer}>
                            <TextInput
                                placeholder="Senha"
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={!showPassword}
                                style={styles.input}
                                placeholderTextColor="#999"
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIconContainer}>
                                <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                        {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

                        {/* Confirmar Senha */}
                        <View style={styles.passwordContainer}>
                            <TextInput
                                placeholder="Confirmar Senhaaa"
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={handleBlur('confirmPassword')}
                                value={values.confirmPassword}
                                secureTextEntry={!showConfirmPassword}
                                style={styles.input}
                                placeholderTextColor="#999"
                            />
                            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIconContainer}>
                                <Ionicons name={showConfirmPassword ? 'eye-off' : 'eye'} size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                        {touched.confirmPassword && errors.confirmPassword && (
                            <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                        )}

                        {/* Botão de Enviar */}
                        <Button title="Enviar" onPress={handleSubmit} />
                    </View>
                )}
            </Formik>
        </ScrollView>
    );
}
