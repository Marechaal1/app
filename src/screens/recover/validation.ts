import * as Yup from 'yup';

export const emailValidationSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Campo obrigatório'),
});

export const passwordValidationSchema = Yup.object().shape({
    password: Yup.string().min(6, 'Mínimo 6 caracteres').required('Campo obrigatório'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais')
        .required('Campo obrigatório'),
});
