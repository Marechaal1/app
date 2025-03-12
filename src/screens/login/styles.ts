import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '80%',
        padding: 10,
        borderRadius: 10,
    },
    errorText: {
        marginTop: 2,
        color: 'red',
        textAlign: 'center',
        fontSize: 12,
    },
    newAccount: {
        color: 'white',
        fontSize: 13,
        textDecorationLine: 'underline',
        margin: 30,
        textAlign: 'center',
    }
});
