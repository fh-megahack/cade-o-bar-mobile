import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#F3CA40',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerTop: {
        backgroundColor: '#F3CA40',
        width: '100%',
        height: 80,
        marginBottom: 'auto',
        alignItems: 'center',
        flexDirection: 'row',
    },
    arrowLeft: {
        left: 20,
    },
    textTop: {
        width: '90%',
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
    },
    containerBottom: {
        flex: 2,
        backgroundColor: '#fff',
        width: '100%',
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
    imageTicket: {
        marginTop: '20%'
    },
    gerado: {
        marginTop: '5%', 
        fontFamily: 'OpenSans_600SemiBold', 
        fontSize: 26
    },

    description: {
        width: '90%',
        alignItems: 'center'
    },

    cupomText1: {
        fontSize: 19,
        textAlign: 'center',
        fontFamily: 'OpenSans_300Light', 
        marginTop: '5%'
    },
    buttonCupom: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        borderWidth: 1,
        height: '8%',
        width: '90%',
        borderRadius: 25,
        marginTop: '20%',
        borderColor: '#BDBDBD',
    },
    buttonCupomText: { 
        fontSize: 34, 
        fontFamily: 'Roboto_400Regular',
        color: '#37323e',
    },
    buttonCupomIcon: { 
        marginLeft: '15%',
        marginRight: '5%'
    },
    button: {
        backgroundColor: '#F3CA40',
        width: '70%',
        height: '10%',
        flexDirection: 'row',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: '25%',
        marginLeft: 'auto',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 3.68,
        
        elevation: 5,
        paddingHorizontal: 30
    },
    buttonText: {
        flex: 1,
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'OpenSans_300Light'
    },
});