import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3CA40',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerTop: {
        backgroundColor: '#F3CA40',
        width: '100%',
        height: '15%',
        marginLeft: '10%',
        marginBottom: 'auto',
        alignItems: 'center',
        flexDirection: 'row',
    },
    arrowLeft: {
        marginLeft: '5%',
        marginTop: '5%',
    },
    textTop: {
        marginRight: 'auto',
        marginLeft: '25%',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
    },
    containerBottom: {
        backgroundColor: '#FFF',
        width: '100%',
        height: '85%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 50,
        },
        shadowOpacity: 1.0,
        shadowRadius: 16.00,

        elevation: 24,
    },
    textRoulette0: {
        fontSize: 26,
        fontFamily: 'OpenSans_600SemiBold',
        marginTop: 15
    },
    textRoulette1: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'OpenSans_300Light',
        width: '80%',
        marginTop: 15,
    },
    button: {
        backgroundColor: '#F3CA40',
        width: '70%',
        height: 60,
        flexDirection: 'row',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 80,
        marginLeft: 'auto',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        
        elevation: 11,
        paddingHorizontal: 30
    },
    buttonText: {
        flex: 1,
        color: '#FFF',
        fontSize: 18,
        marginRight: 20,
        textAlign: 'center'
    },
});
