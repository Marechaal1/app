import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Nome completo é obrigatório'),
    email: Yup.string().email('Email inválido').required('Email é obrigatório'),
    birthDate: Yup.string().required('Data de nascimento é obrigatória'),
    password: Yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres').required('Senha é obrigatória'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'As senhas não coincidem')
        .required('Confirmação de senha é obrigatória'),
});
