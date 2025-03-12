import * as Yup from 'yup';


export const validationSchema = Yup.object().shape({
    password: Yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres').required('Senha é obrigatória'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'As senhas não coincidem')
        .required('Confirmação de senha é obrigatória'),
});
