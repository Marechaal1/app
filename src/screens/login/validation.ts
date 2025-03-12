import * as Yup from 'yup';

export const validationSchema = Yup.object({
    email: Yup.string().email('Precisa ser um email válido').required('E-mail obrigatório'),
    senha: Yup.string().required('Senha obrigatória'),
});
