import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        alignItems: 'center',
    },
    content: {
        flexGrow: 1,
        alignItems: 'center',
        padding: 20,
    },
    formContainer: {
        width: '100%',
        marginTop: 10,
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
        paddingVertical: 12, 
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    eyeIconContainer: {
        position: 'absolute',
        right: 15,
        bottom: 23,
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginBottom: 10,
    },
    logoContainer: {
        marginTop: 10,
        marginBottom: 20,
        alignItems: 'center',
    },
});
