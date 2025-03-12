
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        position: 'absolute', 
    },
    content: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        color: 'white',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
        width: '100%',
        fontSize: 16,
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginBottom: 10,
    },
    resendText: {
        color: 'white',
        marginTop: 10,
    },
    disabled: {
        color: 'white',
    },
});
