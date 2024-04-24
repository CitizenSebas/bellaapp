

import { StyleSheet } from 'react-native'

export const colors = {
    primary: '#82BECC',
    secondary: '#5E929E',
    blue: '#4ACDEB',
    black: '#101010',
    success: '#28A745',
    info: '#2B99D2',
    warning: '#DC3545',
    gray: '#cecdcd'
}

export const globalStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginHorizontal: 20
    },
    textInput: {
        backgroundColor: colors.gray,
        padding: 15,
        width: '100%',
        opacity: 0.6,
        fontWeight: 'bold',
        borderRadius: 10,
    },
    form: {
        gap: 20
    }
});