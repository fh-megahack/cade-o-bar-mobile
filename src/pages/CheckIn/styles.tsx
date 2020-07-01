import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#37323E',
        // borderTopRightRadius: 20,
        // borderTopLeftRadius: 20,
    },

    qr: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    top: {
        paddingHorizontal: '30%',
        paddingTop: 36,
        width: '100%',
        marginBottom: 16,
        alignItems: 'flex-start'
    },

    scanner: {
        width: 500,
        height: 500,
        marginTop: '30%'
    }
})