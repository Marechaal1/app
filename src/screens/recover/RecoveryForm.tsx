import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import { emailValidationSchema } from './validation';
import { styles } from './styles';

export function RecoveryForm() {
    return (
        <Formik
            initialValues={{ email: '' }}
            validationSchema={emailValidationSchema}
            onSubmit={(values) => {
                alert(`Link de recuperação enviado para ${values.email}`);
            }}>
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={styles.formContainer}>
                    <TextInput
                        placeholder="Digite seu e-mail"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        style={styles.input}
                    />
                    {errors.email && touched.email && <Text style={styles.errorText}>{errors.email}</Text>}
                    <Button title="Enviar" onPress={handleSubmit} />
                </View>
            )}
        </Formik>
    );
}
