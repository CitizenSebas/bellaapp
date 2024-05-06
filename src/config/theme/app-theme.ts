

import { StyleSheet } from 'react-native'

export const colors = {
    primary: '#82BECC',
    secondary: '#5E929E',
    blue: '#4ACDEB',
    blueDark: '#252B42',
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
        marginHorizontal: 10
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
    },
    productContainer: {
        marginHorizontal: 10,
        gap: 4,
        width: 150
    },
    image: {},
    info: {},
    productTitle: {
        color: colors.blueDark,
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "left",
    },
    productLabel: {
        color: colors.gray,
        fontWeight: 'bold'
    },
    productAdd: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    productPrice: {
        fontSize: 15,
        fontWeight: '900'
    },
    ProductButton: {
        backgroundColor: colors.black,
        borderRadius: 100,
        padding: 10
    }
});